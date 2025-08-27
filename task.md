# План правок для art-uu.ru (SEO, UI/UX, контент)

Ниже чеклист задач на основе файла «аудит.md» и текущего кода проекта. Разделы: что уже сделано, критично исправить, что лишнее/к удалению, улучшения производительности, аналитика и контент.

## ✅ Уже сделано
- [x] Убрана кнопка «Подробнее» в секции «Наши решения» (`src/components/Solutions.tsx`).
- [x] Кнопка «Получить предложение» центрирована и больше не тянется на всю ширину (`src/components/Solutions.tsx`).
- [x] Все кнопки «Получить предложение» открывают QuickContact через событие `openQuickContact` (слушатель в `src/components/QuickContact.tsx`).

## 🚨 Критично исправить (SEO/домены/карта/robots)
- [x] Сменить canonical и hreflang на рабочий домен.
  - [x] В `index.html`: заменить все URL `https://uralpatterns.lovable.app` на `https://art-uu.ru/` в: `<link rel="canonical">`, `<link rel="alternate">`, `og:url`, `twitter:url`, JSON‑LD (`@id`, `url`, `logo.url`, изображения).
  - [x] В `src/pages/Index.tsx` (пропсы `SEOHead`): `canonical` -> `https://art-uu.ru/`.
  - [x] В `src/lib/seo.ts`: заменить домен в `sitePages`, `generateMetaTags`, `generateLocalBusinessSchema` на `https://art-uu.ru` и актуальные пути к изображениям.
- [x] Обновить `public/sitemap.xml` (без якорей!).
  - [x] Удалить все записи с `#about`, `#solutions` и т.д. (фрагменты запрещены в sitemap).
  - [x] Оставить минимум корневую страницу `<loc>https://art-uu.ru/</loc>` с актуальным `<lastmod>`.
  - [ ] По желанию: подключить генерацию из `src/lib/seo.ts` в сборке и писать в `public/sitemap.xml`.
- [x] Обновить `public/robots.txt`.
  - [x] `Sitemap:` -> `https://art-uu.ru/sitemap.xml`.
  - [x] Удалить/упростить правила с якорями `/#about` и т.п. (они не имеют смысла для robots).
  - [x] Не блокировать CSS/JS (оставить Allow для статических ассетов, убрать противоречащие Disallow, если они есть в коде‑генераторах).

## 🧾 Структурированные данные (JSON‑LD)
  - [x] В `index.html` (Organization/WebSite JSON‑LD) и в `src/lib/seo.ts` (`generateLocalBusinessSchema`):
    - [x] `url`, `@id` -> `https://art-uu.ru/…` (Organization/WebSite и `generateLocalBusinessSchema` обновлены; `publisher.@id` в WebSite исправлен на `https://art-uu.ru/#organization`).
    - [x] `telephone` -> `+7-912-037-01-70` (как в виджете QuickContact).
- [x] Подключить счетчики в `index.html` (или через тег‑менеджер). Примечание: загрузка выполняется, если задать `window.YM_ID` и/или `window.GA_ID`.
    - [x] `sameAs` -> актуальные: Telegram `https://t.me/artidom`, WhatsApp `https://wa.me/79120370170`.
  - [x] Отправлять событие при `openQuickContact` (открытие виджета связи).
  - [x] Отправлять события по кликам по каналам связи (WhatsApp/Telegram/Звонок/Email) внутри `QuickContact`.

- [x] Проверить единичность `<h1>` на странице (в `Hero` уже есть заголовок). Заголовки секций — `<h2>` (в целом ок).
- [x] Задать русскоязычный описательный `alt` для фонового изображения в `Hero` (`src/components/Hero.tsx`, сейчас англ.):
  - [x] Для всех несрочных картинок — `loading="lazy"`; использовать `LazyImage` (`src/components/LazyImage.tsx`) в «Галерее» и «Решениях». (Сделано в «Галерее» и «Решениях».)
- [x] Убедиться, что все `<img>` в карточках и галерее имеют осмысленные `alt` (в «Решениях» — ок; проверить `Gallery`).

