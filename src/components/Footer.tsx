import { useState } from "react";
import { MapPin, Phone, Mail, Shield, FileText, Building2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LegalModals, ModalType } from "./LegalModals";

export const Footer = () => {
  const [legalModal, setLegalModal] = useState<ModalType | null>(null);

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
    },
    legal: {
      privacy: "Политика конфиденциальности",
      company: "Реквизиты компании",
      certificates: "Документы",
      guarantees: "Гарантия",
      terms: "Условия использования"
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
          <div className="lg:col-span-1">
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
                <a href="tel:+79120370170" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">{content.phone}</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:director@a-96.ru" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">{content.email}</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
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
                onClick={() => {
                  // Dispatch custom event to open QuickContact
                  window.dispatchEvent(new CustomEvent('openQuickContact'));
                }}
                className="block text-primary-foreground/80 hover:text-gold transition-colors text-left"
              >
                {content.links.contacts}
              </button>
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">
              Документы
            </h3>
            <nav className="space-y-3">
              <a
                href="/privacy-policy.html"
                className="block text-primary-foreground/80 hover:text-gold transition-colors text-left text-sm"
              >
                {content.legal.privacy}
              </a>
              <button
                onClick={() => setLegalModal("company")}
                className="block text-primary-foreground/80 hover:text-gold transition-colors text-left text-sm"
              >
                {content.legal.company}
              </button>
              <button
                onClick={() => setLegalModal("certificates")}
                className="block text-primary-foreground/80 hover:text-gold transition-colors text-left text-sm"
              >
                {content.legal.certificates}
              </button>
              <button
                onClick={() => setLegalModal("guarantees")}
                className="block text-primary-foreground/80 hover:text-gold transition-colors text-left text-sm"
              >
                {content.legal.guarantees}
              </button>
              <a
                href="/terms-of-service.html"
                className="block text-primary-foreground/80 hover:text-gold transition-colors text-left text-sm"
              >
                {content.legal.terms}
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gold">
              Свяжитесь с нами
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Готовы обсудить ваш проект? Свяжитесь с нами для консультации и разработки индивидуального решения.
            </p>
            <Button 
              onClick={() => {
                // Dispatch custom event to open QuickContact
                window.dispatchEvent(new CustomEvent('openQuickContact'));
              }}
              variant="outline" 
              className="w-full bg-background text-foreground hover:bg-muted"
            >
              Связаться с нами
            </Button>
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

      {/* Legal Modals */}
      <LegalModals 
        open={legalModal} 
        onOpenChange={(open) => !open && setLegalModal(null)} 
      />
    </footer>
  );
};