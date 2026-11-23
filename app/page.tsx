import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Founder from "@/components/Founder";
import Services from "@/components/Services";
import Commitment from "@/components/Commitment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Founder />
        <Services />
        <Commitment />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
