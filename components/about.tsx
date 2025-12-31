"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      id="about"
      className="mb-28 max-w-3xl mx-auto text-center leading-relaxed sm:mb-40 scroll-mt-28"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <SectionHeading>About Me</SectionHeading>
      </motion.div>

      {/* First paragraph */}
      <motion.p
        className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.25, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
         After graduating with a degree in{" "}
        <span className="font-medium">Chemistry</span>, I decided to pursue my
        growing interest in programming — and since then, I&apos;ve continued to
        learn, build, and grow in this field. I began with frontend development
        through online platforms like{" "}
        <span className="font-medium">freeCodeCamp</span>,{" "}
        <span className="font-medium">The Odin Project</span>, and various{" "}
        <span className="font-medium">YouTube channels</span>. After securing my
        first job and working for almost 2.5 years, I expanded my skill set
        further through online courses in{" "}
        <span className="font-medium">MERN stack web development</span>.{" "}
        <br />
        What I enjoy most about coding is its{" "}
        <span className="font-medium">problem-solving</span> aspect — nothing
        matches the satisfaction of overcoming a tough challenge. With the help
        of modern tools and <span className="font-medium">AI</span>, building
        innovative solutions has become even more exciting. My core tech stack
        includes <span className="font-medium">React, Next.js, Node.js,</span>{" "}
        and <span className="font-medium">MongoDB</span>, along with experience
        in <span className="font-medium">TypeScript</span> and{" "}
        <span className="font-medium">Prisma</span>. I&apos;m currently seeking
        a <span className="font-medium">full-time role</span> as a MERN stack
        developer to continue creating impactful digital experiences.
      </motion.p>

      {/* Second paragraph */}
      <motion.p
        className="text-base sm:text-lg text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.25, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Outside of coding, I enjoy{" "}
        <span className="font-medium">music, movies,</span> and spending time
        with my dog. I also like{" "}
        <span className="font-medium">learning new things</span> — right now,
        I&apos;m focused on <span className="font-medium">fitness</span>,staying consistent at the{" "}
        <span className="font-medium">gym</span>, and maintaining a balanced
        diet while working toward a better, healthier life.
      </motion.p>
    </section>
  );
}
 