"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
      <Link href="/" className="text-xl font-bold">
        My Portfolio
      </Link>
      <div className="flex items-center space-x-6">
        <Link href="/about" className="hover:text-purple-400">About</Link>
        <Link href="/skills" className="hover:text-purple-400">Skills</Link>
        <Link href="/contact" className="hover:text-purple-400">Contact</Link>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="border px-2 py-1 rounded text-sm"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
}
