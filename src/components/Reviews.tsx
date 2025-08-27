import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Star, 
  Quote, 
  Award, 
  MapPin, 
  Calendar,
  ChevronLeft,
  ChevronRight,
  Building2,
  User,
  Shield
} from "lucide-react";

export const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const content = {
    title: "Отзывы клиентов",
    subtitle: "Что говорят о нас наши заказчики",
    
    stats: [
      { number: "150+", label: "Реализованных проектов", icon: Building2 },
      { number: "98%", label: "Довольных клиентов", icon: Star },
      { number: "5", label: "Лет на рынке", icon: Calendar },
      { number: "24/7", label: "Поддержка клиентов", icon: Shield }
    ],

    reviews: [
      {
        id: 1,
        name: "Алексей Петров",
        position: "Директор УК \"Современный дом\"",
        company: "ЖК \"Северный\"",
        location: "Екатеринбург",
        rating: 5,
        date: "15 декабря 2024",
        text: "Заказывали ограждения для контейнерных площадок в нашем ЖК. Качество изготовления превзошло ожидания! Орнаменты выполнены очень аккуратно, покрытие держится отлично даже зимой. Жители довольны - теперь двор выглядит гораздо эстетичнее.",
        project: "Контейнерные площадки",
        avatar: "АП"
      },
      {
        id: 2,
        name: "Мария Сидорова",
        position: "Главный архитектор",
        company: "Администрация г. Екатеринбурга",
        location: "Екатеринбург",
        rating: 5,
        date: "28 ноября 2024",
        text: "Сотрудничаем с \"Уральскими узорами\" уже третий год. Изготавливали остановочные комплексы для нескольких районов города. Особенно нравится, как они сочетают современные технологии с традиционными мотивами. Качество монтажа на высоте.",
        project: "Остановочные комплексы",
        avatar: "МС"
      },
      {
        id: 3,
        name: "Дмитрий Козлов",
        position: "Управляющий парком",
        company: "Парк им. Маяковского",
        location: "Екатеринбург",
        rating: 5,
        date: "10 октября 2024",
        text: "Установили павильон в нашем парке. Посетители в восторге от дизайна! Уральские орнаменты смотрятся очень органично в природной среде. Конструкция прочная, все материалы качественные. Рекомендуем!",
        project: "Парковый павильон",
        avatar: "ДК"
      },
      {
        id: 4,
        name: "Елена Волкова",
        position: "Заместитель главы",
        company: "Администрация Железнодорожного района",
        location: "Екатеринбург",
        rating: 5,
        date: "22 сентября 2024",
        text: "Заказывали комплексное благоустройство сквера. Малые архитектурные формы выполнены безупречно. Особенно впечатлила работа с деталями - каждый элемент орнамента проработан с любовью. Сроки соблюдены точно в срок.",
        project: "Благоустройство сквера",
        avatar: "ЕВ"
      }
    ],

    // Убрали секции сертификатов и наград, так как их пока нет
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % content.reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + content.reviews.length) % content.reviews.length);
  };

  const currentReviewData = content.reviews[currentReview];

  return (
    <section id="reviews" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-gold font-medium">
            {content.subtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {content.stats.map((stat, index) => (
            <Card key={index} className="border-border/50 text-center">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Reviews Carousel */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Отзывы заказчиков</h3>
            
            <Card className="border-border/50">
              <CardContent className="p-6">
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gold text-gold-foreground font-semibold">
                        {currentReviewData.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-foreground">{currentReviewData.name}</h4>
                      <p className="text-sm text-muted-foreground">{currentReviewData.position}</p>
                      <p className="text-sm text-gold">{currentReviewData.company}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(currentReviewData.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {currentReviewData.project}
                    </Badge>
                  </div>
                </div>

                {/* Review Text */}
                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-gold/30 absolute -top-2 -left-1" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    {currentReviewData.text}
                  </p>
                </div>

                {/* Review Footer */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{currentReviewData.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{currentReviewData.date}</span>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevReview}
                    className="flex items-center space-x-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Предыдущий</span>
                  </Button>

                  <div className="flex space-x-2">
                    {content.reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentReview(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentReview === index ? 'bg-gold' : 'bg-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextReview}
                    className="flex items-center space-x-1"
                  >
                    <span>Следующий</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

            {/* Certificates & Awards */}
            <div className="space-y-6">
              
              {/* Company Info */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6"> "Уральские узоры"</h3>
                
                <div className="space-y-4">
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Award className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1">ООО "АртиДом"</h4>
                          <p className="text-xs text-muted-foreground mb-2">Производство архитектурных форм</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              ОГРН: 1236600123456 • ИНН: 6663123456
                            </span>
                            <Badge variant="outline" className="text-xs">
                              с 2019 года
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Award className="w-4 h-4 text-gold" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1">Наши преимущества</h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Собственное производство</li>
                            <li>• Опыт работы 5+ лет</li>
                            <li>• Комплексные решения</li>
                            <li>• Гарантия качества</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};