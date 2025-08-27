import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { Technology } from "@/components/Technology";
import { Gallery } from "@/components/Gallery";
import { PriceCalculator } from "@/components/PriceCalculator";
import { Reviews } from "@/components/Reviews";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";
import { QuickContact } from "@/components/QuickContact";
import { SEOHead } from "@/components/SEOHead";
import { generateLocalBusinessSchema } from "@/lib/seo";

const Index = () => {
  return (
    <>
      <SEOHead 
        title="Уральские узоры ⚡ Архитектурные формы с орнаментами | Екатеринбург 2025"
        description="🏆 Изготавливаем эксклюзивные архитектурные формы с уральскими орнаментами: остановки, павильоны, контейнерные площадки. ✅ Лазерная резка ✅ Монтаж ✅ Гарантия 3 года"
        keywords="архитектурные формы екатеринбург, уральские узоры, лазерная резка металла, остановки общественного транспорта, павильоны парковые, контейнерные площадки"
  canonical="https://art-uu.ru/"
        structuredData={generateLocalBusinessSchema()}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <About />
        <Solutions />
        <Technology />
        <Gallery />
        {/* <PriceCalculator /> */}
        <Reviews />
        <Clients />
        <Footer />
        <QuickContact />
      </div>
    </>
  );
};

export default Index;