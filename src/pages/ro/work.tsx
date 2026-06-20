import Hero from 'components/Hero'
import Page from 'components/Page'
import WorkListing from 'sections/WorkListing'
import CaseStudies from 'sections/CaseStudies'
import { caseStudiesRo } from 'data/caseStudies'

const heroProps = {
  heading:
    'Proiecte de producție, prototipuri, experimente și produse în lucru.',
  paragraph: [
    'Portofoliul este în mod intenționat divers: unele proiecte sunt mature, altele sunt exploratorii, iar cele mai multe au fost create pentru a testa o idee, a livra un serviciu sau a îmbunătăți un flux de lucru real.',
    'Mai jos sunt proiecte selectate din securitate, educație, energie, automatizări, dezvoltare web și produse digitale.',
  ],
}

const seo = {
  title: 'Proiecte',
  description:
    'Proiecte selectate de Ionuț Francisc din dezvoltare web, securitate, protecția datelor, educație, site-uri pentru companii, automatizări și produse digitale.',
}

export default function WorkRo() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <CaseStudies
        heading="Studii de caz selectate"
        subheading="Context, problemă, contribuție și rezultat, nu doar o captură de ecran."
        items={caseStudiesRo}
        language="ro"
      />
      <WorkListing language="ro" />
    </Page>
  )
}
