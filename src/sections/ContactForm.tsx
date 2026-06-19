type ContactFormLabels = {
  name: string
  email: string
  message: string
  submit: string
  honeypot: string
}

const defaultLabels: ContactFormLabels = {
  name: 'Name',
  email: 'Email',
  message: 'What should we work on?',
  submit: 'Send Message',
  honeypot: "Don't fill this out if you're human:",
}

interface Props {
  action?: string
  formName?: string
  labels?: Partial<ContactFormLabels>
}

export default function ContactForm({
  action = '/?contact=true',
  formName = 'contact',
  labels,
}: Props) {
  const copy = { ...defaultLabels, ...labels }

  return (
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name={formName}
      method="POST"
      action={action}
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden" aria-hidden="true">
        <label>
          {copy.honeypot}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <label className="block">
        <p className="font-bold">{copy.name}</p>
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 input w-full"
        />
      </label>
      <label className="block pt-6">
        <p className="font-bold">{copy.email}</p>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 input w-full"
        />
      </label>
      <label className="block pt-6">
        <p className="font-bold">{copy.message}</p>
        <textarea
          name="message"
          rows={7}
          required
          className="mt-2 input w-full"
        ></textarea>
      </label>
      <div className="block pt-4">
        <button type="submit" className="button ml-auto">
          {copy.submit}
        </button>
      </div>
    </form>
  )
}
