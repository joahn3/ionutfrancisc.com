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
  title: 'Security & Privacy',
  description:
    'Experiența lui Ionuț Francisc în security, privacy, GRC, risc, controale, incident governance, PKI și contexte reglementate.',
}

const heroProps = {
  eyebrow: 'Pentru recrutori și security leaders',
  heading:
    'Experiență de security, privacy și governance pentru medii complexe și reglementate.',
  paragraph: [
    'Am peste 10 ani de experiență în security risk, privacy-by-design, secure-by-design reviews, control evidence, incident governance, PKI și contexte HSM.',
    'Experiența hands-on cu sisteme și business-uri mă ajută să conectez cerințele de governance cu ceea ce echipele pot implementa și demonstra în practică.',
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
        subheading="Zone selectate unde governance, livrarea, controalele și contextul tehnic se întâlnesc."
        items={credentialHighlightsRo}
        linkLabel="Vezi profilul Credly"
      />
      <Journey
        heading="O carieră construită în operațiuni, consultanță și ownership"
        subheading="Firul comun este munca reglementată, responsabilitatea operațională și gândirea practică de sistem."
        items={journeyRo}
      />
      <Resume language="ro" />
      <ContactCTA
        heading="Cauți experiență în security, privacy sau GRC cu înțelegere de implementare?"
        paragraph="Folosește formularul pentru un rol, un proiect sau o discuție focusată. Un mesaj util include rolul, contextul echipei, modelul de lucru și timeline-ul."
        linkHref="/ro/contact"
        linkText="Începe o conversație"
      />
    </Page>
  )
}
