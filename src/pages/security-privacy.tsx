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
    'Ionuț Francisc is a Senior Cybersecurity GRC & Privacy Consultant focused on Security Assurance, Risk & Controls, Audit Readiness, Incident Governance, Security & Privacy by Design, PKI, and regulated delivery.',
}

const heroProps = {
  eyebrow: profile.headline,
  heading:
    'Cybersecurity governance grounded in assurance, evidence, and technical delivery.',
  paragraph: [
    'More than 10 years across Security Assurance, Risk & Controls, Audit Readiness, Incident Governance, and Security & Privacy by Design in complex and regulated environments.',
    'Technical depth in PKI, X.509, HSM, TLS, Cloud/AI Security, and Secure Architecture helps me connect governance expectations with systems teams can implement, operate, evidence, and improve.',
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
