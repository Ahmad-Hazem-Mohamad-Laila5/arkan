"use client";

import { useState } from "react";
import Image from "next/image";
import timeline1 from "@/public/timeline-1.jpg";
import timeline2 from "@/public/timeline-2.jpg";
import timeline3 from "@/public/timeline-3.jpg";
import timeline4 from "@/public/timeline-4.jpg";
const historyData = [
  {
    year: "1998",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta delectus vero incidunt. Aperiam sed error ullam aliquid vel soluta odio nihil sequi neque? Quae rerum culpa inventore omnis at ratione voluptate, veniam ipsum deserunt impedit quas delectus cumque doloribus voluptatum nostrum est tempore porro tenetur iusto vero. Labore, sint earum commodi, similique aperiam sunt eaque soluta quidem nisi quod obcaecati corporis pariatur quibusdam nulla, nostrum praesentium. Magni accusantium aliquid odit id minus commodi voluptate voluptates eos cum ipsa, modi ducimus provident voluptatem sed dolorem soluta, accusamus laboriosam consequuntur rem. Placeat quas earum voluptatibus dolore, magnam ",
    image: timeline1,
  },
  {
    year: "2005",
    text: "Our studio expanded its services, introducing tailored residential design solutions.",
    image: timeline2,
  },
  {
    year: "2012",
    text: "We completed landmark interior projects that shaped our modern design identity.",
    image: timeline2,
  },
  {
    year: "2019",
    text: "A new creative era started with premium commercial and hospitality spaces.",
    image: timeline2,
  },
  {
    year: "2025",
    text: "We continue to craft inspiring interiors with a strong focus on elegance and function.",
    image: timeline2,
  },
];

const HistoryTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = historyData[activeIndex];

  return (
    <section className="px-5 py-16 sm:px-8 lg:px-[7%] lg:py-24 xl:px-[10%]">
      <div className="mx-auto max-w-[1500px]">
        <div className="max-w-[760px]">
          <span className="GolosText text-sm font-semibold uppercase tracking-[0.22em] text-[var(--prim)]">
            Our History
          </span>

          <h2 className="CalSans mt-4 text-[clamp(2.3rem,4vw,4.8rem)] leading-[0.95] tracking-[-0.06em] text-neutral-950">
            A timeline of growth, design, and enduring craftsmanship
          </h2>
        </div>

        <div className="mt-14 overflow-x-auto pb-4">
          <div className="relative min-w-[760px] px-2">
            <div className="absolute left-0 right-0 top-[54px] h-px bg-black/10" />

            <div className="grid grid-cols-5 gap-6">
              {historyData.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.year}
                    onClick={() => setActiveIndex(index)}
                    className="group relative flex min-w-[120px] flex-col items-center text-center"
                  >
                    <span
                      className={`CalSans text-xl transition-all duration-300 sm:text-2xl ${
                        isActive
                          ? "text-[var(--prim)]"
                          : "text-neutral-400 group-hover:text-neutral-800"
                      }`}
                    >
                      {item.year}
                    </span>

                    <span
                      className={`relative z-10 mt-4 flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-[var(--prim)] bg-[var(--prim)] shadow-[0_0_0_6px_rgba(191,148,92,0.12)]"
                          : "border-black/15 bg-white group-hover:border-neutral-700"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          isActive ? "bg-white" : "bg-black/30"
                        }`}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="overflow-hidden rounded-[28px]">
            <Image
              src={activeItem.image}
              alt={`History ${activeItem.year}`}
              width={900}
              height={700}
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
            />
          </div>

          <div>
            <span className="GolosText text-sm uppercase tracking-[0.22em] text-neutral-400">
              Selected Year
            </span>

            <h3 className="CalSans mt-4 text-[clamp(3rem,6vw,6rem)] leading-none tracking-[-0.07em] text-[var(--prim)]">
              {activeItem.year}
            </h3>

            <p className="GolosText mt-6 max-w-[60ch] text-[15px] leading-8 text-neutral-500 sm:text-base">
              {activeItem.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
