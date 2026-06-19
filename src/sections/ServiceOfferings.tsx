import { CheckCircleIcon } from '@heroicons/react/outline'
import Intro from 'components/Intro'
import Text from 'components/Text'
import { ServicePage } from 'data/services'

interface Props {
  offerings: ServicePage['offerings']
}

export default function ServiceOfferings({ offerings }: Props) {
  return (
    <section id="offerings" className="bg-white">
      <div className="container section-spacing">
        <Intro heading={offerings.heading} subheading={offerings.description} />
        <div className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-3">
          {offerings.items.map((item) => (
            <div
              key={item.heading}
              className="flex flex-col rounded-lg border border-gray-200 bg-gray-50 p-6"
            >
              <Text
                tag="h3"
                className="font-bold text-xl"
                content={item.heading}
              />
              <Text
                tag="p"
                className="mt-2 text-gray-700"
                content={item.description}
              />
              <div className="mt-8 space-y-2">
                {item.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center">
                    <span className="block w-4 h-4 flex-shrink-0 text-emerald-600">
                      <CheckCircleIcon />
                    </span>
                    <span className="ml-2">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
