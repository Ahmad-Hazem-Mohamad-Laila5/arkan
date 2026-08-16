"use client";

import Link from "next/link";


import test1 from "@/public/team-1.jpg";
import test2 from "@/public/team-2.jpg";

const TestmonialData = [
  {
    id: "1",
    desc: "Their work transformed our home into a space that feels calm, elevated, and incredibly personal. Every detail was handled with care and design intelligence.",
    image: test1,
    name: "Olivie Laurent",
    role: "Co-Founder",
  },
  {
    id: "2",
    desc: "The final result exceeded our expectations. The space feels timeless, refined, and beautifully balanced without losing warmth or functionality.",
    image: test2,
    name: "Emma Riaz",
    role: "Creative Director",
  },
  {
    id: "3",
    desc: "From concept to execution, the entire experience felt premium. The team understood exactly how to translate vision into a polished interior.",
    image: test1,
    name: "Daniel Moreau",
    role: "Property Owner",
  },
];

const Banner = () => {
  return (
    <section className="relative overflow-hidden  py-16 md:py-24 lg:px-[0%] lg:py-28">
      <div
        className="relative overflow-hidden  border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.16)] "
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(20,16,14,0.68), rgba(20,16,14,0.34)), url('/banner.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(193,154,107,0.18),transparent_30%)]"></div>

        <div className="relative z-10 flex min-h-[520px] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[620px] md:px-10 lg:min-h-[760px] lg:px-16">
          <div className="flex items-center gap-4">
            <span className="hidden h-px w-10 bg-gradient-to-r from-transparent to-white/70 sm:block"></span>

            <span className="GolosText inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--prim)]"></span>
              Interior Designs, Crafting
            </span>

            <span className="hidden h-px w-10 bg-gradient-to-l from-transparent to-white/70 sm:block"></span>
          </div>

          <div className="mt-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-[var(--prim)] to-transparent"></div>

          <h1 className="CalSans mt-8 max-w-[12ch] text-5xl leading-[0.95] text-white md:text-7xl lg:text-8xl">
            We Shape Timeless and Inspiring Spaces for{" "}
            <span className="text-[var(--prim)]">Your New Dream</span>
          </h1>

          <p className="GolosText mt-6 max-w-[760px] text-sm leading-8 text-white/75 md:text-lg">
            We create refined interiors that combine warmth, elegance, and
            functionality, delivering spaces that feel elevated from the first
            impression to the smallest detail.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/UI-Components/Pages/Contact"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[var(--prim)] px-7 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_16px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-white hover:text-black"
            >
              Get a Quote
            </Link>

            <Link
              href="/UI-Components/Projects"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/20 bg-white/8 px-7 text-sm font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-white/60">
            <div className="GolosText flex items-center gap-2 text-sm uppercase tracking-[0.14em]">
              <span className="h-2 w-2 rounded-full bg-[var(--prim)]"></span>
              Luxury Interiors
            </div>
            <div className="GolosText flex items-center gap-2 text-sm uppercase tracking-[0.14em]">
              <span className="h-2 w-2 rounded-full bg-[var(--prim)]"></span>
              Bespoke Styling
            </div>
            <div className="GolosText flex items-center gap-2 text-sm uppercase tracking-[0.14em]">
              <span className="h-2 w-2 rounded-full bg-[var(--prim)]"></span>
              End-to-End Design
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Banner;
