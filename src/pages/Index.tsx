import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import About from "@/components/About";
import MetodoCrear from "@/components/MetodoCrear";
import CoachingSessions from "@/components/CoachingSessions";
import ForWhom from "@/components/ForWhom";
import Services from "@/components/Services";
import Resources from "@/components/Resources";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ValueProposition />
      <About />
      <MetodoCrear />
      <CoachingSessions />
      <ForWhom />
      <Services />
      <Resources />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
