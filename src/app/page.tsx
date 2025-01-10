import { FloatingNav } from "./components/ui/floating-navbar";
import Hero from "./components/ui/Hero";
import { Skills } from "./skills";
import { Projects } from "./project";
import { Contacts } from "./contacts";
import { About } from "./about";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
  ];
  return (
    <main>
      <FloatingNav navItems={navItems}></FloatingNav>
      <Hero></Hero>
      <About></About>
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}
