export const languagePairs: Record<string, string> = {
  '/': '/ro',
  '/security-privacy': '/ro/securitate-confidentialitate',
  '/work': '/ro/work',
  '/consulting': '/ro/consultanta',
  '/instruction': '/ro/mentorat',
  '/contact': '/ro/contact',
  '/privacy': '/ro/confidentialitate',
  '/ro': '/',
  '/ro/securitate-confidentialitate': '/security-privacy',
  '/ro/work': '/work',
  '/ro/consultanta': '/consulting',
  '/ro/mentorat': '/instruction',
  '/ro/contact': '/contact',
  '/ro/confidentialitate': '/privacy',
}

export function isRomanianPath(pathname: string) {
  return pathname === '/ro' || pathname.startsWith('/ro/')
}

export function getLanguagePath(pathname: string) {
  return languagePairs[pathname] ?? (isRomanianPath(pathname) ? '/' : '/ro')
}

export function withTrailingSlash(pathname: string) {
  return pathname === '/' ? '/' : `${pathname.replace(/\/$/, '')}/`
}
