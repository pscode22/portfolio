"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "next-themes";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  const getIconStyle = () => ({
    background:
      theme === "light" ? "#ffffff" : "rgba(255,255,255,0.08)",
    color: theme === "light" ? "#374151" : "#d1d5db",
    boxShadow:
      theme === "light"
        ? "0 0 0 4px rgba(0,0,0,0.05)"
        : "0 0 0 4px rgba(255,255,255,0.05)",
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline
        lineColor={theme === "light" ? "#e5e7eb" : "rgba(255,255,255,0.15)"}
      >
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background:
                theme === "light"
                  ? "#f9fafb"
                  : "rgba(255,255,255,0.04)",
              boxShadow:
                theme === "light"
                  ? "0 2px 8px rgba(0,0,0,0.04)"
                  : "0 2px 8px rgba(255,255,255,0.05)",
              border:
                theme === "light"
                  ? "1px solid rgba(0,0,0,0.05)"
                  : "1px solid rgba(255,255,255,0.08)",
              textAlign: "left",
              padding: "1.4rem 2rem",
              color: theme === "light" ? "#111827" : "#e5e7eb",
              borderRadius: "12px",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #d1d5db"
                  : "0.4rem solid rgba(255,255,255,0.2)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              ...getIconStyle(),
              fontSize: "1.4rem",
            }}
          >
            <h3 className="font-semibold capitalize text-lg  tracking-wide">
              {item.title}
            </h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 !mt-1">
              {item.location}
            </p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 leading-relaxed">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
