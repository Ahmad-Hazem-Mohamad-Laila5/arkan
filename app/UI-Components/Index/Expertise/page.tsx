"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import expertise1 from "@/public/expertise1.jpg";
import expertise2 from "@/public/expertise2.jpg";
import expertise3 from "@/public/expertise3.jpg";
import expertise4 from "@/public/expertise4.jpg";

import expertiseSlide1 from "@/public/banner-slide-1.jpg";
import expertiseSlide2 from "@/public/banner-slide-2.jpg";

const expertiseData = [
  {
    id: "1",
    title: "Renovation and Remodeling",
    desc: "Sophisticated upgrades that renew interiors with better flow, higher function, and a more refined visual identity.",
    image: expertise1,
  },
  {
    id: "2",
    title: "Custom Furniture Selection",
    desc: "Curated pieces chosen to complement scale, material harmony, and the character of each living environment.",
    image: expertise2,
  },
  {
    id: "3",
    title: "Lighting Composition",
    desc: "Layered lighting concepts that shape mood, highlight architecture, and improve comfort throughout the space.",
    image: expertise3,
  },
  {
    id: "4",
    title: "Space Styling & Décor",
    desc: "Elegant finishing touches that bring warmth, personality, and editorial balance to every room.",
    image: expertise4,
  },
];

const cardOffsets = ["mt-0", "mt-[22px]", "mt-[44px]", "mt-[66px]"];

const Expertise = () => {
  return (
    <section className="relative overflow-hidden bg-[#241c18] px-[6%] py-20 text-white lg:px-[12%] lg:py-28">
      <div className="relative z-10 mx-auto max-w-[1500px]">
        
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="pt-2">
            <div className="flex items-center gap-4">
              <span className="hidden h-px w-12 bg-gradient-to-r from-transparent to-[var(--prim)]/70 sm:block" />

              <span className="GolosText inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[var(--prim)]" />
                Our expertise
              </span>

              <span className="hidden h-px flex-1 bg-gradient-to-r from-[var(--prim)]/50 to-transparent lg:block" />
            </div>
          </div>

          <div>
            <div className="mb-6 h-px w-24 bg-gradient-to-r from-[var(--prim)] via-white/20 to-transparent" />

            <h2 className="CalSans max-w-[12ch] text-4xl leading-[0.97] text-white md:text-6xl lg:text-7xl">
              Curating the perfect{" "}
              <span className="text-[var(--prim)]">pieces to complete</span>{" "}
              your space
            </h2>

            <p className="GolosText mt-6 max-w-[720px] text-base leading-8 text-white/55 md:text-lg">
              We bring together craftsmanship, proportion, and material warmth
              to deliver interiors that feel elevated, personal, and timeless in
              every detail.
            </p>
          </div>
        </div>

       
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {expertiseData.map((item, index) => (
            <article
              key={item.id}
              className={`group rounded-[28px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.14)] backdrop-blur-[6px] transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06] ${cardOffsets[index]}`}
            >
              <div className="overflow-hidden rounded-[22px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="mt-5">
                <span className="GolosText text-xs uppercase tracking-[0.24em] text-white/35">
                  0{item.id}
                </span>

                <h3 className="CalSans mt-3 border-b border-white/10 pb-5 text-[28px] leading-[1.06] text-white md:text-[32px]">
                  {item.title}
                </h3>

                <p className="GolosText mt-4 text-sm leading-7 text-white/50 md:text-[15px]">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        
        <div className="mt-14 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.20)] md:p-4">
          <div className="overflow-hidden rounded-[24px]">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              speed={500}
            >
              <SwiperSlide>
                <div className="relative h-[280px] md:h-[420px] lg:h-[560px]">
                  <Image
                    src={expertiseSlide1}
                    alt="Luxury interior showcase"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:p-14">
                    <span className="GolosText text-xs uppercase tracking-[0.22em] text-white/60">
                      Signature Selection
                    </span>
                    <h3 className="CalSans mt-3 max-w-[10ch] text-3xl leading-[1] text-white md:text-5xl lg:text-6xl">
                      Crafted interiors with timeless character
                    </h3>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-[280px] md:h-[420px] lg:h-[560px]">
                  <Image
                    src={expertiseSlide2}
                    alt="Modern interior banner"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:p-14">
                    <span className="GolosText text-xs uppercase tracking-[0.22em] text-white/60">
                      Curated Atmosphere
                    </span>
                    <h3 className="CalSans mt-3 max-w-[11ch] text-3xl leading-[1] text-white md:text-5xl lg:text-6xl">
                      Premium spaces shaped by detail and balance
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
