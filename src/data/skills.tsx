import {
  AcademicCapIcon,
  CogIcon,
  LightningBoltIcon,
  ShieldCheckIcon,
  TemplateIcon,
  TerminalIcon,
} from '@heroicons/react/outline'

export const skillsEn = [
  {
    name: 'Security & Privacy',
    description:
      'Practical GRC, secure-by-design, audit readiness, forms, data flows, tracking, access, and privacy-aware product reviews.',
    icon: <ShieldCheckIcon />,
    color: 'text-emerald-700',
    link: '/consulting',
    linkText: 'Plan a Review',
  },
  {
    name: 'Web Products',
    description:
      'Fast, clean websites, landing pages, MVPs, and lead-generation systems for real businesses.',
    icon: <TerminalIcon />,
    color: 'text-indigo-600',
    link: '/work',
    linkText: 'View Work',
  },
  {
    name: 'Automation',
    description:
      'Small operational systems, AI-assisted workflows, and handoffs that reduce manual work for founders and teams.',
    icon: <CogIcon />,
    color: 'text-sky-700',
    link: '/consulting',
    linkText: 'Improve Systems',
  },
  {
    name: 'Education Tools',
    icon: <AcademicCapIcon />,
    description:
      'Child-friendly tools, routines, typing practice, progress systems, and parent-facing learning flows.',
    color: 'text-amber-700',
    link: '/work',
    linkText: 'Explore Projects',
  },
  {
    name: 'AI-assisted Building',
    description:
      'Using AI as a disciplined development partner for research, refactoring, testing, and product iteration.',
    icon: <LightningBoltIcon />,
    color: 'text-violet-600',
    link: '/instruction',
    linkText: 'Learn Workflow',
  },
  {
    name: 'Implementation',
    description:
      'SEO structure, analytics, deployment, WordPress, React, Next.js, Netlify, Vercel, and GitHub workflows.',
    icon: <TemplateIcon />,
    color: 'text-rose-600',
    link: '/contact',
    linkText: 'Start a Project',
  },
]

export const skillsRo = [
  {
    name: 'Security & Privacy',
    description:
      'Review-uri practice pentru GRC, secure-by-design, audit readiness, formulare, fluxuri de date, tracking, acces și decizii de produs orientate spre privacy.',
    icon: <ShieldCheckIcon />,
    color: 'text-emerald-700',
    link: '/ro/consultanta',
    linkText: 'Planifică un review',
  },
  {
    name: 'Web Products',
    description:
      'Website-uri rapide, landing pages, MVP-uri și sisteme de lead generation construite pentru business-uri reale.',
    icon: <TerminalIcon />,
    color: 'text-indigo-600',
    link: '/ro/work',
    linkText: 'Vezi proiectele',
  },
  {
    name: 'Automatizări',
    description:
      'Sisteme operaționale mici, fluxuri AI-assisted și handoff-uri care reduc munca manuală pentru fondatori și echipe.',
    icon: <CogIcon />,
    color: 'text-sky-700',
    link: '/ro/consultanta',
    linkText: 'Îmbunătățește sistemele',
  },
  {
    name: 'Educație',
    icon: <AcademicCapIcon />,
    description:
      'Instrumente pentru copii, rutine, tastare, progres, jocuri educaționale și fluxuri utile pentru părinți.',
    color: 'text-amber-700',
    link: '/ro/work',
    linkText: 'Explorează proiectele',
  },
  {
    name: 'AI-assisted Building',
    description:
      'AI folosit disciplinat ca partener de dezvoltare pentru research, refactorizare, testare și iterare de produs.',
    icon: <LightningBoltIcon />,
    color: 'text-violet-600',
    link: '/ro/mentorat',
    linkText: 'Învață workflow-ul',
  },
  {
    name: 'Implementare',
    description:
      'Structură SEO, analytics, deployment, WordPress, React, Next.js, Netlify, Vercel și workflow-uri GitHub.',
    icon: <TemplateIcon />,
    color: 'text-rose-600',
    link: '/ro/contact',
    linkText: 'Pornește un proiect',
  },
]

export default skillsEn
