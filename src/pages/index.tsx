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
    'Cybersecurity governance with enough technical depth to understand how systems are actually built and operated.',
  paragraph: [
    'I help organizations turn security and privacy requirements into practical controls, defensible evidence, and delivery decisions across regulated environments.',
    'My work focuses on Security Assurance, Risk & Controls, Audit Readiness, Incident Governance, and Security & Privacy by Design, with technical depth in PKI, X.509, HSM, TLS, Cloud/AI Security, and Secure Architecture.',
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
