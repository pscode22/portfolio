"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* Profile Pic */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/profile.png"
              alt="Profile Picture"
              width={256}
              height={256}
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover 
                         border-[0.35rem] border-white shadow-xl
                         ring-2 ring-pink-300 dark:ring-purple-700 
                         ring-offset-2 ring-offset-transparent"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-5xl"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Heading */}
      <motion.h1
        className="mb-8 mt-6 px-4 text-2xl sm:text-4xl font-semibold leading-relaxed"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }} // 👈 animates only once, no flicker
      >
        <span className="font-bold">Hello, I&apos;m Praveen.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3 years of experience</span>. I enjoy
        turning ideas into{" "}
        <span className="italic">simple, useful applications</span> and my main
        focus is{" "}
        <span className="underline decoration-2 underline-offset-4">
          React (Next.js)
        </span>
        .
      </motion.h1>

      {/* Buttons & Socials */}
      <motion.div
        className="flex flex-col items-center gap-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        {/* Buttons Group */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          {/* Primary CTA */}
          <Link
            href="#contact"
            className="group px-8 py-3 rounded-xl 
             bg-gradient-to-r from-[#fbe2e3] to-[#dbd7fb] 
             dark:from-[#946263] dark:to-[#676394]
             text-gray-900 dark:text-white font-medium 
             shadow-md hover:shadow-lg hover:scale-105 
             transition duration-300 ease-in-out
             flex items-center gap-2"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here
            <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Secondary CTA */}
          <a
            href="/Resume.pdf"
            download
            className="group px-8 py-3 rounded-xl 
                       bg-white/70 backdrop-blur-md border border-gray-300
                       text-gray-900 hover:text-black hover:bg-white/90
                       dark:bg-white/10 dark:border-white/20 dark:text-white/80 
                       dark:hover:text-white dark:hover:bg-white/20 
                       transition duration-300 ease-in-out
                       flex items-center gap-2"
          >
            Download CV
            <HiDownload className="opacity-70 group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <a
            href="www.linkedin.com/in/praveen-chaudhary-87493b23a"
            target="_blank"
            className="w-14 h-14 flex items-center justify-center 
                       rounded-full bg-white/60 backdrop-blur-md border border-gray-300
                       hover:bg-gray-200 dark:hover:bg-white/20 
                       hover:scale-110 hover:shadow-lg hover:shadow-purple-400/40 
                       transition duration-300 ease-in-out"
          >
            <BsLinkedin className="w-7 h-7 text-gray-800 dark:text-white" />
          </a>
          <a
            href="https://github.com/pscode22"
            target="_blank"
            className="w-14 h-14 flex items-center justify-center 
                       rounded-full bg-white/60 backdrop-blur-md border border-gray-300
                       hover:bg-gray-200 dark:hover:bg-white/20 
                       hover:scale-110 hover:shadow-lg hover:shadow-pink-400/40 
                       transition duration-300 ease-in-out"
          >
            <FaGithubSquare className="w-7 h-7 text-gray-800 dark:text-white" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
