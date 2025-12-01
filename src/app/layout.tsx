import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: {
    template: "%s | Rizki Kudeng",
    default: "Rizki Kudeng | Full Stack Developer", 
  },
  description: "Portofolio Rizki Kudeng, seorang Full Stack Developer yang ahli dalam membangun aplikasi web modern menggunakan Next.js, React, dan Node.js.",
  

  keywords: ["Rizki Kudeng", "Full Stack Developer", "Portfolio", "Next.js Developer", "Web Developer Indonesia", "React Developer"],
  

  authors: [{ name: "Rizki Kudeng", url: "https://github.com/RIZKI-KUDENG" }],
  creator: "Rizki Kudeng",

  openGraph: {
    title: "Rizki Kudeng | Full Stack Developer",
    description: "Lihat proyek dan pengalaman coding saya. Spesialisasi di ekosistem JavaScript (Next.js, Node.js).",
    url: "https://portfolio-rizki-kudeng.vercel.app/", 
    siteName: "Rizki Kudeng Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Rizki Kudeng Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rizki Kudeng | Full Stack Developer",
    description: "Portofolio Full Stack Developer. Membangun solusi web yang skalabel dan performa tinggi.",
    images: ["/og-image.png"], 
  },

  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
       { url: '/icon.svg' }, 
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden text-gray-950`}
      >
        <div 
          className="bg-[url('/bg2.jpg')] bg-cover bg-center bg-fixed fixed inset-0 z-0 blur-sm opacity-50"
        />
        {children}
      </body>
    </html>
  );
}
