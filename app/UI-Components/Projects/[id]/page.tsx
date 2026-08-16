"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import ProjectData from "@/app/JsonData/Projects.json";
import pageBg from "@/public/page-bg.jpg";
import gallery1 from "@/public/gallery-1.jpg";
import gallery2 from "@/public/gallery-2.jpg";
import gallery3 from "@/public/gallery-3.jpg";
import gallery4 from "@/public/gallery-4.jpg";
import gallery5 from "@/public/gallery-5.jpg";
import gallery6 from "@/public/gallery-6.jpg";
import PageHero from "@/app/Components/PageHeroProps/pageheroprops";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

const detailPoints = [
  {
    title: "Spatial clarity",
    text: "Open circulation and balanced zoning were used to create a calm, breathable interior flow.",
  },
  {
    title: "Material harmony",
    text: "Natural textures, muted contrasts, and refined finishes establish a timeless visual language.",
  },
  {
    title: "Tailored detailing",
    text: "Custom elements were integrated to support both daily comfort and architectural character.",
  },
  {
    title: "Light strategy",
    text: "Natural and artificial light were layered carefully to enhance mood and spatial depth.",
  },
];

const projectStats = [
  { label: "Area", value: 320, suffix: "m²" },
  { label: "Rooms", value: 8, suffix: "" },
  { label: "Duration", value: 14, suffix: "wk" },
  { label: "Finishes", value: 24, suffix: "+" },
];

