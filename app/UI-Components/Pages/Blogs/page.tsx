"use client";

import Image from "next/image";
import Link from "next/link";
import pageBg from "@/public/page-bg.jpg";

import BlogData from "@/app/JsonData/Blogs.json";
import PageHero from "@/app/Components/PageHeroProps/pageheroprops";
import PageIntro from "@/app/Components/PageIntro/PageIntro";

const Blog = () => {
  return (
    <>
      <PageHero
        title="Blog"
        backgroundImage={pageBg.src}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="bg-[#f8f6f1] px-5 py-16 sm:px-8 md:px-12 lg:px-[7%] lg:py-20">
        <div className="mx-auto max-w-[1550px]">
          <PageIntro
            eyebrow="Latest Posts"
            title="Design stories, inspiration, and modern interior ideas"
            desc="Discover elegant insights into spaces that balance comfort, visual clarity, and contemporary living through curated interior design content."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-9">
            {BlogData.map((item) => (
              <article
                key={item.id}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-black/8 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
              >
                <Link
                  href={`/UI-Components/Pages/Blogs/${item.id}`}
                  className="relative block overflow-hidden rounded-[28px] rounded-b-[22px]"
                >
                  <div className="relative aspect-[1.08/1] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-black/10" />
                    <span className="absolute left-4 top-4 inline-flex rounded-full bg-[#caa15b] px-4 py-2 text-xs font-medium text-white shadow-sm sm:left-5 sm:top-5 sm:text-sm">
                      {item.tag}
                    </span>
                  </div>
                </Link>

                <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6 sm:pb-7">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-black/45">
                    <span>
                      by{" "}
                      <span className="font-semibold text-[var(--prim)]">
                        {item.postby}
                      </span>
                    </span>
                    <span className="text-black/20">—</span>
                    <span>{item.date}</span>
                  </div>

                  <h3 className="mt-4 GolosText text-[30px] leading-[1.08] text-[#111111] transition-colors duration-300 group-hover:text-[var(--prim)] sm:text-[34px]">
                    <Link href={`/UI-Components/Blog/${item.id}`}>
                      {item.title}
                    </Link>
                  </h3>

                  <p className="GolosText mt-4 text-sm leading-7 text-black/55 sm:text-base sm:leading-8">
                    {item.desc}
                  </p>

                  <div className="mt-6 pt-2">
                    <Link
                      href={`/UI-Components/Blog/${item.id}`}
                      className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-[#111111] transition-all duration-300 hover:text-[var(--prim)]"
                    >
                      Read More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
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

export default Blog;
