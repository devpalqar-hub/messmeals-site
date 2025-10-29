import Image from "next/image";
import Header from "./Sections/Header/header";
import Hero from "./Sections/Hero/hero";
import Footer from "./Sections/Footer/Footer";
import Contact from "./Sections/Contact/Contact";
import Plans from "./Sections/Plans/Plans";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Plans/>
      <Contact/>
      <Footer/>
    </div>
  );
}
