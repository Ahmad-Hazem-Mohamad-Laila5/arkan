"use client";

import Link from "next/link";
import foot from "@/public/footer-bg.jpg";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const supportLinks = [
  { label: "Our Projects", href: "/projects" },
  { label: "Partners", href: "/partners" },
  { label: "Partners Program", href: "/partners-program" },
  { label: "Affiliate Program", href: "/affiliate-program" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Support Center", href: "/support" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(115deg, rgba(7,7,7,0.96), rgba(10,10,10,0.88), rgba(8,8,8,0.94)), url(${foot.src})`,
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_32%),linear-gradient(to_top,rgba(0,0,0,0.45),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 pt-8 sm:px-8 md:px-10 lg:px-[5%] lg:pt-12 xl:px-0">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-10 sm:gap-14 md:grid-cols-2 xl:grid-cols-[1.2fr_0.85fr_0.85fr_1fr] xl:gap-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <h2 className="Audiowide text-[42px] leading-none tracking-[-0.07em] sm:text-[54px]">
                Ark<span className="text-[var(--prim)]">kan</span>
              </h2>
            </Link>

            <p className="GolosText mt-5 max-w-[30ch] text-[15px] leading-7 text-white/72 sm:text-base">
              We transform your vision into beautifully crafted spaces with
              timeless design, premium detailing, and a client-first experience.
            </p>

            <div className="mt-7 space-y-2 text-sm leading-7 text-white/52 sm:text-[15px]">
              <p>5609 E Sprague Ave, Spokane Valley, WA 99212, USA</p>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/42">
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="GolosText inline-flex text-[15px] leading-6 text-white/82 transition-all duration-300 hover:translate-x-1 hover:text-[var(--prim)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/42">
              Resources
            </h3>

            <ul className="space-y-3">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="GolosText inline-flex text-[15px] leading-6 text-white/82 transition-all duration-300 hover:translate-x-1 hover:text-[var(--prim)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="xl:pl-4">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/42">
              Contact
            </h3>

            <a
              href="tel:+10844560789"
              className="CalSans inline-block text-[30px] leading-tight text-[var(--prim)] transition-colors duration-300 hover:text-white sm:text-[38px]"
            >
              +(084) 456-0789
            </a>

            <a
              href="mailto:support@example.com"
              className="GolosText mt-5 block text-[16px] text-white/86 transition-colors duration-300 hover:text-[var(--prim)]"
            >
              support@example.com
            </a>

            <p className="GolosText mt-4 max-w-[26ch] text-sm leading-7 text-white/54">
              Let’s discuss your next interior concept, renovation, or tailored
              spatial transformation.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="GolosText text-sm tracking-[0.08em] text-white/65 transition-colors duration-300 hover:text-[var(--prim)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="my-5 grid grid-cols-1 items-center gap-4 text-center md:grid-cols-3 md:text-left">
          {/* Copyright */}
          <p className="GolosText text-sm leading-6 text-white/45 md:justify-self-start">
            © 2026 Arkkan. All rights reserved.
          </p>

          {/* Developer — Center */}
          <p className="GolosText text-sm leading-6 text-white/45 md:justify-self-center">
            Developed by{" "}
            <a
              href="https://github.com/Ahmad-Hazem-Mohamad-Laila5"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/80 underline decoration-white/30 underline-offset-4 transition-colors duration-300 hover:text-[var(--prim)] hover:decoration-[var(--prim)]"
            >
              Ahmad Hazem Laila
            </a>
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="GolosText inline-flex items-center justify-center gap-2 text-sm text-white/50 transition-all duration-300 hover:text-[var(--prim)] md:justify-self-end"
            aria-label="Back to top"
          >
            Back to top
            <i className="bi bi-arrow-up-right" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
