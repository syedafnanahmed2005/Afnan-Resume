import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Platforms from "@/components/Platforms";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Skills />
        <Tools />
        <Platforms />
        {/* <Education /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
