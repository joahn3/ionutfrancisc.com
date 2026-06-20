import ContactForm from 'sections/ContactForm'
import Hero from 'components/Hero'
import Page from 'components/Page'
import ContactChannels from 'sections/ContactChannels'
import Image from 'next/image'

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
      <ContactChannels language="ro" />
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
            privacy:
              'Sunt de acord ca datele mele să fie folosite pentru a primi un răspuns.',
            privacyLink: 'Notă de confidențialitate',
          }}
          privacyPath="/ro/confidentialitate"
        />
        <Image
          className="hidden md:block"
          src="/assets/contact.svg"
          alt="Ilustrație formular de contact."
          height={512}
          width={512}
        />
      </div>
    </Page>
  )
}
