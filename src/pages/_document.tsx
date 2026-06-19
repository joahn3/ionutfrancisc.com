import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    const page = this.props.__NEXT_DATA__.page
    const lang = page === '/ro' || page.startsWith('/ro/') ? 'ro' : 'en'

    return (
      <Html lang={lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
