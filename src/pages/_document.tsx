import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon - Multiple sizes for better Google recognition */}
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/logo.svg" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.svg" />
        <link rel="apple-touch-icon" sizes="152x152" href="/logo.svg" />
        <link rel="apple-touch-icon" sizes="144x144" href="/logo.svg" />
        <link rel="apple-touch-icon" sizes="120x120" href="/logo.svg" />
        <link rel="apple-touch-icon" sizes="114x114" href="/logo.svg" />
        <link rel="apple-touch-icon" sizes="76x76" href="/logo.svg" />
        <link rel="apple-touch-icon" sizes="72x72" href="/logo.svg" />
        <link rel="apple-touch-icon" sizes="60x60" href="/logo.svg" />
        <link rel="apple-touch-icon" sizes="57x57" href="/logo.svg" />
        <link rel="shortcut icon" href="/logo.svg" />
        
        {/* Fonts preload for performance */}
        <link
          rel="preload"
          href="/styles/fonts/SFPRODISPLAYREGULAR.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/styles/fonts/SFPRODISPLAYMEDIUM.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/styles/fonts/SFPRODISPLAYBOLD.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://api.airtable.com" />
        <link rel="dns-prefetch" href="https://api.airtable.com" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9VBF7HTRBJ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9VBF7HTRBJ');
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
