import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import About from "@/components/sections/about/About";
import Products from "@/components/sections/products/Products";
import Divider from "@/components/divider/Divider";
import Hero from "@/components/sections/hero/Hero";
import ContactUs from "@/components/sections/contact/Contact";
import CoreStrengths from "@/components/sections/core-strengths/CoreStrengths";
import Team from "@/components/sections/team/Team";
import OurNetwork from "@/components/sections/network/OurNetwork";

export default function Home() {
  return (
    <>
      {/* ✅ Page-specific Head (extends or overrides defaults) */}
      <Head>
        <title>Home | Visa International</title>
        <meta
          name="description"
          content="Welcome to Visa International — your trusted partner for premium grains and pulses import and distribution across India."
        />
        <meta
          property="og:title"
          content="Visa International | Premium Grains & Pulses"
        />
        <meta property="og:image" content="/images/hero.jpg" />
      </Head>

      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Divider />
        <Products />
        <Divider />
        <OurNetwork />
        <Divider />
        <CoreStrengths />
        <Divider />
        <Team />
        <Divider />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
