"use client";

import Image from "next/image";

import ServiceData from "@/app/JsonData/Services.json";
import SectionHeader from "@/app/Components/SectionHeader/SectionHeader";

const Services = () => {
  return (
    <section className="relative overflow-hidden px-[6%] py-20 lg:px-[12%] lg:py-28">
      <div className="pointer-events-none absolute bottom-0 left-[8%] hidden select-none text-[110px] font-extrabold uppercase leading-none text-black/[0.04] md:block lg:text-[180px]">
        Olivion
      </div>

      <div
        className="pointer-events-none absolute bottom-[-40px] right-[6%] hidden h-[260px] w-[420px] bg-contain bg-center bg-no-repeat opacity-30 lg:block"
        style={{ backgroundImage: "url('/service-bg.png')" }}
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Our Services"
            title="We shape"
            highlighted="interior designs, crafting"
            suffix="timeless and inspiring spaces"
            align="left"
          />
        </div>

        <div className="flex flex-col">
          {ServiceData.map((service) => (
            <article
              key={service.id}
              className="group grid grid-cols-1 gap-6 border-b border-black/10 py-7 transition-all duration-500 hover:bg-black/[0.02] sm:py-8 lg:grid-cols-[88px_minmax(0,1.2fr)_280px_64px] lg:items-center lg:gap-8"
            >
              <div>
                <span className="CalSans text-3xl text-black/40 md:text-4xl">
                  {service.id}
                </span>
              </div>

              <div className="max-w-[780px]">
                <h3 className="CalSans text-[30px] leading-[1.05] text-[var(--black)] transition-colors duration-300 md:text-[38px] lg:text-[42px] group-hover:text-[var(--prim)]">
                  {service.title}
                </h3>

                <p className="GolosText mt-3 max-w-[62ch] text-sm leading-7 text-black/50 md:text-base md:leading-8">
                  {service.description}
                </p>
              </div>

              <div className="overflow-hidden rounded-[26px] border border-black/10 bg-[#f6f4ef] shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={560}
                  height={420}
                  className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] md:h-[240px] lg:h-[210px]"
                />
              </div>

              <div className="hidden justify-end lg:flex">
                <span className="service-icon flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-lg text-[var(--black)] shadow-[0_8px_20px_rgba(0,0,0,0.03)] transition-all duration-300 group-hover:border-transparent group-hover:bg-[var(--prim)] group-hover:text-white">
                  <i className="bi bi-arrow-up-right" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
