import Hero from 'components/Hero'
import Page from 'components/Page'
import WorkListing from 'sections/WorkListing'
import CaseStudies from 'sections/CaseStudies'
import { caseStudiesRo } from 'data/caseStudies'

const heroProps = {
  heading:
    'Proiecte de producție, prototipuri, experimente și produse în lucru.',
  paragraph: [
    'Portofoliul este intenționat mixt: unele proiecte sunt mature, altele sunt experimente, iar cele mai multe există pentru că au testat o idee, au livrat un serviciu sau au îmbunătățit un workflow real.',
    'Mai jos sunt proiecte selectate din security, educație, energie, automatizări, web development și produse digitale.',
  ],
}

const seo = {
  title: 'Proiecte',
  description:
    'Proiecte selectate de Ionuț Francisc: web development, security și privacy, educație, business websites, automatizări și produse digitale.',
}

export default function WorkRo() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <CaseStudies
        heading="Studii de caz selectate"
        subheading="Context, problemă, contribuție și rezultat, nu doar un screenshot."
        items={caseStudiesRo}
        language="ro"
      />
      <WorkListing language="ro" />
    </Page>
  )
}
