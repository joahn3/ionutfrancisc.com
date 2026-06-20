import Hero from 'components/Hero'
import Page from 'components/Page'
import PrivacyNotice from 'sections/PrivacyNotice'

const seo = {
  title: 'Confidențialitate',
  description:
    'Notă de confidențialitate pentru site-ul Ionuț Francisc, formulare, consimțământ pentru analiza traficului și servicii externe.',
}

export default function PrivacyRo() {
  return (
    <Page {...seo}>
      <Hero
        eyebrow="Confidențialitate, în mod implicit"
        heading="Informații clare despre date și analiza traficului."
        paragraph="Site-ul colectează doar informațiile necesare pentru a răspunde solicitărilor. Analiza traficului rămâne opțională."
      />
      <PrivacyNotice language="ro" />
    </Page>
  )
}
