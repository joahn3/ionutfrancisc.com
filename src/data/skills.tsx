import {
  CogIcon,
  ShieldCheckIcon,
  TemplateIcon,
  TerminalIcon,
} from '@heroicons/react/outline'

export const skillsEn = [
  {
    name: 'Security, Privacy & GRC Advisory',
    description:
      'Risk, governance, secure-by-design, privacy-by-design, and control reviews translated into prioritized decisions and accountable actions.',
    icon: <ShieldCheckIcon />,
    color: 'text-emerald-700',
    link: '/consulting',
    linkText: 'Discuss an Advisory Mandate',
  },
  {
    name: 'Control Assurance',
    description:
      'Audit readiness, evidence quality, control interpretation, remediation tracking, and decision-ready documentation.',
    icon: <ShieldCheckIcon />,
    color: 'text-indigo-600',
    link: '/security-privacy',
    linkText: 'View Security Profile',
  },
  {
    name: 'Incident Governance',
    description:
      'Structured intake, stakeholder coordination, action ownership, closure criteria, and lessons learned across technical teams.',
    icon: <CogIcon />,
    color: 'text-sky-700',
    link: '/consulting',
    linkText: 'Explore Experience',
  },
  {
    name: 'Digital Systems & Automation',
    icon: <CogIcon />,
    description:
      'Operational workflows, internal tools, and AI-assisted systems designed to reduce friction and improve traceability.',
    color: 'text-amber-700',
    link: '/consulting',
    linkText: 'Improve a System',
  },
  {
    name: 'Web Products & Conversion',
    description:
      'High-trust websites, digital services, SEO, analytics, and conversion paths built around measurable business goals.',
    icon: <TerminalIcon />,
    color: 'text-violet-600',
    link: '/work',
    linkText: 'View Selected Work',
  },
  {
    name: 'Technical Delivery',
    description:
      'Hands-on implementation across modern web platforms, Linux, deployment, automation, and maintainable delivery workflows.',
    icon: <TemplateIcon />,
    color: 'text-rose-600',
    link: '/contact',
    linkText: 'Discuss an Engagement',
  },
]

export const skillsRo = [
  {
    name: 'Consultanță în securitate, protecția datelor și GRC',
    description:
      'Risc, guvernanță și evaluări secure-by-design și privacy-by-design, transformate în decizii prioritizate și acțiuni cu responsabilități clare.',
    icon: <ShieldCheckIcon />,
    color: 'text-emerald-700',
    link: '/ro/consultanta',
    linkText: 'Discută un mandat de consultanță',
  },
  {
    name: 'Asigurarea controalelor',
    description:
      'Pregătire pentru audit, calitatea dovezilor, interpretarea controalelor, urmărirea remedierii și documentație pentru decizii.',
    icon: <ShieldCheckIcon />,
    color: 'text-indigo-600',
    link: '/ro/securitate-confidentialitate',
    linkText: 'Vezi profilul de securitate',
  },
  {
    name: 'Guvernanța incidentelor',
    description:
      'Înregistrare structurată, coordonarea părților implicate, responsabilitatea acțiunilor, criterii de închidere și lecții învățate.',
    icon: <CogIcon />,
    color: 'text-sky-700',
    link: '/ro/consultanta',
    linkText: 'Explorează experiența',
  },
  {
    name: 'Sisteme digitale și automatizare',
    icon: <CogIcon />,
    description:
      'Fluxuri operaționale, instrumente interne și sisteme asistate de AI, proiectate pentru mai puțină fricțiune și trasabilitate mai bună.',
    color: 'text-amber-700',
    link: '/ro/consultanta',
    linkText: 'Îmbunătățește un sistem',
  },
  {
    name: 'Produse web și conversie',
    description:
      'Site-uri de încredere, servicii digitale, SEO, analizarea traficului și parcursuri de conversie construite în jurul obiectivelor comerciale.',
    icon: <TerminalIcon />,
    color: 'text-violet-600',
    link: '/ro/work',
    linkText: 'Vezi proiectele selectate',
  },
  {
    name: 'Livrare tehnică',
    description:
      'Implementare practică pe platforme web moderne, Linux, publicare, automatizare și fluxuri de livrare ușor de întreținut.',
    icon: <TemplateIcon />,
    color: 'text-rose-600',
    link: '/ro/contact',
    linkText: 'Discută o colaborare',
  },
]

export default skillsEn
