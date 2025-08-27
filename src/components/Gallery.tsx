import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sun, Moon, ChevronLeft, ChevronRight } from "lucide-react";
import heroNight from "@/assets/hero-night.jpg";
import busStopDay from "@/assets/bus-stop-day.png";
import busStopNight from "@/assets/bus-stop-night.png";
import wasteContainersWinter from "@/assets/waste-containers-winter.jpg";
import wasteContainersSummerDay from "@/assets/waste-containers-summer-day.png";
import pavilionSummer from "@/assets/pavilion-summer.jpg";
import pavilionSummerNight from "@/assets/pavilion-summer-night.png";
import urbanFormsAutumn from "@/assets/urban-forms-autumn.jpg";
import stelaDay from "@/assets/stela-day.png";
import stelaNight from "@/assets/stela-night.png";
import { useSectionSEO } from "@/components/SEOHead";
import { LazyImage } from "@/components/LazyImage";
import { loadImagesManifest, toSrcSet } from "@/lib/images";

export const Gallery = () => {
  useSectionSEO('gallery');
  
  const [viewMode, setViewMode] = useState<'day' | 'night'>('day');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [srcsets, setSrcsets] = useState<Record<string, { webp?: string; avif?: string }>>({});

  // Load manifest once
  useEffect(() => {
    (async () => {
      const m = await loadImagesManifest();
      if (!m) return;
      const map: Record<string, { webp?: string; avif?: string }> = {};
      [busStopDay, busStopNight, wasteContainersWinter, wasteContainersSummerDay, pavilionSummer, pavilionSummerNight, urbanFormsAutumn, stelaDay, stelaNight, heroNight].forEach((p) => {
        if (typeof p === 'string') {
          const rel = `assets/${p.split('/').pop()}`;
          const e = m[rel];
          if (e) {
            map[rel] = { webp: toSrcSet(e.webp), avif: toSrcSet(e.avif) };
          }
        }
      });
      setSrcsets(map);
    })();
  }, []);

  const content = {
    title: "Галерея проектов",
    subtitle: "Наши работы в разное время суток",
    dayMode: "Дневной режим",
    nightMode: "Ночной режим",
    projects: [
      {
        title: "Остановочный комплекс",
        location: "Центральная часть города",
        dayImage: busStopDay,
  nightImage: busStopNight,
        description: "Современная остановка с традиционными уральскими орнаментами"
      },
      {
        title: "Контейнерная площадка",
        location: "Жилой комплекс",
        dayImage: wasteContainersSummerDay,
        nightImage: wasteContainersWinter,
        description: "Эстетичное решение для размещения мусорных контейнеров"
      },
      {
        title: "Декоративные стеллы",
        location: "Въезд в коттеджный посёлок",
        dayImage: stelaDay,
        nightImage: stelaNight,
        description: "Световые стеллы с традиционным узором и подсветкой"
      },
      {
        title: "Парковый павильон",
        location: "Городской парк",
        dayImage: pavilionSummer,
        nightImage: pavilionSummerNight,
        description: "Место отдыха с декоративными панелями"
      },
      {
        title: "Малые архитектурные формы",
        location: "Общественное пространство",
        dayImage: urbanFormsAutumn,
        nightImage: heroNight,
        description: "Комплексное благоустройство общественного пространства"
      }
    ]
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % content.projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + content.projects.length) % content.projects.length);
  };

  const currentProject = content.projects[currentIndex];
  const currentImage = viewMode === 'day' ? currentProject.dayImage : currentProject.nightImage;

  return (
    <section 
      id="gallery" 
      className="py-20 bg-primary/5"
      data-seo-title="Галерея проектов - Примеры работ Уральские узоры"
      data-seo-description="Посмотрите примеры наших работ: архитектурные формы с орнаментами в дневном и ночном освещении"
      role="main"
      aria-labelledby="gallery-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-gold font-medium mb-8">
            {content.subtitle}
          </p>

          {/* Day/Night toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Button
              variant={viewMode === 'day' ? 'default' : 'outline'}
              onClick={() => setViewMode('day')}
              className={viewMode === 'day' ? 'bg-gold text-gold-foreground' : ''}
            >
              <Sun className="w-4 h-4 mr-2" />
              {content.dayMode}
            </Button>
            <Button
              variant={viewMode === 'night' ? 'default' : 'outline'}
              onClick={() => setViewMode('night')}
              className={viewMode === 'night' ? 'bg-primary text-primary-foreground' : ''}
            >
              <Moon className="w-4 h-4 mr-2" />
              {content.nightMode}
            </Button>
          </div>
        </div>

        {/* Main gallery */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <Card className="overflow-hidden border-border/50">
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                <LazyImage
                  src={currentImage}
                  alt={currentProject.title}
                  className="w-full h-full"
                  placeholderClassName="bg-muted"
                  width={1600}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, 1024px"
                  webpSrcSet={srcsets[`assets/${(viewMode === 'day' ? currentProject.dayImage : currentProject.nightImage).split('/').pop()}`]?.webp}
                  avifSrcSet={srcsets[`assets/${(viewMode === 'day' ? currentProject.dayImage : currentProject.nightImage).split('/').pop()}`]?.avif}
                />
                
                {/* Overlay with project info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
                  <p className="text-gold text-sm font-medium mb-2 drop-shadow-md">{currentProject.location}</p>
                  <p className="text-white text-sm drop-shadow-md">{currentProject.description}</p>
                </div>

                {/* Navigation arrows */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 text-white hover:bg-black/40 border-0"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 text-white hover:bg-black/40 border-0"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </Card>

            {/* Project indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {content.projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-gold' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {content.projects.map((project, index) => (
              <Card 
                key={index}
                className={`cursor-pointer overflow-hidden border-border/50 hover:border-gold/30 transition-all duration-300 ${
                  currentIndex === index ? 'border-gold ring-1 ring-gold/20' : ''
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="relative h-24 overflow-hidden">
                  <LazyImage
                    src={viewMode === 'day' ? project.dayImage : project.nightImage}
                    alt={project.title}
                    className="w-full h-full"
                    placeholderClassName="bg-muted"
                    width={320}
                    height={160}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    webpSrcSet={srcsets[`assets/${(viewMode === 'day' ? project.dayImage : project.nightImage).split('/').pop()}`]?.webp}
                    avifSrcSet={srcsets[`assets/${(viewMode === 'day' ? project.dayImage : project.nightImage).split('/').pop()}`]?.avif}
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};