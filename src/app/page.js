import Image from "next/image";
import Header from "./Sections/Header/header";
import Hero from "./Sections/Hero/hero";
import Footer from "./Sections/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer/>
    </div>
  );
}
