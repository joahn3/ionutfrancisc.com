import Prism from 'prismjs'
import { useEffect, useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const defaultCode = `
const project = {
  goal: 'ship something useful',
  needs: [
    'security',
    'privacy',
    'web',
    'automation',
  ],
}

const nextStep = review(project)
  .then(plan)
  .then(build)
`

interface Props {
  heading?: string
  paragraph?: string
  linkHref?: string
  linkText?: string
  codeSnippet?: string
}

const CodeblockCTA = ({
  heading = 'Have a digital system that needs clearer thinking?',
  paragraph = 'I can help review, refactor, rebuild, or plan the next version of a website, product flow, automation, or security/privacy-sensitive process.',
  linkHref = '/contact/',
  linkText = 'Contact Me',
  codeSnippet = defaultCode,
}: Props) => {
  const [highlightedCode, setHighlightedCode] = useState('')
  useEffect(() => {
    const newCode = Prism.highlight(
      codeSnippet,
      Prism.languages.javascript,
      'javascript'
    )
    setHighlightedCode(newCode)
  }, [codeSnippet])

  return (
    <section className="container flex flex-wrap items-center section-spacing">
      <div
        aria-hidden="true"
        className="w-full lg:w-1/2 overflow-hidden bg-gray-900 p-4 text-white rounded-lg shadow-lg text-sm sm:text-base"
      >
        <div className="space-x-2 flex items-center">
          <div className="rounded-full w-3 h-3 bg-red-500"></div>
          <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
          <div className="rounded-full w-3 h-3 bg-green-500"></div>
        </div>
        <div className="py-6">
          <pre className="overflow-x-auto">
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }}></code>
          </pre>
        </div>
      </div>
      <div className="w-full max-w-2xl mx-auto mt-12 lg:mt-0 lg:w-1/2 lg:pl-16">
        <h3 className="relative inline text-2xl font-extrabold leading-tight lg:text-3xl">
          {heading}
        </h3>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base lg:text-lg">
          {paragraph}
        </p>
        <Link href={linkHref}>
          <a className="inline-flex items-center mt-6 text-emerald-700 rounded font-bold">
            {linkText}
            <span className="w-4 h-4 ml-1">
              <ArrowRightIcon />
            </span>
          </a>
        </Link>
      </div>
    </section>
  )
}

export default CodeblockCTA
