import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star, 
  Quote, 
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Filter
} from "lucide-react";

interface ReviewsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ReviewsModal = ({ open, onOpenChange }: ReviewsModalProps) => {
  const [currentReview, setCurrentReview] = useState(0);
  const [currentTab, setCurrentTab] = useState("all");

  // Содержимое из Reviews.tsx, с обновленными данными о компаниях
  const reviews = [
    {
      id: 1,
      name: "Алексей Петров",
      position: "Директор УК \"Современный дом\"",
      company: "Управляющая компания",
      location: "Уральский регион",
      rating: 5,
      date: "15 декабря 2024",
      text: "Заказывали ограждения для контейнерных площадок в нашем ЖК. Качество изготовления превзошло ожидания! Орнаменты выполнены очень аккуратно, покрытие держится отлично даже зимой. Жители довольны - теперь двор выглядит гораздо эстетичнее.",
      project: "Контейнерные площадки",
      type: "containers",
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
      text: "Сотрудничаем с \"Уральскими узорами\" уже третий год. Изготавливали остановочные комплексы для нескольких районов города. Особенно нравится, как они сочетают современные технологии с традиционными мотивами. Качество монтажа на высоте.",
      project: "Остановочные комплексы",
      type: "bus-stops",
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
      text: "Установили павильон в нашем парке. Посетители в восторге от дизайна! Уральские орнаменты смотрятся очень органично в природной среде. Конструкция прочная, все материалы качественные. Рекомендуем!",
      project: "Парковый павильон",
      type: "pavilions",
      avatar: "ДК"
    },
    {
      id: 4,
      name: "Елена Волкова",
      position: "Заместитель главы",
      company: "Администрация района",
      location: "Уральский регион",
      rating: 5,
      date: "22 сентября 2024",
      text: "Заказывали комплексное благоустройство сквера. Малые архитектурные формы выполнены безупречно. Особенно впечатлила работа с деталями - каждый элемент орнамента проработан с любовью. Сроки соблюдены точно в срок.",
      project: "Благоустройство сквера",
      type: "urban-forms",
      avatar: "ЕВ"
    },
    {
      id: 5,
      name: "Сергей Ивановский",
      position: "Директор",
      company: "ТРЦ \"Гранит\"",
      location: "Уральский регион",
      rating: 5,
      date: "5 августа 2024",
      text: "Очень довольны сотрудничеством. Изготовили и установили декоративные стелы при входе в торговый центр. Сейчас они стали настоящей достопримечательностью и точкой для фотографий. Качество материалов и подсветка превосходные.",
      project: "Декоративные стелы",
      type: "urban-forms",
      avatar: "СИ"
    },
    {
      id: 6,
      name: "Инна Лавренова",
      position: "Главный инженер",
      company: "Проектное бюро",
      location: "Уральский регион",
      rating: 5,
      date: "17 июля 2024",
      text: "Сотрудничаем с \"Уральскими узорами\" на нескольких проектах. Отличает высокий профессионализм, чёткое соблюдение требований проектной документации и сроков. Изделия всегда соответствуют спецификациям, а часто и превосходят ожидания по качеству.",
      project: "Различные проекты",
      type: "all",
      avatar: "ИЛ"
    }
  ];

  const categories = [
    { id: "all", name: "Все отзывы" },
    { id: "containers", name: "Контейнерные площадки" },
    { id: "bus-stops", name: "Остановочные комплексы" },
    { id: "pavilions", name: "Павильоны" },
    { id: "urban-forms", name: "Малые арх. формы" }
  ];

  const filteredReviews = currentTab === "all" 
    ? reviews 
    : reviews.filter(review => review.type === currentTab);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % filteredReviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  // Сбрасываем текущий отзыв при смене категории
  const handleTabChange = (value: string) => {
    setCurrentTab(value);
    setCurrentReview(0);
  };

  const currentReviewData = filteredReviews[
    Math.min(currentReview, filteredReviews.length - 1)
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Отзывы наших клиентов</DialogTitle>
          <DialogDescription>
            Мнения заказчиков о работе с компанией "Уральские узоры"
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <Tabs defaultValue="all" value={currentTab} onValueChange={handleTabChange}>
            <div className="flex items-center justify-between mb-4">
              <TabsList>
                {categories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Filter className="w-4 h-4 mr-1" />
                <span>Показано: {filteredReviews.length} из {reviews.length}</span>
              </div>
            </div>
            
            {categories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                {filteredReviews.length > 0 ? (
                  <div className="space-y-8">
                    <Card className="border-border/50">
                      <CardContent className="p-6">
                        {/* Review Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <Avatar className="w-14 h-14">
                              <AvatarFallback className="bg-gold text-gold-foreground font-semibold">
                                {currentReviewData.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-semibold text-foreground text-lg">
                                {currentReviewData.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {currentReviewData.position}
                              </p>
                              <p className="text-sm text-gold font-medium">
                                {currentReviewData.company}
                              </p>
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
                          <Quote className="w-8 h-8 text-gold/30 absolute -top-3 -left-2" />
                          <p className="text-muted-foreground leading-relaxed pl-8 text-lg">
                            {currentReviewData.text}
                          </p>
                        </div>

                        {/* Review Footer */}
                        <div className="flex items-center justify-between text-sm text-muted-foreground mt-8">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{currentReviewData.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{currentReviewData.date}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Navigation */}
                    <div className="flex items-center justify-between">
                      <Button
                        variant="outline"
                        onClick={prevReview}
                        disabled={filteredReviews.length <= 1}
                        className="flex items-center space-x-2"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Предыдущий</span>
                      </Button>

                      <div className="flex space-x-2">
                        {filteredReviews.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentReview(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              currentReview === index ? 'bg-gold' : 'bg-muted-foreground/30'
                            }`}
                            aria-label={`Отзыв ${index + 1}`}
                          />
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        onClick={nextReview}
                        disabled={filteredReviews.length <= 1}
                        className="flex items-center space-x-2"
                      >
                        <span>Следующий</span>
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center text-muted-foreground">
                    <p>Нет отзывов в данной категории</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Закрыть</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};