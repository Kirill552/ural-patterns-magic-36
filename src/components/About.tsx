import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Award, Target } from "lucide-react";

export const About = () => {
  const content = {
    title: "О проекте",
    subtitle: "Возрождение традиций в современном городе",
    description: "«Уральские узоры» — это инновационный подход к созданию городской среды, где современные технологии встречаются с богатым культурным наследием Урала.",
    longDescription: "Мы верим, что красота и функциональность могут идти рука об руку. Наши изделия не просто украшают городское пространство — они создают уникальную атмосферу, которая вдохновляет жителей гордиться своим городом.",
    features: [
      {
        icon: Lightbulb,
        title: "Инновации",
        description: "Используем передовые технологии лазерной резки для создания сложных орнаментальных форм"
      },
      {
        icon: Users,
        title: "Традиции",
        description: "Бережно сохраняем и переосмысливаем традиционные уральские декоративные мотивы"
      },
      {
        icon: Award,
        title: "Качество",
        description: "Высококачественные материалы и точное исполнение гарантируют долговечность изделий"
      },
      {
        icon: Target,
        title: "Цель",
        description: "Создание комфортной и эстетически привлекательной городской среды"
      }
    ]
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {content.title}
          </h2>
          <h3 className="text-xl sm:text-2xl text-gold font-medium mb-8">
            {content.subtitle}
          </h3>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {content.description}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            {content.longDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-gold" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pattern decoration */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
        </div>
      </div>
    </section>
  );
};