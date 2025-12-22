"use client";
import { LiquidGlass } from "@creativoma/liquid-glass";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Github } from "lucide-react";

// Data Project Bahasa Inggris
type Project = {
  title: string;
  desc: string;
  link?: string;
  repo?: string;
  tags: string[];
};
const projects: Project[] = [
  {
    title: "Inspage (SaaS Platform)",
    desc: "A production-ready Link-in-Bio platform featuring comprehensive Analytics, Drag-and-Drop customization, and High-Performance caching using Redis. Built for scalability.",
    link: "https://inspage.vercel.app",
    repo: "https://github.com/RIZKI-KUDENG/linkhub",
    tags: ["Next.js 16", "Redis", "Prisma", "PostgreSQL"],
  },
  {
    title: "QR Ordering & POS",
    desc: "An end-to-end digital solution designed to streamline restaurant operations. Built with a Monorepo architecture, it empowers customers to order directly from their tables, synchronizes orders to the kitchen instantly, and simplifies transaction management and shift tracking for cashiers. Eliminates manual errors and accelerates service speed.",
    repo: "https://github.com/RIZKI-KUDENG/QR-ordering-POS",
    tags: [
      "Next.js 16",
      "Zustand",
      "Tailwind",
      "Monorepo",
      "Prisma",
      "PostgreSQL",
      "Shadcn/UI",
    ],
  },
  {
    title: "Movie App BE",
    desc: "Robust Backend for Movie App built with Node.js, Express.js, and MySQL. Features authentication via JWT and complex queries using Sequelize ORM.",
    repo: "https://github.com/RIZKI-KUDENG/movie-app-advbe",
    tags: ["Express.js", "MySQL", "Sequelize"],
  },
  {
    title: "Job Finder",
    desc: "Job search aggregator for Sukabumi region focused on performance and SEO, built with Next.js and TypeScript.",
    link: "https://lokersukabumi-asik.vercel.app/",
    tags: ["Next.js", "TypeScript", "SEO"],
  },
];

const projectId: Project[] = [
  {
    title: "LinkHub (Platform SaaS)",
    desc: "Platform Link-in-Bio skala produksi dengan fitur Analitik lengkap, kustomisasi Drag-and-Drop, dan caching performa tinggi menggunakan Redis.",
    link: "https://inspage.vercel.app",
    repo: "https://github.com/RIZKI-KUDENG/linkhub",
    tags: ["Next.js 16", "Redis", "Prisma", "PostgreSQL"],
  },
  {
    title: "QR Ordering & POS",
    desc: "Solusi digital end-to-end untuk efisiensi operasional restoran. Dibangun dengan arsitektur Monorepo, aplikasi ini memungkinkan pelanggan memesan langsung dari meja, menyinkronkan pesanan ke dapur secara instan, dan memudahkan kasir dalam manajemen transaksi serta pelacakan shift. Mengeliminasi kesalahan manual dan mempercepat layanan.",
    repo: "https://github.com/RIZKI-KUDENG/QR-ordering-POS",
    tags: [
      "Next.js 16",
      "Zustand",
      "Tailwind",
      "Monorepo",
      "Prisma",
      "PostgreSQL",
      "Shadcn/UI",
    ],
  },
  {
    title: "Aplikasi Film BE",
    desc: "Backend yang kuat untuk Aplikasi Film, dibangun dengan Node.js & Express. Menggunakan JWT untuk keamanan dan Sequelize ORM untuk manajemen database.",
    repo: "https://github.com/RIZKI-KUDENG/movie-app-advbe",
    tags: ["Express.js", "MySQL", "Sequelize"],
  },
  {
    title: "Pencari Pekerjaan",
    desc: "Portal pencarian kerja untuk wilayah Sukabumi. Fokus pada kecepatan akses dan SEO menggunakan Next.js.",
    link: "https://lokersukabumi-asik.vercel.app/",
    tags: ["Next.js", "TypeScript", "SEO"],
  },
];

export default function ProjectsSection({ bahasa }: { bahasa: boolean }) {
  const displayedProject = bahasa ? projectId : projects;

  return (
    <SectionWrapper title={bahasa ? "Proyek Unggulan" : "Featured Projects"}>
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedProject.map((p, i) => (
          <LiquidGlass
            key={i}
            backdropBlur={4}
            tintColor="rgba(255, 255, 255, 0.15)"
            className="flex flex-col h-full rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-left"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            {/* Project Title */}
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                {p.title}
              </h2>
            </div>

            {/* Description */}
            <p className="mb-6 text-gray-700 text-sm leading-relaxed flex-grow">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-[10px] font-semibold bg-white/40 rounded-md border border-white/30 text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-auto">
              {p.link && (
                <Link
                  href={p.link}
                  target="_blank"
                  className="flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <ExternalLink />
                </Link>
              )}
              {p.repo && (
                <Link
                  href={p.repo}
                  target="_blank"
                  className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-black transition-colors"
                >
                  <Github />
                </Link>
              )}
            </div>
          </LiquidGlass>
        ))}
      </div>
    </SectionWrapper>
  );
}
