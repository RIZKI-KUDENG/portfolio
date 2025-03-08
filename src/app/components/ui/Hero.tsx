"use client";
import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import Image from "next/image";

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
  }, [color]);

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 text-white"
    >
      {/* Tulisan besar di belakang */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <h1 className="text-[10rem] font-bold text-yellow-200 opacity-50 max-sm:text-6xl max-md:text-8xl lg:text-[12rem] xl:text-[15rem]">
          RIZKI ARYA <br />FRONT END
        </h1>
      </div>

      {/* Bingkai bulat di belakang gambar */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }} // Opacity dikurangi agar tulisan terlihat
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <div
          className="rounded-full"
          style={{
            width: "355px", // Ukuran bingkai disesuaikan
            height: "355px",
            background: "linear-gradient(45deg,rgb(240, 247, 245),rgb(91, 89, 97))",
            opacity: 0.5, // Opacity bingkai dikurangi
          }}
        ></div>
      </motion.div>

      {/* Gambar di tengah */}
      <div className="absolute inset-0 flex items-center justify-center z-20 mb-20 pb-[50px]">
        <Image
          src="/kudeng.png"
          width={500} // Ukuran gambar disesuaikan
          height={500}
          alt="Gambar Kudeng"
          className="w-full max-w-[500px] mx-auto rounded-md max-sm:opacity-80 max-md:opacity-80" // Lebar gambar dibatasi
        />
      </div>
    </motion.section>
  );
}

export default Hero;