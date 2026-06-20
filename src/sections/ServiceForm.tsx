import Text from 'components/Text'
import { ServicePage } from 'data/services'
import Link from 'next/link'

interface Props {
  form: ServicePage['form']
}

export default function ServiceForm({ form }: Props) {
  const isRomanian = form.action?.startsWith('/ro')

  return (
    <section id={`${form.name}-schedule`} className="section-spacing">
      <div className="container">
        <div className="lg:text-center">
          <Text
            tag="h2"
            className="font-bold text-3xl"
            content={form.heading}
          />
          <Text
            tag="p"
            className="mt-2 text-lg text-gray-700"
            content={form.description}
          />
        </div>
        <form
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name={form.name}
          className="mt-12 grid grid-cols-2 gap-8 max-w-4xl mx-auto"
          method="POST"
          action={form.action ?? '/?contact=true'}
        >
          <input type="hidden" name="form-name" value={form.name} />
          <p className="hidden" aria-hidden="true">
            <label>
              {form.labels?.honeypot ?? "Don't fill this out if you're human:"}
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <label className="col-span-2 sm:col-span-1">
            <span className="block font-bold">
              {form.labels?.name ?? 'Name'}
            </span>
            <input
              className="input mt-2 w-full"
              type="text"
              name="name"
              autoComplete="name"
              required
            />
          </label>
          <label className="col-span-2 sm:col-span-1">
            <span className="block font-bold">
              {form.labels?.email ?? 'Email'}
            </span>
            <input
              className="input mt-2 w-full"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </label>
          <label className="col-span-2">
            <span className="block font-bold">
              {form.labels?.type ?? 'Session Type'}
            </span>
            <select
              id={`${form.name}-type`}
              className="input mt-2 w-full"
              name="type"
              defaultValue={form.defaultType}
            >
              {form.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label className="col-span-2">
            <span className="block font-bold">{form.infoLabel}</span>
            <textarea
              className="input mt-2 w-full"
              name="info"
              rows={8}
              required
            ></textarea>
          </label>
          <label className="col-span-2 flex items-start gap-3 text-sm text-gray-700">
            <input
              className="mt-1"
              name="privacy-consent"
              required
              type="checkbox"
              value="accepted"
            />
            <span>
              {form.labels?.privacy ??
                (isRomanian
                  ? 'Sunt de acord ca datele mele să fie folosite pentru a primi un răspuns.'
                  : 'I agree that my details may be used to respond to this request.')}{' '}
              <Link
                className="font-bold text-emerald-700 underline"
                href={isRomanian ? '/ro/confidentialitate' : '/privacy'}
              >
                {form.labels?.privacyLink ??
                  (isRomanian ? 'Notă de confidențialitate' : 'Privacy notice')}
              </Link>
            </span>
          </label>
          <button type="submit" className="button col-span-2">
            {form.labels?.submit ?? 'Submit'}
          </button>
        </form>
      </div>
    </section>
  )
}
