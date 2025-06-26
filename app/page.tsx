import Home from "@/app/_components/Home";
import About from "@/app/_components/About";
import Projects from "@/app/_components/Projects";
import Skills from "@/app/_components/Skills";
import ContactMe from "@/app/_components/ContactMe";
import ScrollToTop from "./_components/ScrollToTop";

export default function Page() {
  return (
    <div className="pt-20 dark:bg-gray-800">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <ContactMe />
      </section>

      <ScrollToTop />
    </div>
  );
}
