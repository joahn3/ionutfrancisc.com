import type { AppProps } from 'next/app'
import Analytics from 'components/Analytics'
import 'styles/main.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
