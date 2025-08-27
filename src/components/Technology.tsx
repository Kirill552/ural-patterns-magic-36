import { Card, CardContent } from "@/components/ui/card";
import { Zap, Settings, Palette, Shield } from "lucide-react";

export const Technology = () => {
  const content = {
    title: "Технологии",
    subtitle: "Современные методы производства",
  description: "Используем передовое оборудование для лазерной резки металла и производства металлоконструкций на заказ. Создаём малые архитектурные формы (МАФ), контейнерные площадки, остановочные комплексы, павильоны и арт‑стеллы с уральскими орнаментами для благоустройства городской среды в Екатеринбурге и области.",
    technologies: [
      {
        icon: Zap,
        title: "Лазерная резка",
    description: "Высокоточная лазерная резка металла (узоры на металле) для уличных конструкций и МАФ. Чистый рез без заусенцев, повторяемость партий, подготовка к дальнейшей сборке и монтажу.",
    specs: ["Точность: ±0.1 мм", "Скорость: до 100 м/мин", "Толщина: 0.5–5 мм", "Материалы: сталь, нерж., оцинковка"]
      },
      {
        icon: Settings,
        title: "3D моделирование",
    description: "Проектирование и 3D‑моделирование металлоконструкций перед производством. Индивидуальный дизайн под задачу, согласование по ТЗ и виртуальная примерка в городской среде.",
    specs: ["CAD/CAM системы", "Фотореалистичная визуализация", "Виртуальная примерка на объекте"]
      },
      {
        icon: Palette,
        title: "Порошковая покраска",
    description: "Экологичное и износостойкое покрытие по палитре RAL. Идеально для уличных МАФ, остановок и павильонов: устойчиво к УФ, влаге и абразиву.",
    specs: ["300+ цветов RAL", "Толщина покрытия: 60–120 мкм", "Срок службы: 15+ лет"]
      },
      {
        icon: Shield,
        title: "Антикоррозийная защита",
    description: "Многослойная система защиты от коррозии для эксплуатации круглый год в уральском климате. Повышенная долговечность и сохранение эстетики орнаментов.",
    specs: ["Цинкование", "Грунтование", "Финишное порошковое покрытие"]
      }
    ],
    process: {
      title: "Процесс производства",
      steps: [
    "Консультация, замеры на объекте (Екатеринбург и область)",
    "Проектирование, 3D‑моделирование и визуализация МАФ",
    "Согласование проекта и материалов с заказчиком",
    "Подготовка металла и программ лазерной резки",
    "Лазерная резка, сборка и сварка металлоконструкций",
    "Антикоррозийная защита, порошковая покраска",
    "Контроль качества, упаковка и логистика",
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