import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Features from "../components/Features/Features";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="bg-slate-950 text-white">

      <Navbar />

      <Hero />

      <About />

      <Features />

      <HowItWorks />

      <ContactSection />

      <Footer />

    </div>
  );
}

export default Home;