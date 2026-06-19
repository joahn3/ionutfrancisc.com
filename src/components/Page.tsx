import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import PageHeader from 'sections/PageHeader'
import PageFooter from 'sections/PageFooter'
import { defaultSeo, profile } from 'data/profile'

interface Props {
  children: React.ReactNode
  description: string
  title: string
  image?: string
}

export default function Page(props: Props) {
  const { children, description, image = defaultSeo.image, title } = props
  const pageTitle =
    title === defaultSeo.title ? title : `${title} | ${profile.siteName}`

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="author" content={profile.name} />
        <meta name="theme-color" content="#111827" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={profile.siteName} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicons/180.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Toaster />
        <PageHeader />
        <main className="flex-1">{children}</main>
        <PageFooter />
      </div>
    </>
  )
}
