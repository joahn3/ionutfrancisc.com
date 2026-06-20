import { ArrowRightIcon } from '@heroicons/react/outline'
import defaultSkills from 'data/skills'
import Intro from 'components/Intro'
import Link from 'next/link'
import { ReactNode } from 'react'

export type SkillItem = {
  name: string
  description: string
  icon: ReactNode
  color: string
  link: string
  linkText: string
}

interface Props {
  heading?: string
  subheading?: string
  items?: SkillItem[]
}

const Skills = ({
  heading = 'Ways I Can Help',
  subheading = 'A focused mix of consulting, implementation, teaching, and product thinking.',
  items = defaultSkills,
}: Props) => (
  <section className="relative container section-spacing">
    <Intro heading={heading} subheading={subheading} />
    <div className="mt-12 grid gap-8 sm:mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((skill) => (
        <div
          key={skill.name}
          className="flex rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:flex-col"
        >
          <span
            className={`w-10 h-10 md:w-14 md:h-14 flex-shrink-0 ${skill.color}`}
          >
            {skill.icon}
          </span>
          <div className="ml-6 md:ml-0 flex-1 flex flex-col">
            <h2 className="font-extrabold leading-none text-xl md:mt-6 md:text-2xl">
              {skill.name}
            </h2>
            <p className="mt-2 md:mt-3 text-gray-600">{skill.description}</p>
            <span className="block h-4"></span>
            <Link
              className={`mt-auto flex md:justify-center items-center font-extrabold ${skill.color}`}
              href={skill.link}
            >
              {skill.linkText}
              <span className="ml-1 w-4 h-4">
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Skills
