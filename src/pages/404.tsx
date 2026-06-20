import Page from 'components/Page'
import Hero from 'components/Hero'
import CodeblockCTA from 'sections/ContactCTA'

const seo = {
  title: 'Page Not Found',
  description: 'No page found. Please try again.',
}

const heroProps = {
  heading: 'This page is not here.',
  paragraph:
    "The link may be old, renamed, or still waiting for its next iteration. Let's get you back to something useful.",
}

export default function Custom404() {
  return (
    <Page {...seo} noIndex>
      <Hero {...heroProps} />
      <CodeblockCTA />
    </Page>
  )
}
