import {
  AcademicCapIcon,
  CogIcon,
  LightningBoltIcon,
  ShieldCheckIcon,
  TemplateIcon,
  TerminalIcon,
} from '@heroicons/react/outline'

export default [
  {
    name: 'Security & Privacy',
    description:
      'Practical reviews for websites, forms, data flows, tracking, access, and privacy-aware product decisions.',
    icon: <ShieldCheckIcon />,
    color: 'text-emerald-600',
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
      'Small operational systems and AI-assisted workflows that reduce manual work for founders and teams.',
    icon: <CogIcon />,
    color: 'text-sky-600',
    link: '/consulting',
    linkText: 'Improve Systems',
  },
  {
    name: 'Education Tools',
    icon: <AcademicCapIcon />,
    description:
      'Child-friendly tools, routines, typing practice, progress systems, and parent-facing learning flows.',
    color: 'text-amber-600',
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
