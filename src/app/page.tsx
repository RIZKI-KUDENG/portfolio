"use client";
import Image from "next/image";
import { LiquidGlass } from "@creativoma/liquid-glass";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
 useEffect(() => {
        AOS.init({
          duration: 500,
          once: true, 
        });
        AOS.refresh(); 
      }, []);
  return (
    <div className="w-full" data-aos="fade-up">
      <LiquidGlass
       tintColor="rgba(255, 255, 255, 0.2)"
        backdropBlur={3}
        className="rounded-3xl md:p-8 border mt-2 md:mt-5 border-white/30 shadow-lg w-full md:w-3/4 mx-auto"
      >
        <div className="flex justify-between items-center mt-1 max-sm:px-2" 
              data-aos="zoom-in"
        >
          <div className="flex justify-center  items-center">
            <Image
              src="/IMG_7257.jpg"
              alt="Me"
              className="rounded-full w-20 h-20 md:w-40 md:h-40 object-cover"
              width={100}
              height={10}
              priority
            />
            <div className="pl-4">
              <h1 className="text-xl md:text-2xl font-bold">
                Hi, I&apos;m Kudeng
              </h1>
              <p className="text-gray-600  text-[10px] md:text-lg">
                Welcome to my portfolio website!
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-sm md:text-3xl font-bold text-right">
              Full Stack Developer
            </h1>
          </div>
        </div>
        <LiquidGlass
          backdropBlur={3}
          tintColor="rgba(100, 200, 255, 0.2)"
          displacementScale={200}
          turbulenceBaseFrequency="0.01 0.01"
          turbulenceSeed={5}
          className="text-center mt-2 md:mt-8 rounded-lg"
          data-aos="zoom-in"
        >
          <h2 className="text-2xl md:text-6xl font-bold py-2">About Me</h2>
          <p className=" text-lg md:mt-3 p-2 hover:drop-shadow-[0_0_15px_rgba(0,0,0)]">
            I am a Fullstack Developer passionate about solving business
            problems with technology. What sets me apart is my 5-year career
            foundation in sales. This background has trained me to be an
            effective communicator, truly understand user needs, and focus on
            the &quot;big picture&quot; of a project, not just the lines of code. I don&apos;t
            just build features; I build solutions that answer business needs.
            Technically, I specialize in the JavaScript ecosystem, building
            end-to-end applications using Reactjs and Node.js/Express.js with
            PostgreSQL/MySql databases. I am seeking an opportunity to join a
            collaborative team where I can contribute, learn, and apply both my
            technical and interpersonal skills to create impactful products.
          </p>
        </LiquidGlass>
        <LiquidGlass
          as="div"
          backdropBlur={3}
          tintColor="rgba(100, 200, 255, 0.2)"
          displacementScale={200}
          turbulenceBaseFrequency="0.01 0.01"
          turbulenceSeed={5}
          className="text-center flex flex-col items-center mt-2 md:mt-8 rounded-lg"
          data-aos="zoom-in"
        >
          <h2 className="text-center text-2xl md:text-6xl font-bold py-2">
            Projects
          </h2>
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <LiquidGlass
            as='div'
              backdropBlur={2}
              tintColor="rgba(255, 255, 255, 0.3)"
              className="max-w-md rounded-xl p-6 hover:scale-110 transition duration-300 ease-in-out hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              <h2 className="mb-4 text-lg md:text-2xl font-bold">Movie App BE</h2>
              <p className="">
                this Backend project for Movie App build with Nodejs, Expressjs,
                and MySql Database. Using Sequelize ORM, JWT for authentication and etc.
              </p>
              <Link href="https://github.com/RIZKI-KUDENG/movie-app-advbe" target="_blank" className="underline">Click here to see the code</Link>
            </LiquidGlass>
            <LiquidGlass
              backdropBlur={2}
              tintColor="rgba(255, 255, 255, 0.3)"
              className="max-w-md rounded-xl p-6 hover:scale-110 transition duration-300 ease-in-out hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              <h2 className="mb-4 text-lg md:text-2xl font-bold">Loker Sukabumi Asik</h2>
              <p className="">
                This is a project to find job in Sukabumi.
                <br />
                build with Nextjs, Typescript and Tailwindcss
              </p>
              <Link href="https://lokersukabumi-asik.vercel.app/" target="_blank" className="underline">Click here to see the Project</Link>
            </LiquidGlass>
            <LiquidGlass
              backdropBlur={2}
              tintColor="rgba(255, 255, 255, 0.3)"
              className="max-w-md rounded-xl p-6 hover:scale-110 transition duration-300 ease-in-out hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              <h2 className="mb-4 text-lg md:text-2xl font-bold">Movie App FE</h2>
              <p className="">
                this project is a movie app with React, Tailwindcss, Routing using react router , Redux toolkit as state management
              </p>
              <Link href="https://github.com/RIZKI-KUDENG/CHILL-MOVIE-v4/tree/withservice" target="_blank" className="underline">Click here to see the code</Link>
            </LiquidGlass>
            <LiquidGlass
              backdropBlur={2}
              tintColor="rgba(255, 255, 255, 0.3)"
              className="max-w-md rounded-xl p-6 hover:scale-110 transition duration-300 ease-in-out hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              <h2 className="mb-4 text-lg md:text-2xl font-bold">More Projects Coming Soon</h2>
              <p className="">
                still learning and working on it
              </p>
            </LiquidGlass>
          </div>
        </LiquidGlass>
        <LiquidGlass as="div"
          backdropBlur={3}
          tintColor="rgba(100, 200, 255, 0.2)"
          displacementScale={200}
          turbulenceBaseFrequency="0.01 0.01"
          turbulenceSeed={5}
          className="text-center flex flex-col items-center mt-2 md:mt-8 rounded-lg"
          data-aos="zoom-in"
        >
          <h2 className="text-center text-2xl md:text-6xl font-bold py-2">
            Tech Stack
          </h2>
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <LiquidGlass
              backdropBlur={2}
              tintColor="rgba(255, 255, 255, 0.3)"
              className="max-w-md rounded-xl p-6 hover:scale-110 transition duration-300 ease-in-out"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              <h2 className="mb-4 text-2xl font-bold">Frontend</h2>
              {/* <p className="">Reactjs, Nextjs, Typescript, Tailwindcss</p> */}
             <div className="grid grid-cols-2 gap-2 place-items-center">
               <Image
              src="/react.png"
              alt="Tech Stack"
              width={55}
              height={55}
              className="rounded-lg w-auto h-auto hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"
              data-aos="zoom-in"
              data-aos-duration="2000"
              />
               <Image
              src="/nextjs.png"
              alt="Tech Stack"
              width={55}
              height={55}
              className="rounded-lg w-auto h-auto hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"
              data-aos="zoom-in"
              data-aos-duration="2000"
              />
              <Image
              src="/tailwindcss.webp"
              alt="Tech Stack"
              width={55}
              height={55}
              className="rounded-lg w-auto h-auto hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"
              data-aos="zoom-in"
              data-aos-duration="2000"
              />
              <Image
              src="/redux.webp"
              alt="Tech Stack"
              width={40}
              height={40}
              className="rounded-lg w-auto h-auto hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"
              data-aos="zoom-in"
              data-aos-duration="2000"
              />
             </div>
            </LiquidGlass>
            <LiquidGlass
              backdropBlur={2}
              tintColor="rgba(255, 255, 255, 0.3)"
              className="max-w-md rounded-xl p-6 hover:scale-110 transition duration-300 ease-in-out"
              data-aos="flip-right"
              data-aos-duration="1500"
            >
              <h2 className="mb-4 text-2xl font-bold">Backend</h2>
              {/* <p className="">Nodejs, Expressjs, PostgreSQL</p> */}
              <div className="grid grid-cols-3 gap-2 place-items-center">
               <Image
              src="/nodejs.svg" 
              alt="Tech Stack"
              width={50}
              height={50}
              className="rounded-lg hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"
              data-aos="zoom-in"
              data-aos-duration="2000"
              />
              <Image
              src="/express.svg"
              alt="Tech Stack"
              width={50}
              height={50}
              className="rounded-lg hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"
              data-aos="zoom-in"
              data-aos-duration="2000"
              />
              <Image
              src="/postgresql.svg" 
              alt="Tech Stack"
              width={50}
              height={50}
              className="rounded-lg hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"
              data-aos="zoom-in"
              data-aos-duration="2000"
              /> <Image
              src="/prisma.svg" 
              alt="Tech Stack"
              width={50}
              height={50}
              className="rounded-lg hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"
              data-aos="zoom-in"
              data-aos-duration="2000"
              /> 
               <Image
               src='/sequelize2.svg'
               alt="Tech Stack"
               width={50}
               height={50}
               className="rounded-lg hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"
               data-aos="zoom-in"
              data-aos-duration="2000"
               />
               <Image
               src='/myssql.png'
               alt="Tech Stack"
               width={50}
               height={50}
               className="rounded-lg hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"

               data-aos="zoom-in"
              data-aos-duration="2000"
               />
              </div>
            </LiquidGlass> 
          </div>
        </LiquidGlass>
        <LiquidGlass
          as="div"
          backdropBlur={3}
          tintColor="rgba(100, 200, 255, 0.2)"
          displacementScale={200}
          turbulenceBaseFrequency="0.01 0.01"
          turbulenceSeed={5}
          className="text-center flex flex-col items-center py-2  mt-2 md:mt-8 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="text-center text-2xl md:text-6xl font-bold py-2">
            Contact
          </h2>
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <LiquidGlass
              backdropBlur={2}
              tintColor="rgba(255, 255, 255, 0.3)"
              className="max-w-md rounded-xl p-6 hover:scale-110 transition duration-300 ease-in-out"
            >
              <h2 className="mb-4 text-2xl font-bold">Email</h2>
              <p className="">
                rizkiarya0611
                <span className="underline"> @gmail.com</span>
              </p>
            </LiquidGlass>
            <LiquidGlass
              backdropBlur={2}
              tintColor="rgba(255, 255, 255, 0.3)"
              className="max-w-md rounded-xl p-6 hover:scale-110 transition duration-300 ease-in-out"
            >
              <h2 className="mb-4 text-2xl font-bold">Github</h2>
              <p className="">
                <Link href="https://github.com/RIZKI-KUDENG" target="_blank" className="underline">Click here to see the code</Link>
              </p>
            </LiquidGlass>
            <LiquidGlass
              backdropBlur={2}
              tintColor="rgba(255, 255, 255, 0.3)"
              className="max-w-md rounded-xl p-6 hover:scale-110 transition duration-300 ease-in-out"
            >
              <h2 className="mb-4 text-2xl font-bold">Linkedin</h2>
              <p className="">
                <Link href="https://www.linkedin.com/in/m-rizki-arya-nanda-8867b2228/" target="_blank" className="underline">Click here to see my profile</Link>
              </p>
            </LiquidGlass>
             <LiquidGlass
              backdropBlur={2}
              tintColor="rgba(255, 255, 255, 0.3)"
              className="max-w-md rounded-xl p-6 hover:scale-110 transition duration-300 ease-in-out"
            >
              <h2 className="mb-4 text-2xl font-bold">Instagram</h2>
              <p className="">
                <Link href="https://www.instagram.com/kudeeng/" target="_blank" className="underline">Click here to see my profile</Link>
              </p>
            </LiquidGlass>
          </div>
        </LiquidGlass>
      </LiquidGlass>
    </div>
  );
}
