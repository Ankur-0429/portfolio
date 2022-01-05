import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />

          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Ankur Ahir Portfolio Website" />
          <meta name="keywords" content="Ankur Ahir Software Developer DevOps Engineer Portfolio Site" />
          <meta name="title" property="og:title" content="Portfolio Website" />
          <meta property="og:type" content="Website" />
          <meta name="image" property="og:image" content="https://i.imgur.com/gk31YMY.png" />
          <meta property="og:url" content="https://portfolio-ankur-0429.vercel.app/" />
          <meta name="author" content="Ankur Ahir" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <noscript>
            {/*
              Here we ignore the following recommendation to solve possible SSR problems with noscript browsers/visitors
              https://nextjs.org/docs/messages/no-css-tags
            */}
            {/* eslint-disable-next-line @next/next/no-css-tags */}
            <link href="./styles/aos-noscript.css" rel="stylesheet" />
          </noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Montserrat&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat&family=Shadows+Into+Light&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument