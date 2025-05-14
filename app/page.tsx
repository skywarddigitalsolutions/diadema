import ClientesSection from "./components/clientes";
import ContactCTASection from "./components/contactcta";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import ObrasDestacadas from "./components/obrasdestacadas";
import ObrasHome from "./components/obrashome";
import ScrollIndicator from "./components/scroll-indicator";
import Slides from "./components/slides";
import Stats from "./components/stats";
import Valores from "./components/valores";

export default function Home() {
  return (
   <>
   <ScrollIndicator />
   <Navbar />
   <Hero />
   <Stats />
   <Valores />
   <ObrasHome />
   <ObrasDestacadas />
   <Slides />
   <ClientesSection />
   <ContactCTASection />
  <Footer />
   </>
  );
}