## 📈 Аналитика (Yandex Metrika, GA4)
- [ ] Подключить счетчики в `index.html` (или через тег‑менеджер).
- [ ] События:
  - [ ] Отправлять событие при `openQuickContact` (открытие виджета связи).
  - [ ] Отправлять события по кликам по каналам связи (WhatsApp/Telegram/Звонок/Email) внутри `QuickContact`.
  - [ ] По желанию: клики по CTA, просмотр галереи, отправка форм.

## ⚡ Производительность (Core Web Vitals)
  - [х] Конвертировать крупные JPG/PNG в WebP/AVIF (оставить fallback при необходимости).
  - [x] Добавить `srcset`/`sizes` и размеры для ретины/мобильных (введены props sizes/width/height в `LazyImage`, применены в Галерее и Решениях; генерируются множества размеров скриптом, см. /public/optimized/ и манифест).
  - [x] Для всех несрочных картинок — `loading="lazy"`; использовать `LazyImage` (`src/components/LazyImage.tsx`) в «Галерее» и «Решениях». (Сделано в «Галерее» и «Решениях».)
  - [x] Проставить `width`/`height` (или `aspect-ratio`) чтобы снизить CLS (реализовано через aspect-ratio контейнера LazyImage на основе width/height).
  - [x] Конвертация в WebP/AVIF и подключение через `<picture>` (добавлены webpSrcSet/avifSrcSet в `LazyImage`, манифест `/optimized/images-manifest.json`).
- [x] Проверить `<link rel="preload" href="/fonts/inter.woff2">` в `index.html`:
 [x] Под карточками «Решений» добавить текстовые ссылки на соответствующие примеры в «Галерее» (без якорей в sitemap, но для UX — ок).
- [x] Минимизировать лишние `dns-prefetch`/`preconnect`, если внешние ресурсы не используются.

## 🔗 Внутренняя перелинковка и контент

- [x] Расширить тексты в «Технологиях» и «Решениях» с учетом ключевых фраз из семантического ядра (Екатеринбург, МАФ, контейнерные площадки, остановки общественного транспорта, павильоны, лазерная резка металла, металлоконструкции на заказ, уральские орнаменты, благоустройство).
- [x] Добавить блок NAP (Название‑Адрес‑Телефон) в видимой части страницы (в подвале данные есть; телефон и email кликабельны tel/mailto и индексируются).

## 🛡️ Безопасность и сервер
- [x] Настроить HTTP Security Headers на сервере (nginx/другой): `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy` (добавлены в Nginx; CSP можно включить позже в Report-Only).
- [x] Включить сжатие и долгосрочное кеширование статики (проверено: gzip и `Cache-Control: public, immutable, max-age=31536000` для /assets; для HTML — `Cache-Control: no-store, max-age=0, must-revalidate`).

## 📄 Юридические страницы
- [х] В `robots.txt` сейчас упомянуты пути `/privacy-policy` и `/terms-of-service`. 
  - [x] создали реальные статические страницы в `public/privacy-policy.html` и `public/terms-of-service.html` и добавить ссылки в подвале.
 

---

### Примечания по соответствию аудиту
- Соответствует: якорная навигация, виджет быстрого контакта, адаптив и тёмная тема, модальные «Документы», кнопки «Получить предложение».
- Требует правок: canonical/hreflang/og/twitter URLs, sitemap без `#`, robots с верным Sitemap, JSON‑LD с актуальными контактами и доменом, alt в `Hero`, аналитика, оптимизация изображений и шрифта.
- Лишнее/к удалению/обновлению для вашего сайта:
  - Упоминания и ссылки на `uralpatterns.lovable.app` во всех файлах.
  - Фрагменты `#section` в `public/sitemap.xml`.
  - Предзагрузка несуществующего шрифта `/fonts/inter.woff2` (если файл не используется).
  - Дублирующие/избыточные `dns-prefetch` к службам, если аналитика не подключается.

> Выполняйте блоки сверху вниз: сначала домены/карта/robots, затем JSON‑LD и alt, потом аналитика и оптимизация медиа.
