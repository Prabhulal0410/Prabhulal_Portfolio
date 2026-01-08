import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function LnvDigitalExperience() {
  const tasks = [
    {
      text: "Developing responsive and scalable web applications using React.js, Next.js, and Tailwind CSS, ensuring cross-device compatibility and performance optimization.",
    },
    {
      text: "Building and enhancing ERP modules with a strong focus on intuitive UI design, usability, and seamless user experience.",
    },
    {
      text: "Collaborating closely with backend developers to integrate RESTful APIs, ensuring smooth data flow and reliable frontend-backend communication.",
    },
    {
      text: "Actively using Git and GitHub for version control, participating in agile development workflows, code reviews, and feature enhancements.",
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
        <div className="flex w-full flex-col space-y-3">
          <div className="flex flex-col space-y-2">
            {/* Title */}
            <div className="flex items-center justify-between">
              <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
                Frontend Developer Trainee
              </span>
              <span className="text-sm">Ambernath</span>
            </div>

            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span>LNV Digital Systems</span>

              {/* Date */}
              <span>July 2025 – Present</span>
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
                Technologies used: React.js, Next.js, Tailwind CSS, REST APIs,
                Git & GitHub.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
