"use client";
import { LiquidGlass } from "@creativoma/liquid-glass";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "Movie App BE",
    desc: "Backend project for Movie App built with Node.js, Express.js, and MySQL. Using Sequelize ORM, JWT, and more.",
    link: "https://github.com/RIZKI-KUDENG/movie-app-advbe",
  },
  {
    title: "Job Finder",
    desc: "Job search project for Sukabumi built with Next.js, TypeScript, and Tailwind CSS.",
    link: "https://lokersukabumi-asik.vercel.app/",
  },
  {
    title: "Movie App FE",
    desc: "Frontend Movie App built with React, Tailwind CSS, React Router, and Redux Toolkit.",
    link: "https://github.com/RIZKI-KUDENG/CHILL-MOVIE-v4/tree/withservice",
  },
  {
    title: "More Projects Coming Soon",
    desc: "Still learning and working on it.",
  },
];
const projectId = [
  {
    title: "Aplikasi Film BE",
    desc: "Proyek backend untuk Aplikasi Film yang dibuat dengan Node.js, Express.js, dan MySQL. Menggunakan Sequelize ORM, JWT, dan lain-lain.",
    link: "https://github.com/RIZKI-KUDENG/movie-app-advbe",
  },
  {
    title: "Pencari Pekerjaan",
    desc: "Proyek pencarian pekerjaan untuk Sukabumi yang dibuat dengan Next.js, TypeScript, dan Tailwind CSS.",
    link: "https://lokersukabumi-asik.vercel.app/",
  },
  {
    title: "Aplikasi Film FE",
    desc: "Aplikasi Film (bagian) frontend yang dibuat dengan React, Tailwind CSS, React Router, dan Redux Toolkit.",
    link: "https://github.com/RIZKI-KUDENG/CHILL-MOVIE-v4/tree/withservice",
  },
  {
    title: "Proyek Lainnya Segera Hadir",
    desc: "Masih belajar dan sedang mengerjakannya.",
  },
];

export default function ProjectsSection({ bahasa }: { bahasa: boolean }) {
    const displayedProject = bahasa ? projectId : projects
  return (
    <SectionWrapper title={bahasa ? "Proyek" : "Projects"}>
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedProject.map((p, i) => (
          <LiquidGlass
            key={i}
            backdropBlur={2}
            tintColor="rgba(255, 255, 255, 0.3)"
            className="max-w-md rounded-xl p-6 hover:scale-110 transition duration-300 ease-in-out hover:drop-shadow-[0_0_15px_rgba(0,0,0)]"
            data-aos="flip-left"
            data-aos-duration="1500"
          >
            <h2 className="mb-4 text-lg md:text-2xl font-bold">{p.title}</h2>
            <p className="mb-2">{p.desc}</p>
            {p.link && (
              <Link href={p.link} target="_blank" className="underline">
                {bahasa ? "Klik disini untuk melihatnya" : "Click here to see"}
              </Link>
            )}
          </LiquidGlass>
        ))}
      </div>
    </SectionWrapper>
  );
}
