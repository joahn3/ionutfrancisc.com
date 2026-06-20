import Intro from 'components/Intro'
import { caseStudies, CaseStudy } from 'data/caseStudies'

interface Props {
  heading?: string
  subheading?: string
  items?: CaseStudy[]
  language?: 'en' | 'ro'
}

export default function CaseStudies({
  heading = 'Selected case studies',
  subheading = 'Context, problem, contribution, and result rather than a screenshot alone.',
  items = caseStudies,
  language = 'en',
}: Props) {
  const labels =
    language === 'ro'
      ? {
          context: 'Context',
          problem: 'Problemă',
          contribution: 'Ce am făcut',
          result: 'Rezultat',
        }
      : {
          context: 'Context',
          problem: 'Problem',
          contribution: 'What I did',
          result: 'Result',
        }

  return (
    <section className="border-b border-gray-200 bg-white section-spacing">
      <div className="container">
        <Intro heading={heading} subheading={subheading} />
        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-3">
          {items.map((item) => (
            <article className="border-t-4 border-emerald-600 pt-5" key={item.title}>
              <p className="text-xs font-bold uppercase text-emerald-800">
                {item.category}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight">
                {item.title}
              </h2>
              {(
                [
                  ['context', item.context],
                  ['problem', item.problem],
                  ['contribution', item.contribution],
                  ['result', item.result],
                ] as const
              ).map(([label, text]) => (
                <div className="mt-5" key={label}>
                  <h3 className="text-sm font-extrabold uppercase text-gray-900">
                    {labels[label]}
                  </h3>
                  <p className="mt-1 text-gray-700">{text}</p>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
