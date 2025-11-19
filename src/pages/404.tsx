import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { H1, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

function Custom404() {
  const title = "404 - Page Not Found | Uplift";
  const description = "The page you&apos;re looking for doesn&apos;t exist. Return to the Uplift homepage to continue your journey.";
  const url = "https://operatoruplift.com/404";

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={url} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-24 px-8">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="mb-8">
              <H1 className="text-8xl md:text-9xl font-bold text-muted-foreground/20 mb-4">
                404
              </H1>
              <H1 className="text-4xl md:text-5xl mb-4">
                Page Not Found
              </H1>
              <Text className="text-lg text-muted-foreground mb-8">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
                <br />
                Let&apos;s get you back on track.
              </Text>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/">
                <Button variant="default" size="lg" icon={Home}>
                  Go Home
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                icon={ArrowLeft}
                onClick={() => window.history.back()}
              >
                Go Back
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Custom404;

