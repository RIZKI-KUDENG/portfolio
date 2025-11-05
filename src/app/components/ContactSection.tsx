"use client";
import { LiquidGlass } from "@creativoma/liquid-glass";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

const contacts = [
  { title: "Email", content: "rizkiarya0611@gmail.com" },
  {
    title: "Github",
    link: "https://github.com/RIZKI-KUDENG",
    text: "Click here to see my code",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/m-rizki-arya-nanda-8867b2228/",
    text: "Click here to see my profile",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/kudeeng/",
    text: "Click here to see my profile",
  },
];
const contactsBahasa = [
  { title: "Email", content: "rizkiarya0611@gmail.com" },
  {
    title: "Github",
    link: "https://github.com/RIZKI-KUDENG",
    text: "Klik disini untuk melihatnya",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/m-rizki-arya-nanda-8867b2228/",
    text: "Klik disini untuk melihat profil saya",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/kudeeng/",
    text: "Klik disini untuk melihat profil saya",
  },
];

export default function ContactSection({ bahasa }: { bahasa: boolean }) {
  const displayedContacts = bahasa ? contactsBahasa : contacts
  return (
    <SectionWrapper title={bahasa ? "Kontak" : "Contact"} aos="fade-up">
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedContacts.map((c, i) => (
          <LiquidGlass
            key={i}
            backdropBlur={2}
            tintColor="rgba(255, 255, 255, 0.3)"
            className="max-w-md rounded-xl p-6 hover:scale-110 transition duration-300 ease-in-out"
          >
            <h2 className="mb-4 text-2xl font-bold">{c.title}</h2>
            {c.link ? (
              <Link href={c.link} target="_blank" className="underline">
                {c.text}
              </Link>
            ) : (
              <p>{c.content}</p>
            )}
          </LiquidGlass>
        ))}
      </div>
    </SectionWrapper>
  );
}
