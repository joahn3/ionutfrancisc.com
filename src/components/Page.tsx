import Head from 'next/head'
import { useRouter } from 'next/router'
import { Toaster } from 'react-hot-toast'
import PageHeader from 'sections/PageHeader'
import PageFooter from 'sections/PageFooter'
import { defaultSeo, profile } from 'data/profile'
import {
  getLanguagePath,
  isRomanianPath,
  languagePairs,
  withTrailingSlash,
} from 'data/routes'

interface Props {
  children: React.ReactNode
  description: string
  title: string
  image?: string
  noIndex?: boolean
}

export default function Page(props: Props) {
  const router = useRouter()
  const {
    children,
    description,
    image = defaultSeo.image,
    noIndex = false,
    title,
  } = props
  const pageTitle =
    title === defaultSeo.title ? title : `${title} | ${profile.siteName}`
  const path = withTrailingSlash(router.pathname)
  const canonicalUrl = `${profile.siteUrl}${path}`
  const alternatePath = languagePairs[router.pathname]
  const alternateUrl = alternatePath
    ? `${profile.siteUrl}${withTrailingSlash(alternatePath)}`
    : undefined
  const isRomanian = isRomanianPath(router.pathname)
  const absoluteImage = image.startsWith('http')
    ? image
    : `${profile.siteUrl}${image}`
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: profile.siteUrl,
    image: `${profile.siteUrl}/assets/profile-ionut-francisc.webp`,
    jobTitle: 'Security & Privacy (GRC) Consultant',
    sameAs: [
      profile.github,
      profile.linkedin,
      'https://www.credly.com/users/ionut-iulian-francisc',
      'https://www.instagram.com/joahn3',
    ],
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="author" content={profile.name} />
        <meta name="theme-color" content="#111827" />
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
        <link rel="canonical" href={canonicalUrl} />
        {alternateUrl && (
          <>
            <link
              rel="alternate"
              hrefLang={isRomanian ? 'en' : 'ro'}
              href={alternateUrl}
            />
            <link
              rel="alternate"
              hrefLang={isRomanian ? 'ro' : 'en'}
              href={canonicalUrl}
            />
            <link
              rel="alternate"
              hrefLang="x-default"
              href={`${profile.siteUrl}${withTrailingSlash(
                isRomanian ? getLanguagePath(router.pathname) : router.pathname
              )}`}
            />
          </>
        )}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={profile.siteName} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={isRomanian ? 'ro_RO' : 'en_GB'} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={absoluteImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={absoluteImage} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicons/180.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>

      <a className="skip-link" href="#main-content">
        {isRomanian ? 'Sari la conținut' : 'Skip to content'}
      </a>
      <div className="flex flex-col min-h-screen">
        <Toaster />
        <PageHeader />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <PageFooter />
      </div>
    </>
  )
}
