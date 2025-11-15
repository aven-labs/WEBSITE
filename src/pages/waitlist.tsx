import Head from "next/head";
import Navbar from "@/components/Navbar";
import { WaitlistForm } from "@/components/waitlist";
import Footer from "@/components/Footer";

function Waitlist() {
  const title = "Join Uplift Waitlist | Get Early Access to AI Assistant";
  const description = "Join the Uplift waitlist and be among the first to experience the future of personal AI assistance. Get early access to an AI agent that truly understands you.";
  const url = "https://operatoruplift.com/waitlist";
  const image = "https://operatoruplift.com/og-image.png";

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content="AI waitlist, early access AI, personal AI assistant, AI agent beta, join waitlist, AI assistant access" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={url} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </Head>
      <main>
        <Navbar />
        <WaitlistForm />
        <Footer />
      </main>
    </>
  );
}

export default Waitlist;
