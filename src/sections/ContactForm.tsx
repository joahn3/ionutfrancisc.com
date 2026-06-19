export default function ContactForm() {
  return (
    <form
      data-netlify="true"
      name="contact"
      method="POST"
      action="/?contact=true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label className="block">
        <p className="font-bold">Name</p>
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 input w-full"
        />
      </label>
      <label className="block pt-6">
        <p className="font-bold">Email</p>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 input w-full"
        />
      </label>
      <label className="block pt-6">
        <p className="font-bold">What should we work on?</p>
        <textarea
          name="message"
          rows={7}
          required
          className="mt-2 input w-full"
        ></textarea>
      </label>
      <div className="block pt-4">
        <button type="submit" className="button ml-auto">
          Send Message
        </button>
      </div>
    </form>
  )
}
