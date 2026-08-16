"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type DropdownItem = {
  label: string;
  href: string;
};

type NavLink = {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/UI-Components/Pages/Services" },
  { label: "Projects", href: "/UI-Components/Projects" },
  { label: "Blogs", href: "/UI-Components/Pages/Blogs" },
  {
    label: "Pages",
    href: "/about",
    dropdown: [
      { label: "About", href: "/UI-Components/Pages/About" },
      { label: "Team", href: "/UI-Components/Pages/Teams" },
      { label: "Gallery", href: "/UI-Components/Pages/Gallery" },

      { label: "404 Page", href: "/UI-Components/Pages/Page404" },
    ],
  },
  { label: "Contact", href: "/UI-Components/Pages/Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<
    Record<string, boolean>
  >({});

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDesktopDropdown(null);
    setMobileDropdowns({});
  }, [pathname]);

  return (
    <header className="fixed left-0 top-0 z-[100] w-full">
      <div className="px-[4%] pt-4 lg:px-[6%]">
        <div
          className={`grid grid-cols-[auto_1fr_auto] items-center rounded-full border px-4 py-3 transition-all duration-500 lg:px-6 ${
            isScrolled
              ? "border-white/20 bg-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl"
              : "border-white/10 bg-white/10 backdrop-blur-md"
          }`}
        >
          <div className="flex items-center">
            <Link
              href="/"
              className="Audiowide text-3xl font-bold text-[var(--black)] lg:text-4xl"
            >
              Ark<span className="text-[var(--prim)]">kan</span>
            </Link>
          </div>

          <nav className="hidden items-center justify-center lg:flex">
            <div className="flex items-center rounded-full border border-black/5 bg-white/60 px-3 py-2 shadow-[0_6px_20px_rgba(0,0,0,0.04)] backdrop-blur-md">
              {navLinks.map((link) => {
                const activeParent =
                  isLinkActive(link.href) ||
                  link.dropdown?.some((item) => isLinkActive(item.href));

                if (link.dropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setDesktopDropdown(link.label)}
                      onMouseLeave={() => setDesktopDropdown(null)}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setDesktopDropdown((prev) =>
                            prev === link.label ? null : link.label,
                          )
                        }
                        className={`flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-300 ${
                          activeParent
                            ? "text-[var(--prim)]"
                            : "text-[var(--black)] hover:text-[var(--prim)]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <i
                          className={`ri-arrow-down-s-line text-lg transition-transform duration-300 ${
                            desktopDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`absolute left-1/2 top-[125%] min-w-[260px] -translate-x-1/2 overflow-hidden rounded-[24px] border border-black/10 bg-white/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-all duration-300 ${
                          desktopDropdown === link.label
                            ? "visible translate-y-0 opacity-100"
                            : "invisible translate-y-2 opacity-0"
                        }`}
                      >
                        {link.dropdown.map((item) => {
                          const isActive = isLinkActive(item.href);

                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-[15px] font-medium transition-all duration-300 ${
                                isActive
                                  ? "bg-[var(--prim)]/8 text-[var(--prim)]"
                                  : "text-[var(--black)] hover:bg-black/5 hover:text-[var(--prim)]"
                              }`}
                            >
                              <span
                                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                  isActive
                                    ? "bg-[var(--prim)] text-white"
                                    : "bg-[var(--prim)]/10 text-[var(--prim)]"
                                }`}
                              >
                                <i className="bi bi-arrow-up-right text-xs" />
                              </span>
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-300 ${
                      activeParent
                        ? "text-[var(--prim)]"
                        : "text-[var(--black)] hover:text-[var(--prim)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="hidden items-center justify-end gap-3 lg:flex">
            <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white/65 px-3 py-2 backdrop-blur-md transition-all duration-300 hover:border-[var(--prim)]/30 hover:bg-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--prim)]/10 text-[var(--prim)]">
                <i className="bi bi-telephone-inbound text-lg" />
              </span>
              <div className="flex flex-col items-start leading-tight">
                <p className="text-xs text-black/45">Call Us Now</p>
                <h3 className="GolosText text-sm font-semibold text-[var(--black)]">
                  +20-508-804
                </h3>
              </div>
            </div>

            <Link
              href="/UI-Components/Pages/Contact"
              className="rounded-full bg-[var(--prim)] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.02] hover:bg-black"
            >
              Get a Quote
            </Link>
          </div>

          <div className="flex justify-end lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/70 text-2xl text-[var(--black)] backdrop-blur-md"
              aria-label="Toggle mobile menu"
            >
              <i
                className={mobileMenuOpen ? "ri-close-line" : "ri-menu-line"}
              />
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            mobileMenuOpen
              ? "mt-3 max-h-[800px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[28px] border border-black/10 bg-white/92 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const activeParent =
                  isLinkActive(link.href) ||
                  link.dropdown?.some((item) => isLinkActive(item.href));

                return (
                  <div key={link.label} className="rounded-2xl">
                    {link.dropdown ? (
                      <>
                        <button
                          type="button"
                          onClick={() => toggleMobileDropdown(link.label)}
                          className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-medium transition-all duration-300 ${
                            activeParent
                              ? "text-[var(--prim)]"
                              : "text-[var(--black)] hover:bg-black/5 hover:text-[var(--prim)]"
                          }`}
                        >
                          <span>{link.label}</span>
                          <i
                            className={`ri-arrow-down-s-line text-lg transition-transform duration-300 ${
                              mobileDropdowns[link.label] ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            mobileDropdowns[link.label]
                              ? "mt-2 max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="flex flex-col gap-1 rounded-2xl bg-black/[0.03] p-2">
                            {link.dropdown.map((item) => {
                              const isActive = isLinkActive(item.href);

                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={`rounded-xl px-3 py-3 text-sm transition-all duration-300 ${
                                    isActive
                                      ? "bg-[var(--prim)]/8 text-[var(--prim)]"
                                      : "text-[var(--black)] hover:bg-white hover:text-[var(--prim)]"
                                  }`}
                                >
                                  {item.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block rounded-2xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                          activeParent
                            ? "text-[var(--prim)]"
                            : "text-[var(--black)] hover:bg-black/5 hover:text-[var(--prim)]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              <div className="mt-3 grid grid-cols-1 gap-3 border-t border-black/10 pt-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-black/[0.03] px-4 py-3">
                  <p className="text-xs text-black/45">Call Us Now</p>
                  <h3 className="GolosText mt-1 text-sm font-semibold text-[var(--black)]">
                    +20-508-804
                  </h3>
                </div>

                <Link
                  href="/contact"
                  className="flex items-center justify-center rounded-2xl bg-[var(--prim)] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-black"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
