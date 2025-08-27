import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-night.jpg";
import { useSectionSEO } from "@/components/SEOHead";

export const Hero = () => {
  useSectionSEO('hero');

  const content = {
    title: "Уральские узоры",
    subtitle: "Современные решения городской среды с традиционными орнаментами",
    description: "Создаём уникальные архитектурные формы, сочетающие инновационные технологии лазерной резки с богатым наследием уральских декоративных традиций.",
    cta: "Узнать больше",
    scroll: "Прокрутите вниз",
    projects: "Посмотреть работы"
  };

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-seo-title="Уральские узоры ⚡ Архитектурные формы с орнаментами | Екатеринбург 2025"
      data-seo-description="🏆 Изготавливаем эксклюзивные архитектурные формы с уральскими орнаментами"
      role="banner"
      aria-label="Главная секция сайта"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Декоративные панели с подсветкой — Уральские узоры"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Animated pattern overlay */}
      <div className="absolute inset-0 z-10 ornament-pattern opacity-30"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-sm text-gold font-medium">
            Инновации в традициях
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          {content.title}
        </h1>

        <h2 className="text-xl sm:text-2xl text-gold mb-8 font-medium">
          {content.subtitle}
        </h2>

        <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          {content.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            size="lg" 
            className="bg-gold text-gold-foreground hover:bg-gold-muted gold-glow font-semibold px-8 py-3 text-lg"
            onClick={scrollToNext}
          >
            {content.cta}
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white/10 text-white border border-white/30 hover:bg-white/20 px-8 py-3 text-lg backdrop-blur-sm"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {content.projects}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full flex justify-center">
        <button 
          onClick={scrollToNext}
          className="text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
          aria-label={content.scroll}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-medium">{content.scroll}</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </button>
      </div>

      {/* Floating pattern elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 pattern-overlay rounded-full pattern-animate opacity-20"></div>
      <div className="absolute top-1/3 right-16 w-16 h-16 pattern-overlay rounded-full pattern-animate opacity-15" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-20 w-12 h-12 pattern-overlay rounded-full pattern-animate opacity-25" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};