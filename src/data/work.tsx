export type WorkCategory =
  | 'Founder / Active Businesses'
  | 'Launch Collaborations'
  | 'Products & Platforms'
  | 'Business Websites'
  | 'Creative & Personal Experiments'

export type WorkItem = {
  title: string
  description: string
  descriptionRo?: string
  role?: string
  roleRo?: string
  link: string
  category: WorkCategory
  image: string
  color: string
  tools: string[]
}

export const workCategories: WorkCategory[] = [
  'Founder / Active Businesses',
  'Launch Collaborations',
  'Products & Platforms',
  'Business Websites',
  'Creative & Personal Experiments',
]

const work: WorkItem[] = [
  {
    title: 'ElectroVerde',
    description:
      'The electrical and photovoltaic services company I founded and own, focused on solar systems, batteries, EV charging, maintenance, and B2B delivery in Bucharest and Ilfov.',
    descriptionRo:
      'Compania de servicii electrice și fotovoltaice pe care am fondat-o și o dețin, specializată în sisteme solare, baterii, stații de încărcare pentru vehicule electrice, mentenanță și lucrări B2B în București și Ilfov.',
    role: 'Founder & Owner · Strategic partnership with Earthlink / SolarLink',
    roleRo:
      'Fondator și proprietar · Parteneriat strategic cu Earthlink / SolarLink',
    link: 'https://electroverde.ro',
    category: 'Founder / Active Businesses',
    image: '/assets/work/electroverde.jpg',
    color: 'text-emerald-700',
    tools: ['Energy Tech', 'Solar', 'Operations', 'B2B'],
  },
  {
    title: 'FiraWeb',
    description:
      'Technical studio for web development, SEO, automations, and lead-generation systems. It consolidates the redirected Fira domains into one focused brand.',
    descriptionRo:
      'Studio tehnic pentru dezvoltare web, SEO, automatizări și sisteme de atragere a clienților. Reunește domeniile Fira redirecționate sub un singur brand coerent.',
    role: 'Founder · Strategy, systems, and delivery',
    roleRo: 'Fondator · Strategie, sisteme și livrare',
    link: 'https://firaweb.ro',
    category: 'Founder / Active Businesses',
    image: '/assets/work/firaweb.jpg',
    color: 'text-sky-700',
    tools: ['Web Development', 'SEO', 'Automation', 'Lead Generation'],
  },
  {
    title: 'SolarLink',
    description:
      'Earthlink renewable-energy brand for premium photovoltaic systems, HJT technology, residential and commercial installations, Casa Verde, and Electric Up. I contributed to the project launch and public digital presence.',
    descriptionRo:
      'Brandul de energie regenerabilă Earthlink pentru sisteme fotovoltaice premium, tehnologie HJT, instalări rezidențiale și comerciale, Casa Verde și Electric Up. Am contribuit la lansarea proiectului și prezența sa digitală publică.',
    role: 'Launch contributor · Earthlink partner ecosystem',
    roleRo: 'Contribuție la lansare · Ecosistemul partenerului Earthlink',
    link: 'https://solarlink.ro',
    category: 'Launch Collaborations',
    image: '/assets/work/solarlink.jpg',
    color: 'text-orange-800',
    tools: ['Solar Energy', 'HJT', 'Casa Verde', 'Launch'],
  },
  {
    title: 'TSTY',
    description:
      'Earthlink e-commerce venture for premium Italian ingredients and a pilot for end-to-end supply-chain automation. I contributed to the project launch.',
    descriptionRo:
      'Proiect de comerț electronic al Earthlink pentru ingrediente italiene premium și program-pilot pentru automatizarea integrală a lanțului de aprovizionare. Am contribuit la lansarea proiectului.',
    role: 'Launch contributor · Earthlink venture',
    roleRo: 'Contribuție la lansare · Proiect Earthlink',
    link: 'https://www.tsty.ro',
    category: 'Launch Collaborations',
    image: '/assets/work/tsty.jpg',
    color: 'text-lime-800',
    tools: ['E-commerce', 'Supply Chain', 'Automation', 'Launch'],
  },
  {
    title: 'TemeJoc',
    description:
      'Educational platform for children, parents, and teachers, focused on homework, routines, schedules, typing, technology basics, and child-friendly learning games.',
    descriptionRo:
      'Platformă educațională pentru copii, părinți și profesori, cu teme, rutine, program, tastare, noțiuni de tehnologie și jocuri de învățare.',
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
    descriptionRo:
      'Spațiu educațional local-first pentru copii, cu jocuri modulare, progres, XP, serii de activitate, monede și export protejat pentru părinți.',
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
    descriptionRo:
      'Ghid simplu de parenting și instrument pentru momente tensionate, cu rutine, reflecție, consecvență și comunicare mai bună părinte-copil.',
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
    descriptionRo:
      'Concept experimental pentru analiza riscului digital, informații private și interfețe orientate spre securitate.',
    link: 'https://aegis-private.vercel.app/',
    category: 'Products & Platforms',
    image: '/assets/work/aegis-private.jpg',
    color: 'text-gray-800',
    tools: ['Security', 'Privacy', 'Risk', 'Product Concept'],
  },
  {
    title: 'BaffiCafe & Restaurant',
    description:
      'Restaurant website for BaffiCafe in Bragadiru, presenting the menu, daily menu, events, reservations, takeaway, and local customer reviews.',
    descriptionRo:
      'Site pentru BaffiCafe din Bragadiru, cu meniu, oferta zilei, evenimente, rezervări, comenzi la pachet și recenzii locale.',
    link: 'https://bafficafe.ro',
    category: 'Business Websites',
    image: '/assets/work/baffi-cafe.jpg',
    color: 'text-cyan-800',
    tools: ['WordPress', 'Restaurant', 'Local SEO', 'Reservations'],
  },
  {
    title: 'GoodPC',
    description:
      'IT service website for computer repair, laptop repair, maintenance, and B2B IT support in Bucharest.',
    descriptionRo:
      'Site de servicii IT pentru repararea calculatoarelor și laptopurilor, mentenanță și asistență IT B2B în București.',
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
    descriptionRo:
      'Site de brand și magazin online pentru ii românești lucrate manual și produse de modă cu inspirație tradițională.',
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
    descriptionRo:
      'Site pentru sisteme integrate de securitate: supraveghere video, alarme, control al accesului, detectarea incendiilor, automatizări și infrastructură IT.',
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
    descriptionRo:
      'Pagină de prezentare premium pentru un studio de Pilates Reformer, cu tarife, întrebări frecvente, programări și structură SEO locală.',
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
    descriptionRo:
      'Site de servicii industriale pentru mentenanța echipamentelor de compactare și balotare a deșeurilor.',
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
    descriptionRo:
      'Joc de memorie inspirat de natură, cu progres salvat local și mecanici bazate pe provocări fotografice.',
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
    descriptionRo:
      'Generator de linkuri pentru mini-jocuri personalizate, cu mesaje și recompense codificate.',
    link: 'https://lovegenerator.netlify.app/',
    category: 'Creative & Personal Experiments',
    image: '/assets/work/love-game-generator.jpg',
    color: 'text-pink-800',
    tools: ['Generator', 'Mini-game', 'Personalization'],
  },
]

export default work
