"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-2xl font-serif font-bold text-black">
          Samuel<span className="text-gold">.</span>
        </h1>
        <button
          className="md:hidden text-black"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <div
          className={`${
            open ? "flex" : "hidden"
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-black text-sm`}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-gold transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
