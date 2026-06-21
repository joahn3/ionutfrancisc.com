import Hero from 'components/Hero'
import Page from 'components/Page'
import WorkListing from 'sections/WorkListing'
import CaseStudies from 'sections/CaseStudies'
import { caseStudiesRo } from 'data/caseStudies'

const heroProps = {
  heading: 'Afaceri, consultanță, produse digitale și platforme selectate.',
  paragraph: [
    'Portofoliul reflectă diversitatea activității mele: companii proprii, colaborări la lansare, sisteme operaționale, site-uri comerciale și experimente de produs.',
    'Fiecare proiect selectat evidențiază o altă parte a ciclului de livrare, de la poziționare și decizii de risc la implementare, măsurare și operațiuni continue.',
  ],
}

const seo = {
  title: 'Proiecte',
  description:
    'Afaceri, proiecte de consultanță, produse digitale, site-uri, automatizări și colaborări la lansare selectate de Ionuț Francisc.',
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
