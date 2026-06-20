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
    'Consultanță în securitate cibernetică, protecția datelor, GRC, web, automatizări și sisteme asistate de AI pentru fondatori și echipe mici.',
}

const heroProps = {
  eyebrow:
    'Consultant în securitate, protecția datelor și GRC · Guvernanță · Risc · Sisteme digitale sigure',
  heading:
    'Securitate, protecția datelor și guvernanță pentru sisteme care trebuie să funcționeze în lumea reală.',
  paragraph: [
    'Sunt un profesionist în securitate, protecția datelor și GRC, cu peste 10 ani de experiență în guvernanță, risc, controale, coordonarea incidentelor și livrare în medii reglementate.',
    'Construiesc și produse web și automatizări, ceea ce îmi oferă o perspectivă practică asupra modului în care cerințele devin sisteme, fluxuri de lucru, dovezi și rezultate.',
  ],
  image: '/assets/profile-ionut-francisc.webp',
  imageAlt: `${profile.name} portret`,
  actions: [
    {
      href: '/ro/securitate-confidentialitate',
      label: 'Pentru Recrutori',
    },
    {
      href: '/ro/work',
      label: 'Vezi Proiectele',
      variant: 'secondary' as const,
    },
  ],
}

const aboutContentRo = [
  {
    heading: 'Domenii de interes',
    subheading:
      'Domeniile în care experiența mea se completează firesc: securitate, protecția datelor, web, automatizări, energie și educație.',
    image: '/assets/skills.svg',
    items: [
      'Securitate cibernetică, protecția datelor, GRC, conformitate și risc',
      'Evaluări secure-by-design, pregătire pentru audit și documentarea controalelor',
      'Guvernanța incidentelor, coordonare CSIRT/BISO și urmărirea remedierii',
      'PKI, ciclul de viață al certificatelor, HSM și contexte reglementate',
      'Site-uri rapide, orientate spre conversie și proiectate cu respectarea vieții private',
      'Fluxuri de lucru asistate de AI pentru dezvoltare și operațiuni',
    ],
  },
  {
    heading: 'Ce îmi place să construiesc',
    subheading:
      'Produse și sisteme care pot fi livrate, testate, îmbunătățite și folosite de oameni reali.',
    image: '/assets/hobbies.svg',
    items: [
      'Site-uri curate și rapide pentru companii reale',
      'Pagini de prezentare și sisteme de atragere a clienților',
      'Produse minime viabile care testează rapid idei de afaceri',
      'Aplicații local-first cu modele simple de protecție a datelor',
      'Instrumente educaționale pentru copii și părinți',
      'Automatizări pentru fondatori și echipe mici',
    ],
  },
  {
    heading: 'Instrumente și tehnologii',
    subheading:
      'O combinație practică de gândire orientată spre securitate, implementare web, publicare, automatizare și fluxuri de lucru asistate de AI.',
    image: '/assets/skills.svg',
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
        heading="Context de securitate, protecția datelor și livrare"
        subheading="Câteva repere profesionale: experiență GRC în companii mari, contexte reglementate, implementare practică și certificări verificabile public."
        items={credentialHighlightsRo}
        linkLabel="Vezi profilul Credly"
      />
      <Journey
        heading="De la operator la consultant și fondator"
        subheading="Același fir leagă toate etapele: construiesc sistemul, înțeleg constrângerile, ajut oamenii care îl folosesc și îmbunătățesc ce urmează."
        items={journeyRo}
      />
      <Resume language="ro" />
      <About
        intro={{
          heading: 'Construit din suprapuneri practice.',
          subheading:
            'Munca utilă apare de obicei acolo unde execuția tehnică se întâlnește cu realitatea unei companii.',
        }}
        content={aboutContentRo}
      />
      <Skills
        heading="Cum pot ajuta"
        subheading="O combinație coerentă de consultanță, implementare, mentorat și gândire de produs."
        items={skillsRo}
      />
      <ContactCTA
        heading="Ai un sistem digital care are nevoie de mai multă claritate?"
        paragraph="Pot ajuta cu evaluarea, refactorizarea, reconstrucția sau planificarea următoarei versiuni a unui site, flux de produs, proces automatizat ori sistem sensibil la securitate și protecția datelor."
        linkHref="/ro/contact"
        linkText="Scrie-mi"
        codeSnippet={roCode}
      />
    </Page>
  )
}
