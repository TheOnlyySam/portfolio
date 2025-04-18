'use client';

import Link from 'next/link';
import { Github, Linkedin, FileDown } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-28 px-6 py-12 text-center">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Name */}
        <div className="text-[var(--foreground)] font-semibold text-xl">
          Salam Alta&apos;ey
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6">
          <Link
            href="https://github.com/TheOnlyySam"
            target="_blank"
            className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition"
          >
            <Github className="w-5 h-5" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/salam-alta-ey-06216831a/"
            target="_blank"
            className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>

        {/* Quote */}
        <p className="text-sm italic text-muted-foreground">
        </p>

        {/* CV Button */}
        <Link
  href="/Salam-Altaey-CV.pdf"
  download
  className="inline-flex items-center gap-2 px-5 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition"
>
  <FileDown className="w-4 h-4" />
  Download CV
</Link>

        {/* Rights */}
        <div className="text-xs text-gray-400 dark:text-gray-500 pt-4 border-t border-white/10">
          © {new Date().getFullYear()} Salam Alta&apos;ey. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
