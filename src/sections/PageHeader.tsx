import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { Logo } from 'components/Icons'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import links from 'data/navigation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { profile } from 'data/profile'
import { getLanguagePath, isRomanianPath } from 'data/routes'

export default function PageHeader() {
  const [isNavOpen, setNavOpen] = useState(false)
  const router = useRouter()
  const isRomanian = isRomanianPath(router.pathname)
  const internalLinks = isRomanian ? links.internalRo : links.internal
  const homeLink = isRomanian ? '/ro' : '/'

  useEffect(() => {
    const closeMenu = () => setNavOpen(false)
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setNavOpen(false)
    }

    router.events.on('routeChangeComplete', closeMenu)
    document.addEventListener('keydown', closeWithEscape)

    return () => {
      router.events.off('routeChangeComplete', closeMenu)
      document.removeEventListener('keydown', closeWithEscape)
    }
  }, [router.events])

  const isActive = (path: string) => router.pathname === path

  return (
    <header className="brand-surface text-white">
      <div className="container py-5 flex items-center">
        <Link className="flex items-center" href={homeLink}>
          <span className="w-8 h-8 text-emerald-200">
            <Logo />
          </span>
          <span className="ml-2 leading-none font-extrabold text-xl">
            {profile.name}
          </span>
        </Link>
        <nav
          aria-label={isRomanian ? 'Navigare principală' : 'Primary navigation'}
          className="ml-auto hidden items-center gap-4 lg:flex"
        >
          {internalLinks.map(({ link, name }) => (
            <Link
              aria-current={isActive(link) ? 'page' : undefined}
              className={`text-sm font-semibold transition-colors duration-200 hover:text-white ${
                isActive(link) ? 'text-white' : 'text-gray-300'
              }`}
              href={link}
              key={name}
            >
              {name}
            </Link>
          ))}
        </nav>
        <nav
          aria-label={
            isRomanian
              ? 'Profiluri sociale și selectarea limbii'
              : 'Social and language navigation'
          }
          className="ml-auto flex items-center gap-1 text-gray-300 lg:ml-5"
        >
          {links.external.map((link) => (
            <a
              key={link.link}
              aria-label={`${link.name} link`}
              href={link.link}
              target="_blank"
              rel="noreferrer noopener"
              title={link.name}
              className={clsx(
                'h-9 w-9 items-center justify-center p-2 transition-colors duration-200 hover:text-white',
                link.name === 'Instagram'
                  ? 'hidden xl:inline-flex'
                  : 'hidden lg:inline-flex'
              )}
            >
              {link.icon}
            </a>
          ))}
          <Link
            aria-label={
              isRomanian ? 'Versiunea în engleză' : 'Romanian version'
            }
            className="hidden rounded border border-white/30 px-2 py-1 text-xs font-black uppercase text-gray-200 transition-colors hover:bg-white/10 hover:text-white lg:inline-flex"
            href={getLanguagePath(router.pathname)}
          >
            {isRomanian ? 'EN' : 'RO'}
          </Link>
          <button
            aria-controls="mobile-navigation"
            aria-label={
              isNavOpen
                ? isRomanian
                  ? 'Închide meniul'
                  : 'Close menu'
                : isRomanian
                  ? 'Deschide meniul'
                  : 'Open menu'
            }
            aria-expanded={isNavOpen}
            className="w-6 h-6 lg:hidden"
            onClick={() => setNavOpen(!isNavOpen)}
            type="button"
          >
            {isNavOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </nav>
      </div>
      <div className="container">
        <div className="h-px bg-white/20" />
      </div>
      {isNavOpen && (
        <nav
          aria-label={isRomanian ? 'Navigare pe mobil' : 'Mobile navigation'}
          className="container lg:hidden"
          id="mobile-navigation"
        >
          {internalLinks.map(({ link, name }) => (
            <div key={name}>
              <Link
                aria-current={isActive(link) ? 'page' : undefined}
                className={clsx(
                  'block py-4 font-semibold text-sm',
                  isActive(link) ? 'text-white' : 'text-gray-300'
                )}
                href={link}
              >
                {name}
              </Link>
              <div className="h-px bg-white/20" />
            </div>
          ))}
          <div>
            <Link
              className="block py-4 font-semibold text-sm text-gray-300"
              href={getLanguagePath(router.pathname)}
            >
              {isRomanian ? 'Versiunea în engleză' : 'Romanian version'}
            </Link>
            <div className="h-px bg-white/20" />
          </div>
          <div className="py-4">
            <p className="mb-3 text-xs font-bold uppercase text-emerald-200">
              {isRomanian ? 'Profiluri publice' : 'Public profiles'}
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {links.footer.map((link) => (
                <a
                  className="inline-flex items-center gap-2 py-2 text-sm font-semibold text-gray-300 hover:text-white"
                  href={link.link}
                  key={link.link}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <span className="h-5 w-5" aria-hidden="true">
                    {link.icon}
                  </span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
