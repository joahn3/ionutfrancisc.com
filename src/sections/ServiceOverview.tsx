import Text from 'components/Text'
import { ServicePage } from 'data/services'

interface Props {
  overview: ServicePage['overview']
}

export default function ServiceOverview({ overview }: Props) {
  return (
    <section id="overview" className="container section-spacing lg:text-lg">
      <Text
        tag="h2"
        className="font-extrabold text-3xl leading-tight md:text-4xl"
        content={overview.heading}
      />
      <div className="mt-8 max-w-4xl space-y-6 text-gray-700">
        {overview.paragraphs.map((paragraph) => (
          <Text key={paragraph} tag="p" content={paragraph} />
        ))}
      </div>
    </section>
  )
}
