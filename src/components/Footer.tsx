import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  const content = {
    company: "Уральские узоры",
    description: "Современные решения городской среды с традиционными орнаментами",
    address: "г. Березовский, Свердловской обл., ДНП \"Шишкино\", ул. Сосновая, 23",
    phone: "+7 (912) 037-01-70",
    email: "director@a-96.ru",
    copyright: "© 2024 Уральские узоры. Все права защищены.",
    links: {
      about: "О проекте",
      solutions: "Решения",
      technology: "Технологии",
      contacts: "Контакты"
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center pattern-overlay">
                <span className="text-gold-foreground font-bold text-sm">УУ</span>
              </div>
              <span className="text-xl font-bold">{content.company}</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              {content.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">{content.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">{content.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">{content.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">
              Быстрые ссылки
            </h3>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-primary-foreground/80 hover:text-gold transition-colors text-left"
              >
                {content.links.about}
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="block text-primary-foreground/80 hover:text-gold transition-colors text-left"
              >
                {content.links.solutions}
              </button>
              <button
                onClick={() => scrollToSection('technology')}
                className="block text-primary-foreground/80 hover:text-gold transition-colors text-left"
              >
                {content.links.technology}
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="block text-primary-foreground/80 hover:text-gold transition-colors text-left"
              >
                {content.links.contacts}
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">
              Свяжитесь с нами
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Готовы обсудить ваш проект? Свяжитесь с нами для консультации и разработки индивидуального решения.
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-primary-foreground/60 text-sm">
              {content.copyright}
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-primary-foreground/60 text-sm">
                Сделано с
              </span>
              <div className="w-4 h-4 bg-gold rounded-full pattern-animate"></div>
              <span className="text-primary-foreground/60 text-sm">
                в Екатеринбурге
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};