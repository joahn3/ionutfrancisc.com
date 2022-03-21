import Hero from 'components/Hero'
import Skills from 'sections/Skills'
import ContactCTA from 'sections/ContactCTA'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import Page from 'components/Page'
import About from 'sections/About'

const seo = {
  title: 'Home',
  description: 'Ionut Francisc is a Ecommerce consultant and web developer from Bucharest, Romania. 🇷🇴 🇪🇺',
}

const heroProps = {
  heading: 'I build websites with modern tools and technologies.',
  paragraph:
    "Greetings! I’m Ionuț.<br/><br/>I am a frontend-focused developer from Bucharest, Romania 🇷🇴🇪🇺. <br/>I graduated from Romanian-American University in 2016 and I've been making websites ever since. I am a firm believer that simple, pragmatic, and readable code is far superior to complex abstractions.",
  image: '/assets/logo-ionutfrancisc.com.jpeg',
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
