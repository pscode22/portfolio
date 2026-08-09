import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";
import flowPayImg from "@/public/flowpay.png";
import secondBrainImg from "@/public/second-brain.png";
import petsoftImg from "@/public/petsoft.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer | MERN & Next.js",
    location: "Remote / Open to Opportunities",
    description:
      "Building on my professional frontend background, I expanded my expertise into the MERN stack—mastering backend technologies like Node.js, Express, and Next.js. I have spent the last several months building MERN and Nextjs applications and am actively seeking remote opportunities as a frontend developer with hands-on full-stack capabilities.",
    icon: React.createElement(SiNextdotjs),
    date: "2026 – Present",
  },
  {
    title: "Frontend Developer (Promoted from Jr.)",
    location: "Remote",
    description:
      "After proving myself through two 3-month internship extensions, I was brought on full-time as a Jr. Frontend Developer. By writing clean, maintainable code and solving complex business problems in a fast-paced startup environment, I earned a promotion to Frontend Developer within 1.5 years.",
    icon: React.createElement(FaLaptopCode),
    date: "2023 – 2026",
  },
  {
    title: "Frontend Development Intern",
    location: "Remote",
    description:
      "Started my professional journey with an initial 3-month internship after spending 5-6 months learning frontend development. During this time, I built a strong, production-ready foundation in HTML, CSS, and JavaScript—skills I initially began exploring back in college.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
] as const;


export const projectsData = [
  {
    title: "Read Later App",
    description:
      "AI-powered tool that helps users strip clutter from tech blogs and get instant AI takeaways.",
    tags: ["Next.js", "React", "TypeScript", "Better Auth", "Tailwind CSS"],
    imageUrl: flowPayImg,
    link: "https://read-later-app-phi.vercel.app/",
  },
  {
    title: "FlowPay",
    description:
      "Digital payments platform where user can manage accounts, track transactions, and do payments securely.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Zod",
      "Tailwind CSS",
    ],
    imageUrl: flowPayImg,
    link: "https://payment-app-mocha.vercel.app/",
  },
  {
    title: "PetSoft",
    description:
      "SaaS app for handling pet-related information in one clean system. Where pet care stays organized.",
    tags: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Tailwind CSS"],
    imageUrl: petsoftImg,
    link: "https://petsoft-eight.vercel.app/",
  },
  {
    title: "Second Brain",
    description:
      "Lightweight note system helps you keep notes organized and share it with others.",
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    imageUrl: secondBrainImg,
    link: "https://second-brain-lemon-eight.vercel.app/",
  },
] as const;
