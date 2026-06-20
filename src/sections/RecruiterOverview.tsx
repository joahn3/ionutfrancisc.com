import {
  ArrowRightIcon,
  DownloadIcon,
  ExternalLinkIcon,
} from '@heroicons/react/outline'
import Intro from 'components/Intro'
import { profile } from 'data/profile'

interface Props {
  language?: 'en' | 'ro'
}

const content = {
  en: {
    heading: 'Recruiter quick view',
    subheading:
      'The short version: relevant roles, evidence, and working context without vague assurance language.',
    columns: [
      {
        label: 'Target roles',
        items: [
          'Security governance and GRC',
          'Privacy, compliance, and controls',
          'Cybersecurity risk and assurance',
          'Security advisory and program coordination',
        ],
      },
      {
        label: 'Relevant depth',
        items: [
          'Secure-by-design and privacy-by-design reviews',
          'Risk assessments, audit readiness, and control evidence',
          'Incident governance and remediation follow-up',
          'PKI, certificate lifecycle, and HSM exposure',
        ],
      },
      {
        label: 'Delivery context',
        items: [
          '10+ years across IBM Consulting roles',
          'Regulated banking and blockchain environments',
          'International stakeholder and assessment work',
          'Founder and hands-on digital systems experience',
        ],
      },
    ],
    details:
      'Based in Bucharest, Romania. Romanian native, English fluent, Italian good. Master’s degree in Economic IT and bachelor’s degree in Computer Science for Business Management.',
    principle:
      'I prefer clear, pragmatic, evidence-backed work over complex abstractions and vague control language.',
    cv: 'Download CV',
    linkedin: 'LinkedIn profile',
    credly: 'Verified badges',
  },
  ro: {
    heading: 'Profil rapid pentru recrutori',
    subheading:
      'Versiunea scurtă: roluri relevante, dovezi și context de lucru, fără formulări vagi de assurance.',
    columns: [
      {
        label: 'Roluri relevante',
        items: [
          'Security governance și GRC',
          'Privacy, compliance și controale',
          'Cybersecurity risk și assurance',
          'Security advisory și coordonare de programe',
        ],
      },
      {
        label: 'Experiență relevantă',
        items: [
          'Secure-by-design și privacy-by-design reviews',
          'Risk assessments, audit readiness și control evidence',
          'Incident governance și remediation follow-up',
          'PKI, certificate lifecycle și expunere HSM',
        ],
      },
      {
        label: 'Context de livrare',
        items: [
          '10+ ani în roluri IBM Consulting',
          'Medii reglementate de banking și blockchain',
          'Stakeholderi internaționali și assessment work',
          'Experiență hands-on ca fondator și systems builder',
        ],
      },
    ],
    details:
      'București, România. Română nativ, engleză fluent, italiană nivel bun. Master în Informatică Economică și licență în Informatică Managerială.',
    principle:
      'Prefer munca clară, pragmatică și susținută de dovezi în locul abstracțiilor complexe și al limbajului vag de control.',
    cv: 'Descarcă CV',
    linkedin: 'Profil LinkedIn',
    credly: 'Badge-uri verificate',
  },
}

export default function RecruiterOverview({ language = 'en' }: Props) {
  const copy = content[language]

  return (
    <section className="border-y border-gray-200 bg-gray-50 section-spacing">
      <div className="container">
        <Intro heading={copy.heading} subheading={copy.subheading} />
        <div className="mt-10 grid gap-8 md:grid-cols-3 lg:mt-14">
          {copy.columns.map((column) => (
            <div className="border-l-4 border-emerald-600 pl-5" key={column.label}>
              <h2 className="text-xl font-extrabold">{column.label}</h2>
              <ul className="mt-4 space-y-2 text-gray-700">
                {column.items.map((item) => (
                  <li className="flex gap-2" key={item}>
                    <ArrowRightIcon className="mt-1 h-4 w-4 flex-none text-emerald-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-t border-gray-300 pt-8 lg:grid-cols-2">
          <div>
            <p className="text-gray-700">{copy.details}</p>
            <p className="mt-3 font-semibold text-gray-900">{copy.principle}</p>
          </div>
          <div className="flex flex-wrap items-start gap-3 lg:justify-end">
            <a className="button inline-flex items-center gap-2" download href={profile.resume.href}>
              <DownloadIcon className="h-4 w-4" />
              {copy.cv}
            </a>
            <a
              className="inline-flex items-center gap-2 rounded border border-gray-300 bg-white px-4 py-3 text-sm font-black uppercase text-gray-900 hover:bg-gray-100"
              href={profile.linkedin}
              rel="noreferrer noopener"
              target="_blank"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              {copy.linkedin}
            </a>
            <a
              className="inline-flex items-center gap-2 rounded px-4 py-3 text-sm font-black uppercase text-emerald-800 hover:bg-emerald-50"
              href="https://www.credly.com/users/ionut-iulian-francisc"
              rel="noreferrer noopener"
              target="_blank"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              {copy.credly}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
