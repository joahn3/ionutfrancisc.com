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
    durationLabel?: string
    ctaLabel?: string
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
    action?: string
    defaultType: string
    options: {
      value: string
      label: string
    }[]
    infoLabel: string
    labels?: {
      name: string
      email: string
      type: string
      submit: string
      honeypot: string
      privacy?: string
      privacyLink?: string
    }
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
        'Security, privacy, GRC, web, automation, and digital product consulting for founders and small teams.',
    },
    hero: {
      heading:
        'Tighten your web product, privacy posture, and digital systems.',
      paragraph: [
        'I help founders and small teams inspect, plan, and improve websites, landing pages, automations, security-oriented flows, privacy-aware systems, and AI-assisted product ideas.',
        'The work is practical: understand the risk, simplify the system, improve the user path, and make the next implementation step obvious.',
      ],
    },
    overview: {
      heading:
        'Most small digital systems do not need more noise. They need a clearer risk map and a better execution path.',
      paragraphs: [
        'A site can look finished while lead capture, analytics, privacy notices, forms, automations, and operational handoffs are quietly working against the business.',
        'I review both the technical and business surface: what users see, what data is collected, how the system is deployed, what evidence exists, and where security or privacy assumptions may be weak.',
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
            'Find weak points in forms, data flows, tracking, access, evidence, and operational habits.',
          bullets: [
            'Risk review',
            'Privacy-aware UX',
            'GRC basics',
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

export const servicePagesRo: Record<'instruction' | 'consulting', ServicePage> =
  {
    instruction: {
      seo: {
        title: 'Mentorat',
        description:
          'Mentorat practic pentru web development, frontend, tooling și workflow-uri AI-assisted.',
      },
      hero: {
        heading: 'Învață web development practic, lucrând pe probleme reale.',
        paragraph: [
          'Ofer mentorat pentru developeri, fondatori și oameni curioși care vor mai multă claritate în React, Next.js, TypeScript, tooling, deployment și workflow-uri AI-assisted.',
          'Nu facem încă un tutorial generic. Ne uităm la proiectul tău, la blocajele reale și la obiceiurile care te ajută să livrezi mai curat.',
        ],
      },
      overview: {
        heading:
          'Web development-ul modern e ușor de început, dar greu de organizat bine.',
        paragraphs: [
          'Framework-urile, hosting-ul și tool-urile AI se mișcă repede. Viteza ajută, dar poate produce proiecte greu de întreținut dacă nu ai un mod clar de lucru.',
          'O sesiune bună îți oferă un partener de gândire în timp ce lucrezi: putem analiza structura proiectului, depana o problemă concretă, îmbunătăți o funcționalitate sau construi un workflow de livrare.',
          'Accentul este pe decizii practice: cod lizibil, abstracții cu sens, UI mentenabil, default-uri sigure, deployment și automatizări care chiar economisesc timp.',
        ],
      },
      offerings: {
        heading: 'Ce Putem Lucra',
        description:
          'Sesiunile se adaptează nivelului tău și proiectului pe care vrei să-l îmbunătățești.',
        items: [
          {
            heading: 'Frontend Foundations',
            description:
              'Construim încredere în piesele care fac interfețele moderne mai stabile.',
            bullets: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
          },
          {
            heading: 'Workflow de proiect',
            description:
              'Facem bucla de lucru zilnică mai clară și mai puțin repetitivă.',
            bullets: ['Git', 'NPM', 'Netlify/Vercel', 'Code review habits'],
          },
          {
            heading: 'AI-assisted Building',
            description:
              'Folosești AI ca ajutor practic de dezvoltare fără să pierzi controlul asupra codului.',
            bullets: [
              'Prompting pentru implementare',
              'Refactorizare',
              'Testare',
              'Debugging',
            ],
          },
        ],
      },
      packages: {
        heading: 'Opțiuni Simple',
        description:
          'Începem mic, apoi programăm o sesiune de lucru dacă are sens.',
        durationLabel: 'pentru',
        ctaLabel: 'Începe aici',
        items: [
          {
            name: 'Intro Call',
            slug: 'intro',
            price: '0',
            duration: '15 min',
            description:
              'Un call scurt ca să înțeleg obiectivele, proiectul și unde ar ajuta cel mai mult o sesiune.',
            bullets: [
              'Fit check gratuit',
              'Clarificăm obiectivele',
              'Alegem tema potrivită',
            ],
          },
          {
            name: 'Working Session',
            slug: 'session',
            price: '49',
            duration: '45 min',
            description:
              'O sesiune practică și personalizată pe codul, workflow-ul sau obiectivul tău de învățare.',
            bullets: ['Agendă personalizată', 'Review live', 'Pași concreți'],
          },
        ],
      },
      form: {
        heading: 'Hai Să Lucrăm Pe Blocaj',
        description:
          'Spune-mi ce construiești sau ce vrei să înveți, iar eu îți propun următorul pas util.',
        name: 'mentorat',
        action: '/ro?contact=true',
        defaultType: 'intro',
        options: [
          { value: 'intro', label: 'Intro Call (15 min)' },
          { value: 'session', label: 'Working Session (45 min)' },
        ],
        infoLabel: 'Ce vrei să înveți sau să îmbunătățești?',
        labels: {
          name: 'Nume',
          email: 'Email',
          type: 'Tip sesiune',
          submit: 'Trimite',
          honeypot: 'Nu completa acest câmp:',
        },
      },
    },
    consulting: {
      seo: {
        title: 'Consultanță',
        description:
          'Consultanță practică de security, privacy, GRC, web, automatizări și produse digitale pentru fondatori și echipe mici.',
      },
      hero: {
        heading:
          'Clarifică-ți produsul web, postura de privacy și sistemele digitale.',
        paragraph: [
          'Ajut fondatorii și echipele mici să analizeze, planifice și îmbunătățească website-uri, landing pages, automatizări, fluxuri security/privacy și idei de produs AI-assisted.',
          'Lucrul este pragmatic: înțelegem riscul, simplificăm sistemul, îmbunătățim traseul utilizatorului și facem următorul pas de implementare evident.',
        ],
      },
      overview: {
        heading:
          'Un sistem digital mic nu are nevoie de mai mult zgomot. Are nevoie de hartă de risc și de execuție clară.',
        paragraphs: [
          'Un website poate arăta terminat în timp ce formularele, analytics, privacy notices, lead capture, automatizările și handoff-urile operaționale lucrează împotriva business-ului.',
          'Revizuiesc atât suprafața tehnică, cât și cea de business: ce vede utilizatorul, ce date se colectează, cum e publicat sistemul, ce dovezi există și unde pot fi slabe presupunerile de security sau privacy.',
          'Rezultatul este un plan practic de îmbunătățire, pe care un fondator, o echipă internă sau un partener de implementare îl poate folosi imediat.',
        ],
      },
      offerings: {
        heading: 'Zone De Consultanță',
        description:
          'Util pentru fondatori, business-uri de servicii și echipe care au nevoie de execuție digitală clară.',
        items: [
          {
            heading: 'Security & Privacy Review',
            description:
              'Identificăm puncte slabe în formulare, date, tracking, acces, dovezi și obiceiuri operaționale.',
            bullets: [
              'Risk review',
              'Privacy-aware UX',
              'GRC basics',
              'Plan de acțiune',
            ],
          },
          {
            heading: 'Web & Lead Systems',
            description:
              'Îmbunătățim website-uri, landing pages, formulare, conversii și igiena de analytics.',
            bullets: [
              'Landing pages',
              'Structură SEO',
              'Lead capture',
              'Tracking setup',
            ],
          },
          {
            heading: 'Automatizări & AI Workflows',
            description:
              'Proiectăm automatizări mici și workflow-uri AI-assisted care reduc munca manuală.',
            bullets: [
              'Workflow-uri pentru fondatori',
              'Instrumente interne',
              'Idei local-first',
              'Planificare MVP',
            ],
          },
        ],
      },
      packages: {
        heading: 'Opțiuni De Consultanță',
        description:
          'Începem cu un call scurt de diagnostic sau cu un review focusat dacă știi deja zona.',
        durationLabel: 'pentru',
        ctaLabel: 'Începe aici',
        items: [
          {
            name: 'Diagnostic Call',
            slug: 'diagnostic',
            price: '0',
            duration: '15 min',
            description:
              'O discuție scurtă ca să înțeleg business-ul, sistemul și zona cu cel mai mare impact.',
            bullets: [
              'Fit check gratuit',
              'Identificăm riscul principal',
              'Definim scopul',
            ],
          },
          {
            name: 'Focused Review',
            slug: 'review',
            price: '99',
            duration: '60 min',
            description:
              'Un review practic pentru un website, flux de produs, automatizare sau subiect security/privacy.',
            bullets: [
              'Review structurat',
              'Findings prioritizate',
              'Plan de pași următori',
            ],
          },
        ],
      },
      form: {
        heading: 'Începem Cu Sistemul',
        description:
          'Spune-mi ce vrei să analizăm și ce rezultat ar face colaborarea utilă.',
        name: 'consultanta',
        action: '/ro?contact=true',
        defaultType: 'diagnostic',
        options: [
          { value: 'diagnostic', label: 'Diagnostic Call (15 min)' },
          { value: 'review', label: 'Focused Review (60 min)' },
        ],
        infoLabel: 'Ce ar trebui să analizăm sau să îmbunătățim?',
        labels: {
          name: 'Nume',
          email: 'Email',
          type: 'Tip sesiune',
          submit: 'Trimite',
          honeypot: 'Nu completa acest câmp:',
        },
      },
    },
  }
