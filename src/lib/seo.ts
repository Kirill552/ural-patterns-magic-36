export interface SitemapPage {
  url: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  title: string;
  description: string;
}

export const sitePages: SitemapPage[] = [
  {
    url: 'https://uralpatterns.lovable.app',
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 1.0,
    title: 'Уральские узоры ⚡ Архитектурные формы с орнаментами | Екатеринбург 2025',
    description: '🏆 Изготавливаем эксклюзивные архитектурные формы с уральскими орнаментами: остановки, павильоны, контейнерные площадки. ✅ Лазерная резка ✅ Монтаж ✅ Гарантия 3 года'
  },
  {
    url: 'https://uralpatterns.lovable.app#about',
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
    title: 'О компании Уральские узоры - Производитель архитектурных форм в Екатеринбурге',
    description: 'Узнайте больше о компании Уральские узоры - ведущем производителе архитектурных форм с традиционными орнаментами в Екатеринбурге и Уральском регионе'
  },
  {
    url: 'https://uralpatterns.lovable.app#solutions',
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
    title: 'Наши решения - Архитектурные формы с уральскими орнаментами',
    description: 'Контейнерные площадки, остановочные комплексы, павильоны и малые архитектурные формы с эксклюзивными уральскими орнаментами'
  },
  {
    url: 'https://uralpatterns.lovable.app#gallery',
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.8,
    title: 'Галерея проектов - Примеры работ Уральские узоры',
    description: 'Посмотрите примеры наших работ: архитектурные формы с орнаментами в дневном и ночном освещении'
  },
  {
    url: 'https://uralpatterns.lovable.app#calculator',
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
    title: 'Калькулятор стоимости - Рассчитайте цену архитектурных форм онлайн',
    description: 'Интерактивный калькулятор для расчета стоимости архитектурных форм с уральскими орнаментами. Быстрый предварительный расчет цены'
  },
  {
    url: 'https://uralpatterns.lovable.app#reviews',
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
    title: 'Отзывы клиентов - Что говорят о Уральские узоры',
    description: 'Отзывы заказчиков о качестве архитектурных форм и сервисе компании Уральские узоры. Сертификаты и награды'
  },
  {
    url: 'https://uralpatterns.lovable.app#contacts',
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
    title: 'Контакты Уральские узоры - Заказать архитектурные формы в Екатеринбурге',
    description: 'Свяжитесь с нами для заказа архитектурных форм с уральскими орнаментами. Телефон: +7 (912) 037-01-70, email: director@a-96.ru'
  }
];

export const generateSitemap = (): string => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitePages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  return sitemap;
};

export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

User-agent: Yandex
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://uralpatterns.lovable.app/sitemap.xml

# Запретить индексацию технических файлов
Disallow: /src/
Disallow: /node_modules/
Disallow: /_next/
Disallow: /api/
Disallow: *.js$
Disallow: *.css$
Disallow: *.json$

# Разрешить основные файлы
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.webp$
Allow: /*.svg$
Allow: /*.ico$

# Crawl-delay для различных ботов
Crawl-delay: 1`;
};

// SEO Meta Tags Generator
export const generateMetaTags = (page: SitemapPage) => {
  return {
    title: page.title,
    description: page.description,
    canonical: page.url,
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.url,
      type: 'website',
      image: 'https://uralpatterns.lovable.app/lovable-uploads/4825c6a7-2c99-46da-82cc-47d7ac3b0dde.png',
      locale: 'ru_RU',
      siteName: 'Уральские узоры'
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      image: 'https://uralpatterns.lovable.app/lovable-uploads/4825c6a7-2c99-46da-82cc-47d7ac3b0dde.png'
    }
  };
};

// Local Business Schema Generator
export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://uralpatterns.lovable.app/#localbusiness",
    "name": "Уральские узоры",
    "image": [
      "https://uralpatterns.lovable.app/lovable-uploads/4825c6a7-2c99-46da-82cc-47d7ac3b0dde.png"
    ],
    "description": "Производство архитектурных форм с уральскими орнаментами в Екатеринбурге. Контейнерные площадки, остановки, павильоны, малые архитектурные формы.",
    "url": "https://uralpatterns.lovable.app",
    "telephone": "+7-912-037-01-70",
    "email": "director@a-96.ru",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ДНП \"Шишкино\", ул. Сосновая, 23",
      "addressLocality": "Березовский",
      "addressRegion": "Свердловская область",
      "postalCode": "623701",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 56.9085,
      "longitude": 60.8015
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "RUB",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 56.8431,
        "longitude": 60.6454
      },
      "geoRadius": "500000"
    },
    "serviceArea": "Уральский федеральный округ",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Архитектурные формы с уральскими орнаментами",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Контейнерные площадки",
            "description": "Эстетичные ограждения для мусорных контейнеров"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Остановочные комплексы",
            "description": "Современные остановки общественного транспорта"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Павильоны и беседки",
            "description": "Архитектурные формы для отдыха"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Алексей Петров"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Заказывали ограждения для контейнерных площадок в нашем ЖК. Качество изготовления превзошло ожидания!"
      }
    ]
  };
};