import { ArrowRightIcon } from '@heroicons/react/outline'
import work, { workCategories, WorkCategory } from 'data/work'
import Text from 'components/Text'
import Image from 'next/image'

const categoryDescriptions: Record<WorkCategory, string> = {
  'Founder / Active Businesses':
    'Businesses I founded and operate, with direct accountability for positioning, systems, delivery, and commercial execution.',
  'Launch Collaborations':
    'Strategic-partner ventures where I contributed to launch and digital delivery without claiming ownership.',
  'Products & Platforms':
    'Digital products and platform concepts designed around education, privacy, risk, and practical user workflows.',
  'Business Websites':
    'Commercial websites and conversion journeys built around discoverability, qualified demand, and operational needs.',
  'Creative & Personal Experiments':
    'Focused R&D experiments used to test interaction models, personalization, and local-first product ideas.',
}

const categoryLabels: Record<WorkCategory, string> = {
  'Founder / Active Businesses': 'Founder-led businesses',
  'Launch Collaborations': 'Launch collaborations',
  'Products & Platforms': 'Products and platforms',
  'Business Websites': 'Commercial websites',
  'Creative & Personal Experiments': 'Product R&D',
}

const categoryLabelsRo: Record<WorkCategory, string> = {
  'Founder / Active Businesses': 'Companii fondate și operate',
  'Launch Collaborations': 'Colaborări la lansare',
  'Products & Platforms': 'Produse și platforme',
  'Business Websites': 'Site-uri comerciale',
  'Creative & Personal Experiments': 'Cercetare și dezvoltare de produs',
}

const categoryDescriptionsRo: Record<WorkCategory, string> = {
  'Founder / Active Businesses':
    'Companii pe care le-am fondat și le operez, cu responsabilitate directă pentru poziționare, sisteme, livrare și execuție comercială.',
  'Launch Collaborations':
    'Proiecte ale unor parteneri strategici la a căror lansare și livrare digitală am contribuit, fără a pretinde că le dețin.',
  'Products & Platforms':
    'Produse digitale și concepte orientate spre educație, protecția datelor, risc și fluxuri de lucru practice.',
  'Business Websites':
    'Site-uri comerciale și parcursuri de conversie construite pentru vizibilitate, cerere calificată și nevoi operaționale reale.',
  'Creative & Personal Experiments':
    'Experimente de cercetare și dezvoltare folosite pentru a testa modele de interacțiune, personalizare și idei local-first.',
}

interface Props {
  language?: 'en' | 'ro'
}

export default function WorkListing({ language = 'en' }: Props) {
  const groupedWork = workCategories
    .map((category) => ({
      category,
      items: work.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <section className="container section-spacing space-y-16">
      {groupedWork.map(({ category, items }) => (
        <div data-work-category={category} key={category}>
          <div className="max-w-3xl">
            <Text
              tag="h2"
              className="text-2xl md:text-3xl font-extrabold leading-tight"
              content={
                language === 'ro'
                  ? categoryLabelsRo[category]
                  : categoryLabels[category]
              }
            />
            <Text
              tag="p"
              className="mt-2 text-gray-700 md:text-lg"
              content={
                language === 'ro'
                  ? categoryDescriptionsRo[category]
                  : categoryDescriptions[category]
              }
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
                  <Image
                    alt={
                      language === 'ro'
                        ? `Captură de ecran ${item.title}`
                        : `${item.title} preview`
                    }
                    className="h-56 w-full object-cover object-top"
                    src={item.image}
                    width={1200}
                    height={675}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </a>
                <div className="flex flex-1 flex-col p-6">
                  <a target="_blank" href={item.link} rel="noreferrer noopener">
                    <Text
                      tag="h3"
                      className="text-xl md:text-2xl font-extrabold leading-tight"
                      content={item.title}
                    />
                    {item.role && (
                      <Text
                        tag="p"
                        className="mt-2 text-xs font-extrabold uppercase text-gray-600"
                        content={
                          language === 'ro'
                            ? (item.roleRo ?? item.role)
                            : item.role
                        }
                      />
                    )}
                    <Text
                      tag="p"
                      className={`mt-1 text-sm font-medium underline ${item.color}`}
                      content={item.link.replace(/^https?:\/\//, '')}
                    />
                  </a>
                  <Text
                    tag="p"
                    className="text-base text-gray-700 mt-4"
                    content={
                      language === 'ro'
                        ? (item.descriptionRo ?? item.description)
                        : item.description
                    }
                  />
                  <ul className="flex flex-wrap items-center gap-2 mt-5">
                    {item.tools.map((tool) => (
                      <li
                        key={tool}
                        className="text-xs font-bold uppercase bg-gray-200 text-gray-800 px-3 py-1 rounded"
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
                    <span className="leading-none">
                      {language === 'ro' ? 'Vizitează' : 'Visit'} {item.title}
                    </span>
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
