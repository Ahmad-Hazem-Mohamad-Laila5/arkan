"use client";

import Link from "next/link";
import PageHero from "@/app/Components/PageHeroProps/pageheroprops";
import pageBg from "@/public/page-bg.jpg";

const Page404 = () => {
  return (
    <>
      <PageHero
        title="Page 404"
        backgroundImage={pageBg.src}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "/" },
          { label: "Page 404" },
        ]}
      />

      <section className="px-[8%] py-16 lg:px-[12%] lg:py-24">
        <div className="mx-auto flex max-w-[960px] flex-col items-center text-center">
          {/* 404 badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-black/10 px-5 py-2">
            <span className="CalSans text-lg tracking-[0.3em] text-neutral-900">
              404
            </span>
            <span className="GolosText text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Page not found
            </span>
          </div>

          {/* Big 404 heading */}
          <h1 className="CalSans mt-8 text-[clamp(3rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.08em] text-neutral-950">
            This space doesn&apos;t
            <span className="text-[var(--prim)]"> exist yet</span>
          </h1>

          <p className="GolosText mt-6 max-w-[56ch] text-[15px] leading-8 text-neutral-500 sm:text-base">
            The page you&apos;re looking for might have been moved, renamed, or
            never crafted. Use the navigation above, or return to the studio
            homepage to continue exploring our interiors.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="CalSans inline-flex items-center justify-center rounded-full bg-[var(--prim)] px-7 py-3 text-sm text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-neutral-900 hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
            >
              Back to Home
              <i className="bi bi-arrow-right ms-2" />
            </Link>

            <Link
              href="/services"
              className="GolosText inline-flex items-center justify-center rounded-full border border-black/10 px-7 py-3 text-sm font-medium text-neutral-900 transition-all duration-300 hover:border-[var(--prim)] hover:bg-[var(--prim)] hover:text-white"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page404;
