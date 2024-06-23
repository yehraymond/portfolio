"use client";

import Link from "next/link";
import { useState } from "react";
import NavItem from "./NavItem";
import DarkModeBtn from "./DarkModeBtn";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-screen z-10 backdrop-blur-2xl px-4 py-2 justify-between md:items-center md:flex md:px-8`}
    >
      <div>
        <div className="flex items-center justify-between md:block outline-none border-none select-none">
          {/* LOGO */}
          <Link href="/">
            <h2 className="text-2xl text-blue-800 font-bold dark:text-dark">
              RY
            </h2>
          </Link>
          {/* HAMBURGER BUTTON FOR MOBILE */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md outline-none border-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-7 dark:fill-dark"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 dark:fill-dark"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`md:block ${isOpen ? "h-screen ease-in-out" : "hidden"}`}
        >
          <nav className="flex flex-col items-center justify-center h-full">
            <ul
              className={`md:h-auto md:flex font-semibold text-sm text-slate-700`}
            >
              <NavItem
                href="/"
                text="About"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  setIsOpen(false);
                }}
              />
              <NavItem
                href="#experience"
                text="Experience"
                onClick={() => setIsOpen(false)}
              />
              <NavItem
                href="#project"
                text="Project"
                onClick={() => setIsOpen(false)}
              />
              <NavItem
                href="#education"
                text="Education"
                onClick={() => setIsOpen(false)}
              />
              <li className="flex justify-center md:my-2 my-4">
                <DarkModeBtn />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}
