import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { Logo } from 'components/Icons'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import links from 'data/navigation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { profile } from 'data/profile'

export default function PageHeader() {
  const [isNavOpen, setNavOpen] = useState(false)
  const router = useRouter()
  const isRomanian =
    router.pathname === '/ro' || router.pathname.startsWith('/ro/')
  const internalLinks = isRomanian ? links.internalRo : links.internal
  const homeLink = isRomanian ? '/ro' : '/'

  useEffect(() => {
    const closeMenu = () => setNavOpen(false)

    router.events.on('routeChangeComplete', closeMenu)

    return () => {
      router.events.off('routeChangeComplete', closeMenu)
    }
  }, [router.events])

  const isActive = (path: string) => router.pathname === path
  const languagePath = () => {
    const pairs: Record<string, string> = {
      '/': '/ro',
      '/work': '/ro/work',
      '/consulting': '/ro/consultanta',
      '/instruction': '/ro/mentorat',
      '/contact': '/ro/contact',
      '/ro': '/',
      '/ro/work': '/work',
      '/ro/consultanta': '/consulting',
      '/ro/mentorat': '/instruction',
      '/ro/contact': '/contact',
    }

    return pairs[router.pathname] ?? (isRomanian ? '/' : '/ro')
  }

  return (
    <header className="brand-gradient text-white">
      <div className="container py-5 flex items-center">
        <Link href={homeLink}>
          <a className="flex items-center">
            <span className="w-6 h-6 text-emerald-200">
              <Logo />
            </span>
            <span className="ml-2 leading-none font-extrabold text-xl">
              {profile.name}
            </span>
          </a>
        </Link>
        <nav className="ml-auto space-x-4 hidden md:block">
          {internalLinks.map(({ link, name }) => (
            <Link key={name} href={link}>
              <a
                className={`text-sm font-semibold transition-colors duration-200 hover:text-white ${
                  isActive(link) ? 'text-white' : 'text-gray-300'
                }`}
              >
                {name}
              </a>
            </Link>
          ))}
        </nav>
        <nav className="ml-auto md:ml-20 flex items-center space-x-4 text-gray-300">
          {links.external.map((link) => (
            <a
              key={link.link}
              aria-label={`${link.name} link`}
              href={link.link}
              target="_blank"
              rel="noreferrer noopener"
              className="w-5 h-5 hidden md:block transition-colors duration-200 hover:text-white"
            >
              {link.icon}
            </a>
          ))}
          <Link href={languagePath()}>
            <a className="hidden rounded border border-white/30 px-2 py-1 text-xs font-black uppercase tracking-wide text-gray-200 transition-colors hover:bg-white/10 hover:text-white md:inline-flex">
              {isRomanian ? 'EN' : 'RO'}
            </a>
          </Link>
          <button
            aria-label="Toggle mobile menu"
            aria-expanded={isNavOpen}
            className="w-6 h-6 md:hidden"
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
        <nav className="container md:hidden">
          {internalLinks.map(({ link, name }) => (
            <div key={name}>
              <Link href={link}>
                <a
                  className={clsx(
                    'block py-4 font-semibold text-sm tracking-tight',
                    isActive(link) ? 'text-white' : 'text-gray-300'
                  )}
                >
                  {name}
                </a>
              </Link>
              <div className="h-px bg-white/20" />
            </div>
          ))}
          <div>
            <Link href={languagePath()}>
              <a className="block py-4 font-semibold text-sm tracking-tight text-gray-300">
                {isRomanian ? 'English version' : 'Versiunea în română'}
              </a>
            </Link>
            <div className="h-px bg-white/20" />
          </div>
        </nav>
      )}
    </header>
  )
}
