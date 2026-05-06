import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/devis/confirmation',
          '/*?utm_',
          '/*?utm_source=',
          '/*?utm_medium=',
          '/*?utm_campaign=',
          '/*?utm_term=',
          '/*?utm_content=',
          '/*?fbclid=',
          '/*?gclid=',
          '/*?ref=',
          '/*?sort=',
          '/*?filter=',
          '/*?order=',
          '/*?page=',
          '/*?q=',
          '/*?s=',
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Video',
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/devis/confirmation'],
      },
      { userAgent: 'GPTBot',            allow: '/' },
      { userAgent: 'OAI-SearchBot',     allow: '/' },
      { userAgent: 'ChatGPT-User',      allow: '/' },
      { userAgent: 'ClaudeBot',         allow: '/' },
      { userAgent: 'anthropic-ai',      allow: '/' },
      { userAgent: 'Google-Extended',   allow: '/' },
      { userAgent: 'PerplexityBot',     allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
    ],
    sitemap: [
      'https://grondin-demenagement.fr/sitemap.xml',
      'https://grondin-demenagement.fr/sitemap-images.xml',
    ],
  }
}
