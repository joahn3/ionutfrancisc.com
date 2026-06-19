import clsx from 'clsx'
import Text from 'components/Text'
import Link from 'next/link'

interface Props {
  heading: string
  paragraph: string | string[]
  eyebrow?: string
  image?: string
  imageAlt?: string
  actions?: {
    href: string
    label: string
    variant?: 'primary' | 'secondary'
  }[]
}

export default function Hero(props: Props) {
  const paragraphs = Array.isArray(props.paragraph)
    ? props.paragraph
    : [props.paragraph]

  return (
    <section className="brand-gradient text-white py-10 lg:py-20">
      <div className="container flex items-center flex-col gap-8 lg:gap-16 lg:flex-row">
        <div className="order-2 max-w-3xl lg:order-1">
          {props.eyebrow && (
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-emerald-200">
              {props.eyebrow}
            </p>
          )}
          <Text tag="h1" className="h1" content={props.heading} />
          <div
            className={clsx(
              'mt-5 space-y-4 text-base sm:text-lg lg:text-xl text-gray-100',
              !props.image && 'lg:max-w-2xl'
            )}
          >
            {paragraphs.map((paragraph) => (
              <Text key={paragraph} tag="p" content={paragraph} />
            ))}
          </div>
          {props.actions && (
            <div className="mt-8 flex flex-wrap gap-3">
              {props.actions.map((action) => (
                <Link key={action.href} href={action.href}>
                  <a
                    className={clsx(
                      'inline-flex items-center rounded px-5 py-3 text-sm font-black uppercase tracking-wide transition-colors',
                      action.variant === 'secondary'
                        ? 'border border-white/40 text-white hover:bg-white/10'
                        : 'bg-white text-gray-900 hover:bg-emerald-100'
                    )}
                  >
                    {action.label}
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
        {props.image && (
          <img
            width={320}
            height={320}
            className={clsx(
              'order-1 w-56 h-56 rounded-full border-4 border-white object-cover shadow-2xl',
              'lg:order-2 lg:w-80 lg:h-80'
            )}
            src={props.image}
            alt={props.imageAlt ?? ''}
          />
        )}
      </div>
    </section>
  )
}
