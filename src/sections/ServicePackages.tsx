import { CheckCircleIcon } from '@heroicons/react/outline'
import Text from 'components/Text'
import { ServicePage } from 'data/services'

interface Props {
  formName: string
  packages: ServicePage['packages']
}

function focusForm(formName: string, value: string) {
  const form = document.getElementById(`${formName}-schedule`)
  const select = document.getElementById(`${formName}-type`)

  if (form instanceof HTMLElement && select instanceof HTMLSelectElement) {
    form.scrollIntoView({ behavior: 'smooth' })
    select.value = value
  }
}

export default function ServicePackages({ formName, packages }: Props) {
  return (
    <section id="packages" className="section-spacing relative">
      <div className="bg-gray-900 absolute w-full h-full top-0 left-0 z-0 lg:h-4/6"></div>
      <div className="relative container text-white z-20">
        <div className="lg:text-center">
          <Text
            tag="h2"
            className="font-bold text-3xl"
            content={packages.heading}
          />
          <Text
            tag="p"
            className="mt-2 text-lg text-gray-200"
            content={packages.description}
          />
        </div>
      </div>
      <div
        className={`relative mt-16 container grid gap-8 grid-cols-1 ${
          packages.items.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'
        }`}
      >
        {packages.items.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-lg p-8 flex flex-col items-start shadow-lg"
          >
            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded font-bold">
              {item.name}
            </span>
            <div className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-2xl font-black leading-tight text-gray-900">
                {item.investment}
              </span>
              <span className="text-sm font-semibold text-gray-600">
                · {item.duration}
              </span>
            </div>
            <Text
              tag="p"
              className="mt-4 text-gray-700"
              content={item.description}
            />
            <div className="mt-5 space-y-2">
              {item.bullets.map((bullet) => (
                <div key={bullet} className="flex items-center">
                  <span className="block w-4 h-4 flex-shrink-0 text-emerald-600">
                    <CheckCircleIcon />
                  </span>
                  <span className="ml-2">{bullet}</span>
                </div>
              ))}
            </div>
            <div className="mt-8"></div>
            <button
              onClick={() => focusForm(formName, item.slug)}
              className="mt-auto button w-full text-center"
              type="button"
            >
              {packages.ctaLabel ?? 'Start Here'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
