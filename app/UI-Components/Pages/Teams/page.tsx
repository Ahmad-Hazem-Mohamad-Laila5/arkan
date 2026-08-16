"use client";

import PageHero from "@/app/Components/PageHeroProps/pageheroprops";
import pageBg from "@/public/page-bg.jpg";
import TeamsData from "@/app/JsonData/Teams.json";
import Image from "next/image";

import quote from "@/public/quote.png";
import team1 from "@/public/team-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    image: team1,
    name: "Hela",
    role: "Material Specialist",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore est modi explicabo atque animi porro doloribus libero accusamus obcaecati.",
  },
  {
    id: 2,
    image: team1,
    name: "Adam",
    role: "Lead Designer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore est modi explicabo atque animi porro doloribus libero accusamus obcaecati.",
  },
  {
    id: 3,
    image: team1,
    name: "Sara",
    role: "Project Architect",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore est modi explicabo atque animi porro doloribus libero accusamus obcaecati.",
  },
];

const Teams = () => {
  return (
    <>
      <PageHero
        title="Team"
        backgroundImage={pageBg.src}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "/" },
          { label: "Team" },
        ]}
      />

      {/* Team section */}
      <section className="px-[8%] py-16 pb-0 lg:px-[12%]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full lg:w-[28%] pt-4">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--prim)]" />
              <span className="GolosText inline-flex rounded-full border border-black/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-600">
                Our Best Team
              </span>
            </div>
          </div>

          <div className="w-full lg:w-[72%]">
            <h1 className="CalSans max-w-[16ch] text-[clamp(2.4rem,5vw,5.8rem)] leading-[0.95] tracking-[-0.06em] text-neutral-950">
              Meet the{" "}
              <span className="text-[var(--prim)]">experts behind our</span>{" "}
              interiors
            </h1>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TeamsData.map((team, idx) => (
            <article
              key={idx}
              className="group relative cursor-pointer overflow-hidden rounded-[26px] bg-neutral-100"
            >
              <div className="relative h-[360px] w-full sm:h-[400px]">
                <Image
                  src={team.image}
                  alt={team.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7">
                  <div className="flex items-end justify-between gap-4">
                    <div className="pointer-events-none">
                      <h2 className="CalSans text-2xl text-white sm:text-3xl">
                        {team.name}
                      </h2>
                      <p className="GolosText mt-1 text-sm text-white/80 sm:text-[15px]">
                        {team.role}
                      </p>
                    </div>

                    {/* Social icons — appear on hover */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      {[
                        { icon: "ri-facebook-fill", label: "Facebook" },
                        { icon: "ri-instagram-line", label: "Instagram" },
                        { icon: "ri-linkedin-fill", label: "LinkedIn" },
                      ].map((social) => (
                        <button
                          key={social.icon}
                          aria-label={social.label}
                          className="GolosText flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:border-transparent hover:bg-white hover:text-black sm:h-10 sm:w-10"
                        >
                          <i className={social.icon} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Team testimonials */}
      <section className="mt-20 flex flex-col items-center justify-center px-[8%] py-20 lg:px-[12%]">
        <Image src={quote} alt="quote" width={130} height={130} />

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mt-10 w-full lg:w-[70%]"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center justify-center">
                <p className="GolosText text-center text-xl font-semibold sm:text-2xl">
                  {item.message}
                </p>
                <div className="mt-6 flex items-center gap-5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="rounded-2xl object-cover"
                  />
                  <div>
                    <h2 className="GolosText text-xl font-bold sm:text-2xl">
                      {item.name}
                    </h2>
                    <p className="GolosText text-sm font-medium  sm:text-[15px]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Teams;
