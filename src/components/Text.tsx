import { createElement } from 'react'

interface Props {
  className?: string
  tag?: keyof JSX.IntrinsicElements
  content: string
  allowHtml?: boolean
}

function keepLastWordsTogether(content: string) {
  const words = content.trim().split(/\s+/)

  if (words.length < 3) {
    return content
  }

  const lastWords = words.slice(-2).join('\u00a0')
  return [...words.slice(0, -2), lastWords].join(' ')
}

export default function Text(props: Props) {
  const { allowHtml = false, className, tag = 'span', content } = props

  if (allowHtml) {
    return createElement(tag, {
      className,
      dangerouslySetInnerHTML: {
        __html: content,
      },
    })
  }

  return createElement(tag, { className }, keepLastWordsTogether(content))
}
