import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  structuredData
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Update Open Graph tags
    if (ogTitle) {
      let ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (!ogTitleMeta) {
        ogTitleMeta = document.createElement('meta');
        ogTitleMeta.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitleMeta);
      }
      ogTitleMeta.setAttribute('content', ogTitle);
    }

    if (ogDescription) {
      let ogDescMeta = document.querySelector('meta[property="og:description"]');
      if (!ogDescMeta) {
        ogDescMeta = document.createElement('meta');
        ogDescMeta.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescMeta);
      }
      ogDescMeta.setAttribute('content', ogDescription);
    }

    if (ogImage) {
      let ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (!ogImageMeta) {
        ogImageMeta = document.createElement('meta');
        ogImageMeta.setAttribute('property', 'og:image');
        document.head.appendChild(ogImageMeta);
      }
      ogImageMeta.setAttribute('content', ogImage);
    }

    // Add structured data
    if (structuredData) {
      const existingScript = document.querySelector('script[data-seo="dynamic"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'dynamic');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, structuredData]);

  return null; // This component doesn't render anything
};

// Hook for section-specific SEO
export const useSectionSEO = (sectionId: string) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;
            const sectionTitle = section.getAttribute('data-seo-title');
            const sectionDesc = section.getAttribute('data-seo-description');
            
            if (sectionTitle) {
              document.title = sectionTitle;
            }
            
            // Update URL hash without scrolling
            if (sectionId && window.location.hash !== `#${sectionId}`) {
              history.replaceState(null, '', `#${sectionId}`);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px'
      }
    );

    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionId]);
};

// Section titles and descriptions for SEO
export const sectionSEOData = {
  hero: {
    title: 'Уральские узоры ⚡ Архитектурные формы с орнаментами | Екатеринбург 2025',
    description: '🏆 Изготавливаем эксклюзивные архитектурные формы с уральскими орнаментами: остановки, павильоны, контейнерные площадки. ✅ Лазерная резка ✅ Монтаж ✅ Гарантия 3 года'
  },
  about: {
    title: 'О компании Уральские узоры - Производитель архитектурных форм в Екатеринбурге',
    description: 'Узнайте больше о компании Уральские узоры - ведущем производителе архитектурных форм с традиционными орнаментами в Екатеринбурге и Уральском регионе'
  },
  solutions: {
    title: 'Наши решения - Архитектурные формы с уральскими орнаментами',
    description: 'Контейнерные площадки, остановочные комплексы, павильоны и малые архитектурные формы с эксклюзивными уральскими орнаментами'
  },
  technology: {
    title: 'Технологии производства - Лазерная резка металла и современные материалы',
    description: 'Современные технологии лазерной резки металла для создания архитектурных форм с уральскими орнаментами. Высокое качество и точность исполнения'
  },
  gallery: {
    title: 'Галерея проектов - Примеры работ Уральские узоры',
    description: 'Посмотрите примеры наших работ: архитектурные формы с орнаментами в дневном и ночном освещении'
  },
  calculator: {
    title: 'Калькулятор стоимости - Рассчитайте цену архитектурных форм онлайн',
    description: 'Интерактивный калькулятор для расчета стоимости архитектурных форм с уральскими орнаментами. Быстрый предварительный расчет цены'
  },
  reviews: {
    title: 'Отзывы клиентов - Что говорят о Уральские узоры',
    description: 'Отзывы заказчиков о качестве архитектурных форм и сервисе компании Уральские узоры. Сертификаты и награды'
  },
  clients: {
    title: 'Наши клиенты - Партнеры компании Уральские узоры',
    description: 'Для кого мы работаем: частные заказчики, управляющие компании, администрации городов, архитектурные бюро'
  },
  contacts: {
    title: 'Контакты Уральские узоры - Заказать архитектурные формы в Екатеринбурге',
    description: 'Свяжитесь с нами для заказа архитектурных форм с уральскими орнаментами. Телефон: +7 (912) 037-01-70, email: director@a-96.ru'
  }
};