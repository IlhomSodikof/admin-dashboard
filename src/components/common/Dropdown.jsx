import { Bell } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false); // Dropdown ochilgan yoki yopilgan holat
  const dropdownRef = useRef(null); // Dropdown elementini kuzatish uchun ref

  // Dropdownni ochish/yopish uchun funksiya
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Dropdown tashqarisidagi klikni kuzatish
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Tashqaridan bosilsa dropdown yopiladi
    }
  };

  useEffect(() => {
    // "Click" eventni kuzatish
    document.addEventListener('mousedown', handleClickOutside);

    // Eventni tozalash
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  // Animatsiya variantlari
  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <div className="relative block">
      {/* Dropdownni ochuvchi tugma */}
      <div className="btn-ghost relative" onClick={toggleDropdown}>
        <Bell size={20} className="text-orange-500" />
        <div className="  absolute top-[-1px] left-[0.70rem] p-[0.15rem] rounded-full  bg-base-100"><span className="bg-red-600 rounded-full block w-[0.35rem] h-[0.35rem]"></span></div>
      </div>


      {/* Dropdown menyusi */}
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          className=" absolute mt-2 w-80 p-3 bg-base-100 flex flex-col gap-1 border border-base-300  rounded shadow-lg "
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={dropdownVariants}
        >

          <div className="collapse collapse-arrow bg-base-100 border  border-gray-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-base-content font-semibold text-[12px]">How do I create an account?</div>
            <div className="collapse-content text-base-content text-[10px] ">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-gray-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-base-content font-semibold text-[12px]">How do I create an account?</div>
            <div className="collapse-content text-base-content text-[10px]">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-gray-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-base-content font-semibold text-[12px]">How do I create an account?</div>
            <div className="collapse-content text-base-content text-[10px]">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-gray-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-base-content font-semibold text-[12px]">How do I create an account?</div>
            <div className="collapse-content text-base-content text-[10px]">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
