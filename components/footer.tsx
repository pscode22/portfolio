import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-gray-400">
      <small className="mb-2 block text-sm">
        &copy; {new Date().getFullYear()} Praveen. All rights reserved.
      </small>
      <p className="text-xs">
        Built with ❤️ using{" "}
        <span className="font-medium">Next.js, TypeScript, Tailwind CSS</span>, and{" "}
        <span className="font-medium">Framer Motion</span>. Deployed on{" "}
        <span className="font-medium">Vercel</span>.
      </p>
    </footer>
  );
}
