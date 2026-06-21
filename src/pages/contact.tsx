import Hero from 'components/Hero'
import ContactForm from 'sections/ContactForm'
import Page from 'components/Page'
import { profile } from 'data/profile'
import ContactChannels from 'sections/ContactChannels'
import Image from 'next/image'

const seo = {
  title: 'Contact',
  description:
    'Contact Ionuț Francisc to discuss a security, privacy, GRC, digital systems, or advisory engagement.',
}

const heroProps = {
  eyebrow: profile.location,
  heading: "Let's clarify the mandate and the outcome that matters.",
  paragraph: [
    'Use the form for an advisory mandate, a security or privacy role, a digital systems engagement, or a focused technical collaboration.',
    'A strong first message includes the decision or outcome required, current constraints, key stakeholders, expected timeline, and any material I should review.',
  ],
}

export default function Contact() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <ContactChannels />
      <div className="grid items-center grid-cols-1 container section-spacing md:gap-16 md:grid-cols-2 lg:gap-32">
        <ContactForm />
        <Image
          className="hidden md:block"
          src="/assets/contact.svg"
          alt="Contact form illustration."
          height={512}
          width={512}
        />
      </div>
    </Page>
  )
}
