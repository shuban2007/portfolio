import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Timeline />
      <Achievements />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
