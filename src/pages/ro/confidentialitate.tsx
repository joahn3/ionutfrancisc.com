import Hero from 'components/Hero'
import Page from 'components/Page'
import PrivacyNotice from 'sections/PrivacyNotice'

const seo = {
  title: 'Confidențialitate',
  description:
    'Notă de confidențialitate pentru website-ul Ionuț Francisc, formulare, consimțământ analytics și servicii externe.',
}

export default function PrivacyRo() {
  return (
    <Page {...seo}>
      <Hero
        eyebrow="Privacy by default"
        heading="Informații clare despre date și analytics."
        paragraph="Website-ul colectează doar informațiile necesare pentru a răspunde solicitărilor. Analytics rămâne opțional."
      />
      <PrivacyNotice language="ro" />
    </Page>
  )
}
