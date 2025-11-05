"use client";
import Image from "next/image";
import { LiquidGlass } from "@creativoma/liquid-glass";
import SectionWrapper from "./SectionWrapper";

export default function TechStackSection({ bahasa }: { bahasa: boolean }) {
  return (
    <SectionWrapper title={bahasa ? "Teknologi" : "Tech Stack"}>
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Frontend */}
        <LiquidGlass
          backdropBlur={2}
          tintColor="rgba(255, 255, 255, 0.3)"
          className="max-w-md rounded-xl p-6 hover:scale-110 transition duration-300 ease-in-out"
        >
          <h2 className="mb-4 text-2xl font-bold">Frontend</h2>
          <div className="grid grid-cols-2 gap-2 place-items-center">
            {["/react.png", "/nextjs.png", "/tailwindcss.webp", "/redux.webp"].map(
              (src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="Tech Stack"
                  width={55}
                  height={55}
                  className="rounded-lg hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"
                />
              )
            )}
          </div>
        </LiquidGlass>

        {/* Backend */}
        <LiquidGlass
          backdropBlur={2}
          tintColor="rgba(255, 255, 255, 0.3)"
          className="max-w-md rounded-xl p-6 hover:scale-110 transition duration-300 ease-in-out"
        >
          <h2 className="mb-4 text-2xl font-bold">Backend</h2>
          <div className="grid grid-cols-3 gap-2 place-items-center">
            {[
              "/nodejs.svg",
              "/express.svg",
              "/postgresql.svg",
              "/prisma.svg",
              "/sequelize2.svg",
              "/myssql.png",
            ].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Tech Stack"
                width={50}
                height={50}
                className="rounded-lg hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"
              />
            ))}
          </div>
        </LiquidGlass>
      </div>
    </SectionWrapper>
  );
}
