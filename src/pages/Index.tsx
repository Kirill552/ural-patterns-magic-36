import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { Technology } from "@/components/Technology";
import { Gallery } from "@/components/Gallery";
import { Clients } from "@/components/Clients";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Solutions />
      <Technology />
      <Gallery />
      <Clients />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
