"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 mb-8 border-b">
      <Link href="/" className="font-bold text-xl">DevPortfolio</Link>
      <ul className="flex gap-6">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={cn("hover:text-primary transition")}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
