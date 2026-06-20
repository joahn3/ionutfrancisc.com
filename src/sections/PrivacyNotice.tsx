interface Props {
  language?: 'en' | 'ro'
}

export default function PrivacyNotice({ language = 'en' }: Props) {
  const isRomanian = language === 'ro'

  return (
    <section className="container section-spacing">
      <div className="max-w-4xl space-y-10 text-gray-700">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">
            {isRomanian ? 'Cine gestionează datele' : 'Who handles the data'}
          </h2>
          <p className="mt-3">
            {isRomanian
              ? 'Ionuț Francisc gestionează datele trimise prin acest website. Pentru întrebări sau solicitări privind datele, folosește formularul de contact și menționează „Privacy request”.'
              : 'Ionuț Francisc handles the data submitted through this website. For data questions or requests, use the contact form and mention “Privacy request”.'}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">
            {isRomanian ? 'Ce date sunt colectate' : 'What data is collected'}
          </h2>
          <p className="mt-3">
            {isRomanian
              ? 'Formularele colectează numele, adresa de email și informațiile pe care alegi să le incluzi în mesaj. Datele sunt folosite pentru a răspunde solicitării și pentru pașii agreați ulterior.'
              : 'Forms collect your name, email address, and any information you choose to include in the message. The data is used to reply to your request and for any follow-up steps you agree to.'}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">
            {isRomanian ? 'Analytics și cookies' : 'Analytics and cookies'}
          </h2>
          <p className="mt-3">
            {isRomanian
              ? 'Google Analytics este opțional și se încarcă numai după accept. Preferința este salvată local în browser. Nu sunt activate tag-uri pentru publicitate sau personalizare.'
              : 'Google Analytics is optional and loads only after acceptance. Your preference is stored locally in the browser. Advertising and personalization tags are not enabled.'}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">
            {isRomanian ? 'Servicii externe' : 'External services'}
          </h2>
          <p className="mt-3">
            {isRomanian
              ? 'Linkurile către WhatsApp, LinkedIn, Credly și alte platforme deschid servicii externe, care aplică propriile politici. Formularele sunt procesate prin Netlify Forms.'
              : 'Links to WhatsApp, LinkedIn, Credly, and other platforms open external services with their own policies. Forms are processed through Netlify Forms.'}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">
            {isRomanian ? 'Păstrare și drepturi' : 'Retention and your rights'}
          </h2>
          <p className="mt-3">
            {isRomanian
              ? 'Mesajele sunt păstrate doar cât este necesar pentru comunicare, colaborare și obligații legitime. Poți solicita acces, corectare sau ștergere prin formularul de contact.'
              : 'Messages are kept only as long as needed for communication, collaboration, and legitimate obligations. You can request access, correction, or deletion through the contact form.'}
          </p>
        </div>

        <p className="border-t border-gray-200 pt-6 text-sm text-gray-600">
          {isRomanian ? 'Ultima actualizare' : 'Last updated'}: 20 June 2026
        </p>
      </div>
    </section>
  )
}
