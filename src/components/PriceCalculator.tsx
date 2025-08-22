import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  CheckCircle, 
  Info, 
  Download, 
  Share2,
  Trash2,
  Bus,
  Building,
  TreePine
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CalculatorState {
  projectType: string;
  area: number;
  complexity: string;
  material: string;
  lighting: boolean;
  installation: boolean;
  urgency: string;
  quantity: number;
}

export const PriceCalculator = () => {
  const [formData, setFormData] = useState<CalculatorState>({
    projectType: '',
    area: 0,
    complexity: 'standard',
    material: 'steel',
    lighting: false,
    installation: true,
    urgency: 'standard',
    quantity: 1
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const { toast } = useToast();

  const content = {
    title: "Калькулятор стоимости",
    subtitle: "Получите предварительную оценку стоимости вашего проекта",
    
    projectTypes: [
      { 
        id: 'waste-containers', 
        name: 'Контейнерные площадки', 
        icon: Trash2, 
        basePrice: 35000,
        description: 'Ограждения для мусорных контейнеров'
      },
      { 
        id: 'bus-stops', 
        name: 'Остановочные комплексы', 
        icon: Bus, 
        basePrice: 120000,
        description: 'Остановки общественного транспорта'
      },
      { 
        id: 'pavilions', 
        name: 'Павильоны и беседки', 
        icon: Building, 
        basePrice: 180000,
        description: 'Архитектурные формы для отдыха'
      },
      { 
        id: 'small-forms', 
        name: 'Малые архитектурные формы', 
        icon: TreePine, 
        basePrice: 25000,
        description: 'Декоративные элементы'
      }
    ],

    complexity: [
      { id: 'simple', name: 'Простой', multiplier: 0.8, description: 'Без орнаментов' },
      { id: 'standard', name: 'Стандартный', multiplier: 1.0, description: 'Базовые орнаменты' },
      { id: 'complex', name: 'Сложный', multiplier: 1.5, description: 'Детализированные узоры' },
      { id: 'premium', name: 'Премиум', multiplier: 2.2, description: 'Эксклюзивный дизайн' }
    ],

    materials: [
      { id: 'steel', name: 'Сталь оцинкованная', multiplier: 1.0, description: '3мм' },
      { id: 'steel-painted', name: 'Сталь с покрытием', multiplier: 1.3, description: '3мм + порошковая покраска' },
      { id: 'corten', name: 'Кортеновская сталь', multiplier: 1.8, description: 'Атмосферостойкая' },
      { id: 'stainless', name: 'Нержавеющая сталь', multiplier: 2.5, description: 'AISI 304' }
    ],

    urgency: [
      { id: 'standard', name: 'Стандартный срок', multiplier: 1.0, description: '4-6 недель' },
      { id: 'fast', name: 'Ускоренное изготовление', multiplier: 1.3, description: '2-3 недели' },
      { id: 'urgent', name: 'Срочно', multiplier: 1.6, description: '1-2 недели' }
    ]
  };

  const calculatePrice = () => {
    const projectType = content.projectTypes.find(p => p.id === formData.projectType);
    if (!projectType) return 0;

    let price = projectType.basePrice;
    
    // Area coefficient
    if (formData.area > 0) {
      price *= (formData.area / 10); // base area 10 sq.m
    }

    // Complexity
    const complexity = content.complexity.find(c => c.id === formData.complexity);
    if (complexity) price *= complexity.multiplier;

    // Material
    const material = content.materials.find(m => m.id === formData.material);
    if (material) price *= material.multiplier;

    // Lighting
    if (formData.lighting) price += 15000 * formData.quantity;

    // Installation
    if (formData.installation) price *= 1.2;

    // Urgency
    const urgency = content.urgency.find(u => u.id === formData.urgency);
    if (urgency) price *= urgency.multiplier;

    // Quantity
    if (formData.quantity > 1) {
      price *= formData.quantity;
      // Bulk discount
      if (formData.quantity >= 5) price *= 0.9;
      if (formData.quantity >= 10) price *= 0.85;
    }

    return Math.round(price);
  };

  useEffect(() => {
    if (formData.projectType && formData.area > 0) {
      setEstimatedPrice(calculatePrice());
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  }, [formData]);

  const handleSubmit = () => {
    const projectType = content.projectTypes.find(p => p.id === formData.projectType);
    const message = `Запрос расчета стоимости:
Тип проекта: ${projectType?.name}
Площадь: ${formData.area} м²
Сложность: ${content.complexity.find(c => c.id === formData.complexity)?.name}
Материал: ${content.materials.find(m => m.id === formData.material)?.name}
Освещение: ${formData.lighting ? 'Да' : 'Нет'}
Монтаж: ${formData.installation ? 'Да' : 'Нет'}
Срочность: ${content.urgency.find(u => u.id === formData.urgency)?.name}
Количество: ${formData.quantity} шт.

Предварительная стоимость: ${estimatedPrice.toLocaleString('ru')} ₽`;

    const whatsappUrl = `https://wa.me/79430000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Расчет отправлен!",
      description: "Мы свяжемся с вами для уточнения деталей проекта."
    });
  };

  return (
    <section id="calculator" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-gold font-medium">
            {content.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Project Type */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Тип проекта</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {content.projectTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setFormData({...formData, projectType: type.id})}
                        className={`
                          p-4 border rounded-lg text-left transition-all duration-200
                          ${formData.projectType === type.id 
                            ? 'border-gold bg-gold/10 ring-1 ring-gold/20' 
                            : 'border-border hover:border-gold/50'
                          }
                        `}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <type.icon className="w-5 h-5 text-gold" />
                          <span className="font-medium text-sm">{type.name}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{type.description}</p>
                        <p className="text-xs text-gold mt-1">от {type.basePrice.toLocaleString('ru')} ₽</p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Parameters */}
              {formData.projectType && (
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Параметры проекта</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    {/* Area & Quantity */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="area">Площадь (м²)</Label>
                        <Input
                          id="area"
                          type="number"
                          min="1"
                          value={formData.area || ''}
                          onChange={(e) => setFormData({...formData, area: Number(e.target.value)})}
                          placeholder="10"
                        />
                      </div>
                      <div>
                        <Label htmlFor="quantity">Количество (шт.)</Label>
                        <Input
                          id="quantity"
                          type="number"
                          min="1"
                          value={formData.quantity}
                          onChange={(e) => setFormData({...formData, quantity: Number(e.target.value)})}
                        />
                      </div>
                    </div>

                    {/* Complexity */}
                    <div>
                      <Label>Сложность дизайна</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        {content.complexity.map((comp) => (
                          <button
                            key={comp.id}
                            onClick={() => setFormData({...formData, complexity: comp.id})}
                            className={`
                              p-3 border rounded text-left text-sm transition-all
                              ${formData.complexity === comp.id 
                                ? 'border-gold bg-gold/10' 
                                : 'border-border hover:border-gold/50'
                              }
                            `}
                          >
                            <div className="font-medium">{comp.name}</div>
                            <div className="text-xs text-muted-foreground">{comp.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Material */}
                    <div>
                      <Label>Материал</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        {content.materials.map((mat) => (
                          <button
                            key={mat.id}
                            onClick={() => setFormData({...formData, material: mat.id})}
                            className={`
                              p-3 border rounded text-left text-sm transition-all
                              ${formData.material === mat.id 
                                ? 'border-gold bg-gold/10' 
                                : 'border-border hover:border-gold/50'
                              }
                            `}
                          >
                            <div className="font-medium">{mat.name}</div>
                            <div className="text-xs text-muted-foreground">{mat.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Additional Options */}
                    <div className="space-y-3">
                      <Label>Дополнительные опции</Label>
                      
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.lighting}
                          onChange={(e) => setFormData({...formData, lighting: e.target.checked})}
                          className="rounded border-border"
                        />
                        <span className="text-sm">LED подсветка (+15,000 ₽)</span>
                      </label>

                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.installation}
                          onChange={(e) => setFormData({...formData, installation: e.target.checked})}
                          className="rounded border-border"
                        />
                        <span className="text-sm">Монтаж (+20% к стоимости)</span>
                      </label>
                    </div>

                    {/* Urgency */}
                    <div>
                      <Label>Срочность</Label>
                      <div className="space-y-2 mt-2">
                        {content.urgency.map((urg) => (
                          <label key={urg.id} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="urgency"
                              value={urg.id}
                              checked={formData.urgency === urg.id}
                              onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                              className="border-border"
                            />
                            <div className="flex-1">
                              <div className="text-sm font-medium">{urg.name}</div>
                              <div className="text-xs text-muted-foreground">{urg.description}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Result */}
            <div className="space-y-6">
              {showResult && (
                <Card className="border-gold/30 bg-gold/5 sticky top-6">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <Calculator className="w-5 h-5 text-gold" />
                      <span>Расчет стоимости</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gold mb-2">
                        {estimatedPrice.toLocaleString('ru')} ₽
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Предварительная оценка
                      </Badge>
                    </div>

                    <Separator />

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Базовая стоимость:</span>
                        <span>{content.projectTypes.find(p => p.id === formData.projectType)?.basePrice.toLocaleString('ru')} ₽</span>
                      </div>
                      
                      {formData.quantity > 1 && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Количество:</span>
                          <span>× {formData.quantity}</span>
                        </div>
                      )}

                      {formData.quantity >= 5 && (
                        <div className="flex justify-between text-green-600">
                          <span>Скидка за объем:</span>
                          <span>-{formData.quantity >= 10 ? '15' : '10'}%</span>
                        </div>
                      )}
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Button 
                        onClick={handleSubmit}
                        className="w-full bg-gold text-gold-foreground hover:bg-gold-muted"
                      >
                        Отправить расчет в WhatsApp
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full"
                        onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Получить точный расчет
                      </Button>
                    </div>

                    <div className="bg-muted/50 p-3 rounded text-xs text-muted-foreground">
                      <div className="flex items-start space-x-2">
                        <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          Итоговая стоимость может отличаться в зависимости от технических требований и сложности проекта.
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {!showResult && (
                <Card className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <Calculator className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm">
                      Выберите тип проекта и укажите площадь для расчета стоимости
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};