import Hero from 'components/Hero'
import Page from 'components/Page'
import { credentialHighlightsRo } from 'data/credentials'
import { journeyRo } from 'data/journey'
import { profile } from 'data/profile'
import ContactCTA from 'sections/ContactCTA'
import Credentials from 'sections/Credentials'
import Journey from 'sections/Journey'
import RecruiterOverview from 'sections/RecruiterOverview'
import Resume from 'sections/Resume'

const seo = {
  title: 'Securitate și protecția datelor',
  description:
    'Experiența lui Ionuț Francisc în securitate, protecția datelor, GRC, risc, controale, guvernanța incidentelor, PKI și contexte reglementate.',
}

const heroProps = {
  eyebrow: 'Pentru recrutori și lideri din securitate',
  heading:
    'Experiență în securitate, protecția datelor și guvernanță pentru medii complexe și reglementate.',
  paragraph: [
    'Am peste 10 ani de experiență în gestionarea riscurilor de securitate, evaluări privacy-by-design și secure-by-design, documentarea controalelor, guvernanța incidentelor, PKI și contexte HSM.',
    'Experiența practică în construirea sistemelor și a companiilor mă ajută să conectez cerințele de guvernanță cu ceea ce echipele pot implementa și demonstra în practică.',
  ],
  actions: [
    { href: profile.resume.href, label: 'Deschide CV' },
    {
      href: '/ro/contact',
      label: 'Contact',
      variant: 'secondary' as const,
    },
  ],
}

export default function SecurityPrivacyRo() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <RecruiterOverview language="ro" />
      <Credentials
        heading="Dovezi din spatele profilului"
        subheading="Domenii selectate în care guvernanța, livrarea, controalele și contextul tehnic se completează."
        items={credentialHighlightsRo}
        linkLabel="Vezi profilul Credly"
      />
      <Journey
        heading="O carieră construită în operațiuni, consultanță și antreprenoriat"
        subheading="Firul comun este munca reglementată, responsabilitatea operațională și gândirea practică de sistem."
        items={journeyRo}
      />
      <Resume language="ro" />
      <ContactCTA
        heading="Cauți experiență în securitate, protecția datelor sau GRC, susținută de înțelegerea implementării?"
        paragraph="Folosește formularul pentru un rol, un proiect sau o discuție concentrată. Un mesaj util include rolul, contextul echipei, modelul de lucru și calendarul estimat."
        linkHref="/ro/contact"
        linkText="Începe o conversație"
      />
    </Page>
  )
}
