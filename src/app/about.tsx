import { ShootingStars } from "./components/ui/shooting-star";
import { StarsBackground } from "./components/ui/stars-background";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section
      id="about"
      className="h-screen bg-slate-950 flex flex-col items-center justify-center relative w-full"
    >
  <Reveal>
  <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        About me
      </h2>
  </Reveal>
<Reveal>
<p className="font-thin text-white text-lg md:text-2xl max-w-5xl mx-auto z-10 text-center">
        {" "}
        I am a dedicated web developer from Indonesia, born on August 18, 2000,
        in Sukabumi. Prior to entering the tech industry, I built a solid
        foundation in sales, working as a cashier and salesperson for six years.
        This experience allowed me to develop strong communication,
        problem-solving, and customer service skills, which have greatly
        contributed to my success in web development. In 2024, I embarked on my
        journey as a web developer, honing my skills in various programming
        languages and frameworks. I have since gained expertise in front-end
        development, with a focus on creating user-friendly and efficient web
        applications. My transition into web development reflects my passion for
        technology and my commitment to continuous learning and growth in the
        ever-evolving digital landscape.
      </p>
</Reveal>
    
      <StarsBackground />
      <ShootingStars />
    </section>
  );
}
