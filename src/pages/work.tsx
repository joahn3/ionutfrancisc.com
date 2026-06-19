import Hero from 'components/Hero'
import WorkListing from 'sections/WorkListing'
import Page from 'components/Page'

const heroProps = {
  heading: 'Production work, prototypes, experiments, and learning projects.',
  paragraph: [
    'My portfolio is intentionally mixed: some projects are polished, some are rough, and most exist because they helped test an idea, ship a service, or improve a real business workflow.',
    'Here are selected businesses, products, websites, and experiments across security, education, energy, automation, and web development.',
  ],
}

const seo = {
  title: 'Work',
  description:
    'Selected work by Ionuț Francisc across web development, security and privacy concepts, educational tools, business websites, automation, and digital products.',
}

export default function Work() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <WorkListing />
    </Page>
  )
}
