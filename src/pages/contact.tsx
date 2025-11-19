import Head from "next/head";
import Navbar from "@/components/Navbar";
import React from "react";
import { ContactHero, ContactMethods } from "@/components/contact";
import Footer from "@/components/Footer";

function Contact() {
  const title = "Contact Uplift | Get in Touch with Our Team";
  const description = "Contact Uplift through WhatsApp, email, or schedule a meeting. Connect with us on social media or join our Discord community. We're here to help!";
  const url = "https://operatoruplift.com/contact";
  const image = "https://operatoruplift.com/og-image.png";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Uplift",
    "description": description,
    "url": url,
    "mainEntity": {
      "@type": "Organization",
      "name": "Uplift Labs",
      "url": "https://operatoruplift.com",
      "logo": "https://operatoruplift.com/logo2.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8595771213",
        "contactType": "Customer Service",
        "email": "dhruv@operatoruplift.com",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://x.com/aven_labs",
        "https://www.linkedin.com/company/aven_labs",
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
        <meta name="keywords" content="contact Uplift, AI support, customer service, get help, WhatsApp contact, email support, schedule meeting" />
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
        <ContactHero />
        <ContactMethods />
        <Footer />
      </main>
    </>
  );
}

export default Contact;
