import React, { useState, useEffect, useRef } from "react";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";

const Calendar = () => {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const calendarRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Dropdown tashqarisidan bosilganda yopilishi
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Animatsiya Variantlari
  const digitAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: -14 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <div className="relative flex items-center space-x-4" ref={calendarRef}>
      {/* Calendar Icon */}
      <button
        className="flex items-center justify-center rounded-full p-2 w-11 h-11 text-gray-700 hover:bg-gray-300 bg-base-300 dark:text-gray-300 dark:hover:bg-gray-700"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <CalendarDays size={20} className="text-orange-500" />
      </button>

      {/* Stable Animated Clock */}
      <div className="flex items-center text-2xl font-semibold space-x-1">
        {/* Static Container for Hours */}
        <div className="relative w-[2ch] text-center">
          <motion.span
            key={time.hours}
            className="absolute inset-0 text-gray-800 dark:text-gray-200"
            variants={digitAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {String(time.hours).padStart(2, "0")}
          </motion.span>
        </div>

        <span className="text-gray-500 dark:text-gray-400">:</span>

        {/* Static Container for Minutes */}
        <div className="relative w-[2ch] text-center">
          <motion.span
            key={time.minutes}
            className="absolute inset-0 text-gray-800 dark:text-gray-200"
            variants={digitAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {String(time.minutes).padStart(2, "0")}
          </motion.span>
        </div>

        <span className="text-gray-500 dark:text-gray-400">:</span>

        {/* Static Container for Seconds */}
        <div className="relative w-[2ch] text-center">
          <motion.span
            key={time.seconds}
            className="absolute inset-0 text-gray-800 dark:text-gray-200"
            variants={digitAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {String(time.seconds).padStart(2, "0")}
          </motion.span>
        </div>
      </div>

      {/* Dropdown Calendar */}
      {dropdownOpen && (
        <motion.div
          className="absolute top-12 right-0 w-72 bg-white border dark:bg-gray-800 dark:border-gray-700 rounded-lg p-4 shadow-lg z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <h4 className="mb-2 text-center text-lg font-semibold text-gray-800 dark:text-white">
            Calendar
          </h4>
          <div className="grid grid-cols-7 gap-2 text-center">
            {/* Days of the Week */}
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
              <div
                key={index}
                className="text-xs font-medium text-gray-500 dark:text-gray-400"
              >
                {day}
              </div>
            ))}
            {/* Calendar Dates */}
            {Array.from({ length: 30 }, (_, index) => {
              const date = format(
                new Date(new Date().getFullYear(), new Date().getMonth(), index + 1),
                "yyyy-MM-dd"
              );
              return (
                <div
                  key={index}
                  className={`text-sm font-medium p-2 rounded-md ${date === format(new Date(), "yyyy-MM-dd")
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                    }`}
                >
                  {index + 1}
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Calendar;
