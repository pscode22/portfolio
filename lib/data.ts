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
    name: "About",
    hash: "#about",
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Development Internship",
    location: "Remote",
    description:
      "Started my professional journey with a 6-month internship after spending around 5-6 months learning frontend development. During this period, I built a strong foundation in HTML, CSS, and JavaScript — skills I initially began exploring back in college.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Frontend Developer",
    location: "Remote",
    description:
      "Converted my internship into a full-time role as a Frontend Developer. Over the next two years, I honed my ability to write clean, maintainable code and gained experience solving complex business problems using modern tools and best practices.",
    icon: React.createElement(FaLaptopCode),
    date: "2023 – 2026",
  },
  {
    title: "MERN Stack Developer",
    location: "Remote / Open to Opportunities",
    description:
      "While working as a frontend developer, I expanded into MERN stack development — mastering backend technologies and frameworks such as Next.js over several months. Since then, I’ve built multiple MERN projects and seeking new opportunities.",
    icon: React.createElement(SiNextdotjs),
    date: "2026 – Present",
  },
] as const;
export const projectsData = [
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
    link : "https://payment-app-mocha.vercel.app/"
  },
  {
    title: "PetSoft",
    description:
      "SaaS app for handling pet-related information in one clean system. Where pet care stays organized.",
    tags: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Tailwind CSS"],
    imageUrl: petsoftImg,
    link : "https://petsoft-eight.vercel.app/"
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
    link : "https://second-brain-lemon-eight.vercel.app/"
  },
] as const;

