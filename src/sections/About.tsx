import Intro from 'components/Intro'
import Text from 'components/Text'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { profile } from 'data/profile'
import Image from 'next/image'

type AboutContentSection = {
  heading: string
  subheading: string
  image: string
  items: string[]
}

const defaultIntro = {
  heading: 'Built from practical overlaps.',
  subheading:
    'The useful work usually happens where technical execution meets business reality.',
}

const defaultContent: AboutContentSection[] = [
  {
    heading: 'Focus',
    subheading:
      'The areas where my work naturally overlaps: security, privacy, web, automation, energy, and education.',
    image: '/assets/skills.svg',
    items: profile.focusAreas,
  },
  {
    heading: 'What I Like Building',
    subheading:
      'Products and systems that can be shipped, tested, improved, and used by actual people.',
    image: '/assets/hobbies.svg',
    items: [
      'Clean, fast websites for real businesses',
      'Landing pages that can generate leads',
      'MVPs that test business ideas quickly',
      'Local-first apps with simple privacy models',
      'Educational tools for children and parents',
      'Automation systems for small teams and founders',
    ],
  },
  {
    heading: 'Stack',
    subheading:
      'A practical mix of security thinking, web implementation, deployment, automation, and AI-assisted workflows.',
    image: '/assets/skills.svg',
    items: profile.stack,
  },
]

const isEven = (index: number) => index % 2 === 0

interface Props {
  intro?: typeof defaultIntro
  content?: AboutContentSection[]
}

const About = ({ intro = defaultIntro, content = defaultContent }: Props) => (
  <section className="container section-spacing">
    <Intro heading={intro.heading} subheading={intro.subheading} />
    {content.map((section, index) => (
      <div
        key={section.heading}
        className="mt-16 grid items-center gap-8 grid-cols-1 md:mt-32 md:grid-cols-2 md:gap-24"
      >
        <div className={!isEven(index) ? 'order-1 md:order-2' : ''}>
          <Image
            className="w-2/3 mx-auto md:w-full"
            src={section.image}
            alt={`${section.heading} illustration.`}
            height={360}
            width={480}
          />
        </div>
        <div className={!isEven(index) ? 'order-2 md:order-1' : ''}>
          <h3 className="text-2xl md:text-3xl font-bold">{section.heading}</h3>
          <Text
            content={section.subheading}
            className="mt-2 text-lg md:text-xl"
            tag="p"
          />
          <ul className="mt-4 flex flex-col gap-2">
            {section.items.map((item) => (
              <li className="flex items-center gap-2 md:text-lg" key={item}>
                <CheckCircleIcon className="w-5 h-5 flex-shrink-0 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </section>
)

export default About
