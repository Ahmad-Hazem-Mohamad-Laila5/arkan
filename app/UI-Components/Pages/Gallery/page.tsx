"use client";

import { useState } from "react";
import PageHero from "@/app/Components/PageHeroProps/pageheroprops";
import pageBg from "@/public/page-bg.jpg";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import galleryImg1 from "@/public/gallery-img1.jpg";
import galleryImg2 from "@/public/gallery-img2.jpg";
import galleryImg3 from "@/public/gallery-img3.jpg";
import galleryImg4 from "@/public/gallery-img4.jpg";
import galleryImg5 from "@/public/gallery-img5.jpg";
import galleryImg6 from "@/public/gallery-img6.jpg";
import galleryImg7 from "@/public/gallery-img7.jpg";
import galleryImg8 from "@/public/gallery-img8.jpg";
import galleryImg9 from "@/public/gallery-img9.jpg";
import galleryImg10 from "@/public/gallery-img10.jpg";

const slides = [
  { src: galleryImg1.src, alt: "Dining room interior" },
  { src: galleryImg2.src, alt: "Living area" },
  { src: galleryImg3.src, alt: "Kitchen detail" },
  { src: galleryImg4.src, alt: "Bedroom design" },
  { src: galleryImg5.src, alt: "Lobby space" },
  { src: galleryImg6.src, alt: "Workspace" },
  { src: galleryImg7.src, alt: "Hallway lighting" },
  { src: galleryImg8.src, alt: "Bathroom interior" },
  { src: galleryImg9.src, alt: "Concept render" },
  { src: galleryImg10.src, alt: "Material palette" },
];

const Gallery = () => {
  const [index, setIndex] = useState<number>(-1);

  return (
    <>
      <PageHero
        title="Gallery"
        backgroundImage={pageBg.src}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "/" },
          { label: "Gallery" },
        ]}
      />

      <section className="px-[8%] py-16 lg:px-[12%] lg:py-24">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full lg:w-[30%]">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--prim)]" />
              <span className="GolosText text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500">
                Signature Projects
              </span>
            </div>
          </div>

          <div className="w-full lg:w-[70%]">
            <h1 className="CalSans max-w-[18ch] text-[clamp(2.4rem,5vw,5.8rem)] leading-[0.95] tracking-[-0.06em] text-neutral-950">
              A curated glimpse into
              <span className="text-[var(--prim)]"> crafted interiors</span>
            </h1>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              className="group relative overflow-hidden rounded-[26px] bg-neutral-100"
            >
              <div className="relative h-[260px] w-full sm:h-[300px] lg:h-[320px]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4">
                  <p className="GolosText text-sm text-white/80">
                    View full project
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox — full screen preview */}
      <Lightbox
        open={index >= 0}
        index={index}
        slides={slides}
        close={() => setIndex(-1)}
      />
    </>
  );
};

export default Gallery;
