export type WorkCategory =
  | 'Founder / Active Businesses'
  | 'Products & Platforms'
  | 'Business Websites'
  | 'Creative & Personal Experiments'

export type WorkItem = {
  title: string
  description: string
  link: string
  category: WorkCategory
  image?: string
  color: string
  tools: string[]
}

export const workCategories: WorkCategory[] = [
  'Founder / Active Businesses',
  'Products & Platforms',
  'Business Websites',
  'Creative & Personal Experiments',
]

const work: WorkItem[] = [
  {
    title: 'ElectroVerde',
    description:
      'Electrical and photovoltaic services company focused on solar systems, batteries, EV charging, maintenance, and B2B execution partnerships in Bucharest and Ilfov.',
    link: 'https://electroverde.ro',
    category: 'Founder / Active Businesses',
    image: '/assets/work/electroverde.jpg',
    color: 'text-emerald-700',
    tools: ['Energy Tech', 'Solar', 'Operations', 'B2B'],
  },
  {
    title: 'firaCODE',
    description:
      'Web development, SEO, automation, and technical implementation studio for entrepreneurs, small businesses, and companies.',
    link: 'https://firacode.ro',
    category: 'Founder / Active Businesses',
    image: '/assets/work/firacode.jpg',
    color: 'text-indigo-700',
    tools: ['Web Development', 'SEO', 'Automation', 'AI-assisted'],
  },
  {
    title: 'FiraWeb',
    description:
      'Web design and development brand focused on fast, clean, conversion-oriented websites and digital systems.',
    link: 'https://firaweb.ro',
    category: 'Founder / Active Businesses',
    image: '/assets/work/firaweb.jpg',
    color: 'text-sky-700',
    tools: ['Web Design', 'Landing Pages', 'Lead Generation'],
  },
  {
    title: 'FiraCodeDesign',
    description:
      'Design-oriented web presence for branding, websites, landing pages, and digital product experiments.',
    link: 'https://firacodesign.ro',
    category: 'Founder / Active Businesses',
    image: '/assets/work/firacodedesign.jpg',
    color: 'text-rose-700',
    tools: ['Branding', 'Websites', 'Product Experiments'],
  },
  {
    title: 'TemeJoc',
    description:
      'Educational platform for children, parents, and teachers, focused on homework, routines, schedules, typing, technology basics, and child-friendly learning games.',
    link: 'https://www.temejoc.ro',
    category: 'Products & Platforms',
    image: '/assets/work/temejoc.jpg',
    color: 'text-amber-700',
    tools: ['Education', 'Children', 'Parents', 'Learning Games'],
  },
  {
    title: 'MarcLab',
    description:
      'Local-first educational playground for children, with modular games, progress, XP, streaks, coins, and parent-protected export.',
    link: 'https://marclab.netlify.app/',
    category: 'Products & Platforms',
    image: '/assets/work/marclab.jpg',
    color: 'text-violet-700',
    tools: ['Local-first', 'Education', 'Progress Systems', 'Games'],
  },
  {
    title: 'RO Parenting',
    description:
      'Simple parenting guide and crisis-mode tool for routines, reflection, consistency, and better parent-child communication.',
    link: 'https://ro-parenting.netlify.app/',
    category: 'Products & Platforms',
    image: '/assets/work/ro-parenting.jpg',
    color: 'text-teal-700',
    tools: ['Parenting', 'Routines', 'Reflection', 'Guides'],
  },
  {
    title: 'Aegis Private',
    description:
      'Experimental digital risk, private intelligence, and security-oriented interface concept.',
    link: 'https://aegis-private.vercel.app/',
    category: 'Products & Platforms',
    image: '/assets/work/aegis-private.jpg',
    color: 'text-gray-800',
    tools: ['Security', 'Privacy', 'Risk', 'Product Concept'],
  },
  {
    title: 'GoodPC',
    description:
      'IT service website for computer repair, laptop repair, maintenance, and B2B IT support in Bucharest.',
    link: 'https://www.goodpc.ro',
    category: 'Business Websites',
    image: '/assets/work/goodpc.jpg',
    color: 'text-blue-800',
    tools: ['Netlify', 'Bootstrap', 'Analytics', 'Lead Generation'],
  },
  {
    title: 'Chic Roumaine',
    description:
      'E-commerce and brand website for handmade Romanian traditional blouses and fashion products.',
    link: 'https://www.chicroumaine.com',
    category: 'Business Websites',
    image: '/assets/work/chic-roumaine.jpg',
    color: 'text-red-800',
    tools: ['WordPress', 'WooCommerce', 'Elementor', 'Payments'],
  },
  {
    title: 'Security & Telecom',
    description:
      'Website for integrated security systems: video surveillance, alarms, access control, fire detection, automation, and IT infrastructure.',
    link: 'https://www.security-telecom.ro',
    category: 'Business Websites',
    image: '/assets/work/security-telecom.jpg',
    color: 'text-slate-800',
    tools: ['Security Systems', 'B2B', 'Infrastructure', 'Local SEO'],
  },
  {
    title: 'MOVE Studio Popesti-Leordeni',
    description:
      'Premium landing page for a Pilates Reformer studio with pricing, FAQ, booking, and local SEO structure.',
    link: 'https://move-studio-popesti.netlify.app/',
    category: 'Business Websites',
    image: '/assets/work/move-studio-popesti-leordeni.jpg',
    color: 'text-fuchsia-800',
    tools: ['Landing Page', 'Pricing', 'FAQ', 'Local SEO'],
  },
  {
    title: 'CORAMI',
    description:
      'Industrial service website for waste compacting and baling equipment maintenance.',
    link: 'https://corami.netlify.app/',
    category: 'Business Websites',
    image: '/assets/work/corami.jpg',
    color: 'text-orange-800',
    tools: ['Industrial Services', 'B2B', 'Maintenance', 'Web'],
  },
  {
    title: 'Forest Memory',
    description:
      'Memory game inspired by nature, with local progress and photo challenge mechanics.',
    link: 'https://ioana-forest-game.netlify.app/',
    category: 'Creative & Personal Experiments',
    image: '/assets/work/forest-memory.jpg',
    color: 'text-green-800',
    tools: ['Game', 'Local Progress', 'Challenge Mechanics'],
  },
  {
    title: 'Love Game Generator',
    description:
      'Generator for personalized mini-game links with encoded custom messages and rewards.',
    link: 'https://lovegenerator.netlify.app/',
    category: 'Creative & Personal Experiments',
    image: '/assets/work/love-game-generator.jpg',
    color: 'text-pink-800',
    tools: ['Generator', 'Mini-game', 'Personalization'],
  },
]

export default work
