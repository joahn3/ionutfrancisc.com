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

const seo = {
  title: 'Ionuț Francisc',
  description: profile.description,
}

const heroProps = {
  eyebrow: profile.headline,
  heading: 'I build secure, useful digital products for real businesses.',
  paragraph: [
    profile.description,
    'My work spans practical security and privacy reviews, conversion-focused websites, educational tools, founder workflows, automation systems, and AI-assisted product experiments.',
  ],
  image: '/assets/profile-ionut-francisc.jpg',
  imageAlt: `${profile.name} portrait`,
  actions: [
    { href: '/work', label: 'View Work' },
    { href: '/consulting', label: 'Consulting', variant: 'secondary' as const },
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
      <About />
      <Skills />
      <ContactCTA />
    </Page>
  )
}
