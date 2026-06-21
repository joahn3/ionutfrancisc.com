import ContactForm from 'sections/ContactForm'
import Hero from 'components/Hero'
import Page from 'components/Page'
import ContactChannels from 'sections/ContactChannels'
import Image from 'next/image'

const seo = {
  title: 'Contact',
  description:
    'Contactează-l pe Ionuț Francisc pentru un mandat de securitate, protecția datelor, GRC, sisteme digitale sau consultanță.',
}

const heroProps = {
  eyebrow: 'București, România · colaborare preponderent la distanță',
  heading: 'Hai să clarificăm mandatul și rezultatul care contează.',
  paragraph: [
    'Folosește formularul pentru un mandat de consultanță, un rol în securitate sau protecția datelor, un proiect de sisteme digitale ori o colaborare tehnică bine definită.',
    'Un mesaj inițial valoros include decizia sau rezultatul necesar, constrângerile actuale, părțile implicate, calendarul estimat și orice material pe care ar trebui să-l analizez.',
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
            message: 'Ce mandat sau rezultat trebuie să abordăm?',
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
