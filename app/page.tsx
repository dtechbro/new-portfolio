import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/projects";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
