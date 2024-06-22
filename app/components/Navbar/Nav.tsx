"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavItem from "./NavItem";

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
            <h2 className="text-2xl text-blue-800 font-bold">RY</h2>
          </Link>
          {/* HAMBURGER BUTTON FOR MOBILE */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md outline-none border-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <Image
                  src="/close.svg"
                  width={30}
                  height={30}
                  alt="close-menu"
                  className="select-none drag-none"
                />
              ) : (
                <Image
                  src="/hamburger-menu.svg"
                  width={30}
                  height={30}
                  alt="hamburger-menu"
                  className="select-none drag-none"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`md:block ${isOpen ? "h-screen ease-in-out" : "hidden"}`}
        >
          <nav className="flex flex-col items-center justify-center">
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
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}
