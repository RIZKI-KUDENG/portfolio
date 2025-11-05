"use client";
import SectionWrapper from "./SectionWrapper";

export default function AboutSection({ bahasa }: { bahasa: boolean }) {
  return (
    <SectionWrapper title={bahasa ? "Tentang Saya" : "About Me"}>
      {bahasa ? (
        <p className="text-lg md:mt-3 p-4 hover:drop-shadow-[0_0_15px_rgba(0,0,0)]">
          Saya adalah seorang Fullstack Developer yang bersemangat dalam
          memecahkan masalah bisnis menggunakan teknologi. Yang membedakan saya
          adalah fondasi karier saya selama 5 tahun di bidang sales. Latar
          belakang ini telah melatih saya untuk menjadi komunikator yang
          efektif, memahami kebutuhan pengguna, dan fokus pada &quot;gambaran
          besar&quot; sebuah proyek, bukan hanya pada baris kode. Saya tidak
          hanya membangun fitur; saya membangun solusi yang menjawab kebutuhan
          bisnis. Secara teknis, saya memiliki spesialisasi dalam ekosistem
          JavaScript, membangun aplikasi end-to-end menggunakan Reactjs dan
          Node.js/Express.js dengan database PostgreSQL/MySql. Saya mencari
          peluang untuk bergabung dengan tim yang kolaboratif di mana saya dapat
          berkontribusi, belajar, dan menerapkan keterampilan teknis serta
          interpersonal saya untuk menciptakan produk yang berdampak.
        </p>
      ) : (
        <p className="text-lg md:mt-3 p-4 hover:drop-shadow-[0_0_15px_rgba(0,0,0)]">
          I am a Fullstack Developer passionate about solving business problems
          with technology. What sets me apart is my 5-year career foundation in
          sales. This background has trained me to be an effective communicator,
          truly understand user needs, and focus on the &quot;big picture&quot;
          of a project, not just the lines of code. I don&apos;t just build
          features; I build solutions that answer business needs.
          <br />
          Technically, I specialize in the JavaScript ecosystem, building
          end-to-end applications using Reactjs and Node.js/Express.js with
          PostgreSQL/MySql databases.
        </p>
      )}
    </SectionWrapper>
  );
}
