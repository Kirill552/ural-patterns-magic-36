import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Star, 
  Quote, 
  Award, 
  Calendar,
  ChevronLeft,
  ChevronRight,
  Building2,
  User,
  Shield,
  MessageSquare
} from "lucide-react";
import { ReviewsModal } from "./ReviewsModal";

export const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [reviewsModalOpen, setReviewsModalOpen] = useState(false);

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
        company: "Управляющая компания",
        location: "Уральский регион",
        rating: 5,
        date: "15 декабря 2024",
        text: "Заказывали ограждения для контейнерных площадок в нашем ЖК. Качество изготовления превзошло ожидания! Орнаменты выполнены очень аккуратно, покрытие держится отлично даже зимой.",
        project: "Контейнерные площадки",
        avatar: "АП"
      },
      {
        id: 2,
        name: "Мария Сидорова",
        position: "Главный архитектор",
        company: "Администрация",
        location: "Уральский регион",
        rating: 5,
        date: "28 ноября 2024",
        text: "Сотрудничаем с \"Уральскими узорами\" уже третий год. Изготавливали остановочные комплексы для нескольких районов города. Особенно нравится, как они сочетают современные технологии с традиционными мотивами.",
        project: "Остановочные комплексы",
        avatar: "МС"
      },
      {
        id: 3,
        name: "Дмитрий Козлов",
        position: "Управляющий парком",
        company: "Городской парк",
        location: "Уральский регион",
        rating: 5,
        date: "10 октября 2024",
        text: "Установили павильон в нашем парке. Посетители в восторге от дизайна! Уральские орнаменты смотрятся очень органично в природной среде. Конструкция прочная, все материалы качественные.",
        project: "Парковый павильон",
        avatar: "ДК"
      }
    ],
  };

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

        {/* Modern Reviews Section */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 md:mb-0">Отзывы заказчиков</h3>
            <Button 
              onClick={() => setReviewsModalOpen(true)}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Все отзывы</span>
            </Button>
          </div>
          
          {/* Reviews Carousel (Compact) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {content.reviews.map((review, index) => (
              <Card key={index} className="border-border/50 h-full flex flex-col">
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gold text-gold-foreground font-semibold">
                          {review.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-sm">{review.name}</h4>
                        <p className="text-xs text-gold">{review.company}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative flex-grow mb-3">
                    <Quote className="w-5 h-5 text-gold/30 absolute -top-1 -left-1" />
                    <p className="text-muted-foreground text-sm leading-relaxed pl-5">
                      {review.text}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/30">
                    <Badge variant="outline" className="text-xs">
                      {review.project}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{review.date.split(' ')[0]} {review.date.split(' ')[1].substring(0, 3)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <Button
              onClick={() => setReviewsModalOpen(true)}
              variant="default"
              className="bg-gold text-gold-foreground hover:bg-gold/90 gold-glow"
            >
              Смотреть все отзывы
            </Button>
          </div>
        </div>
      </div>

      {/* Reviews Modal */}
      <ReviewsModal
        open={reviewsModalOpen}
        onOpenChange={setReviewsModalOpen}
      />
    </section>
  );
};