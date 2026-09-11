import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import About from 'sections/About'
import ContactCTA from 'sections/ContactCTA'
import Credentials from 'sections/Credentials'
import Hero from 'components/Hero'
import Page from 'components/Page'
import Skills from 'sections/Skills'
import { credentialHighlightsRo } from 'data/credentials'
import { profile } from 'data/profile'
import { skillsRo } from 'data/skills'
import { journeyRo } from 'data/journey'
import Journey from 'sections/Journey'
import Resume from 'sections/Resume'

const seo = {
  title: 'Ionuț Francisc',
  description:
    'Senior Cybersecurity GRC & Privacy Consultant cu peste 10 ani de experiență în security assurance, risc și controale, pregătire pentru audit, guvernanța incidentelor și Security & Privacy by Design.',
}

const heroProps = {
  eyebrow: 'Senior Cybersecurity GRC & Privacy Consultant',
  heading:
    'Conectez guvernanța de securitate cu sistemele pe care echipele trebuie să le construiască, opereze și demonstreze.',
  paragraph: [
    'Ajut organizațiile să transforme cerințele de securitate și protecția datelor în controale practice, dovezi solide și decizii de livrare în medii reglementate.',
    'Activitatea mea acoperă Security Assurance, Risk & Controls, Audit Readiness, Incident Governance și Security & Privacy by Design, cu profunzime tehnică în PKI, X.509, HSM, TLS, Cloud/AI Security și Secure Architecture.',
  ],
  image: '/assets/profile-ionut-francisc.webp',
  imageAlt: `${profile.name} portret`,
  actions: [
    {
      href: '/ro/securitate-confidentialitate',
      label: 'Vezi Profilul de Securitate',
    },
    {
      href: '/ro/contact',
      label: 'Discută o Colaborare',
      variant: 'secondary' as const,
    },
  ],
}

const aboutContentRo = [
  {
    heading: 'Domenii de consultanță',
    subheading:
      'Mandate în care sunt esențiale controalele clare, judecata profesională și urmărirea consecventă a acțiunilor.',
    items: [
      'Security Assurance',
      'Risk & Controls',
      'Audit Readiness',
      'Incident Governance',
      'Security & Privacy by Design',
      'PKI, ciclul de viață al certificatelor și HSM',
    ],
  },
  {
    heading: 'Sisteme pe care le livrez',
    subheading:
      'Sisteme digitale utile, măsurabile, ușor de întreținut și pregătite pentru operațiuni reale.',
    items: [
      'Site-uri de încredere și platforme de servicii digitale',
      'Parcursuri de conversie și sisteme de atragere a clienților',
      'MVP-uri care validează ipoteze comerciale',
      'Aplicații local-first care respectă viața privată',
      'Automatizări operaționale și instrumente interne',
      'Produse educaționale pentru familii și școli',
    ],
  },
  {
    heading: 'Capabilități și tehnologii',
    subheading:
      'Disciplinele și tehnologiile pe care le folosesc pentru a trece de la evaluare la implementare.',
    items: profile.stack,
  },
]

const roCode = `
const proiect = {
  obiectiv: 'solicitări relevante',
  areNevoieDe: [
    'securitate',
    'protecția datelor',
    'web',
    'automatizare',
  ],
}

const pasulUrmator = evalueaza(proiect)
  .then(planifica)
  .then(construieste)
`

export default function HomeRo() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.has('contact')) {
      toast.success('Mulțumesc, mesajul a fost trimis!')
    }
  }, [])

  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <Credentials
        heading="Credibilitate construită în medii reglementate"
        subheading="Experiență GRC în organizații complexe, responsabilitate operațională, profunzime tehnică și certificări verificabile public."
        items={credentialHighlightsRo}
        linkLabel="Vezi profilul Credly"
      />
      <About
        intro={{
          heading: 'Acolo unde strategia întâlnește livrarea.',
          subheading:
            'Un profil interdisciplinar pentru proiecte care trebuie să răspundă simultan cerințelor de guvernanță, realității tehnice și obiectivelor comerciale.',
        }}
        content={aboutContentRo}
      />
      <Skills
        heading="Cum pot ajuta"
        subheading="Consultanță și implementare pentru organizații care au nevoie de decizii clare, sisteme solide și progres măsurabil."
        items={skillsRo}
      />
      <Journey
        heading="Experiență operațională în spatele consultanței"
        subheading="Cariera mea acoperă infrastructură, operațiuni reglementate, consultanță pentru companii și livrare antreprenorială, astfel încât recomandările rămân conectate la execuție."
        items={journeyRo}
      />
      <Resume language="ro" />
      <ContactCTA
        heading="Ai un mandat care trebuie transformat într-un plan executabil?"
        paragraph="Pot evalua riscurile, clarifica prioritățile și structura următoarea etapă pentru un sistem digital, un proces sensibil la securitate sau un program de îmbunătățire a controalelor."
        linkHref="/ro/contact"
        linkText="Discută mandatul"
        codeSnippet={roCode}
      />
    </Page>
  )
}
