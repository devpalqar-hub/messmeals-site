import Image from "next/image";
import Header from "./Sections/Header/header";
import Hero from "./Sections/Hero/hero";
import About from "./Sections/About/about";
import Footer from "./Sections/Footer/Footer";
import FeaturesSection from "./Sections/Features/FeaturesSection";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <FeaturesSection />
      <Footer/>
    </div>
  );
}
