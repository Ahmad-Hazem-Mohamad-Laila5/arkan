// finish this page
"use client";

import Image from "next/image";
import Link from "next/link";

import HeroImg from "@/public/Hero-img.jpg";
import HeroImg2 from "@/public/hero-img2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import partner1 from "@/public/partner1.svg";
import partner2 from "@/public/partner2.svg";
import partner3 from "@/public/partner3.svg";
import partner4 from "@/public/partner4.svg";
import partner5 from "@/public/partner5.svg";
import partner6 from "@/public/partner6.svg";

const partners = [partner1, partner2, partner3, partner4, partner5, partner6];

const Hero = () => {
  return (
    <>
      <section className="relative z-[1] flex min-h-[100vh] items-center overflow-hidden px-[6%] py-[100px] lg:px-[10%] lg:py-[0px] mb-[-25px]">
        <div
          className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0)), url('/Hero-bg.png')",
          }}
        ></div>

        <div className="absolute -left-[80px] -top-[120px] -z-20 h-[240px] w-[240px] rounded-full bg-white/75 shadow-[0_0_60px_rgba(131,131,131,0.08)] md:h-[300px] md:w-[300px] lg:h-[360px] lg:w-[360px]"></div>

        <div className="absolute left-[-40px] top-[10%] -z-20 h-[420px] w-[420px] rounded-full bg-[#c3c3c3]/10 blur-[4px] shadow-[0_0_60px_rgba(131,131,131,0.04)] lg:left-[6%] lg:top-[8%] lg:h-[620px] lg:w-[620px]"></div>

        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-10">
          <div className="relative z-10 max-w-[720px]">
            <span className="GolosText inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white/60 px-4 py-3 text-[14px] font-bold text-[var(--black)] shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[var(--prim)]"></span>
              Trusted Design Partner
            </span>

            <h1 className="CalSans mt-6 max-w-[9ch] text-[clamp(3rem,7vw,5rem)] leading-[0.99] tracking-[-0.04em] text-[var(--black)]">
              Find Your Inspired{" "}
              <span className="text-[var(--prim)]">Interior Design</span>
            </h1>

            <p className="GolosText mt-6 w-full max-w-[620px] text-[clamp(1rem,1.3vw,1.1rem)] leading-[1.9] text-black/65">
              Whether it’s your home, office, or a commercial project, we are
              always dedicated to bringing your vision to life with elegant,
              functional, and modern interior solutions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/UI-Components/Pages/Contact"
                className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[var(--prim)] px-6 text-white shadow-[0_14px_35px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[var(--black)]"
              >
                Get Started
                <i className="bi bi-arrow-right"></i>
              </Link>

              <Link
                href="/UI-Components/Projects"
                className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-black/10 bg-white/65 px-6 text-[var(--black)] backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-[var(--black)] hover:text-white"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="relative z-10 lg:flex lg:justify-end">
            <div className="relative mx-auto w-full max-w-[620px] lg:mx-0 lg:w-[min(100%,590px)] lg:-translate-y-[-40px]">
              <Image
                src={HeroImg}
                alt="Modern interior design"
                priority
                className="h-auto w-full rounded-[24px] object-cover shadow-[0_24px_60px_rgba(0,0,0,0.12)] lg:rounded-[32px]"
              />

              <div className="hidden lg:flex absolute top-[216px] left-[10px] h-[82px] w-[82px] overflow-hidden rounded-full border-[4px] border-white/90 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.12)] sm:bottom-[14px] sm:left-[12px] sm:h-[100px] sm:w-[100px] lg:-left-[42px] lg:bottom-[34px] lg:h-[135px] lg:w-[135px] lg:border-[5px]">
                <Image
                  src={HeroImg2}
                  alt="Interior preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[60px]">
        <div className="px-[6%] lg:px-[10%] ">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            speed={900}
            autoplay={{
              delay: 1600,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1200: { slidesPerView: 5 },
              992: { slidesPerView: 4 },
              640: { slidesPerView: 3 },
              0: { slidesPerView: 2 },
            }}
            className="partner-swiper"
          >
            {partners.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={`partner-${index + 1}`}
                  className="mx-auto h-[40px]  md:h-48 w-auto max-w-full object-contain  transition-all duration-300 hover:scale-[1.03]  sm:h-[30px] lg:h-[48px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Hero;
