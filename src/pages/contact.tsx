import Hero from 'components/Hero'
import ContactForm from 'sections/ContactForm'
import Page from 'components/Page'
import { profile } from 'data/profile'

const seo = {
  title: 'Contact',
  description:
    'Contact Ionuț Francisc for security, privacy, web, automation, and AI-assisted product work.',
}

const heroProps = {
  eyebrow: profile.location,
  heading: "Let's talk about what you want to build or improve.",
  paragraph: [
    'Use the form below for consulting, web work, product experiments, mentoring, or practical collaboration.',
    'A useful first message includes the goal, current state, timeline, and any link I should review.',
  ],
}

export default function Contact() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <div className="grid items-center grid-cols-1 container section-spacing md:gap-16 md:grid-cols-2 lg:gap-32">
        <ContactForm />
        <img
          className="hidden md:block"
          src="/assets/contact.svg"
          alt="Contact form illustration."
        />
      </div>
    </Page>
  )
}
