import Image from "next/image";
import Header from "./Sections/Header/header";
import Hero from "./Sections/Hero/hero";
import About from "./Sections/About/about";
import Footer from "./Sections/Footer/Footer";
import FeaturesSection from "./Sections/Features/FeaturesSection";
import Head from "next/head";

import Contact from "./Sections/Contact/Contact";
import Plans from "./Sections/Plans/Plans";
import HowItWorksSection from "./Sections/HowItWorks/HowItWorksSection";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <FeaturesSection />
      <HowItWorksSection />
      <Plans/>
      <Contact/>
      <Footer/>
    </div>
  );
}