const ProjectsDetails = () => {
  const { id } = useParams();
  const project = ProjectData.find((p) => p.id === Number(id));

  const relatedProjects = useMemo(() => {
    return ProjectData.filter((p) => p.id !== Number(id)).slice(0, 6);
  }, [id]);

  if (!project) {
    return (
      <section className="px-5 py-28 text-center sm:px-8 lg:px-[7%]">
        <div className="mx-auto max-w-[720px] rounded-[28px] border border-black/10 bg-white px-6 py-14 shadow-sm">
          <span className="GolosText text-xs uppercase tracking-[0.24em] text-neutral-500">
            Project Archive
          </span>
          <h1 className="CalSans mt-4 text-4xl text-neutral-950 sm:text-5xl">
            Project not found
          </h1>
          <p className="GolosText mx-auto mt-4 max-w-[42ch] text-base leading-8 text-neutral-600">
            The requested project may have been removed or the link may be
            incorrect.
          </p>
          <Link
            href="/projects"
            className="GolosText mt-8 inline-flex items-center rounded-full border border-neutral-900 px-6 py-3 text-sm font-medium text-neutral-950 transition-all duration-300 hover:bg-neutral-950 hover:text-white"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Selected Project"
        title={project.title}
    
        backgroundImage={pageBg.src}
        minHeight="min-h-[72vh]"
        maxWidth="max-w-[900px]"
        titleClassName="CalSans max-w-[12ch]"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />
      <section className="px-5 py-14 sm:px-8 lg:px-[7%] lg:py-20">
        <div className="grid grid-cols-1 gap-6 border-y border-black/10 py-8 md:grid-cols-2 xl:grid-cols-6">
          <div>
            <p className="GolosText text-[11px] uppercase tracking-[0.24em] text-neutral-500">
              Category
            </p>
            <p className="GolosText mt-2 text-lg text-neutral-900">
              {project.tags?.[0] || "Interior Design"}
            </p>
          </div>

          <div>
            <p className="GolosText text-[11px] uppercase tracking-[0.24em] text-neutral-500">
              Style
            </p>
            <p className="GolosText mt-2 text-lg text-neutral-900">
              Contemporary Luxury
            </p>
          </div>

          <div>
            <p className="GolosText text-[11px] uppercase tracking-[0.24em] text-neutral-500">
              Client
            </p>
            <p className="GolosText mt-2 text-lg text-neutral-900">
              Private Residence
            </p>
          </div>

          <div>
            <p className="GolosText text-[11px] uppercase tracking-[0.24em] text-neutral-500">
              Location
            </p>
            <p className="GolosText mt-2 text-lg text-neutral-900">
              Spokane, WA
            </p>
          </div>

          <div>
            <p className="GolosText text-[11px] uppercase tracking-[0.24em] text-neutral-500">
              Scope
            </p>
            <p className="GolosText mt-2 text-lg text-neutral-900">
              Interior & Styling
            </p>
          </div>

          <div>
            <p className="GolosText text-[11px] uppercase tracking-[0.24em] text-neutral-500">
              Year
            </p>
            <p className="GolosText mt-2 text-lg text-neutral-900">
              {project.date}
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px]">
          <Image
            width={900}
            height={980}
            src={project.image}
            alt={project.title}
            className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[760px]"
            priority
          />
        </div>
      </section>
      <section className="px-5 pb-8 sm:px-8 lg:px-[7%]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="GolosText text-[11px] uppercase tracking-[0.24em] text-neutral-500">
              Project Overview
            </span>
            <h2 className="CalSans mt-4 text-4xl leading-[0.98] tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-6xl">
              Designed with depth, calm, and precision
            </h2>
          </div>

          <div>
            <p className="GolosText text-base leading-8 text-neutral-600 sm:text-lg">
              This project was developed to bring together functional planning,
              visual warmth, and a refined modern identity. The final result
              balances openness, comfort, and detail through curated finishes,
              architectural rhythm, and carefully composed focal points.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {detailPoints.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-black/10 bg-neutral-50 p-6"
                >
                  <div className="flex items-start gap-3">
                    <i className="bi bi-check-circle-fill mt-1 text-[var(--prim)]" />
                    <div>
                      <h3 className="GolosText text-lg font-semibold text-neutral-950">
                        {item.title}
                      </h3>
                      <p className="GolosText mt-2 text-sm leading-7 text-neutral-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-16 sm:px-8 lg:px-[7%] lg:py-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {projectStats.map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] border border-black/10 bg-white px-6 py-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <h3 className="GolosText text-4xl font-bold tracking-[-0.04em] text-neutral-950 sm:text-5xl">
                <CountUp
                  start={0}
                  end={item.value}
                  duration={3}
                  enableScrollSpy
                />
                {item.suffix}
              </h3>
              <p className="GolosText mt-3 text-sm uppercase tracking-[0.18em] text-neutral-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="pb-10">
        <div className="px-5 sm:px-8 lg:px-[7%]">
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{ delay: 2200, disableOnInteraction: false }}
            modules={[Autoplay]}
            speed={1100}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 2, spaceBetween: 24 },
            }}
            className="project-gallery-swiper overflow-hidden"
          >
            {galleryImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="overflow-hidden rounded-[28px]">
                  <Image
                    src={img}
                    alt={`Project gallery ${idx + 1}`}
                    width={1200}
                    height={900}
                    className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[560px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="px-5 py-16 sm:px-8 lg:px-[7%] lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="GolosText text-[11px] uppercase tracking-[0.24em] text-neutral-500">
              Related Projects
            </span>
            <h2 className="CalSans mt-4 max-w-[12ch] text-4xl leading-[0.98] tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-6xl">
              Explore more curated spaces
            </h2>
            <p className="GolosText mt-4 max-w-[52ch] text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              Discover other selected projects shaped with the same attention to
              atmosphere, material balance, and elevated interior composition.
            </p>
          </div>

          <Link
            href="/projects"
            className="GolosText inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-neutral-600 transition-all duration-300 hover:text-[var(--prim)]"
          >
            View all projects
            <i className="ri-arrow-right-up-line text-base" />
          </Link>
        </div>

        <div className="mt-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={relatedProjects.length > 3}
            autoplay={{ delay: 2600, disableOnInteraction: false }}
            modules={[Autoplay]}
            speed={900}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 22 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="related-projects-swiper !overflow-visible"
          >
            {ProjectData.map((pro) => (
              <SwiperSlide key={pro.id} className="h-auto">
                <Link
                  href={`/projects/${pro.id}`}
                  className="group block h-full"
                >
                  <article className="h-full overflow-hidden rounded-[26px] border border-black/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                    <div className="relative overflow-hidden">
                      <Image
                        src={pro.image}
                        alt={pro.title}
                        width={900}
                        height={700}
                        className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />

                      <div className="absolute left-5 top-5">
                        <span className="GolosText rounded-full bg-white/92 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-neutral-900 backdrop-blur-sm">
                          {pro.tags?.[0] || "Interior"}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <span className="GolosText text-sm text-neutral-500">
                          {pro.date}
                        </span>
                        <span className="GolosText text-sm text-[var(--prim)] transition-all duration-300 group-hover:translate-x-1">
                          View Project
                        </span>
                      </div>

                      <h3 className="CalSans mt-4 text-3xl leading-[1] tracking-[-0.04em] text-neutral-950">
                        {pro.title}
                      </h3>

                      <p className="GolosText mt-4 max-w-[34ch] text-sm leading-7 text-neutral-600">
                        A refined interior story shaped by thoughtful layout,
                        calm materiality, and contemporary spatial character.
                      </p>
                    </div>
                  </article>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ProjectsDetails;
