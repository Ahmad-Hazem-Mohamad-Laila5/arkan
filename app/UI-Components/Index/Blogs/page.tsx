"use client";

import Image from "next/image";
import Link from "next/link";

import BlogData from "@/app/JsonData/Blogs.json";
import SectionHeader from "@/app/Components/SectionHeader/SectionHeader";

const featuredPost = BlogData[0];
const sidePosts = BlogData.slice(1, 4);

const Blog = () => {
  return (
    <section className="px-[6%] py-8 lg:px-[12%] lg:py-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Journal & Insights"
            title="Design stories, ideas, and"
            highlighted="timeless inspiration"
            suffix="from the studio"
            align="left"
          />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          {featuredPost && (
            <article className="group">
              <Link
                href={`/UI-Components/Blogs/${featuredPost.id}`}
                className="block"
              >
                <div className="overflow-hidden rounded-[30px] border border-black/10 bg-[#f7f3ee] shadow-[0_18px_45px_rgba(0,0,0,0.05)]">
                  <div className="relative overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      width={1200}
                      height={900}
                      className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] md:h-[460px] xl:h-[500px]"
                    />

                    <span className="GolosText absolute left-5 top-5 rounded-full bg-[var(--prim)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_25px_rgba(0,0,0,0.10)]">
                      {featuredPost.tag}
                    </span>
                  </div>

                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="GolosText flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-black/45">
                      <span>
                        By{" "}
                        <span className="font-semibold text-[var(--prim)]">
                          {featuredPost.postby}
                        </span>
                      </span>
                      {featuredPost.date && <span>{featuredPost.date}</span>}
                    </div>

                    <h3 className="CalSans mt-4 text-3xl leading-[1.03] text-[var(--black)] transition-colors duration-300 group-hover:text-[var(--prim)] md:text-5xl">
                      {featuredPost.title}
                    </h3>

                    <p className="GolosText mt-5 max-w-[65ch] text-sm leading-8 text-black/55 md:text-base">
                      {featuredPost.desc}
                    </p>

                    <div className="mt-7 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--black)]">
                      Read article
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-transparent group-hover:bg-[var(--prim)] group-hover:text-white">
                        <i className="bi bi-arrow-up-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          )}

          <div className="flex flex-col gap-5">
            {sidePosts.map((blog, index) => (
              <article
                key={index}
                className="group rounded-[28px] border border-black/10 bg-white p-4 shadow-[0_14px_35px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-[2px]"
              >
                <Link
                  href={`/UI-Components/Blogs/${blog.id}`}
                  className="grid grid-cols-1 gap-4 md:grid-cols-[220px_minmax(0,1fr)] md:items-center"
                >
                  <div className="relative overflow-hidden rounded-[22px]">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={300}
                      className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06] md:h-[210px]"
                    />

                    <span className="GolosText absolute left-4 top-4 rounded-full bg-[var(--prim)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                      {blog.tag}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="GolosText flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-black/45">
                      <span>
                        By{" "}
                        <span className="font-semibold text-[var(--prim)]">
                          {blog.postby}
                        </span>
                      </span>
                      {blog.date && <span>{blog.date}</span>}
                    </div>

                    <h3 className="CalSans mt-3 text-2xl leading-[1.06] text-[var(--black)] transition-colors duration-300 group-hover:text-[var(--prim)] md:text-[32px]">
                      {blog.title}
                    </h3>

                    <p className="GolosText mt-3 line-clamp-3 text-sm leading-7 text-black/55 md:text-base">
                      {blog.desc}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--black)]">
                      Continue reading
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-transparent group-hover:bg-[var(--prim)] group-hover:text-white">
                        <i className="bi bi-arrow-up-right" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
