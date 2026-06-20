import Intro from 'components/Intro'
import Text from 'components/Text'
import { JourneyItem } from 'data/journey'

interface Props {
  heading: string
  subheading: string
  items: JourneyItem[]
}

export default function Journey({ heading, subheading, items }: Props) {
  return (
    <section className="container section-spacing">
      <Intro heading={heading} subheading={subheading} />
      <ol className="mt-12 grid gap-8 lg:grid-cols-3">
        {items.map((item, index) => (
          <li className="border-l-4 border-emerald-500 pl-5" key={item.heading}>
            <p className="text-xs font-black uppercase text-emerald-700">
              {String(index + 1).padStart(2, '0')} · {item.label}
            </p>
            <Text
              tag="h3"
              className="mt-2 text-xl font-extrabold leading-tight"
              content={item.heading}
            />
            <Text
              tag="p"
              className="mt-3 text-gray-700"
              content={item.description}
            />
          </li>
        ))}
      </ol>
    </section>
  )
}
