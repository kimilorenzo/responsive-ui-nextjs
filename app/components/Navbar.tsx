"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full max-h-10 p-10 flex justify-between items-center top-0 left-0 bg-[#ff4d32]`}>
      <div className={`hover:bg-yellow-100 transition-all ease-in-out rounded-md p-2 group cursor-pointer`}>
        <h1 className={`text-2xl text-yellow-100 group-hover:text-[#ff4d32] transition-all ease-in-out`}>Belajar NextJS</h1>
      </div>

      <div className={`hidden md:flex gap-4 text-yellow-100`}>
        <a href="#home" className="font-bold">
          Home
        </a>
        <a href="#about" className="font-bold">
          About
        </a>
        <a href="#products" className="font-bold">
          Products
        </a>
        <a href="#contacts" className="font-bold">
          Contacts
        </a>
      </div>

      <button className="md:hidden text-2xl" onClick={toggleIsOpen}>
        {isOpen ? "X" : "☰"}
      </button>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 p-4 bg-[#ff4d32] absolute right-0 left-0 top-full">
          <a href="#" className="text-yellow-100">
            Home
          </a>
          <a href="#" className="text-yellow-100">
            About
          </a>
          <a href="#" className="text-yellow-100">
            Products
          </a>
          <a href="#" className="text-yellow-100">
            Contacts
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
