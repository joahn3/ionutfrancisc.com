import ContactForm from 'sections/ContactForm'
import Hero from 'components/Hero'
import Page from 'components/Page'

const seo = {
  title: 'Contact',
  description:
    'Contactează-l pe Ionuț Francisc pentru security, privacy, web, automatizări și produse AI-assisted.',
}

const heroProps = {
  eyebrow: 'București, România · remote-first',
  heading: 'Hai să vorbim despre ce vrei să construiești sau să îmbunătățești.',
  paragraph: [
    'Folosește formularul pentru consultanță, proiecte web, experimente de produs, mentorat sau colaborări practice.',
    'Un prim mesaj util include obiectivul, starea actuală, timeline-ul și orice link pe care ar trebui să-l verific.',
  ],
}

export default function ContactRo() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <div className="grid items-center grid-cols-1 container section-spacing md:gap-16 md:grid-cols-2 lg:gap-32">
        <ContactForm
          action="/ro?contact=true"
          formName="contact-ro"
          labels={{
            name: 'Nume',
            email: 'Email',
            message: 'La ce ar trebui să lucrăm?',
            submit: 'Trimite mesaj',
            honeypot: 'Nu completa acest câmp:',
          }}
        />
        <img
          className="hidden md:block"
          src="/assets/contact.svg"
          alt="Ilustrație formular de contact."
        />
      </div>
    </Page>
  )
}
