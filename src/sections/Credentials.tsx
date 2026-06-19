import { ArrowRightIcon } from '@heroicons/react/outline'
import Intro from 'components/Intro'
import Text from 'components/Text'
import { CredentialHighlight } from 'data/credentials'

interface Props {
  heading: string
  subheading: string
  items: CredentialHighlight[]
  linkLabel: string
}

export default function Credentials(props: Props) {
  return (
    <section className="bg-gray-50">
      <div className="container section-spacing">
        <Intro heading={props.heading} subheading={props.subheading} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {props.items.map((item) => (
            <article
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              key={item.heading}
            >
              <Text
                tag="h3"
                className="text-xl font-extrabold leading-tight"
                content={item.heading}
              />
              <Text
                tag="p"
                className="mt-3 text-gray-700"
                content={item.description}
              />
            </article>
          ))}
        </div>
        <a
          href="https://www.credly.com/users/ionut-iulian-francisc"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-8 inline-flex items-center font-bold text-emerald-700"
        >
          {props.linkLabel}
          <span className="ml-1 w-4">
            <ArrowRightIcon />
          </span>
        </a>
      </div>
    </section>
  )
}
