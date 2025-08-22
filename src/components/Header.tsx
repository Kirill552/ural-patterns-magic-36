import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = {
    about: "О проекте",
    solutions: "Решения", 
    technology: "Технологии",
    gallery: "Галерея",
    calculator: "Калькулятор",
    reviews: "Отзывы",
    clients: "Для кого",
    legal: "Документы",
    contacts: "Контакты"
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center pattern-overlay">
              <span className="text-gold-foreground font-bold text-sm">УУ</span>
            </div>
            <span className="text-xl font-bold text-foreground">Уральские узоры</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {navigation.about}
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {navigation.solutions}
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {navigation.technology}
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {navigation.gallery}
            </button>
            <button 
              onClick={() => scrollToSection('calculator')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {navigation.calculator}
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {navigation.clients}
            </button>
            <button 
              onClick={() => scrollToSection('legal-info')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {navigation.legal}
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {navigation.contacts}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hidden sm:flex items-center space-x-2"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span>{theme === 'dark' ? 'Светлая' : 'Темная'}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {navigation.about}
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {navigation.solutions}
              </button>
              <button 
                onClick={() => scrollToSection('technology')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {navigation.technology}
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {navigation.gallery}
              </button>
              <button 
                onClick={() => scrollToSection('calculator')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {navigation.calculator}
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {navigation.reviews}
              </button>
              <button 
                onClick={() => scrollToSection('clients')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {navigation.clients}
              </button>
              <button 
                onClick={() => scrollToSection('legal-info')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {navigation.legal}
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {navigation.contacts}
              </button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-fit flex items-center space-x-2 mt-4"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span>{theme === 'dark' ? 'Светлая' : 'Темная'}</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};