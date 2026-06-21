import Intro from 'components/Intro'
import Text from 'components/Text'
import {
  CheckCircleIcon,
  LightningBoltIcon,
  ShieldCheckIcon,
  TerminalIcon,
} from '@heroicons/react/outline'
import { profile } from 'data/profile'

type AboutContentSection = {
  heading: string
  subheading: string
  items: string[]
}

const defaultIntro = {
  heading: 'Where strategy meets delivery.',
  subheading:
    'A cross-functional profile built for work that has to satisfy governance, technical, and commercial realities at the same time.',
}

const defaultContent: AboutContentSection[] = [
  {
    heading: 'Advisory focus',
    subheading:
      'Mandates where clear controls, sound judgment, and practical follow-through matter.',
    items: profile.focusAreas,
  },
  {
    heading: 'Systems I deliver',
    subheading:
      'Digital systems designed to be useful, measurable, maintainable, and ready for real operations.',
    items: [
      'High-trust websites and digital service platforms',
      'Conversion journeys and qualified-lead systems',
      'MVPs that validate commercial assumptions',
      'Privacy-aware, local-first applications',
      'Operational automation and internal tools',
      'Education products for families and schools',
    ],
  },
  {
    heading: 'Capabilities and tools',
    subheading:
      'The disciplines and technologies I use to move from assessment to implementation.',
    items: profile.stack,
  },
]

const sectionIcons = [ShieldCheckIcon, LightningBoltIcon, TerminalIcon]

interface Props {
  intro?: typeof defaultIntro
  content?: AboutContentSection[]
}

const About = ({ intro = defaultIntro, content = defaultContent }: Props) => (
  <section
    className="border-y border-gray-200 bg-white"
    data-testid="capability-overview"
  >
    <div className="container section-spacing">
      <Intro heading={intro.heading} subheading={intro.subheading} />
      <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-gray-200">
        {content.map((section, index) => {
          const SectionIcon = sectionIcons[index] ?? CheckCircleIcon

          return (
            <article
              key={section.heading}
              className="border-t-4 border-emerald-600 pt-5 lg:border-t-0 lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <div className="flex items-center gap-3">
                <SectionIcon className="h-7 w-7 flex-none text-emerald-700" />
                <h3 className="text-xl font-extrabold leading-tight md:text-2xl">
                  {section.heading}
                </h3>
              </div>
              <Text
                content={section.subheading}
                className="mt-3 text-gray-700"
                tag="p"
              />
              <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 text-sm sm:text-base lg:grid-cols-1 xl:grid-cols-2">
                {section.items.map((item) => (
                  <li className="flex items-start gap-2" key={item}>
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </div>
  </section>
)

export default About
