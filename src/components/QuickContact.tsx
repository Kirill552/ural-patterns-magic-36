import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, X, Mail } from "lucide-react";

export const QuickContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      name: "WhatsApp",
      icon: "📱",
      url: "https://wa.me/79120370170?text=Здравствуйте! Интересует изготовление архитектурных форм с уральскими орнаментами.",
      color: "bg-green-500 hover:bg-green-600",
      description: "Быстрый ответ в WhatsApp"
    },
    {
      name: "Telegram",
      icon: "✈️",
      url: "https://t.me/artidom",
      color: "bg-blue-500 hover:bg-blue-600",
      description: "Напишите в Telegram"
    },
    {
      name: "Звонок",
      icon: "📞",
      url: "tel:+79120370170",
      color: "bg-gold hover:bg-gold-muted",
      description: "+7 912 037-01-70"
    },
    {
      name: "Email",
      icon: "📧",
      url: "mailto:director@a-96.ru?subject=Запрос по архитектурным формам&body=Здравствуйте! Интересует...",
      color: "bg-purple-500 hover:bg-purple-600",
      description: "director@a-96.ru"
    }
  ];

  // Handle custom event to open QuickContact
  useEffect(() => {
    const track = (action: string, params?: Record<string, any>) => {
      try {
        // Yandex Metrika
        // @ts-ignore
        if (typeof ym === 'function' && (window as any).YM_ID) {
          // @ts-ignore
          ym((window as any).YM_ID, 'reachGoal', action, params || {});
        }
        // GA4
        // @ts-ignore
        if (typeof gtag === 'function') {
          // @ts-ignore
          gtag('event', action, params || {});
        }
      } catch (e) {
        // no-op
      }
    };

    const handleOpenQuickContact = () => {
      setIsOpen(true);
      track('open_quick_contact');
    };

    window.addEventListener('openQuickContact', handleOpenQuickContact);
    
    return () => {
      window.removeEventListener('openQuickContact', handleOpenQuickContact);
    };
  }, []);

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <Card className="mb-4 border-border/50 shadow-xl animate-in slide-in-from-bottom-2">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-sm">Связаться с нами</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-2 min-w-[240px]">
                {contactOptions.map((option, index) => (
                  <a
                    key={index}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={() => {
                      try {
                        // Yandex Metrika
                        // @ts-ignore
                        if (typeof ym === 'function' && (window as any).YM_ID) {
                          // @ts-ignore
                          ym((window as any).YM_ID, 'reachGoal', 'click_contact', { channel: option.name });
                        }
                        // GA4
                        // @ts-ignore
                        if (typeof gtag === 'function') {
                          // @ts-ignore
                          gtag('event', 'click_contact', { channel: option.name });
                        }
                      } catch {}
                    }}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left h-auto p-3 hover:bg-muted/50"
                    >
                      <span className="text-lg mr-3">{option.icon}</span>
                      <div>
                        <div className="font-medium text-sm">{option.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {option.description}
                        </div>
                      </div>
                    </Button>
                  </a>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-border/50">
                <p className="text-xs text-muted-foreground text-center">
                  Мы отвечаем в течение 15 минут в рабочее время
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-14 h-14 rounded-full shadow-lg transition-all duration-300
            ${isOpen 
              ? 'bg-red-500 hover:bg-red-600 rotate-45' 
              : 'bg-gold hover:bg-gold-muted hover:scale-110'
            }
            text-white
          `}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* WhatsApp Web Widget for Desktop */}
      <div className="hidden lg:block fixed bottom-6 left-6 z-40">
        <a
          href="https://wa.me/79120370170?text=Здравствуйте! Интересует изготовление архитектурных форм с уральскими орнаментами."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <span className="text-lg">📱</span>
          <span className="text-sm font-medium">WhatsApp</span>
        </a>
      </div>

      {/* Quick Call Button for Mobile */}
      <div className="lg:hidden fixed bottom-24 right-6 z-40">
        <a
          href="tel:+79120370170"
          className="flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </>
  );
};