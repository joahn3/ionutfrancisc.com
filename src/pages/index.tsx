import Hero from 'components/Hero'
import Skills from 'sections/Skills'
import ContactCTA from 'sections/ContactCTA'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import Page from 'components/Page'
import About from 'sections/About'
import { profile } from 'data/profile'
import Credentials from 'sections/Credentials'
import { credentialHighlights } from 'data/credentials'
import { journey } from 'data/journey'
import Journey from 'sections/Journey'
import Resume from 'sections/Resume'

const seo = {
  title: 'Ionuț Francisc',
  description: profile.description,
}

const heroProps = {
  eyebrow: profile.headline,
  heading:
    'Security, privacy, and governance for systems that have to work in the real world.',
  paragraph: [
    'I am a security, privacy, and GRC professional with 10+ years across governance, risk, controls, incident coordination, and regulated delivery.',
    'I also build web products and automations, giving me a practical view of how requirements become systems, workflows, evidence, and outcomes.',
  ],
  image: '/assets/profile-ionut-francisc.webp',
  imageAlt: `${profile.name} portrait`,
  actions: [
    { href: '/security-privacy', label: 'For Recruiters' },
    { href: '/work', label: 'View Work', variant: 'secondary' as const },
  ],
}

export default function Home() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.has('contact')) {
      toast.success('Thanks for reaching out!')
    }
  }, [])
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <Credentials
        heading="Security, privacy, and delivery context"
        subheading="A few signals behind the work: enterprise GRC experience, regulated delivery, hands-on implementation, and public credential trails."
        items={credentialHighlights}
        linkLabel="View Credly profile"
      />
      <Journey
        heading="From operator to consultant and founder"
        subheading="The same thread runs through the work: build the system, understand the constraints, support the people using it, and improve what happens next."
        items={journey}
      />
      <Resume />
      <About />
      <Skills />
      <ContactCTA />
    </Page>
  )
}
