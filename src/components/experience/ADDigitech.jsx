import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function ADDigitech() {
  const tasks = [
    {
      text: "Built responsive and user-friendly websites by converting Figma designs into clean, semantic HTML, CSS, and JavaScript layouts.",
    },
    {
      text: "Ensured cross-browser compatibility and mobile responsiveness to deliver consistent user experiences across devices.",
    },
    {
      text: "Collaborated with designers to accurately implement UI/UX specifications, maintaining pixel-perfect design standards.",
    },
    {
      text: "Optimized website performance and layout structure to improve loading speed and overall usability.",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-between gap-3 px-4 md:px-0 lg:flex-row xl:gap-5"
      >
        <div className="flex w-full flex-col space-y-3 lg:max-w-xl xl:max-w-2xl">
          <div className="flex flex-col space-y-2">
            {/* Title */}
            <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
              Web Design Intern
            </span>

            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span>AD Digitech</span>

              {/* Date */}
              <span>April 2025 – June 2025</span>
            </div>
          </div>

          <div className="flex flex-col space-y-1 text-sm sm:text-base">
            {tasks.map((item, index) => (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowRight className="h-5 w-4 flex-none" />
                <span>{item.text}</span>
              </div>
            ))}

            <div className="flex flex-row space-x-2">
              <ArrowRight className="h-5 w-4 flex-none" />
              <span className="font-bold text-heading">
                Technologies used: HTML, CSS, JavaScript, Figma.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
