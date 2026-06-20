import { DownloadIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import { profile } from 'data/profile'

interface Props {
  language?: 'en' | 'ro'
}

export default function Resume({ language = 'en' }: Props) {
  const isRomanian = language === 'ro'

  return (
    <section className="border-y border-gray-200 bg-white" id="cv">
      <div className="container section-spacing grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-black uppercase text-emerald-700">
            {isRomanian
              ? 'Experiență și certificări'
              : 'Experience and credentials'}
          </p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
            {isRomanian ? 'Descarcă CV-ul meu' : 'Download my resume'}
          </h2>
          <p className="mt-4 max-w-2xl text-gray-700 sm:text-lg">
            {isRomanian
              ? 'CV în limba engleză, actualizat pentru profilul meu curent de security, privacy, GRC, consultanță și proiecte digitale.'
              : 'An English resume updated for my current security, privacy, GRC, consulting, and digital product profile.'}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            {isRomanian ? 'Actualizat' : 'Updated'}: {profile.resume.updated} ·
            PDF
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <a
            className="button inline-flex items-center gap-2"
            download
            href={profile.resume.href}
          >
            <DownloadIcon className="h-5 w-5" />
            {isRomanian ? 'Descarcă CV' : 'Download CV'}
          </a>
          <a
            className="inline-flex items-center gap-2 rounded border border-gray-300 px-4 py-3 text-sm font-black uppercase text-gray-900 transition-colors hover:bg-gray-100"
            href={profile.resume.href}
            rel="noreferrer noopener"
            target="_blank"
          >
            <ExternalLinkIcon className="h-5 w-5" />
            {isRomanian ? 'Deschide PDF' : 'Open PDF'}
          </a>
        </div>
      </div>
    </section>
  )
}
