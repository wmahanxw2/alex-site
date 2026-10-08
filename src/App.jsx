import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Services from "./components/Services.jsx";
import Why from "./components/Why.jsx";
import FAQ from "./components/FAQ.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Why />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
