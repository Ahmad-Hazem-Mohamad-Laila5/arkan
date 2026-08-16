"use client";

import pageBg from "@/public/page-bg.jpg";
import services1 from "@/public/service-1.jpg";
import services2 from "@/public/service-2.jpg";
import services3 from "@/public/service-3.jpg";
import services4 from "@/public/service-4.jpg";
import services5 from "@/public/service-5.jpg";
import services6 from "@/public/service-6.jpg";
import PageHero from "@/app/Components/PageHeroProps/pageheroprops";
import PageIntro from "@/app/Components/PageIntro/PageIntro";

const servicesData = [
  {
    id: "01",
    image: services1,
    title: "Residential Interior Design",
    desc: "Tailored design services for private homes, including room makeovers and complete home transformations.",
  },
  {
    id: "02",
    image: services2,
    title: "Commercial Space Design",
    desc: "Functional and refined interior concepts for offices, retail environments, and hospitality spaces.",
  },
  {
    id: "03",
    image: services3,
    title: "Space Planning",
    desc: "Thoughtful planning solutions that improve circulation, comfort, and the visual balance of each space.",
  },
  {
    id: "04",
    image: services4,
    title: "Furniture & Decor Selection",
    desc: "Curated furniture, materials, textures, and decorative elements aligned with your brand or lifestyle.",
  },
  {
    id: "05",
    image: services5,
    title: "Renovation Styling",
    desc: "Design guidance for renovation projects, helping transform outdated interiors into timeless environments.",
  },
  {
    id: "06",
    image: services6,
    title: "Custom Interior Concepts",
    desc: "Bespoke concepts crafted from scratch to reflect your taste, goals, and architectural context.",
  },
];

const Services = () => {
  return (
    <>
      <PageHero
        title="Services"
        backgroundImage={pageBg.src}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="px-5 pb-20 pt-20 sm:px-8 md:px-12 lg:px-[7%] lg:pb-24 lg:pt-28 xl:px-[10%]">
        <div className="mx-auto max-w-[1600px]">
          <PageIntro
            eyebrow="Our Services"
            title="Interior design services tailored for modern living"
            desc="Thoughtful interior solutions for residential and commercial spaces, shaped with clarity, elegance, and lasting visual character."
          />

          <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
            {servicesData.map((service) => (
              <article
                key={service.id}
                className="group relative flex min-h-[420px] overflow-hidden rounded-[24px] border border-black/5 bg-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_50px_rgba(0,0,0,0.16)] sm:min-h-[460px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image.src})` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.10),transparent_24%)] opacity-60" />

                <div className="relative z-10 flex w-full flex-col justify-between p-6 sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="GolosText inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-white/18 bg-white/10 px-4 text-sm font-semibold tracking-[0.14em] text-white backdrop-blur-md">
                      {service.id}
                    </span>
                  </div>

                  <div className="translate-y-2 transition-all duration-500 group-hover:translate-y-0">
                    <h3 className="CalSans max-w-[12ch] text-2xl leading-tight text-white sm:text-[30px]">
                      {service.title}
                    </h3>

                    <p className="GolosText mt-4 max-w-[34ch] text-sm leading-7 text-white/74 sm:text-[15px]">
                      {service.desc}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-[var(--prim)]">
                      <span>View Details</span>
                      <i className="ri-arrow-right-up-line text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
