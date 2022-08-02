import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html style={{ scrollBehavior: "smooth" }}>
        <Head>
          <meta charSet="UTF-8" />

          <link rel="icon" href="/favicon.ico" />

          {/* HTML Meta Tags */}
          <meta name="description" content="DevOps developer" />

          {/* Google / Search Engine Tags */}
          <meta itemProp="name" content="Portfolio Website by Ankur Ahir" />
          <meta
            itemProp="description"
            content="DevOps developer by Ankur Ahir"
          />
          <meta itemProp="image" content="http://i.imgur.com/gk31YMY.png" />
          <meta
            name="Description"
            content="Ankur Ahir, DevOps Engineer, Lockheed Martin, Computer Science "></meta>
          <meta
            name="robots"
            content="max-snippet:20, max-image-preview:large"></meta>

          {/* Facebook Meta Tags */}
          <meta
            property="og:url"
            content="https://portfolio-ankur-0429.vercel.app"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Portfolio Website" />
          <meta property="og:description" content="DevOps developer" />
          <meta property="og:image" content="http://i.imgur.com/gk31YMY.png" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Portfolio Website" />
          <meta name="twitter:description" content="DevOps developer" />
          <meta name="twitter:image" content="http://i.imgur.com/gk31YMY.png" />

          <noscript>
            {/*
              Here we ignore the following recommendation to solve possible SSR problems with noscript browsers/visitors
              https://nextjs.org/docs/messages/no-css-tags
            */}
            {/* eslint-disable-next-line @next/next/no-css-tags */}
            <link href="./styles/aos-noscript.css" rel="stylesheet" />
          </noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"></link>
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
          <link
            href="https://fonts.googleapis.com/css2?family=Trocchi&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
