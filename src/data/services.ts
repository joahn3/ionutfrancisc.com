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
      investment: string
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
      title: 'Mentoring',
      description:
        'Private technical mentoring for developers and founders working through real web, tooling, and AI-assisted delivery challenges.',
    },
    hero: {
      heading:
        'Build stronger technical judgment by working on a real challenge.',
      paragraph: [
        'Private mentoring for developers and founders who want to improve a real React, Next.js, TypeScript, deployment, or AI-assisted delivery workflow.',
        'We work from your codebase and decisions, not a generic curriculum, so every session produces clearer reasoning and practical next steps.',
      ],
    },
    overview: {
      heading:
        'Modern tools accelerate delivery, but they do not replace sound engineering judgment.',
      paragraphs: [
        'Frameworks, hosting platforms, and AI tools evolve quickly. Without a clear delivery model, that speed can create fragile architecture, inconsistent code, and avoidable operational risk.',
        'A focused session gives you a senior thinking partner for one concrete challenge: architecture, debugging, feature design, deployment, code quality, or workflow improvement.',
        'The emphasis is on transferable judgment: readable code, proportionate abstractions, maintainable interfaces, secure defaults, reliable releases, and automation that creates measurable leverage.',
      ],
    },
    offerings: {
      heading: 'Areas We Can Address',
      description:
        'Sessions are shaped around your current level and the project you want to improve.',
      items: [
        {
          heading: 'Frontend Architecture',
          description:
            'Make deliberate choices that keep modern interfaces reliable and maintainable.',
          bullets: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        },
        {
          heading: 'Delivery Workflow',
          description:
            'Improve the path from local development to review, release, and iteration.',
          bullets: ['Git', 'npm', 'Netlify/Vercel', 'Code review practice'],
        },
        {
          heading: 'AI-assisted Development',
          description:
            'Use AI as a disciplined accelerator while retaining technical ownership and review quality.',
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
      heading: 'Mentoring Formats',
      description:
        'Begin with a short fit conversation, then define the right working format for the challenge.',
      ctaLabel: 'Choose This Format',
      items: [
        {
          name: 'Fit Conversation',
          slug: 'intro',
          investment: 'No fee',
          duration: '20 minutes',
          description:
            'A short conversation to understand the project, the decision at hand, and whether I am the right person to help.',
          bullets: [
            'Clarify the outcome',
            'Assess fit',
            'Define the next step',
          ],
        },
        {
          name: 'Private Working Session',
          slug: 'session',
          investment: 'By scope',
          duration: '60–90 minutes',
          description:
            'A prepared, one-to-one working session focused on a concrete technical or delivery challenge.',
          bullets: [
            'Personalized agenda',
            'Live analysis',
            'Documented next steps',
          ],
        },
      ],
    },
    form: {
      heading: 'Bring a Real Challenge',
      description:
        'Share the context, the decision you are facing, and what a useful outcome would look like.',
      name: 'instruction',
      defaultType: 'intro',
      options: [
        { value: 'intro', label: 'Fit Conversation (20 minutes)' },
        { value: 'session', label: 'Private Working Session' },
      ],
      infoLabel: 'What would you like to learn or improve?',
      labels: {
        name: 'Name',
        email: 'Email',
        type: 'Mentoring format',
        submit: 'Send inquiry',
        honeypot: "Don't fill this out if you're human:",
      },
    },
  },
  consulting: {
    seo: {
      title: 'Consulting',
      description:
        'Security, privacy, GRC, digital systems, and automation advisory for organizations that need clear decisions and accountable delivery.',
    },
    hero: {
      heading:
        'Turn security, privacy, and digital delivery risk into an executable mandate.',
      paragraph: [
        'I help leaders and delivery teams assess risk, clarify priorities, strengthen controls, and structure the next stage of a digital system or transformation initiative.',
        'The engagement connects governance with implementation: decision-ready findings, clear ownership, proportionate controls, and a plan teams can execute and evidence.',
      ],
    },
    overview: {
      heading:
        'A polished digital experience is not the same as a well-governed, resilient system.',
      paragraphs: [
        'Risk often sits between functions: requirements are vague, evidence is fragmented, data flows are poorly understood, or operational handoffs depend on assumptions no one owns.',
        'I examine the governance, technical, and commercial surfaces together: what the system must achieve, what data it handles, which controls matter, how delivery works, and where decisions lack evidence.',
        'The result is a prioritized mandate with traceable findings, named decisions, and a realistic path from assessment to implementation.',
      ],
    },
    offerings: {
      heading: 'Advisory Focus',
      description:
        'Designed for leaders and teams that need clarity across governance, risk, digital delivery, and operational execution.',
      items: [
        {
          heading: 'Security, Privacy & Control Assurance',
          description:
            'Assess material risks, control expectations, evidence quality, data handling, and remediation priorities.',
          bullets: [
            'Risk and control review',
            'Secure/privacy-by-design',
            'Audit readiness',
            'Prioritized remediation',
          ],
        },
        {
          heading: 'Digital Systems & Conversion Architecture',
          description:
            'Align user journeys, data collection, analytics, trust signals, and technical delivery with commercial goals.',
          bullets: [
            'Journey architecture',
            'SEO and discoverability',
            'Conversion systems',
            'Measurement design',
          ],
        },
        {
          heading: 'Automation & AI-enabled Operations',
          description:
            'Design accountable workflows and internal tools that reduce manual effort without sacrificing oversight.',
          bullets: [
            'Process mapping',
            'Human-in-the-loop controls',
            'Internal tools',
            'Implementation roadmap',
          ],
        },
      ],
    },
    packages: {
      heading: 'Engagement Models',
      description:
        'The scope follows the risk, decision, and outcome required—not an arbitrary hourly package.',
      ctaLabel: 'Discuss This Model',
      items: [
        {
          name: 'Executive Scoping Conversation',
          slug: 'diagnostic',
          investment: 'No fee',
          duration: '20 minutes',
          description:
            'A focused conversation to understand the mandate, material risk, stakeholders, and decision deadline.',
          bullets: [
            'Assess fit',
            'Clarify the decision',
            'Define a useful scope',
          ],
        },
        {
          name: 'Advisory Sprint',
          slug: 'review',
          investment: 'By scope',
          duration: '1–2 weeks',
          description:
            'A time-boxed assessment that converts one material problem into findings, decisions, and a prioritized action plan.',
          bullets: [
            'Structured discovery',
            'Decision-ready findings',
            'Prioritized roadmap',
          ],
        },
        {
          name: 'Ongoing Advisory Partnership',
          slug: 'partnership',
          investment: 'Monthly',
          duration: '3+ months',
          description:
            'Embedded advisory support for leaders and teams managing recurring governance, risk, and delivery decisions.',
          bullets: [
            'Regular decision support',
            'Control and remediation oversight',
            'Stakeholder alignment',
          ],
        },
      ],
    },
    form: {
      heading: 'Start With the Mandate',
      description:
        'Describe the decision, risk, or delivery constraint—and what must be different when the engagement is complete.',
      name: 'consulting',
      defaultType: 'diagnostic',
      options: [
        { value: 'diagnostic', label: 'Executive Scoping Conversation' },
        { value: 'review', label: 'Advisory Sprint' },
        { value: 'partnership', label: 'Ongoing Advisory Partnership' },
      ],
      infoLabel:
        'What decision, risk, or outcome should the engagement address?',
      labels: {
        name: 'Name',
        email: 'Email',
        type: 'Engagement model',
        submit: 'Submit inquiry',
        honeypot: "Don't fill this out if you're human:",
      },
    },
  },
}

