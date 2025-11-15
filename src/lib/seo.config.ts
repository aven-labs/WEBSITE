export const defaultSEO = {
  title: 'Uplift | Your Personal AI Agent That Truly Understands You',
  description:
    'Uplift is your thinking companion - an AI agent that lives on your devices, understands your context, and acts on your behalf. Experience true personalized AI assistance.',
  canonical: 'https://operatoruplift.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://operatoruplift.com',
    site_name: 'Uplift',
    title: 'Uplift | Your Personal AI Agent That Truly Understands You',
    description:
      'Uplift is your thinking companion - an AI agent that lives on your devices, understands your context, and acts on your behalf.',
    images: [
      {
        url: 'https://operatoruplift.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Uplift - Personal AI Agent',
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
      content: 'Uplift Labs',
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
