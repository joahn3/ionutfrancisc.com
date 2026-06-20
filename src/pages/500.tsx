import Hero from 'components/Hero'
import CodeblockCTA from 'sections/ContactCTA'
import Page from 'components/Page'

const seo = {
  title: 'Something went wrong',
  description: 'Something went wrong on the server. Please try again.',
}

const heroProps = {
  heading: 'Something went wrong.',
  paragraph:
    'The server encountered a problem. Please try again or visit another page while I resolve the issue.',
}

export default function Custom500() {
  return (
    <Page {...seo} noIndex>
      <Hero {...heroProps} />
      <CodeblockCTA />
    </Page>
  )
}
