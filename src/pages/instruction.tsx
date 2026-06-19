import Hero from 'components/Hero'
import Page from 'components/Page'
import ServiceForm from 'sections/ServiceForm'
import ServiceOfferings from 'sections/ServiceOfferings'
import ServiceOverview from 'sections/ServiceOverview'
import ServicePackages from 'sections/ServicePackages'
import { servicePages } from 'data/services'

const page = servicePages.instruction

export default function Instruction() {
  return (
    <Page {...page.seo}>
      <Hero {...page.hero} />
      <ServiceOverview overview={page.overview} />
      <ServiceOfferings offerings={page.offerings} />
      <ServicePackages formName={page.form.name} packages={page.packages} />
      <ServiceForm form={page.form} />
    </Page>
  )
}
