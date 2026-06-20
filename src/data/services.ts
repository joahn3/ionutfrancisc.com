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
          heading: 'AI-assisted Development',
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
        'Security, privacy, GRC, web, automation, and digital product consulting for founders and growing teams.',
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
          'Mentorat practic pentru dezvoltare web, frontend, instrumente tehnice și fluxuri de lucru asistate de AI.',
      },
      hero: {
        heading: 'Învață dezvoltare web lucrând la probleme reale.',
        paragraph: [
          'Ofer mentorat pentru dezvoltatori, fondatori și persoane curioase care doresc mai multă claritate în React, Next.js, TypeScript, instrumente tehnice, publicare și fluxuri de lucru asistate de AI.',
          'Nu repetăm încă un tutorial generic. Analizăm proiectul tău, blocajele reale și practicile care te ajută să livrezi mai bine.',
        ],
      },
      overview: {
        heading:
          'Dezvoltarea web modernă este ușor de început, dar mai greu de organizat bine.',
        paragraphs: [
          'Frameworkurile, platformele de găzduire și instrumentele bazate pe AI evoluează rapid. Această viteză este utilă, dar poate produce proiecte greu de întreținut în lipsa unui mod clar de lucru.',
          'O sesiune bună îți oferă un partener de analiză în timp ce lucrezi: putem evalua structura proiectului, depana o problemă concretă, îmbunătăți o funcționalitate sau proiecta un flux de livrare mai curat.',
          'Accentul cade pe decizii practice: cod lizibil, abstracții justificate, interfețe ușor de întreținut, configurări implicite sigure, publicare și automatizări care economisesc timp.',
        ],
      },
      offerings: {
        heading: 'Ce putem aborda',
        description:
          'Sesiunile se adaptează nivelului tău și proiectului pe care vrei să-l îmbunătățești.',
        items: [
          {
            heading: 'Fundamente frontend',
            description:
              'Construim încredere în piesele care fac interfețele moderne mai stabile.',
            bullets: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
          },
          {
            heading: 'Fluxul de lucru al proiectului',
            description:
              'Facem bucla de lucru zilnică mai clară și mai puțin repetitivă.',
            bullets: [
              'Git',
              'npm',
              'Netlify/Vercel',
              'Practici de revizuire a codului',
            ],
          },
          {
            heading: 'Dezvoltare asistată de AI',
            description:
              'Folosești inteligența artificială drept sprijin practic, păstrând controlul asupra codului.',
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
        heading: 'Opțiuni simple',
        description:
          'Începem mic, apoi programăm o sesiune de lucru dacă are sens.',
        durationLabel: 'pentru',
        ctaLabel: 'Începe aici',
        items: [
          {
            name: 'Discuție introductivă',
            slug: 'intro',
            price: '0',
            duration: '15 min',
            description:
              'O discuție scurtă pentru a înțelege obiectivele, proiectul și zona în care o sesiune ar fi cea mai utilă.',
            bullets: [
              'Evaluare inițială gratuită',
              'Clarificăm obiectivele',
              'Alegem tema potrivită',
            ],
          },
          {
            name: 'Sesiune de lucru',
            slug: 'session',
            price: '49',
            duration: '45 min',
            description:
              'O sesiune practică și personalizată, concentrată pe codul, fluxul de lucru sau obiectivul tău de învățare.',
            bullets: [
              'Agendă personalizată',
              'Analiză în direct',
              'Pași concreți',
            ],
          },
        ],
      },
      form: {
        heading: 'Hai să rezolvăm blocajul',
        description:
          'Spune-mi ce construiești sau ce vrei să înveți, iar eu îți propun următorul pas util.',
        name: 'mentorat',
        action: '/ro?contact=true',
        defaultType: 'intro',
        options: [
          { value: 'intro', label: 'Discuție introductivă (15 min)' },
          { value: 'session', label: 'Sesiune de lucru (45 min)' },
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
          'Consultanță practică în securitate, protecția datelor, GRC, web, automatizări și produse digitale pentru fondatori și echipe mici.',
      },
      hero: {
        heading:
          'Clarifică produsul web, practicile de protecție a datelor și sistemele digitale.',
        paragraph: [
          'Ajut fondatorii și echipele mici să analizeze, să planifice și să îmbunătățească site-uri, pagini de prezentare, automatizări, fluxuri sensibile la securitate și protecția datelor, precum și idei de produs asistate de AI.',
          'Abordarea este pragmatică: înțelegem riscul, simplificăm sistemul, îmbunătățim parcursul utilizatorului și clarificăm următorul pas de implementare.',
        ],
      },
      overview: {
        heading:
          'Un sistem digital de mici dimensiuni nu are nevoie de mai mult zgomot. Are nevoie de o hartă clară a riscurilor și de un plan bun de execuție.',
        paragraphs: [
          'Un site poate părea finalizat, în timp ce formularele, analiza traficului, informările de confidențialitate, colectarea solicitărilor, automatizările și transferurile operaționale lucrează împotriva companiei.',
          'Analizez atât componenta tehnică, cât și pe cea de afaceri: ce vede utilizatorul, ce date sunt colectate, cum este publicat sistemul, ce dovezi există și unde presupunerile privind securitatea sau protecția datelor pot fi fragile.',
          'Rezultatul este un plan practic de îmbunătățire, pe care un fondator, o echipă internă sau un partener de implementare îl poate folosi imediat.',
        ],
      },
      offerings: {
        heading: 'Domenii de consultanță',
        description:
          'Potrivită pentru fondatori, companii de servicii și echipe care au nevoie de o execuție digitală clară.',
        items: [
          {
            heading: 'Evaluare de securitate și protecția datelor',
            description:
              'Identificăm punctele slabe din formulare, fluxuri de date, monitorizare, acces, dovezi și practici operaționale.',
            bullets: [
              'Evaluarea riscurilor',
              'Experiențe care respectă viața privată',
              'Fundamente GRC',
              'Plan de acțiune',
            ],
          },
          {
            heading: 'Sisteme web și atragerea clienților',
            description:
              'Îmbunătățim site-uri, pagini de prezentare, formulare, trasee de conversie și configurarea analizei traficului.',
            bullets: [
              'Pagini de prezentare',
              'Structură SEO',
              'Colectarea solicitărilor',
              'Configurarea monitorizării',
            ],
          },
          {
            heading: 'Automatizări și fluxuri asistate de AI',
            description:
              'Proiectăm automatizări compacte și fluxuri asistate de AI care reduc munca manuală.',
            bullets: [
              'Fluxuri de lucru pentru fondatori',
              'Instrumente interne',
              'Idei local-first',
              'Planificare MVP',
            ],
          },
        ],
      },
      packages: {
        heading: 'Opțiuni de consultanță',
        description:
          'Începem cu o scurtă discuție de diagnostic sau cu o evaluare concentrată, dacă ai identificat deja domeniul.',
        durationLabel: 'pentru',
        ctaLabel: 'Începe aici',
        items: [
          {
            name: 'Discuție de diagnostic',
            slug: 'diagnostic',
            price: '0',
            duration: '15 min',
            description:
              'O discuție scurtă pentru a înțelege compania, sistemul și domeniul cu cel mai mare impact.',
            bullets: [
              'Evaluare inițială gratuită',
              'Identificăm riscul principal',
              'Definim scopul',
            ],
          },
          {
            name: 'Evaluare concentrată',
            slug: 'review',
            price: '99',
            duration: '60 min',
            description:
              'O evaluare practică a unui site, flux de produs, proces automatizat sau aspect privind securitatea ori protecția datelor.',
            bullets: [
              'Analiză structurată',
              'Constatări prioritizate',
              'Plan pentru pașii următori',
            ],
          },
        ],
      },
      form: {
        heading: 'Începem cu sistemul',
        description:
          'Spune-mi ce vrei să analizăm și ce rezultat ar face colaborarea utilă.',
        name: 'consultanta',
        action: '/ro?contact=true',
        defaultType: 'diagnostic',
        options: [
          { value: 'diagnostic', label: 'Discuție de diagnostic (15 min)' },
          { value: 'review', label: 'Evaluare concentrată (60 min)' },
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
