"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import test1 from "@/public/team-1.jpg";
import test2 from "@/public/team-2.jpg";
import testimonialImg from "@/public/testimonial-img.jpg";

const TestmonialData = [
  {
    id: "1",
    desc: "Working with the team was a seamless experience from concept to completion. Every material, proportion, and detail felt intentional, elevated, and perfectly aligned with our vision.",
    image: test1,
    name: "Olivie Laurent",
    role: "Co-Founder",
  },
  {
    id: "2",
    desc: "Their design approach brought warmth, clarity, and sophistication into our home. The final result felt both luxurious and deeply personal without ever feeling excessive.",
    image: test2,
    name: "Emma Riaz",
    role: "Creative Director",
  },
  {
    id: "3",
    desc: "What impressed us most was the balance between elegance and function. The space now feels refined, calm, and genuinely enjoyable to live in every single day.",
    image: test1,
    name: "Daniel Moreau",
    role: "Property Owner",
  },
];

const Testmonial = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f0ea]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[380px] md:min-h-[520px] lg:min-h-[100%]">
          <Image
            src={testimonialImg}
            alt="Luxury interior testimonial showcase"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/15 bg-white/10 p-5 text-white shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur-md md:bottom-8 md:left-8 md:right-8 md:p-6 lg:max-w-[420px]">
            <span className="GolosText text-xs uppercase tracking-[0.2em] text-white/75">
              Client Satisfaction
            </span>
            <h3 className="CalSans mt-3 text-2xl leading-tight md:text-3xl">
              Designed to feel timeless, personal, and elevated
            </h3>
          </div>
        </div>

        <div className="px-[8%] py-16 lg:px-[10%] lg:py-20">
          <div className="flex items-center gap-4">
            <span className="hidden h-px w-12 bg-gradient-to-r from-transparent to-[var(--prim)]/70 sm:block"></span>

            <span className="GolosText inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--black)] shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--prim)]"></span>
              Testimonials
            </span>

            <span className="hidden h-px flex-1 bg-gradient-to-r from-[var(--prim)]/40 to-transparent lg:block"></span>
          </div>

          <div className="mt-8">
            <div className="mb-6 h-[1px] w-24 bg-gradient-to-r from-[var(--prim)] via-black/20 to-transparent"></div>

            <h2 className="CalSans max-w-[12ch] text-4xl leading-[0.97] text-[var(--black)] md:text-6xl">
              Trusted by clients who value{" "}
              <span className="text-[var(--prim)]">detail, balance</span> and
              timeless design
            </h2>
          </div>

          <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:gap-6">
            <div className="flex items-end gap-3">
              <h3 className="CalSans text-5xl leading-none text-[var(--black)] md:text-6xl">
                4.8
              </h3>
              <span className="GolosText mb-1 text-sm uppercase tracking-[0.16em] text-black/45">
                Rating
              </span>
            </div>

            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 rounded-full bg-[var(--prim)] px-3 py-1.5 text-white shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
                <i className="bi bi-star-fill text-xs"></i>
                <i className="bi bi-star-fill text-xs"></i>
                <i className="bi bi-star-fill text-xs"></i>
                <i className="bi bi-star-fill text-xs"></i>
                <i className="bi bi-star-fill text-xs"></i>
              </div>
              <p className="GolosText mt-2 text-sm text-black/50">
                Based on 2,688 reviews
              </p>
            </div>

            <p className="GolosText max-w-[460px] text-sm font-medium leading-7 text-black/60 md:text-base">
              Our clients appreciate thoughtful execution, refined material
              choices, and spaces that feel both luxurious and deeply livable.
            </p>
          </div>

          <div className="mt-10">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={18}
              loop={true}
              speed={900}
              autoplay={{
                delay: 3200,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 1.1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 1.2,
                  spaceBetween: 24,
                },
              }}
              className="testimonial-swiper !pb-12"
            >
              {TestmonialData.map((item) => (
                <SwiperSlide key={item.id}>
                  <article className="rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.05)] md:p-8">
                    <div className="flex items-start justify-between gap-5">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--prim)]/10 text-[var(--prim)]">
                        <i className="bi bi-quote text-xl"></i>
                      </span>

                      <div className="flex items-center gap-1 text-[var(--prim)]">
                        <i className="bi bi-star-fill text-xs"></i>
                        <i className="bi bi-star-fill text-xs"></i>
                        <i className="bi bi-star-fill text-xs"></i>
                        <i className="bi bi-star-fill text-xs"></i>
                        <i className="bi bi-star-fill text-xs"></i>
                      </div>
                    </div>

                    <p className="GolosText mt-6 text-base leading-8 text-black/65 md:text-lg">
                      {item.desc}
                    </p>

                    <div className="mt-8 flex items-center gap-4 border-t border-black/10 pt-5">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full border border-black/10">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <h4 className="CalSans text-2xl text-[var(--black)]">
                          {item.name}
                        </h4>
                        <p className="GolosText text-sm uppercase tracking-[0.15em] text-black/45">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testmonial;
