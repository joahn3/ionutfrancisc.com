export type ServicePage = {
  seo: {
    title: string
    description: string
  }
  hero: {
    heading: string
    paragraph: string[]
  }
  overview: {
    heading: string
    paragraphs: string[]
  }
  offerings: {
    heading: string
    description: string
    items: {
      heading: string
      description: string
      bullets: string[]
    }[]
  }
  packages: {
    heading: string
    description: string
    items: {
      name: string
      slug: string
      price: string
      duration: string
      description: string
      bullets: string[]
    }[]
  }
  form: {
    heading: string
    description: string
    name: string
    defaultType: string
    options: {
      value: string
      label: string
    }[]
    infoLabel: string
  }
}

export const servicePages: Record<'instruction' | 'consulting', ServicePage> = {
  instruction: {
    seo: {
      title: 'Instruction',
      description:
        'Personalized web development mentoring for practical frontend, tooling, and AI-assisted workflows.',
    },
    hero: {
      heading: 'Learn practical web development by working on real problems.',
      paragraph: [
        'I offer focused mentoring for developers, founders, and curious builders who want clearer React, Next.js, TypeScript, tooling, deployment, and AI-assisted development workflows.',
        'The goal is not another generic tutorial. We look at your project, your blockers, and the exact habits that help you ship better work.',
      ],
    },
    overview: {
      heading:
        'Modern web development is easier to start than ever, but harder to organize well.',
      paragraphs: [
        'Frameworks, libraries, hosting platforms, and AI tools move quickly. That speed is useful, but it can also leave projects messy, fragile, or difficult to improve.',
        'A good session gives you a thinking partner while you work. We can review your project structure, debug a concrete issue, improve a feature, or design a cleaner workflow for shipping.',
        'I focus on practical decisions: readable code, sensible abstractions, maintainable UI, secure defaults, deployment basics, and automation that actually saves time.',
      ],
    },
    offerings: {
      heading: 'What We Can Cover',
      description:
        'Sessions are shaped around your current level and the project you want to improve.',
      items: [
        {
          heading: 'Frontend Foundations',
          description:
            'Build confidence with the pieces that make modern interfaces reliable.',
          bullets: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        },
        {
          heading: 'Project Workflow',
          description:
            'Make your day-to-day development loop clearer and less repetitive.',
          bullets: ['Git', 'NPM', 'Netlify/Vercel', 'Code review habits'],
        },
        {
          heading: 'AI-assisted Building',
          description:
            'Use AI tools as practical development help without losing control of the code.',
          bullets: [
            'Prompting for implementation',
            'Refactoring',
            'Testing',
            'Debugging',
          ],
        },
      ],
    },
    packages: {
      heading: 'Simple Session Options',
      description:
        'Start small, then book a focused working session if it makes sense.',
      items: [
        {
          name: 'Intro Call',
          slug: 'intro',
          price: '0',
          duration: '15 min',
          description:
            'A quick call to understand your goals, current project, and where a session would help most.',
          bullets: [
            'Free fit check',
            'Clarify goals',
            'Choose the right topic',
          ],
        },
        {
          name: 'Working Session',
          slug: 'session',
          price: '49',
          duration: '45 min',
          description:
            'A practical, personalized session around your code, workflow, or learning goal.',
          bullets: [
            'Personalized agenda',
            'Live review',
            'Concrete next steps',
          ],
        },
      ],
    },
    form: {
      heading: "Let's Work Through It",
      description:
        'Share what you are building or trying to learn, and I will suggest the most useful next step.',
      name: 'instruction',
      defaultType: 'intro',
      options: [
        { value: 'intro', label: 'Intro Call (15 min)' },
        { value: 'session', label: 'Working Session (45 min)' },
      ],
      infoLabel: 'What would you like to learn or improve?',
    },
  },
  consulting: {
    seo: {
      title: 'Consulting',
      description:
        'Security, privacy, web, automation, and digital product consulting for founders and small teams.',
    },
    hero: {
      heading:
        'Tighten your web product, privacy posture, and digital systems.',
      paragraph: [
        'I help founders and small teams inspect, plan, and improve websites, landing pages, automations, security-oriented flows, and AI-assisted product ideas.',
        'The work is practical: understand the risk, simplify the system, improve the user path, and make the next implementation step obvious.',
      ],
    },
    overview: {
      heading:
        'Most small digital systems do not need more noise. They need a clearer risk map and a better execution path.',
      paragraphs: [
        'A site can look finished while lead capture, analytics, privacy notices, forms, automations, and operational handoffs are quietly working against the business.',
        'I review both the technical and business surface: what users see, what data is collected, how the system is deployed, and where security or privacy assumptions may be weak.',
        'The result is a practical improvement plan that a founder, internal team, or implementation partner can actually use.',
      ],
    },
    offerings: {
      heading: 'Consulting Focus',
      description:
        'Useful for founders, service businesses, and teams that need practical digital execution.',
      items: [
        {
          heading: 'Security & Privacy Review',
          description:
            'Find weak points in forms, data flows, tracking, access, and operational habits.',
          bullets: [
            'Risk review',
            'Privacy-aware UX',
            'Compliance basics',
            'Action plan',
          ],
        },
        {
          heading: 'Web & Lead Systems',
          description:
            'Improve websites, landing pages, forms, conversion paths, and analytics hygiene.',
          bullets: [
            'Landing pages',
            'SEO structure',
            'Lead capture',
            'Tracking setup',
          ],
        },
        {
          heading: 'Automation & AI Workflows',
          description:
            'Design small automations and AI-assisted workflows that reduce manual work.',
          bullets: [
            'Founder workflows',
            'Internal tools',
            'Local-first ideas',
            'MVP planning',
          ],
        },
      ],
    },
    packages: {
      heading: 'Consulting Options',
      description:
        'Use a short diagnostic call first, or book a focused review when you already know the area.',
      items: [
        {
          name: 'Diagnostic Call',
          slug: 'diagnostic',
          price: '0',
          duration: '15 min',
          description:
            'A short conversation to understand the business, the system, and the highest-value review area.',
          bullets: ['Free fit check', 'Surface the main risk', 'Define scope'],
        },
        {
          name: 'Focused Review',
          slug: 'review',
          price: '99',
          duration: '60 min',
          description:
            'A practical review of one website, product flow, automation, or security/privacy concern.',
          bullets: [
            'Structured review',
            'Prioritized findings',
            'Next-step plan',
          ],
        },
      ],
    },
    form: {
      heading: 'Start With The System',
      description:
        'Tell me what you want reviewed and what outcome would make the engagement useful.',
      name: 'consulting',
      defaultType: 'diagnostic',
      options: [
        { value: 'diagnostic', label: 'Diagnostic Call (15 min)' },
        { value: 'review', label: 'Focused Review (60 min)' },
      ],
      infoLabel: 'What should we review or improve?',
    },
  },
}
