import Hero from 'components/Hero'
import Page from 'components/Page'
import { credentialHighlights } from 'data/credentials'
import { journey } from 'data/journey'
import { profile } from 'data/profile'
import ContactCTA from 'sections/ContactCTA'
import Credentials from 'sections/Credentials'
import Journey from 'sections/Journey'
import RecruiterOverview from 'sections/RecruiterOverview'
import Resume from 'sections/Resume'

const seo = {
  title: 'Security & Privacy',
  description:
    'An overview of Ionuț Francisc’s experience in security, privacy, GRC, risk, controls, incident governance, PKI, and regulated delivery.',
}

const heroProps = {
  eyebrow: 'For recruiters and security leaders',
  heading:
    'Security, privacy, and GRC experience that connects governance with delivery.',
  paragraph: [
    'More than 10 years across security risk, privacy-by-design, secure-by-design reviews, control assurance, incident governance, PKI, and HSM-related delivery in complex environments.',
    'I translate governance expectations into proportionate controls, defensible evidence, clear ownership, and actions that technical teams can implement.',
  ],
  actions: [
    { href: profile.resume.href, label: 'Open CV' },
    { href: '/contact', label: 'Contact', variant: 'secondary' as const },
  ],
}

export default function SecurityPrivacy() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <RecruiterOverview />
      <Credentials
        heading="Evidence behind the profile"
        subheading="Selected experience and credentials across governance, controls, regulated delivery, and technical operations."
        items={credentialHighlights}
        linkLabel="View Credly profile"
      />
      <Journey
        heading="A career spanning operations, consulting, and ownership"
        subheading="The common thread is accountability: understand the system, make the risk explicit, align the people involved, and follow through."
        items={journey}
      />
      <Resume />
      <ContactCTA
        heading="Need security, privacy, or GRC expertise grounded in delivery?"
        paragraph="For a role or advisory mandate, share the decision context, team, work model, expected outcomes, and timeline. I will respond with a clear view of fit and next steps."
        linkHref="/contact"
        linkText="Discuss the mandate"
      />
    </Page>
  )
}
