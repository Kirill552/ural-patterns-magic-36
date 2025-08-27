import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Landmark, TreePine } from "lucide-react";

export const Clients = () => {
  const content = {
    title: "Для кого мы работаем",
    subtitle: "Наши решения подходят для различных типов объектов",
    clients: [
      {
        icon: Building2,
        title: "Управляющие компании",
        description: "Благоустройство дворовых территорий, установка контейнерных площадок и малых архитектурных форм для жилых комплексов.",
        benefits: ["Повышение комфорта жителей", "Эстетическое улучшение территории", "Долговечные решения"]
      },
      {
        icon: Landmark,
        title: "Муниципалитеты",
        description: "Комплексное благоустройство общественных пространств, парков, скверов и городских магистралей.",
        benefits: ["Создание привлекательного облика города", "Культурное наследие в современном исполнении", "Туристическая привлекательность"]
      },
      {
        icon: Users,
        title: "Застройщики",
        description: "Уникальные архитектурные решения для новых жилых и коммерческих проектов с акцентом на региональную идентичность.",
        benefits: ["Повышение статуса проекта", "Уникальный дизайн-код", "Конкурентные преимущества"]
      },
      {
        icon: TreePine,
        title: "Парки и курорты",
        description: "Создание комфортной инфраструктуры для отдыха с элементами традиционной культуры Урала.",
        benefits: ["Аутентичная атмосфера", "Instagram-френдли локации", "Повышение посещаемости"]
      }
    ]
  };

  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-gold font-medium">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.clients.map((client, index) => (
            <Card 
              key={index}
              className="border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                    <client.icon className="w-8 h-8 text-gold" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {client.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {client.description}
                    </p>

                    <div className="space-y-2">
                      {client.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border/50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Готовы обсудить ваш проект?
            </h3>
            <p className="text-muted-foreground mb-6">
              Свяжитесь с нами для консультации и разработки индивидуального решения
            </p>
            <button 
              onClick={() => {
                // Scroll to contacts section
                document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
                // Dispatch custom event to open QuickContact
                window.dispatchEvent(new CustomEvent('openQuickContact'));
              }}
              className="bg-gold text-gold-foreground hover:bg-gold-muted px-8 py-3 rounded-lg font-semibold gold-glow transition-all duration-300"
            >
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};