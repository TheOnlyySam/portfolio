/* eslint-disable react/no-unescaped-entities */
'use client';

import Link from 'next/link';
import {
  Github,
  Linkedin,
  FileDown,
  MapPin,
  Mail,
  Phone,
  Building2,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--background)] border-t border-white/10 mt-28 px-6 py-16 text-center">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Brand Name */}
        <div className="text-2xl font-bold text-[var(--foreground)]">
          Salam Alta&apos;ey
        </div>

        {/* Contact Information */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Iraq, Baghdad</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Building2 className="w-4 h-4" />
            <span>
              6th Floor, Al-Masar Building
              <br />
              Sinaa&apos;a Street, Baghdad, Iraq
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+964 773 557 5528</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Mail className="w-4 h-4" />
            <Link
              href="mailto:salamaltaey18@gmail.com"
              className="hover:text-red-500 transition"
            >
              salamaltaey18@gmail.com
            </Link>
          </div>
        </div>

        {/* Quote */}
        <p className="italic text-muted-foreground text-sm max-w-xl mx-auto">
          &ldquo;Crafting digital experiences that resonate with purpose.&rdquo;
        </p>

        {/* Socials & CV */}
        <div className="flex flex-wrap justify-center gap-6 items-center">
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

          {/* ← THIS is the only CV link: */}
          <a
            href="/Salam-Altaey-CV.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm rounded-lg hover:border-red-500 transition"
          >
            <FileDown className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400 dark:text-gray-500 pt-6 border-t border-white/10">
          © {new Date().getFullYear()} Salam Alta&apos;ey. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
