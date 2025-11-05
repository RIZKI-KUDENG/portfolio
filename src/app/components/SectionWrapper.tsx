"use client";
import { LiquidGlass } from "@creativoma/liquid-glass";

export default function SectionWrapper({
  children,
  title,
  aos = "zoom-in",
}: {
  children: React.ReactNode;
  title?: string;
  aos?: string;
}) {
  return (
    <LiquidGlass
      as="div"
      backdropBlur={3}
      tintColor="rgba(100, 200, 255, 0.2)"
      displacementScale={200}
      turbulenceBaseFrequency="0.01 0.01"
      turbulenceSeed={5}
      className="text-center flex flex-col items-center mt-2 md:mt-8 rounded-lg"
      data-aos={aos}
    >
      {title && (
        <h2 className="text-center text-2xl md:text-6xl font-bold py-2">
          {title}
        </h2>
      )}
      {children}
    </LiquidGlass>
  );
}
