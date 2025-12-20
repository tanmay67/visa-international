import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* ✅ Default Meta Tags for all pages */}
      <Head>
        <title>Visa International | Importers of Premium Grains & Pulses</title>
        <meta
          name="description"
          content="Visa International imports and distributes premium food grains and pulses across India. Trusted for quality, purity, and reliability."
        />
        <meta
          name="keywords"
          content="Visa International, grains importer, pulses distributor, food grains India, premium pulses, Chennai"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Visa International" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Visa International | Premium Grains & Pulses"
        />
        <meta
          property="og:description"
          content="Importing and distributing high-quality grains and pulses across India."
        />
        <meta property="og:image" content="/images/hero.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visa-international.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Visa International | Premium Grains & Pulses"
        />
        <meta
          name="twitter:description"
          content="Delivering trust, quality, and purity in every grain."
        />
        <meta name="twitter:image" content="/images/hero.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Page Content */}
      <Component {...pageProps} />
    </>
  );
}
