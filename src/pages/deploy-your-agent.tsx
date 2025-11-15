import Head from "next/head";
import Navbar from "@/components/Navbar";
import React from "react";
import { DeployBanner, DeployForm } from "@/components/deploy-agent";
import Footer from "@/components/Footer";

function DeployYourAgent() {
  const title = "Deploy Your AI Agent | Share Your Agent on Uplift Marketplace";
  const description = "Submit and deploy your AI agent to Uplift's marketplace. Share your intelligent agent with thousands of users and monetize your creation. Join the AI agent revolution.";
  const url = "https://operatoruplift.com/deploy-your-agent";
  const image = "https://operatoruplift.com/og-image.png";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Deploy Your AI Agent",
    "description": description,
    "url": url,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://operatoruplift.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Deploy Your Agent",
          "item": url
        }
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
        <meta name="keywords" content="deploy AI agent, AI marketplace, submit agent, AI agent submission, monetize AI, agent developer, AI platform" />
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

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main>
        <Navbar />
        <div className="grid min-h-screen place-content-center md:grid-cols-2 max-md:py-12 gap-32 container px-8 mx-auto">
          <DeployBanner />
          <DeployForm />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default DeployYourAgent;
