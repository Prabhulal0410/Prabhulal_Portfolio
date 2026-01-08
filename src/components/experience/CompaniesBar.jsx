import React from "react";
import { motion } from "framer-motion";

const CompaniesBar = ({ setDescriptionJob }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const companies = [
    {
      name: "LNV Digital Systems",
      job: "LnvDigitalExperience",
    },
    {
      name: "AD Digitech",
      job: "ADDigitech",
    },
  ];

  const ITEM_HEIGHT = 80; // Increased height for better spacing

  return (
    <div className="relative flex w-full lg:w-[320px]">
      {/* Timeline */}
      <div className="relative flex flex-col items-center w-10">
        {/* Static vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-gray-700/40" />

        {/* Animated active indicator */}
        <motion.div
          animate={{ y: activeIndex * ITEM_HEIGHT + 12 }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 30,
          }}
          className="absolute left-1/2 -translate-x-1/2 z-10"
        >
          {/* Glowing dot with pulse animation */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 h-5 w-5 -translate-x-1/2 rounded-full bg-[rgb(49,130,206)]/40 blur-lg" />
            {/* Middle glow */}
            <div className="absolute inset-0 h-4 w-4 -translate-x-1/2 translate-y-[2px] rounded-full bg-[rgb(49,130,206)]/60 blur-md" />
            {/* Main dot */}
            <div className="relative h-3.5 w-3.5 -translate-x-1/2 translate-y-[3px] rounded-full bg-[rgb(49,130,206)] shadow-[0_0_20px_rgba(49,130,206,0.8),0_0_40px_rgba(49,130,206,0.4)]" />
            {/* Inner shine */}
            <div className="absolute top-[4px] left-[1px] h-1.5 w-1.5 rounded-full bg-white/70" />
          </motion.div>
        </motion.div>

        {/* Static dots for inactive items */}
        {companies.map((_, index) => (
          <div
            key={index}
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: `${index * ITEM_HEIGHT + 12}px` }}
          >
            {index !== activeIndex && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0.2 }}
                animate={{ scale: 1, opacity: 0.4 }}
                className="h-2 w-2 -translate-x-1/2 translate-y-[3px] rounded-full bg-gray-600 border border-gray-500/50"
              />
            )}
          </div>
        ))}
      </div>

      {/* Company Names */}
      <div className="flex flex-col gap-3 flex-1">
        {companies.map((company, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.button
              key={company.name}
              onClick={() => {
                setActiveIndex(index);
                setDescriptionJob(company.job);
              }}
              initial={false}
              whileHover={{ x: isActive ? 6 : 3 }}
              animate={{
                opacity: isActive ? 1 : 0.4,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              style={{ height: `${ITEM_HEIGHT}px` }}
              className={`relative flex items-center text-left font-mono text-base lg:text-[16px] transition-all duration-300 px-4 rounded-lg
                ${
                  isActive
                    ? "text-[rgb(49,130,206)] font-medium"
                    : "text-gray-500 hover:text-gray-400"
                }`}
            >
              {/* Active background with border */}
              {isActive && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-[rgb(49,130,206)]/5 rounded-lg border-l-[3px] border-[rgb(49,130,206)]"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{company.name}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default CompaniesBar;