"use client";

import { Laptop2, Link } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow-xs">
      <div className="justify-between px-4  lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex font-serif italic font-bold text-[#083f99]">
              @KTW
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#083f99]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#083f99]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 text-[#083f99] text-sm   ${
              navbar ? "block" : "hidden"
            }`}
          >
            <a
              href="#about"
              className="hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md "
            >
              About
            </a>
            <a
              href="#education"
              className="hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              Education
            </a>
            <a
              href="#skills"
              className="hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              Experiences
            </a>
            <a
              href="#projects"
              className="hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              Projects
            </a>
            <a
              href="#contacts"
              className="hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              Contacts
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
