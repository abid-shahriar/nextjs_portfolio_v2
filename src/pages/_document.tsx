import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      } as any;
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* preload rocket.svg */}
          <link rel="preload" href="/img/rocket.svg" as="image" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          {/* Original favicon link below, can be kept or removed if covered by new ones */}
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://abidshahriar.vercel.app" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* SEO Meta Tags Added by Cascade */}
          <meta name="author" content="Abid Shahriar" />
          <meta
            name="description"
            content="Portfolio of Abid Shahriar, a Full-Stack Web Developer specializing in React, Next.js, and Node.js. Discover projects and expertise in modern web technologies."
          />
          <meta
            name="keywords"
            content="Abid Shahriar, Full-Stack Developer, Web Developer, React, Next.js, Node.js, JavaScript, TypeScript, Portfolio, HTML, CSS, MongoDB, Postgres, API, Backend, Frontend"
          />

          {/* Open Graph Meta Tags */}
          <meta property="og:site_name" content="Abid Shahriar" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://abidshahriar.vercel.app" />
          <meta property="og:image" content="https://abidshahriar.vercel.app/me.jpg" />
          <meta property="og:image:alt" content="Abid Shahriar - Portfolio Image" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@abid_sh_akash" />
          <meta name="twitter:creator" content="@abid_sh_akash" />
          <meta name="twitter:image" content="https://abidshahriar.vercel.app/me.jpg" />
          <meta name="twitter:image:alt" content="Abid Shahriar - Portfolio Image" />
          {/* End of SEO Meta Tags Added by Cascade */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
