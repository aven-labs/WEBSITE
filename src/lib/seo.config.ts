export const defaultSEO = {
  title: 'Aven | Your Personal AI Agent That Truly Understands You',
  description:
    'Aven is your thinking companion - an AI agent that lives on your devices, understands your context, and acts on your behalf. Experience true personalized AI assistance.',
  canonical: 'https://helloaven.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://helloaven.com',
    site_name: 'Aven',
    title: 'Aven | Your Personal AI Agent That Truly Understands You',
    description:
      'Aven is your thinking companion - an AI agent that lives on your devices, understands your context, and acts on your behalf.',
    images: [
      {
        url: 'https://helloaven.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aven - Personal AI Agent',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@aven_labs',
    site: '@aven_labs',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content:
        'AI assistant, personal AI, AI agent, artificial intelligence, productivity tool, virtual assistant, context-aware AI, personalized AI, JARVIS AI, intelligent assistant',
    },
    {
      name: 'author',
      content: 'Aven Labs',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/logo.svg',
    },
    {
      rel: 'apple-touch-icon',
      href: '/logo.svg',
      sizes: '76x76',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
};
