import React from "react";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = "" }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav aria-label="Breadcrumb" className={`flex ${className}`}>
      <ol role="list" className="flex items-center space-x-2 text-sm">
        {/* Home Link */}
        <li>
          <button
            onClick={() => scrollToSection('hero')}
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
            aria-label="Главная страница"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Главная</span>
          </button>
        </li>

        {/* Breadcrumb Items */}
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            <li>
              {item.current ? (
                <span
                  className="text-foreground font-medium"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <button
                  onClick={() => item.href && scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export const generateBreadcrumbSchema = (items: BreadcrumbItem[], baseUrl: string) => {
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": baseUrl
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": item.href ? `${baseUrl}#${item.href}` : undefined
      }))
    ]
  };

  return JSON.stringify(breadcrumbList);
};