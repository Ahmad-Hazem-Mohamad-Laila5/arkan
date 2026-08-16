"use client";


const Newsletter = () => {
  return (
    <section className="relative overflow-hidden px-[6%] py-20 lg:px-[12%] lg:py-10 ">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,154,107,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.04),transparent_24%)]"></div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="overflow-hidden rounded-[34px] border border-black/10 bg-[#f7f3ee] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-1 gap-0 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b border-black/10 px-6 py-12 md:px-10 lg:px-12 xl:border-b-0 xl:border-r">
              <div className="flex items-center gap-4">
                <span className="hidden h-px w-12 bg-gradient-to-r from-transparent to-[var(--prim)]/70 sm:block"></span>

                <span className="GolosText inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--black)] shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--prim)]"></span>
                  Newsletter
                </span>

                <span className="hidden h-px flex-1 bg-gradient-to-r from-[var(--prim)]/50 to-transparent lg:block"></span>
              </div>

              <div className="mt-8 h-[1px] w-24 bg-gradient-to-r from-[var(--prim)] via-black/20 to-transparent"></div>

              <h2 className="CalSans mt-8 max-w-[11ch] text-4xl leading-[0.98] text-[var(--black)] md:text-6xl lg:text-7xl">
                Stay close to ideas that shape{" "}
                <span className="text-[var(--prim)]">timeless interiors</span>
              </h2>

              <p className="GolosText mt-6 max-w-[640px] text-sm leading-8 text-black/55 md:text-lg">
                Subscribe for studio insights, new project highlights, curated
                inspiration, and thoughtful design stories delivered with a
                refined editorial touch.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-black/55">
                <div className="GolosText flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] md:text-sm">
                  <span className="h-2 w-2 rounded-full bg-[var(--prim)]"></span>
                  Monthly inspiration
                </div>
                <div className="GolosText flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] md:text-sm">
                  <span className="h-2 w-2 rounded-full bg-[var(--prim)]"></span>
                  Exclusive updates
                </div>
                <div className="GolosText flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] md:text-sm">
                  <span className="h-2 w-2 rounded-full bg-[var(--prim)]"></span>
                  No spam
                </div>
              </div>
            </div>

            <div className="px-6 py-12  mt-8 md:px-10 lg:px-12">
              <div className="rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.04)] md:p-8">
                <span className="GolosText text-xs font-bold uppercase tracking-[0.18em] text-[var(--prim)]">
                  Join the circle
                </span>

                <h3 className="CalSans mt-4 text-3xl leading-[1.02] text-[var(--black)] md:text-5xl">
                  Receive elegant design notes and curated studio updates
                </h3>

                <p className="GolosText mt-4 max-w-[58ch] text-sm leading-7 text-black/55 md:text-base">
                  Enter your email to receive refined inspiration, interior
                  insights, and selected updates from our latest projects.
                </p>

                <form className="mt-8 flex flex-col gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="GolosText min-h-[58px] rounded-full border border-black/10 bg-[#faf7f2] px-6 text-[15px] text-[var(--black)] outline-none transition-all duration-300 placeholder:text-black/35 focus:border-[var(--prim)]"
                  />

                  <button
                    type="submit"
                    className="inline-flex min-h-[58px] items-center justify-center rounded-full bg-[var(--prim)] px-7 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_16px_35px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[var(--black)]"
                  >
                    Subscribe Now
                  </button>
                </form>

                <p className="GolosText mt-4 text-xs leading-6 text-black/40">
                  By subscribing, you agree to receive occasional design
                  insights and studio news.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
