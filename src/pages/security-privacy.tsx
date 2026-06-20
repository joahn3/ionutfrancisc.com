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
    'Security, privacy, GRC, risk, controls, incident governance, PKI, and regulated delivery experience from Ionuț Francisc.',
}

const heroProps = {
  eyebrow: 'For recruiters and security leaders',
  heading:
    'Security, privacy, and governance experience for complex, regulated environments.',
  paragraph: [
    'I bring 10+ years across security risk, privacy-by-design, secure-by-design reviews, control evidence, incident governance, PKI, and HSM contexts.',
    'My hands-on systems and founder experience helps me connect governance requirements with what delivery teams can actually implement and evidence.',
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
        subheading="Selected areas where governance, delivery, controls, and technical context meet."
        items={credentialHighlights}
        linkLabel="View Credly profile"
      />
      <Journey
        heading="A career built across operations, consulting, and ownership"
        subheading="The common thread is regulated work, operational accountability, and practical system thinking."
        items={journey}
      />
      <Resume />
      <ContactCTA
        heading="Looking for security, privacy, or GRC experience with implementation context?"
        paragraph="Use the contact form for a role, project, or focused conversation. A useful message includes the role, team context, work model, and expected timeline."
        linkHref="/contact"
        linkText="Start a conversation"
      />
    </Page>
  )
}
