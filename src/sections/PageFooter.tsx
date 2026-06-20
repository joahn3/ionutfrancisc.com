import links from 'data/navigation'
import { profile } from 'data/profile'
import { isRomanianPath } from 'data/routes'
import { openCookiePreferencesEvent } from 'components/Analytics'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function PageFooter() {
  const router = useRouter()
  const isRomanian = isRomanianPath(router.pathname)
  const location = isRomanian ? 'București, România' : profile.location
  const analyticsEnabled = true

  return (
    <footer className="mt-8 border-t border-gray-200 bg-white sm:mt-16">
      <div className="container grid gap-8 py-8 text-sm text-gray-600 md:grid-cols-[minmax(220px,1fr)_minmax(0,2fr)] md:items-start lg:grid-cols-[220px_200px_minmax(0,1fr)]">
        <div>
          <p className="font-bold text-gray-900">{profile.name}</p>
          <p>
            © {new Date().getFullYear()} · {location}
          </p>
          <p className="mt-2 text-gray-500">
            {isRomanian
              ? 'Security, privacy, GRC și sisteme digitale sigure.'
              : 'Security, privacy, GRC, and secure digital systems.'}
          </p>
        </div>

        <nav
          aria-label={isRomanian ? 'Linkuri utile' : 'Useful links'}
          className="flex flex-wrap items-center gap-x-5 gap-y-2"
        >
          <Link
            href={
              isRomanian
                ? '/ro/securitate-confidentialitate'
                : '/security-privacy'
            }
          >
            Security & Privacy
          </Link>
          <a download href={profile.resume.href}>
            CV
          </a>
          <Link href={isRomanian ? '/ro/mentorat' : '/instruction'}>
            {isRomanian ? 'Mentorat' : 'Mentoring'}
          </Link>
          <Link href={isRomanian ? '/ro/confidentialitate' : '/privacy'}>
            {isRomanian ? 'Confidențialitate' : 'Privacy'}
          </Link>
          {analyticsEnabled && (
            <button
              className="underline"
              onClick={() =>
                window.dispatchEvent(new Event(openCookiePreferencesEvent))
              }
              type="button"
            >
              {isRomanian ? 'Preferințe cookies' : 'Cookie settings'}
            </button>
          )}
        </nav>

        <nav
          aria-label={isRomanian ? 'Profiluri publice' : 'Public profiles'}
          className="flex max-w-md flex-wrap gap-x-4 gap-y-2 md:col-span-2 lg:col-span-1"
        >
          {links.footer.map((link) => (
            <a
              aria-label={`${link.name} link`}
              className="inline-flex items-center gap-1.5 font-semibold text-gray-600 transition-colors hover:text-gray-900"
              href={link.link}
              key={link.link}
              rel="noreferrer noopener"
              target="_blank"
              title={link.name}
            >
              <span className="h-4 w-4" aria-hidden="true">
                {link.icon}
              </span>
              <span>{link.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
