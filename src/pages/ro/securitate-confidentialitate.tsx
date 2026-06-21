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
    'Experiență în securitate, protecția datelor și GRC care conectează guvernanța cu livrarea.',
  paragraph: [
    'Am peste 10 ani de experiență în riscuri de securitate, evaluări privacy-by-design și secure-by-design, asigurarea controalelor, guvernanța incidentelor, PKI și livrare asociată HSM în medii complexe.',
    'Transform așteptările de guvernanță în controale proporționale, dovezi solide, responsabilități clare și acțiuni pe care echipele tehnice le pot implementa.',
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
