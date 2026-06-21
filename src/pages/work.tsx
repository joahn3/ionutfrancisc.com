import Hero from 'components/Hero'
import WorkListing from 'sections/WorkListing'
import Page from 'components/Page'
import CaseStudies from 'sections/CaseStudies'

const heroProps = {
  heading: 'Selected ventures, advisory work, digital products, and platforms.',
  paragraph: [
    'This portfolio reflects the range of my work: founder-led businesses, launch collaborations, operational systems, commercial websites, and product experiments.',
    'Each selected project demonstrates a different part of the delivery cycle—from positioning and risk decisions to implementation, measurement, and ongoing operations.',
  ],
}

const seo = {
  title: 'Work',
  description:
    'Selected ventures, advisory work, digital products, websites, automation systems, and launch collaborations by Ionuț Francisc.',
}

export default function Work() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <CaseStudies />
      <WorkListing />
    </Page>
  )
}
