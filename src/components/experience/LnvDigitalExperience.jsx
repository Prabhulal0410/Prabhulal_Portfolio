import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function LnvDigitalExperience() {
  const developerTasks = [
    {
      text: "Building and maintaining production-ready frontend features using React.js and Next.js, with a focus on performance, scalability, and long-term maintainability.",
    },
    {
      text: "Enhancing existing ERP modules by improving UI workflows, refactoring components, and ensuring consistency across the application.",
    },
    {
      text: "Integrating RESTful APIs and managing frontend state to support real-time data updates and smooth user interactions in live environments.",
    },
  ];

  const traineeTasks = [
    {
      text: "Implemented UI components and pages using React.js and Next.js under guidance, gaining hands-on experience in responsive web development.",
    },
    {
      text: "Assisted in ERP module development by supporting API integration, UI testing, and bug fixing in collaboration with senior developers.",
    },
  ];

  return (
    <>
      {/* ===== Frontend Developer (Current Role) ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-between gap-3 px-4 md:px-0 lg:flex-row xl:gap-5"
      >
        <div className="flex w-full flex-col space-y-3">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
                Frontend Developer
              </span>
              <span className="text-sm">Ambernath</span>
            </div>

            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              <span>LNV Digital Systems</span>
              <span>Jan 2026 – Present</span>
            </div>
          </div>

          <div className="flex flex-col space-y-1 text-sm sm:text-base">
            {developerTasks.map((item, index) => (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowRight className="h-5 w-4 flex-none" />
                <span>{item.text}</span>
              </div>
            ))}

            <div className="flex flex-row space-x-2">
              <ArrowRight className="h-5 w-4 flex-none" />
              <span className="font-bold text-heading">
                Technologies used : React.js, Next.js, Tailwind CSS, REST APIs,
                Git & GitHub.
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== Internship Role ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-8 flex flex-col items-center justify-between gap-3 px-4 md:px-0 lg:flex-row xl:gap-5"
      >
        <div className="flex w-full flex-col space-y-3">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
                Frontend Developer Trainee (Internship)
              </span>
              <span className="text-sm">Ambernath</span>
            </div>

            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              <span>LNV Digital Systems</span>
              <span>July 2025 – Dec 2025</span>
            </div>
          </div>

          <div className="flex flex-col space-y-1 text-sm sm:text-base">
            {traineeTasks.map((item, index) => (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowRight className="h-5 w-4 flex-none" />
                <span>{item.text}</span>
              </div>
            ))}

            <div className="flex flex-row space-x-2">
              <ArrowRight className="h-5 w-4 flex-none" />
              <span className="font-bold text-heading">
                Technologies used : React.js, Next.js, Tailwind CSS, REST APIs,
                Git & GitHub.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
