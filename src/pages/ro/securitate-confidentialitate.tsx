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
    'Ionuț Francisc este Senior Cybersecurity GRC & Privacy Consultant, cu experiență în Security Assurance, Risk & Controls, Audit Readiness, Incident Governance, Security & Privacy by Design, PKI și livrare în medii reglementate.',
}

const heroProps = {
  eyebrow: 'Senior Cybersecurity GRC & Privacy Consultant',
  heading:
    'Guvernanță de securitate susținută de assurance, dovezi și profunzime tehnică.',
  paragraph: [
    'Am peste 10 ani de experiență în Security Assurance, Risk & Controls, Audit Readiness, Incident Governance și Security & Privacy by Design în medii complexe și reglementate.',
    'Profunzimea tehnică în PKI, X.509, HSM, TLS, Cloud/AI Security și Secure Architecture mă ajută să conectez cerințele de guvernanță cu sisteme pe care echipele le pot implementa, opera, demonstra și îmbunătăți.',
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
        subheading="Experiență și certificări selectate din guvernanță, controale, livrare reglementată și operațiuni tehnice."
        items={credentialHighlightsRo}
        linkLabel="Vezi profilul Credly"
      />
      <Journey
        heading="O carieră în operațiuni, consultanță și antreprenoriat"
        subheading="Firul comun este responsabilitatea: înțeleg sistemul, formulez explicit riscul, aliniez părțile implicate și urmăresc acțiunile până la rezultat."
        items={journeyRo}
      />
      <Resume language="ro" />
      <ContactCTA
        heading="Ai nevoie de experiență în securitate, protecția datelor sau GRC, conectată la livrare?"
        paragraph="Pentru un rol sau un mandat de consultanță, descrie contextul deciziei, echipa, modelul de lucru, rezultatele așteptate și calendarul. Voi răspunde cu o evaluare clară a compatibilității și a pașilor următori."
        linkHref="/ro/contact"
        linkText="Discută mandatul"
      />
    </Page>
  )
}
