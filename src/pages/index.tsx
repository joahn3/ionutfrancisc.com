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
    'I turn security, privacy, and governance requirements into practical delivery.',
  paragraph: [
    'I help organizations clarify risk, strengthen controls, prepare defensible evidence, and move complex work forward in regulated environments.',
    'More than 10 years in IBM Consulting, combined with founder and technical delivery experience, allow me to connect governance expectations with systems that teams can operate, improve, and demonstrate.',
  ],
  image: '/assets/profile-ionut-francisc.webp',
  imageAlt: `${profile.name} portrait`,
  actions: [
    { href: '/security-privacy', label: 'View Security Profile' },
    {
      href: '/contact',
      label: 'Discuss an Engagement',
      variant: 'secondary' as const,
    },
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
        heading="Credibility grounded in regulated delivery"
        subheading="Enterprise GRC experience, operational accountability, technical depth, and publicly verifiable credentials."
        items={credentialHighlights}
        linkLabel="View Credly profile"
      />
      <About />
      <Skills />
      <Journey
        heading="Operational depth behind the advisory work"
        subheading="My career spans infrastructure, regulated operations, enterprise consulting, and founder-led delivery, so recommendations remain connected to execution."
        items={journey}
      />
      <Resume />
      <ContactCTA />
    </Page>
  )
}
