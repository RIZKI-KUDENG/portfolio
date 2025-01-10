"use client"
import Image from "next/image";
import { Reveal } from "./reveal";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Contacts() {
useEffect(() => {
AOS.init({
  once: true,
  
});
}, [])
  return (
    <section id="contact" className="bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Feel free to reach out if you have any questions or projects to
              discuss.
            </p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form
            action="https://formspree.io/f/mkggknjk"
            method="POST"
            className="bg-gray-800 p-8 rounded-lg shadow-lg border border-slate-700"
          >
            <div className="mb-4">
              <Reveal>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400"
                >
                  Name
                </label>
              </Reveal>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-3 rounded-md bg-slate-800 text-white border border-slate-700 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <Reveal>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400"
                >
                  Email
                </label>
              </Reveal>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-3 rounded-md bg-slate-800 text-white border border-slate-700 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <Reveal>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400"
                >
                  Message
                </label>
              </Reveal>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full p-3 rounded-md bg-slate-800 text-white border border-slate-700 focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gray-900 text-white rounded-md hover:bg-gray-950 transition"
            >
              Send Message
            </button>
          </form>
          <div className="flex flex-col justify-center bg-gray-800 border border-slate-700 p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Reveal>
                <Image
                  src="/wa.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="mr-4"
                />
              </Reveal>
              <Reveal>
                <a
                  href="https://wa.me/6285156670094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-500 transition"
                >
                  Chat on WhatsApp
                </a>
              </Reveal>
            </div>
            <div className="flex items-center">
              <Reveal>
                <Image
                  src="/ig.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="mr-4"
                />
              </Reveal>
              <Reveal>
                <a
                  href="https://instagram.com/kudeeng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-500 transition"
                >
                  DM on Instagram
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
