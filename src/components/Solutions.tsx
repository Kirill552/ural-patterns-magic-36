import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Bus, Building, TreePine, Landmark } from "lucide-react";
import busStopImage from "@/assets/bus-stop-day.jpg";
import wasteContainersImage from "@/assets/waste-containers-summer-day.png";
import pavilionImage from "@/assets/pavilion-summer.jpg";
import urbanFormsImage from "@/assets/urban-forms-autumn.jpg";
import stelaImage from "@/assets/stela-3.png";
import { useSectionSEO } from "@/components/SEOHead";

export const Solutions = () => {
  useSectionSEO('solutions');
  
  const content = {
    title: "Наши решения",
    subtitle: "Комплексные решения для городской среды",
    solutions: [
      {
        icon: Trash2,
        title: "Контейнерные площадки",
        description: "Эстетичные ограждения для мусорных контейнеров с традиционными орнаментами. Скрывают неприглядные объекты и украшают городское пространство.",
        image: wasteContainersImage,
        features: ["Антикоррозийное покрытие", "LED подсветка", "Модульная конструкция", "Простая установка"]
      },
      {
        icon: Bus,
        title: "Остановочные комплексы",
        description: "Современные остановки общественного транспорта с декоративными элементами. Комфорт пассажиров и украшение городских магистралей.",
        image: busStopImage,
        features: ["Навес от дождя", "Информационные панели", "Скамейки", "Ночное освещение"]
      },
      {
        icon: Landmark,
        title: "Арт-стеллы",
        description: "Декоративные стеллы с узорами и подсветкой для оформления городских пространств. Создают уникальный облик и подчеркивают локальную идентичность.",
        image: stelaImage,
        features: ["Художественная подсветка", "Уникальный дизайн", "Высота до 5 метров", "Всепогодное исполнение"]
      },
      {
        icon: Building,
        title: "Павильоны и беседки",
        description: "Архитектурные формы для отдыха и проведения мероприятий. Создают уютные зоны в парках и общественных пространствах.",
        image: pavilionImage,
        features: ["Всепогодные материалы", "Вентиляция", "Электрификация", "Индивидуальный дизайн"]
      },
      {
        icon: TreePine,
        title: "Малые архитектурные формы",
        description: "Декоративные экраны, ограждения, клумбы и другие элементы благоустройства с уральскими орнаментами.",
        image: urbanFormsImage,
        features: ["Разнообразие форм", "Быстрый монтаж", "Долговечность", "Эксклюзивный дизайн"]
      }
    ],
    getQuote: "Получить предложение"
  };

  // Открыть быстрый контакт через глобальное событие
  const handleGetQuote = () => {
    window.dispatchEvent(new CustomEvent('openQuickContact'));
  };

  return (
    <section 
      id="solutions" 
      className="py-20 bg-muted/30"
      data-seo-title="Наши решения - Архитектурные формы с уральскими орнаментами"
      data-seo-description="Контейнерные площадки, остановочные комплексы, арт-стеллы, павильоны и малые архитектурные формы"
      role="main"
      aria-labelledby="solutions-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="solutions-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-gold font-medium">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {content.solutions.map((solution, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <solution.icon className="w-6 h-6 text-gold-foreground" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {solution.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>

                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-center">
                  <Button 
                    size="sm" 
                    className="bg-gold text-gold-foreground hover:bg-gold-muted px-6"
                    onClick={handleGetQuote}
                  >
                    {content.getQuote}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};