"use client";
import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { Cover } from "./cover";
import { Reveal } from "@/app/reveal";

const COLORS = ["#01efac", "#01cbae", "#2082a6", "#524096", "#5f2a84"];
function Hero() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 text-white"
    >
      <main className="mx-auto h-screen w-full items-center justify-center flex max-sm:flex-col max-md:flex">
        <div className="">
          <article className="text-center text-3xl mt-4 font-thin max-sm:text-xl">
            <Reveal>
              <h4>
                Hello my name is M Rizki Arya Nanda <br /> I'm a
              </h4>
            </Reveal>
            <Cover>Front End Developer</Cover>
          </article>
        </div>
          <aside>
            <div className="rounded mb-7">
        <Reveal>
              <img
                src="/kudeng.png"
                alt=""
                className="w-full max-w-xl mx-auto rounded-md "
              />
        </Reveal>
            </div>
          </aside>
      </main>
    </motion.section>
  );
}

export default Hero;
