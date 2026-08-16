"use client";

import pageBg from "@/public/page-bg.jpg";
import PageHero from "@/app/Components/PageHeroProps/pageheroprops";

import About2 from "@/public/About-2.jpg";
import About4 from "@/public/About-4.jpg";
import Image from "next/image";
import Link from "next/link";

import HistoryTimeline from "@/app/Components/HistoryTimeline/HistoryTimeline";

import Award1 from "@/public/Award-1.jpg";
import Award2 from "@/public/Award-2.jpg";
import Award3 from "@/public/Award-3.jpg";
import Award4 from "@/public/Award-4.jpg";
import Award5 from "@/public/Award-5.jpg";
import { useState } from "react";
import Expertise from "../../Index/Expertise/page";
import Newsletter from "../../Index/Newsletter/page";

const awardData = [
  {
    year: "2025",
    title: "lorem lorem lorem",
    catrgory: "lorem lorem",
    image: Award1,
  },
  {
    year: "2025",
    title: "lorem lorem lorem",
    catrgory: "lorem lorem",
    image: Award5,
  },
  {
    year: "2025",
    title: "lorem lorem lorem",
    catrgory: "lorem lorem",
    image: Award2,
  },
  {
    year: "2025",
    title: "lorem lorem lorem",
    catrgory: "lorem lorem",
    image: Award3,
  },
  {
    year: "2025",
    title: "lorem lorem lorem",
    catrgory: "lorem lorem",
    image: Award4,
  },
];

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  return (
    <>
      <PageHero
        title="About"
        backgroundImage={pageBg.src}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "/" },
          { label: "About"},
        ]}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-[7%] lg:py-24 xl:px-[10%]">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="max-w-[720px]">
            <span className="GolosText inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500">
              About Olivion
            </span>

            <h1 className="CalSans mt-6 text-[clamp(2.8rem,6vw,6.5rem)] leading-[0.92] tracking-[-0.07em] text-neutral-950">
              Interior spaces
              <span className="block text-[var(--prim)]">
                designed with calm,
              </span>
              clarity, and timeless character
            </h1>

            <p className="GolosText mt-6 max-w-[56ch] text-[15px] leading-8 text-neutral-500 sm:text-base">
              We design elevated interior experiences that combine
              functionality, refined materials, and enduring aesthetics for
              contemporary living.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="GolosText inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[var(--prim)]"
              >
                Explore Studio
                <i className="bi bi-arrow-up-right" />
              </Link>

              <div className="rounded-full border border-black/10 px-5 py-3 text-sm text-neutral-500">
                26+ Years of Experience
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[32px]">
              <Image
                src={About2}
                alt="Luxury interior design project"
                className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[680px]"
                priority
              />
            </div>

            <div className="absolute -bottom-6 left-4 right-4 rounded-[24px] border border-white/50 bg-white/92 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-md sm:left-8 sm:right-auto sm:max-w-[320px] sm:p-6">
              <p className="GolosText text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                Design Approach
              </p>
              <p className="CalSans mt-3 text-2xl leading-tight text-neutral-950">
                Thoughtful interiors shaped for modern, comfortable living
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="video w-full pb-10 px-6">
        <video
          src="/Video-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className=" w-full h-full object-cover"
        ></video>
      </div>
      <HistoryTimeline />

      <section className="px-5 py-16 sm:px-8 lg:px-[7%] lg:py-24 xl:px-[10%]">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="w-full lg:w-[72%]">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-400">
                  Selected Highlights
                </span>
              </div>

              <h2 className="CalSans max-w-[12ch] text-[clamp(2.5rem,5.5vw,6rem)] leading-[0.9] tracking-[-0.07em] text-neutral-950">
                Design that
                <span className="block text-[var(--prim)]">
                  {" "}
                  earns recognition{" "}
                </span>
                through timeless thinking
              </h2>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
            <div className="relative overflow-hidden rounded-[28px] bg-neutral-100">
              <div className="relative h-[320px] w-full sm:h-[420px] lg:h-[560px]">
                {awardData.map((item, idx) => (
                  <Image
                    key={idx}
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={idx === 0}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                      hoveredIndex === idx
                        ? "scale-100 opacity-100"
                        : "scale-[1.03] opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-7">
                  <span className="GolosText text-sm uppercase tracking-[0.18em] text-white/70">
                    Selected Award
                  </span>
                  <h3 className="CalSans mt-3 max-w-[14ch] text-2xl leading-tight text-white sm:text-3xl">
                    {awardData[hoveredIndex].title}
                  </h3>
                </div>
              </div>
            </div>

            <div
              className="divide-y divide-black/10 rounded-[28px] border border-black/8 bg-white"
              onMouseLeave={() => setHoveredIndex(0)}
            >
              {awardData.map((item, idx) => {
                const active = hoveredIndex === idx;

                return (
                  <button
                    key={idx}
                    type="button"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onFocus={() => setHoveredIndex(idx)}
                    onClick={() => setHoveredIndex(idx)}
                    className={`group flex w-full flex-col gap-4 px-5 py-6 text-left transition-all duration-300 sm:px-7 sm:py-7 lg:flex-row lg:items-center lg:justify-between ${
                      active ? "bg-neutral-50" : "bg-white hover:bg-neutral-50"
                    }`}
                  >
                    <div className="flex items-center gap-4 sm:gap-5">
                      <span
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${
                          active
                            ? "bg-[var(--prim)] shadow-[0_0_0_6px_rgba(191,148,92,0.12)]"
                            : "bg-black/15"
                        }`}
                      />

                      <span
                        className={`CalSans text-2xl transition-colors duration-300 sm:text-3xl ${
                          active
                            ? "text-[var(--prim)]"
                            : "text-neutral-400 group-hover:text-neutral-700"
                        }`}
                      >
                        {item.year}
                      </span>
                    </div>

                    <div className="max-w-[28ch] lg:max-w-[34ch]">
                      <h3
                        className={`GolosText text-lg leading-8 transition-colors duration-300 sm:text-xl ${
                          active ? "text-neutral-950" : "text-neutral-700"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="">
        <Expertise />
      </div>

      <Newsletter />
    </>
  );
};

export default About;
