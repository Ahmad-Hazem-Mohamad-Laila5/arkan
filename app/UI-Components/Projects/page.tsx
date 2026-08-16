"use client";

import Link from "next/link";
import pageBg from "@/public/page-bg.jpg";
import ProjectData from "@/app/JsonData/Projects.json";
import PageHero from "@/app/Components/PageHeroProps/pageheroprops";
import PageIntro from "@/app/Components/PageIntro/PageIntro";

const Projects = () => {
  return (
    <>
      <PageHero
        title="Projects"
        backgroundImage={pageBg.src}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <section className="px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-[7%] lg:py-24 xl:px-[12%]">
        <div className="mx-auto max-w-[1600px]">
          <PageIntro
            eyebrow="Portfolio"
            title="Crafted environments with timeless form and elevated detail"
            desc="Discover elegant insights into spaces that balance comfort, visual clarity, and contemporary living through curated interior design content."
          />
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:gap-y-14 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-16">
            {ProjectData.map((project) => (
              <article key={project.id} className="group">
                <Link
                  href={`/UI-Components/Projects/${project.id}`}
                  className="block"
                >
                  <div className="relative overflow-hidden rounded-[24px] bg-neutral-100 aspect-[4/5]">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-80" />

                    <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2 sm:left-5 sm:top-5">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="GolosText rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all duration-300 group-hover:border-[var(--prim)]/40 group-hover:bg-black/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>

                <div className="pt-5 sm:pt-6">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500 sm:text-xs">
                    <span>{project.location}</span>
                    <span className="h-1 w-1 rounded-full bg-neutral-400" />
                    <span>{project.date}</span>
                  </div>

                  <Link
                    href={`/UI-Components/Projects/${project.id}`}
                    className="block"
                  >
                    <h3 className="GolosText mt-3 text-[26px] leading-tight text-neutral-950 transition-colors duration-300 group-hover:text-[var(--prim)] sm:text-[30px]">
                      {project.title}
                    </h3>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
