import Link from 'next/link'

type ContactFormLabels = {
  name: string
  email: string
  message: string
  submit: string
  honeypot: string
  privacy: string
  privacyLink: string
}

const defaultLabels: ContactFormLabels = {
  name: 'Name',
  email: 'Email',
  message: 'What should we work on?',
  submit: 'Send Message',
  honeypot: "Don't fill this out if you're human:",
  privacy: 'I agree that my details may be used to respond to this request.',
  privacyLink: 'Privacy notice',
}

interface Props {
  action?: string
  formName?: string
  labels?: Partial<ContactFormLabels>
  privacyPath?: string
}

export default function ContactForm({
  action = '/?contact=true',
  formName = 'contact',
  labels,
  privacyPath = '/privacy',
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
        <span className="block font-bold">{copy.name}</span>
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 input w-full"
        />
      </label>
      <label className="block pt-6">
        <span className="block font-bold">{copy.email}</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 input w-full"
        />
      </label>
      <label className="block pt-6">
        <span className="block font-bold">{copy.message}</span>
        <textarea
          name="message"
          rows={7}
          required
          className="mt-2 input w-full"
        ></textarea>
      </label>
      <label className="mt-5 flex items-start gap-3 text-sm text-gray-700">
        <input
          className="mt-1"
          name="privacy-consent"
          required
          type="checkbox"
          value="accepted"
        />
        <span>
          {copy.privacy}{' '}
          <Link
            className="font-bold text-emerald-700 underline"
            href={privacyPath}
          >
            {copy.privacyLink}
          </Link>
        </span>
      </label>
      <div className="block pt-4">
        <button type="submit" className="button ml-auto">
          {copy.submit}
        </button>
      </div>
    </form>
  )
}
