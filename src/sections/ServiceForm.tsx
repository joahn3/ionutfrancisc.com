import Text from 'components/Text'
import { ServicePage } from 'data/services'

interface Props {
  form: ServicePage['form']
}

export default function ServiceForm({ form }: Props) {
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
          name={form.name}
          className="mt-12 grid grid-cols-2 gap-8 max-w-4xl mx-auto"
          method="POST"
          action="/?contact=true"
        >
          <input type="hidden" name="form-name" value={form.name} />
          <label className="col-span-2 sm:col-span-1">
            <span className="block font-bold">Name</span>
            <input
              className="input mt-2 w-full"
              type="text"
              name="name"
              autoComplete="name"
              required
            />
          </label>
          <label className="col-span-2 sm:col-span-1">
            <span className="block font-bold">Email</span>
            <input
              className="input mt-2 w-full"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </label>
          <label className="col-span-2">
            <span className="block font-bold">Session Type</span>
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
          <button type="submit" className="button col-span-2">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
