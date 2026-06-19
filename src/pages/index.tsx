import Hero from 'components/Hero'
import Skills from 'sections/Skills'
import ContactCTA from 'sections/ContactCTA'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import Page from 'components/Page'
import About from 'sections/About'
import { profile } from 'data/profile'

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
      <About />
      <Skills />
      <ContactCTA />
    </Page>
  )
}
