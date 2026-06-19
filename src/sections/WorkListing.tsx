import { ArrowRightIcon } from '@heroicons/react/outline'
import work, { workCategories, WorkCategory } from 'data/work'
import Text from 'components/Text'

const categoryDescriptions: Record<WorkCategory, string> = {
  'Founder / Active Businesses':
    'Operating brands and business efforts where execution, positioning, systems, and delivery all matter.',
  'Products & Platforms':
    'Digital products and product concepts shaped around education, privacy, risk, and practical user workflows.',
  'Business Websites':
    'Websites and landing pages built for service businesses, local SEO, lead generation, and real operational needs.',
  'Creative & Personal Experiments':
    'Smaller experiments that test mechanics, personalization, playful flows, and local-first product ideas.',
}

export default function WorkListing() {
  const groupedWork = workCategories
    .map((category) => ({
      category,
      items: work.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <section className="container section-spacing space-y-16">
      {groupedWork.map(({ category, items }) => (
        <div key={category}>
          <div className="max-w-3xl">
            <Text
              tag="h2"
              className="text-2xl md:text-3xl font-extrabold leading-tight"
              content={category}
            />
            <Text
              tag="p"
              className="mt-2 text-gray-700 md:text-lg"
              content={categoryDescriptions[category]}
            />
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {items.map((item) => (
              <article
                key={item.title}
                className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <a
                  target="_blank"
                  href={item.link}
                  rel="noreferrer noopener"
                  className="block bg-gray-200"
                >
                  <img
                    alt={`${item.title} preview`}
                    className="h-56 w-full object-cover object-top"
                    src={item.image}
                    loading="lazy"
                    width="592"
                    height="288"
                  />
                </a>
                <div className="flex flex-1 flex-col p-6">
                  <a target="_blank" href={item.link} rel="noreferrer noopener">
                    <Text
                      tag="h3"
                      className="text-xl md:text-2xl font-extrabold leading-tight"
                      content={item.title}
                    />
                    <Text
                      tag="p"
                      className={`mt-1 text-sm font-medium underline ${item.color}`}
                      content={item.link.replace(/^https?:\/\//, '')}
                    />
                  </a>
                  <Text
                    tag="p"
                    className="text-base text-gray-700 mt-4"
                    content={item.description}
                  />
                  <ul className="flex flex-wrap items-center gap-2 mt-5">
                    {item.tools.map((tool) => (
                      <li
                        key={tool}
                        className="text-xs tracking-tight font-bold uppercase bg-gray-200 text-gray-800 px-3 py-1 rounded"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <a
                    target="_blank"
                    href={item.link}
                    rel="noreferrer noopener"
                    className={`inline-flex items-center mt-6 ${item.color} font-bold`}
                  >
                    <span className="leading-none">Visit {item.title}</span>
                    <span className="w-4 ml-1">
                      <ArrowRightIcon />
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
