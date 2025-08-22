import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const content = {
    title: "Контакты",
    subtitle: "Свяжитесь с нами для консультации",
    contactInfo: {
      address: "г. Екатеринбург, ул. Промышленная, 1",
      phone: "+7 (343) 000-00-00",
      email: "info@uralpatterns.ru",
      hours: "Пн-Пт: 9:00-18:00"
    },
    form: {
      title: "Оставить заявку",
      name: "Имя",
      namePlaceholder: "Ваше имя",
      email: "Email",
      emailPlaceholder: "your@email.com",
      phone: "Телефон",
      phonePlaceholder: "+7 (000) 000-00-00",
      message: "Сообщение",
      messagePlaceholder: "Расскажите о вашем проекте...",
      send: "Отправить заявку"
    },
    success: "Заявка отправлена! Мы свяжемся с вами в ближайшее время.",
    error: "Пожалуйста, заполните все обязательные поля."
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Ошибка',
        description: content.error,
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: 'Успешно!',
      description: content.success,
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-gold font-medium">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span>Адрес</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{content.contactInfo.address}</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <span>Телефон</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{content.contactInfo.phone}</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{content.contactInfo.email}</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <span>Часы работы</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{content.contactInfo.hours}</p>
              </CardContent>
            </Card>
          </div>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">{content.form.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{content.form.name} *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder={content.form.namePlaceholder}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{content.form.email} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder={content.form.emailPlaceholder}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{content.form.phone}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder={content.form.phonePlaceholder}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{content.form.message} *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder={content.form.messagePlaceholder}
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gold text-gold-foreground hover:bg-gold-muted gold-glow font-semibold"
                    size="lg"
                  >
                    {content.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
        </div>

        {/* Pattern decoration */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
        </div>
      </div>
    </section>
  );
};