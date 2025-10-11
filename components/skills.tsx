"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/skillData";
import { useSectionInView } from "@/lib/hooks";
import { motion, Variants, useReducedMotion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.06,
        when: "beforeChildren",
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 6, scale: 0.985 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.28, ease: "easeOut" },
    },
  };

  const motionProps = !prefersReducedMotion
    ? { initial: "hidden", whileInView: "show", viewport: { once: false, amount: 0.32 } }
    : {};

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <motion.ul
        className="flex flex-wrap justify-center gap-3 text-lg text-gray-800 dark:text-gray-300"
        variants={container}
        {...motionProps}
      >
        {skillsData.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.li
              key={skill.name ?? index}
              variants={item}
              style={{ willChange: "transform, opacity" }}
              className="flex items-center gap-2 bg-white borderBlack rounded-xl px-5 py-3
                         dark:bg-white/10 dark:text-white/80 shadow-sm hover:shadow-md hover:scale-105
                         transition-transform"
            >
              {/* <Icon className="w-5 h-5 text-gray-700 dark:text-gray-200" /> */}
              {/* <Icon className="w-5 h-5 text-blue-600 dark:text-cyan-400" /> */}
              <Icon className="w-5 h-5 text-indigo-600 dark:text-cyan-400 transition-colors duration-200" />

              {skill.name}
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}