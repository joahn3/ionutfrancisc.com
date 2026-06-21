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
      'A concise view of relevant roles, delivery depth, and the evidence behind the profile.',
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
          'PKI, certificate lifecycle, and HSM support',
          'Linux administration foundations; former LPIC-1/2',
        ],
      },
      {
        label: 'Delivery context',
        items: [
          'More than 10 years across IBM Consulting roles',
          'Regulated banking and blockchain environments',
          'International stakeholder and assessment experience',
          'Founder-led and hands-on digital systems delivery',
          'Electrical and photovoltaic qualifications; ElectroVerde founder',
        ],
      },
    ],
    details:
      'Based in Bucharest, Romania. Native Romanian, fluent English, and a good command of Italian. Master’s degree in Economic IT and bachelor’s degree in Computer Science for Business Management.',
    principle:
      'My working style is direct and evidence-led: make the risk explicit, clarify ownership, and leave teams with decisions they can execute.',
    cv: 'Download CV',
    linkedin: 'LinkedIn profile',
    credly: 'Verified badges',
  },
  ro: {
    heading: 'Rezumat profesional pentru recrutori',
    subheading:
      'O prezentare concisă a rolurilor relevante, a experienței de livrare și a dovezilor care susțin profilul.',
    columns: [
      {
        label: 'Roluri relevante',
        items: [
          'Guvernanța securității și GRC',
          'Protecția datelor, conformitate și controale',
          'Risc de securitate cibernetică și asigurarea controalelor',
          'Consultanță de securitate și coordonarea programelor',
        ],
      },
      {
        label: 'Experiență relevantă',
        items: [
          'Evaluări secure-by-design și privacy-by-design',
          'Evaluări de risc, pregătire pentru audit și documentarea controalelor',
          'Guvernanța incidentelor și urmărirea remedierii',
          'PKI, ciclul de viață al certificatelor și experiență HSM',
          'Administrare Linux; certificări LPIC-1/2 din istoricul profesional',
        ],
      },
      {
        label: 'Context de livrare',
        items: [
          'Peste 10 ani în roluri IBM Consulting',
          'Medii reglementate din domeniile bancar și blockchain',
          'Colaborare internațională și activități de evaluare',
          'Experiență de fondator și livrare practică a sistemelor digitale',
          'Calificări în domeniul electric și fotovoltaic; fondator ElectroVerde',
        ],
      },
    ],
    details:
      'București, România. Română nativă, engleză fluentă și italiană la nivel bun. Masterat în Informatică Economică și licență în Informatică Managerială.',
    principle:
      'Lucrez direct și pe baza dovezilor: formulez explicit riscul, clarific responsabilitățile și las echipelor decizii pe care le pot pune în practică.',
    cv: 'Descarcă CV',
    linkedin: 'Profil LinkedIn',
    credly: 'Certificări verificate',
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
            <div
              className="border-l-4 border-emerald-600 pl-5"
              key={column.label}
            >
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
            <a
              className="button inline-flex items-center gap-2"
              download
              href={profile.resume.href}
            >
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
