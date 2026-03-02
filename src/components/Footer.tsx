'use client';

import Link from 'next/link';
import {
  FileDown,
  MapPin,
  Mail,
  Phone,
  Building2,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-28 px-6 pb-10">
      <div className="max-w-6xl mx-auto rounded-[2rem] border border-black/8 bg-white/70 px-6 py-12 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:px-10">

        {/* Brand Name */}
        <div className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
          Salam Alta&apos;ey
        </div>

        {/* Contact Information */}
        <div className="mt-10 grid gap-6 text-sm text-[var(--foreground)]/70 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-center gap-2 rounded-3xl border border-black/8 bg-white/80 px-4 py-5 dark:border-white/10 dark:bg-white/5">
            <MapPin className="w-4 h-4" />
            <span>Iraq, Baghdad</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-3xl border border-black/8 bg-white/80 px-4 py-5 text-center dark:border-white/10 dark:bg-white/5">
            <Building2 className="w-4 h-4" />
            <span>
              6th Floor, Al-Masar Building
              <br />
              Sinaa&apos;a Street, Baghdad, Iraq
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-3xl border border-black/8 bg-white/80 px-4 py-5 dark:border-white/10 dark:bg-white/5">
            <Phone className="w-4 h-4" />
            <span>+964 773 557 5528</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-3xl border border-black/8 bg-white/80 px-4 py-5 dark:border-white/10 dark:bg-white/5">
            <Mail className="w-4 h-4" />
            <Link
              href="mailto:salamaltaey18@gmail.com"
              className="hover:text-[var(--accent)] transition"
            >
              salamaltaey18@gmail.com
            </Link>
          </div>
        </div>

        {/* Quote */}
        <p className="mt-8 max-w-xl mx-auto text-sm italic text-[var(--foreground)]/60">
          &ldquo;Crafting digital experiences that resonate with purpose.&rdquo;
        </p>

        {/* CV */}
        <div className="mt-8 flex justify-center">
          <a
            href="/Salam-Altaey-CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-[var(--foreground)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:bg-white/5"
          >
            <FileDown className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-black/8 pt-6 text-xs text-[var(--foreground)]/45 dark:border-white/10">
          © {new Date().getFullYear()} Salam Alta&apos;ey. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
