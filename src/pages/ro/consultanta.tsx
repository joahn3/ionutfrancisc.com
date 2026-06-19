import Hero from 'components/Hero'
import Page from 'components/Page'
import ServiceForm from 'sections/ServiceForm'
import ServiceOfferings from 'sections/ServiceOfferings'
import ServiceOverview from 'sections/ServiceOverview'
import ServicePackages from 'sections/ServicePackages'
import { servicePagesRo } from 'data/services'

const page = servicePagesRo.consulting

export default function ConsultingRo() {
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
