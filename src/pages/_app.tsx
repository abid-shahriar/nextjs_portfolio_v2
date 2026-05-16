import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../styles/main.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  const siteTitle = 'Abid Shahriar - Full-Stack Developer';
  const defaultDescription =
    'Portfolio of Abid Shahriar, a Full-Stack Web Developer specializing in React, Next.js, and Node.js. Discover projects and expertise in modern web technologies.';
  // const siteUrl = "https://abidshahriar.vercel.app"; // Already in _document
  // const defaultImage = "https://abidshahriar.vercel.app/me.jpg"; // Already in _document

  return (
    <>
      <Head>
        {/* Default Title - can be overridden by individual pages */}
        <title>{siteTitle}</title>

        {/* Default Description - can be overridden */}
        <meta name="description" content={defaultDescription} />

        {/* Default Open Graph Tags - can be overridden */}
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={defaultDescription} />
        {/* og:url, og:image, og:site_name, og:type are in _document.tsx as defaults */}
        {/* if a page needs a specific image or URL, it should set it explicitly */}

        {/* Default Twitter Tags - can be overridden */}
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        {/* twitter:card, twitter:site, twitter:creator, twitter:image are in _document.tsx */}
      </Head>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}
