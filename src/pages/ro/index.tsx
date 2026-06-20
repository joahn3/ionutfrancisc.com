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

const seo = {
  title: 'Ionuț Francisc',
  description:
    'Consultanță security, privacy, GRC, web, automatizări și sisteme AI-assisted pentru fondatori și echipe mici.',
}

const heroProps = {
  eyebrow:
    'Security & Privacy (GRC) Consultant · Founder · Web & AI-assisted systems builder',
  heading:
    'Construiesc și securizez sisteme digitale utile pentru afaceri reale.',
  paragraph: [
    'Ajut fondatorii și echipele să facă website-uri, controale security/privacy, automatizări și workflow-uri AI-assisted mai clare, mai sigure și mai utile.',
    'Lucrez la intersecția dintre GRC, privacy-by-design, web development, SEO, produse educaționale, energie și sisteme practice pentru echipe mici.',
  ],
  image: '/assets/profile-ionut-francisc.jpg',
  imageAlt: `${profile.name} portret`,
  actions: [
    { href: '/ro/work', label: 'Vezi Proiectele' },
    {
      href: '/ro/consultanta',
      label: 'Consultanță',
      variant: 'secondary' as const,
    },
  ],
}

const aboutContentRo = [
  {
    heading: 'Focus',
    subheading:
      'Zonele unde experiența mea se suprapune natural: security, privacy, web, automatizări, energie și educație.',
    image: '/assets/skills.svg',
    items: [
      'Cybersecurity, privacy, GRC, compliance și risc',
      'Secure-by-design reviews, audit readiness și control evidence',
      'Incident governance, CSIRT/BISO coordination și remediation follow-up',
      'PKI, certificate lifecycle, HSM și contexte reglementate',
      'Website-uri rapide, privacy-aware și orientate spre conversie',
      'Workflow-uri AI-assisted pentru dezvoltare și operațiuni',
    ],
  },
  {
    heading: 'Ce Îmi Place Să Construiesc',
    subheading:
      'Produse și sisteme care pot fi livrate, testate, îmbunătățite și folosite de oameni reali.',
    image: '/assets/hobbies.svg',
    items: [
      'Website-uri curate și rapide pentru business-uri reale',
      'Landing pages și sisteme de lead generation',
      'MVP-uri care testează rapid idei de business',
      'Aplicații local-first cu modele simple de privacy',
      'Instrumente educaționale pentru copii și părinți',
      'Automatizări pentru fondatori și echipe mici',
    ],
  },
  {
    heading: 'Stack',
    subheading:
      'Un mix practic de security thinking, implementare web, deployment, automatizare și workflow-uri AI-assisted.',
    image: '/assets/skills.svg',
    items: profile.stack,
  },
]

const roCode = `
const proiect = {
  obiectiv: 'lead-uri utile',
  areNevoieDe: [
    'security',
    'privacy',
    'web',
    'automatizare',
  ],
}

const pasulUrmator = review(proiect)
  .then(plan)
  .then(build)
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
        heading="Context de security, privacy și livrare"
        subheading="Câteva semnale din spatele muncii: experiență enterprise GRC, contexte reglementate, implementare hands-on și badge-uri publice."
        items={credentialHighlightsRo}
        linkLabel="Vezi profilul Credly"
      />
      <Journey
        heading="De la operator la consultant și fondator"
        subheading="Același fir leagă toate etapele: construiesc sistemul, înțeleg constrângerile, ajut oamenii care îl folosesc și îmbunătățesc ce urmează."
        items={journeyRo}
      />
      <About
        intro={{
          heading: 'Construit din suprapuneri practice.',
          subheading:
            'Munca utilă apare de obicei acolo unde execuția tehnică se întâlnește cu realitatea business-ului.',
        }}
        content={aboutContentRo}
      />
      <Skills
        heading="Cum Pot Ajuta"
        subheading="Un mix focusat de consultanță, implementare, mentorat și product thinking."
        items={skillsRo}
      />
      <ContactCTA
        heading="Ai un sistem digital care are nevoie de mai multă claritate?"
        paragraph="Pot ajuta cu review, refactorizare, reconstrucție sau planificarea următoarei versiuni pentru un website, flux de produs, automatizare sau proces sensibil la security/privacy."
        linkHref="/ro/contact"
        linkText="Scrie-mi"
        codeSnippet={roCode}
      />
    </Page>
  )
}
