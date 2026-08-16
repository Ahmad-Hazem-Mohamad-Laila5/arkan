"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import BlogData from "@/app/JsonData/Blogs.json";
import PageHero from "@/app/Components/PageHeroProps/pageheroprops";
import pageBg from "@/public/page-bg.jpg";



const BlogDetails = () => {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const post = BlogData.find((item) => String(item.id) === String(id));

  if (!post) {
    return (
      <section className="px-5 py-28 sm:px-8 lg:px-[8%]">
        <div className="mx-auto max-w-[720px] text-center">
          <span className="GolosText text-xs uppercase tracking-[0.22em] text-neutral-500">
            Journal
          </span>

          <h1 className="CalSans mt-4 text-5xl text-neutral-950">
            Article not found
          </h1>

          <p className="GolosText mt-4 text-base leading-8 text-neutral-500">
            The article you are looking for does not exist or may have been
            moved.
          </p>

          <Link
            href="/blog"
            className="GolosText mt-8 inline-flex rounded-full bg-neutral-950 px-6 py-3 text-sm text-white transition-colors duration-300 hover:bg-[var(--prim)]"
          >
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }
  return (
    <>
      <PageHero
        eyebrow="Selected Blog"
        title={post.title}
        backgroundImage={pageBg.src}
        minHeight="min-h-[72vh]"
        maxWidth="max-w-[900px]"
        titleClassName="CalSans max-w-[12ch]"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/Blogs" },
          { label: post.title },
        ]}
      />

      <main className="px-5 py-14 sm:px-8 lg:px-[8%] lg:py-20">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_380px]">
          {/* Main article */}
          <article className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="GolosText rounded-full bg-[var(--prim)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                {post.tag}
              </span>

              <span className="GolosText text-sm text-neutral-500">
                By{" "}
                <span className="font-semibold text-[var(--prim)]">
                  {post.postby}
                </span>
              </span>

              <span className="text-neutral-300">—</span>

              <span className="GolosText text-sm text-neutral-500">
                {post.date}
              </span>
            </div>

            <h1 className="CalSans mt-6 max-w-[18ch] text-[clamp(2.8rem,5.3vw,5.8rem)] leading-[0.92] tracking-[-0.07em] text-neutral-950">
              {post.title}
            </h1>

            <p className="GolosText mt-6 max-w-[75ch] text-base leading-8 text-neutral-500 sm:text-lg">
              {post.desc}
            </p>

            <div className="mt-10 overflow-hidden rounded-[28px]">
              <Image
                src={post.image}
                alt={post.title}
                width={1400}
                height={900}
                priority
                className="h-[360px] w-full object-cover sm:h-[520px] lg:h-[680px]"
              />
            </div>

            <div className="prose-content mt-10 max-w-[78ch]">
              <p className="GolosText text-base leading-8 text-neutral-600 sm:text-lg">
                Modern interior design is all about creating a sleek,
                functional, and aesthetically pleasing space that reflects
                contemporary living. Whether you are updating a single room or
                redesigning your entire home, incorporating modern design
                principles can bring a fresh, sophisticated, and elegant
                ambiance.
              </p>

              {post.articleSections?.map((section) => (
                <section key={section.title} className="mt-10">
                  <h2 className="CalSans text-3xl leading-tight text-neutral-950 sm:text-4xl">
                    {section.title}
                  </h2>

                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="GolosText mt-5 text-base leading-8 text-neutral-600 sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.images.length > 0 && (
                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {section.images.map((image, index) => (
                        <Image
                          key={index}
                          src={image}
                          alt={`${section.title} image ${index + 1}`}
                          width={900}
                          height={650}
                          className="h-[260px] w-full rounded-[24px] object-cover sm:h-[320px]"
                        />
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="xl:sticky xl:top-30 xl:self-start">
            <div className="space-y-10">
              <section>
                <h2 className="CalSans text-3xl text-neutral-950">
                  Categories
                </h2>

                <ul className="mt-5 divide-y divide-black/10 border-y border-black/10">
                  {post.categories?.map((category) => (
                    <li key={category}>
                      <span className="GolosText flex items-center justify-between py-3 text-base font-semibold text-neutral-800 transition-colors duration-300 hover:text-[var(--prim)]">
                        {category}
                        <i className="bi bi-arrow-up-right text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="CalSans text-3xl text-neutral-950">
                  Recent Posts
                </h2>

                <div className="mt-5 space-y-5">
                  {BlogData.map((recentPost, index) => {
                    return (
                      <Link
                        key={recentPost.id}
                        href={`/blog/${recentPost.id}`}
                        className="group grid grid-cols-[120px_minmax(0,1fr)] gap-4"
                      >
                        <div className="overflow-hidden rounded-[18px]">
                          <Image
                            src={recentPost.image}
                            alt={recentPost.title}
                            width={240}
                            height={180}
                            className="h-[100px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="GolosText text-xs text-neutral-500">
                            {recentPost.date}
                          </p>

                          <h3 className="CalSans mt-1 text-lg leading-tight text-neutral-950 transition-colors duration-300 group-hover:text-[var(--prim)]">
                            {recentPost.title}
                          </h3>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>

              <section className="rounded-[26px] bg-[#f7f3ee] p-6">
                <span className="GolosText text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Need advice?
                </span>

                <h2 className="CalSans mt-4 text-3xl leading-tight text-neutral-950">
                  Let’s shape your next interior.
                </h2>

                <Link
                  href="/UI-Components/Pages/Contact"
                  className="GolosText mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm text-white transition-colors duration-300 hover:bg-[var(--prim)]"
                >
                  Contact Studio
                  <i className="bi bi-arrow-up-right" />
                </Link>
              </section>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
};

export default BlogDetails;
