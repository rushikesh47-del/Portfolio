import React, { useEffect } from "react";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Contact from "./component/Contact"; // ✅ import contact

import "./index.css";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: targetElement, offsetY: 0 },
            ease: "power2.inOut",
          });
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="project">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact"> {/* ✅ add section with id */}
        <Contact />
      </section>
    </>
  );
}

export default App;
