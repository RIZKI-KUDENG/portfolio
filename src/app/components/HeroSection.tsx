"use client";
import Image from "next/image";

export default function HeroSection({bahasa} : {bahasa: boolean}) {
  return (
    <div
      className="flex justify-between items-center mt-1 max-sm:px-2"
      data-aos="zoom-in"
    >
      <div className="flex justify-center items-center">
        <Image
          src="/IMG_7257.jpg"
          alt="Me"
          className="rounded-full w-20 h-20 md:w-40 md:h-40 object-cover"
          width={100}
          height={100}
          priority
        />
       {bahasa ? (
         <div className="pl-4 text-left">
          <h1 className="text-xl md:text-2xl font-bold">Hi, saya Kudeng</h1>
          <p className="text-gray-600 text-[10px] md:text-lg">
            Selamat datang di website portofolio saya!
          </p>
        </div>
       ) : (
         <div className="pl-4 text-left">
          <h1 className="text-xl md:text-2xl font-bold">Hi, I&apos;m Kudeng</h1>
          <p className="text-gray-600 text-[10px] md:text-lg">
            Welcome to my portfolio website!
          </p>
        </div>
       )}
      </div>
      <div>
        <h1 className="text-sm md:text-3xl font-bold text-right">
          Full Stack Developer
        </h1>
      </div>
    </div>
  );
}
