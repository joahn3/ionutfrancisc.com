import Hero from 'components/Hero'
import Page from 'components/Page'
import PrivacyNotice from 'sections/PrivacyNotice'

const seo = {
  title: 'Privacy',
  description:
    'Privacy notice for the Ionuț Francisc website, contact forms, analytics consent, and external services.',
}

export default function Privacy() {
  return (
    <Page {...seo}>
      <Hero
        eyebrow="Privacy by default"
        heading="Clear information about data and analytics."
        paragraph="This site collects only the information needed to respond to requests. Analytics remains optional."
      />
      <PrivacyNotice />
    </Page>
  )
}