export const servicePagesRo: Record<'instruction' | 'consulting', ServicePage> =
  {
    instruction: {
      seo: {
        title: 'Mentorat',
        description:
          'Mentorat tehnic privat pentru dezvoltatori și fondatori care lucrează la provocări reale de dezvoltare web, instrumente tehnice și livrare asistată de AI.',
      },
      hero: {
        heading: 'Dezvoltă-ți judecata tehnică lucrând la o provocare reală.',
        paragraph: [
          'Mentorat privat pentru dezvoltatori și fondatori care doresc să îmbunătățească un proiect real în React, Next.js, TypeScript, publicare sau livrare asistată de AI.',
          'Lucrăm direct cu proiectul și deciziile tale, nu cu o programă generică, astfel încât fiecare sesiune să producă un raționament mai clar și pași practici.',
        ],
      },
      overview: {
        heading:
          'Instrumentele moderne accelerează livrarea, dar nu înlocuiesc judecata tehnică solidă.',
        paragraphs: [
          'Frameworkurile, platformele de găzduire și instrumentele bazate pe AI evoluează rapid. Fără un model clar de livrare, această viteză poate produce arhitectură fragilă, cod inconsecvent și riscuri operaționale evitabile.',
          'O sesiune concentrată îți oferă un partener cu experiență pentru o provocare concretă: arhitectură, depanare, proiectarea unei funcționalități, publicare, calitatea codului sau îmbunătățirea fluxului de lucru.',
          'Accentul cade pe judecată transferabilă: cod lizibil, abstracții proporționale, interfețe ușor de întreținut, configurări implicite sigure, procese de publicare fiabile și automatizări care creează valoare măsurabilă.',
        ],
      },
      offerings: {
        heading: 'Domenii pe care le putem aborda',
        description:
          'Sesiunile se adaptează nivelului tău și proiectului pe care vrei să-l îmbunătățești.',
        items: [
          {
            heading: 'Arhitectură frontend',
            description:
              'Luăm decizii deliberate care păstrează interfețele moderne fiabile și ușor de întreținut.',
            bullets: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
          },
          {
            heading: 'Fluxul de livrare',
            description:
              'Îmbunătățim traseul de la dezvoltarea locală la verificare, publicare și iterație.',
            bullets: [
              'Git',
              'npm',
              'Netlify/Vercel',
              'Practici pentru verificarea codului',
            ],
          },
          {
            heading: 'Dezvoltare asistată de AI',
            description:
              'Folosești inteligența artificială drept accelerator disciplinat, păstrând controlul tehnic și calitatea verificării.',
            bullets: [
              'Instrucțiuni pentru implementare',
              'Refactorizare',
              'Testare',
              'Depanare',
            ],
          },
        ],
      },
      packages: {
        heading: 'Formate de mentorat',
        description:
          'Începem cu o scurtă discuție inițială, apoi definim formatul potrivit pentru provocarea ta.',
        ctaLabel: 'Alege formatul',
        items: [
          {
            name: 'Discuție inițială',
            slug: 'intro',
            investment: 'Fără cost',
            duration: '20 de minute',
            description:
              'O discuție scurtă pentru a înțelege proiectul, decizia de luat și dacă sunt persoana potrivită pentru a te ajuta.',
            bullets: [
              'Clarificăm rezultatul',
              'Evaluăm potrivirea',
              'Definim pasul următor',
            ],
          },
          {
            name: 'Sesiune privată de lucru',
            slug: 'session',
            investment: 'În funcție de scop',
            duration: '60–90 de minute',
            description:
              'O sesiune individuală, pregătită în avans și concentrată pe o provocare tehnică sau de livrare concretă.',
            bullets: [
              'Agendă personalizată',
              'Analiză în direct',
              'Pași următori documentați',
            ],
          },
        ],
      },
      form: {
        heading: 'Vino cu o provocare reală',
        description:
          'Descrie contextul, decizia pe care trebuie să o iei și cum ar arăta un rezultat util.',
        name: 'mentorat',
        action: '/ro?contact=true',
        defaultType: 'intro',
        options: [
          { value: 'intro', label: 'Discuție inițială (20 de minute)' },
          { value: 'session', label: 'Sesiune privată de lucru' },
        ],
        infoLabel: 'Ce vrei să înveți sau să îmbunătățești?',
        labels: {
          name: 'Nume',
          email: 'Email',
          type: 'Format de mentorat',
          submit: 'Trimite solicitarea',
          honeypot: 'Nu completa acest câmp:',
        },
      },
    },
    consulting: {
      seo: {
        title: 'Consultanță',
        description:
          'Consultanță în securitate, protecția datelor, GRC, sisteme digitale și automatizare pentru organizații care au nevoie de decizii clare și livrare responsabilă.',
      },
      hero: {
        heading:
          'Transformă riscul de securitate, protecția datelor și livrare digitală într-un mandat executabil.',
        paragraph: [
          'Ajut liderii și echipele de livrare să evalueze riscurile, să clarifice prioritățile, să consolideze controalele și să structureze următoarea etapă a unui sistem digital sau a unei inițiative de transformare.',
          'Colaborarea conectează guvernanța cu implementarea: constatări pregătite pentru decizie, responsabilități clare, controale proporționale și un plan pe care echipele îl pot executa și demonstra.',
        ],
      },
      overview: {
        heading:
          'O experiență digitală bine finisată nu este același lucru cu un sistem bine guvernat și rezilient.',
        paragraphs: [
          'Riscul apare adesea între funcții: cerințele sunt vagi, dovezile sunt fragmentate, fluxurile de date nu sunt înțelese complet sau transferurile operaționale depind de presupuneri pe care nu și le asumă nimeni.',
          'Analizez împreună dimensiunile de guvernanță, tehnică și comercială: ce trebuie să obțină sistemul, ce date gestionează, ce controale contează, cum funcționează livrarea și unde deciziile nu sunt susținute de dovezi.',
          'Rezultatul este un mandat prioritizat, cu constatări trasabile, decizii explicite și un traseu realist de la evaluare la implementare.',
        ],
      },
      offerings: {
        heading: 'Domenii de consultanță strategică',
        description:
          'Pentru lideri și echipe care au nevoie de claritate la intersecția dintre guvernanță, risc, livrare digitală și operațiuni.',
        items: [
          {
            heading: 'Securitate, protecția datelor și asigurarea controalelor',
            description:
              'Evaluăm riscurile materiale, cerințele de control, calitatea dovezilor, gestionarea datelor și prioritățile de remediere.',
            bullets: [
              'Evaluarea riscurilor și controalelor',
              'Secure/privacy-by-design',
              'Pregătire pentru audit',
              'Remediere prioritizată',
            ],
          },
          {
            heading: 'Arhitectura sistemelor digitale și a conversiei',
            description:
              'Aliniem parcursurile utilizatorilor, colectarea datelor, măsurarea, elementele de încredere și livrarea tehnică la obiectivele comerciale.',
            bullets: [
              'Arhitectura parcursului',
              'SEO și vizibilitate',
              'Sisteme de conversie',
              'Proiectarea măsurării',
            ],
          },
          {
            heading: 'Automatizare și operațiuni asistate de AI',
            description:
              'Proiectăm fluxuri de lucru responsabile și instrumente interne care reduc efortul manual fără a pierde controlul.',
            bullets: [
              'Modelarea proceselor',
              'Controale cu validare umană',
              'Instrumente interne',
              'Foaie de parcurs pentru implementare',
            ],
          },
        ],
      },
      packages: {
        heading: 'Modele de colaborare',
        description:
          'Scopul colaborării urmează riscul, decizia și rezultatul necesar, nu un pachet arbitrar de ore.',
        ctaLabel: 'Discută acest format',
        items: [
          {
            name: 'Discuție executivă de clarificare',
            slug: 'diagnostic',
            investment: 'Fără cost',
            duration: '20 de minute',
            description:
              'O discuție concentrată pentru a înțelege mandatul, riscul material, părțile implicate și termenul deciziei.',
            bullets: [
              'Evaluăm potrivirea',
              'Clarificăm decizia',
              'Definim un scop util',
            ],
          },
          {
            name: 'Sprint de consultanță',
            slug: 'review',
            investment: 'În funcție de scop',
            duration: '1–2 săptămâni',
            description:
              'O evaluare cu durată definită, care transformă o problemă materială în constatări, decizii și un plan de acțiune prioritizat.',
            bullets: [
              'Descoperire structurată',
              'Constatări pregătite pentru decizie',
              'Foaie de parcurs prioritizată',
            ],
          },
          {
            name: 'Parteneriat de consultanță continuă',
            slug: 'partnership',
            investment: 'Lunar',
            duration: 'Minimum 3 luni',
            description:
              'Sprijin de consultanță integrat pentru lideri și echipe care gestionează recurent decizii de guvernanță, risc și livrare.',
            bullets: [
              'Sprijin periodic pentru decizii',
              'Supravegherea controalelor și remedierii',
              'Alinierea părților implicate',
            ],
          },
        ],
      },
      form: {
        heading: 'Începem cu mandatul',
        description:
          'Descrie decizia, riscul sau constrângerea de livrare și ce trebuie să fie diferit la finalul colaborării.',
        name: 'consultanta',
        action: '/ro?contact=true',
        defaultType: 'diagnostic',
        options: [
          { value: 'diagnostic', label: 'Discuție executivă de clarificare' },
          { value: 'review', label: 'Sprint de consultanță' },
          {
            value: 'partnership',
            label: 'Parteneriat de consultanță continuă',
          },
        ],
        infoLabel:
          'Ce decizie, risc sau rezultat trebuie să abordeze colaborarea?',
        labels: {
          name: 'Nume',
          email: 'Email',
          type: 'Model de colaborare',
          submit: 'Trimite solicitarea',
          honeypot: 'Nu completa acest câmp:',
        },
      },
    },
  }
