import Script from 'next/script'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { isRomanianPath } from 'data/routes'

const measurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-E0LHCWXKPF'
const consentKey = 'ionut-francisc-analytics-consent'
export const openCookiePreferencesEvent = 'open-cookie-preferences'

type ConsentChoice = 'accepted' | 'declined' | null

declare global {
  interface Window {
    dataLayer?: unknown[][]
    gtag?: (...args: unknown[]) => void
  }
}

export default function Analytics() {
  const router = useRouter()
  const isRomanian = isRomanianPath(router.pathname)
  const [choice, setChoice] = useState<ConsentChoice>(null)
  const [isReady, setReady] = useState(false)

  useEffect(() => {
    if (!measurementId) return

    const initializeChoice = window.setTimeout(() => {
      const storedChoice = window.localStorage.getItem(consentKey)
      setChoice(
        storedChoice === 'accepted' || storedChoice === 'declined'
          ? storedChoice
          : null
      )
      setReady(true)
    }, 0)

    const openPreferences = () => setChoice(null)
    window.addEventListener(openCookiePreferencesEvent, openPreferences)

    return () => {
      window.clearTimeout(initializeChoice)
      window.removeEventListener(openCookiePreferencesEvent, openPreferences)
    }
  }, [])

  useEffect(() => {
    if (choice !== 'accepted' || !measurementId) return

    const trackPage = (url: string) => {
      window.gtag?.('event', 'page_view', {
        page_location: `${window.location.origin}${url}`,
        page_path: url,
        page_title: document.title,
      })
    }

    router.events.on('routeChangeComplete', trackPage)
    return () => router.events.off('routeChangeComplete', trackPage)
  }, [choice, router.events])

  if (!measurementId || !isReady) return null

  const saveChoice = (value: Exclude<ConsentChoice, null>) => {
    if (value === 'declined') {
      window.gtag?.('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      })

      document.cookie.split(';').forEach((cookie) => {
        const name = cookie.split('=')[0]?.trim()
        if (name?.startsWith('_ga')) {
          document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`
        }
      })
    }

    window.localStorage.setItem(consentKey, value)
    setChoice(value)
  }

  return (
    <>
      {choice === 'accepted' && (
        <>
          <Script id="google-consent-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              window.gtag = function(){window.dataLayer.push(arguments);};
              window.gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });
              window.gtag('consent', 'update', {
                analytics_storage: 'granted',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });
              window.gtag('js', new Date());
              window.gtag('config', '${measurementId}', {
                anonymize_ip: true,
                send_page_view: true
              });
            `}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
        </>
      )}

      {choice === null && (
        <div
          aria-label={
            isRomanian
              ? 'Preferințe pentru analiza traficului'
              : 'Analytics preferences'
          }
          aria-live="polite"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl border border-gray-700 bg-gray-900 p-5 text-white shadow-2xl"
          role="dialog"
        >
          <p className="font-extrabold">
            {isRomanian
              ? 'Analiză opțională a traficului'
              : 'Optional analytics'}
          </p>
          <p className="mt-2 text-sm text-gray-200">
            {isRomanian
              ? 'Google Analytics se încarcă numai dacă accepți. Nu folosesc etichete publicitare.'
              : 'Google Analytics loads only if you accept. I do not use advertising tags.'}{' '}
            <Link
              className="font-bold text-emerald-200 underline"
              href={isRomanian ? '/ro/confidentialitate' : '/privacy'}
            >
              {isRomanian ? 'Detalii' : 'Details'}
            </Link>
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              className="button"
              onClick={() => saveChoice('accepted')}
              type="button"
            >
              {isRomanian ? 'Acceptă analiza traficului' : 'Accept analytics'}
            </button>
            <button
              className="button-secondary-dark"
              onClick={() => saveChoice('declined')}
              type="button"
            >
              {isRomanian ? 'Refuză' : 'Decline'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
