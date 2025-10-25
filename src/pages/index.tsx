import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/landing/Hero";
import Intro from "../components/landing/Intro";
import WhatIsAven from "../components/landing/WhatIsAven";
import AvenHub from "../components/landing/AvenHub";
import IsItSecure from "../components/landing/IsItSecure";
// import Pricing from "../components/landing/Pricing";
import Footer from "@/components/Footer";
import Access from "@/components/Access";

function LandingPage() {
  const title = "The OS for Human Potential - Uplift";
  const description = "Aven is your thinking companion - an AI agent that lives on your devices, understands your context, and acts on your behalf. Experience true personalized AI assistance that knows what you need before you ask.";
  const url = "https://helloaven.com";
  const image = "https://helloaven.com/og-image.png";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Aven",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "Windows, macOS, Linux, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": description,
    "url": url,
    "image": image,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "author": {
      "@type": "Organization",
      "name": "Aven Labs",
      "url": "https://helloaven.com",
      "logo": "https://helloaven.com/logo.svg",
      "sameAs": [
        "https://x.com/OperatorUplift",
        "https://www.linkedin.com/company/operatoruplift",
        "https://github.com/aven-labs",
        "https://discord.gg/duvYhkW5"
      ]
    }
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content="AI assistant, personal AI, AI agent, artificial intelligence, productivity tool, virtual assistant, context-aware AI, personalized AI, JARVIS AI, intelligent assistant" />
        <meta name="author" content="Aven Labs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href={url} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Aven" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:creator" content="@aven_labs" />
        <meta name="twitter:site" content="@aven_labs" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="min-h-screen">
        <Navbar />
        <Hero />

        <Intro />
        <WhatIsAven />
        <IsItSecure />
        <AvenHub />
        <Access />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
