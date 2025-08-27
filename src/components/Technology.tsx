import { Card, CardContent } from "@/components/ui/card";
import { Zap, Settings, Palette, Shield } from "lucide-react";

export const Technology = () => {
  const content = {
    title: "Технологии",
    subtitle: "Современные методы производства",
    description: "Используем передовое оборудование для лазерной резки металла, позволяющее создавать сложные орнаментальные формы с ювелирной точностью.",
    technologies: [
      {
        icon: Zap,
        title: "Лазерная резка",
        description: "Высокоточная резка металла толщиной до 5 мм. Идеальные края без дополнительной обработки.",
        specs: ["Точность: ±0.1 мм", "Скорость: до 100 м/мин", "Толщина: 0.5-5 мм"]
      },
      {
        icon: Settings,
        title: "3D моделирование",
        description: "Создание точных цифровых моделей перед производством. Визуализация проекта в реальной среде.",
        specs: ["CAD/CAM системы", "Фотореалистичная визуализация", "Виртуальная примерка"]
      },
      {
        icon: Palette,
        title: "Порошковая покраска",
        description: "Экологически чистое покрытие с широкой палитрой цветов. Устойчивость к погодным условиям.",
        specs: ["300+ цветов", "Толщина покрытия: 60-120 мкм", "Срок службы: 15+ лет"]
      },
      {
        icon: Shield,
        title: "Антикоррозийная защита",
        description: "Многослойная система защиты металла от коррозии. Гарантия долговечности изделий.",
        specs: ["Цинкование", "Грунтование", "Финишное покрытие"]
      }
    ],
    process: {
      title: "Процесс производства",
      steps: [
        "Консультация и разработка концепции",
        "3D моделирование и визуализация",
        "Согласование проекта с заказчиком",
        "Подготовка материалов и программ резки",
        "Лазерная резка и обработка деталей",
        "Покраска и финишная обработка",
        "Контроль качества и упаковка",
        "Доставка и монтаж на объекте"
      ]
    }
  };

  return (
    <section id="technology" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {content.title}
          </h2>
          <h3 className="text-xl sm:text-2xl text-gold font-medium mb-8">
            {content.subtitle}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Technologies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {content.technologies.map((tech, index) => (
            <Card 
              key={index}
              className="border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <tech.icon className="w-8 h-8 text-gold" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {tech.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {tech.description}
                </p>
                <div className="space-y-1">
                  {tech.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></div>
                      {spec}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Production process */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            {content.process.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border/50 rounded-lg p-4 h-full hover:border-gold/30 transition-colors">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gold text-gold-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-sm text-card-foreground leading-relaxed">
                      {step}
                    </p>
                  </div>
                </div>
                
                {/* Connector line */}
                {index < content.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gold/30 transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pattern decoration */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
        </div>
      </div>
    </section>
  );
};