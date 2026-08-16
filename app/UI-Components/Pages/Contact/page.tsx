"use client";

import PageHero from "@/app/Components/PageHeroProps/pageheroprops";
import PageIntro from "@/app/Components/PageIntro/PageIntro";
import pageBg from "@/public/page-bg.jpg";

const socialLinks = [
  {
    label: "Facebook",
    icon: "ri-facebook-fill",
    href: "https://facebook.com",
  },
  {
    label: "Instagram",
    icon: "ri-instagram-line",
    href: "https://instagram.com",
  },
  {
    label: "LinkedIn",
    icon: "ri-linkedin-fill",
    href: "https://linkedin.com",
  },
  {
    label: "Pinterest",
    icon: "ri-pinterest-line",
    href: "https://pinterest.com",
  },
];

const Contact = () => {
  return (
    <>
      <PageHero
        title="Contact"
        backgroundImage={pageBg.src}
        breadcrumbs={[
          { label: "Home", href: "/" },
        
          { label: 'Contact'},
        ]}
      />

      <section className="px-[8%] py-16 lg:px-[12%] lg:py-24">
        <div className="mx-auto max-w-[1600px]">
          <PageIntro
            eyebrow="Get in Touch"
            title="Let’s shape your next"
            highlighted="interior together"
            suffix=""
            align="left" desc="lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quaerat repellendus quae unde, ab delectus consectetur numquam praesentium nihil! Ex?"
          />

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Contact information */}
            <div className="space-y-8">
              <div>
                <h2 className="CalSans text-2xl text-neutral-900">
                  Studio Details 
                </h2>

                <p className="GolosText mt-3 max-w-[40ch] text-[15px] leading-8 text-neutral-500 sm:text-base">
                  Reach out to our team for new projects, collaborations, or
                  press inquiries. We respond to most messages within one
                  business day.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="GolosText text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
                    Address
                  </p>

                  <p className="GolosText mt-2 text-[15px] leading-7 text-neutral-700 sm:text-base">
                    5609 E Sprague Ave, Spokane Valley,
                    <br />
                    WA 99212, USA
                  </p>
                </div>

                <div>
                  <p className="GolosText text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
                    Phone
                  </p>

                  <a
                    href="tel:+10844560789"
                    className="CalSans mt-2 inline-block text-xl text-neutral-900 transition-colors duration-300 hover:text-[var(--prim)]"
                  >
                    +(084) 456-0789
                  </a>
                </div>

                <div>
                  <p className="GolosText text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
                    Email
                  </p>

                  <a
                    href="mailto:support@example.com"
                    className="GolosText mt-2 inline-block text-[15px] text-[var(--prim)] transition-colors duration-300 hover:text-neutral-900 sm:text-base"
                  >
                    support@example.com
                  </a>
                </div>

                <div>
                  <p className="GolosText text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
                    Studio Hours
                  </p>

                  <p className="GolosText mt-2 text-[15px] leading-7 text-neutral-700 sm:text-base">
                    Monday – Friday: 9:00 AM – 6:00 PM
                    <br />
                    Saturday: By appointment only
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <p className="GolosText text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
                  Social
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="GolosText flex h-10 items-center justify-center rounded-full border border-black/10 px-4 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700 transition-all duration-300 hover:border-[var(--prim)] hover:bg-[var(--prim)] hover:text-white"
                    >
                      <i className={`${social.icon} mr-2`} />
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.04)] sm:p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="GolosText mb-2 block text-sm font-medium text-neutral-700"
                    >
                      Full Name
                    </label>

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your name"
                      className="w-full rounded-[14px] border border-black/10 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-all duration-200 placeholder:text-neutral-400 focus:border-[var(--prim)] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="GolosText mb-2 block text-sm font-medium text-neutral-700"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-[14px] border border-black/10 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-all duration-200 placeholder:text-neutral-400 focus:border-[var(--prim)] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="GolosText mb-2 block text-sm font-medium text-neutral-700"
                    >
                      Phone <span className="text-neutral-400">(optional)</span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+1 000 000 0000"
                      className="w-full rounded-[14px] border border-black/10 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-all duration-200 placeholder:text-neutral-400 focus:border-[var(--prim)] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="GolosText mb-2 block text-sm font-medium text-neutral-700"
                    >
                      Project Type
                    </label>

                    <select
                      id="projectType"
                      name="projectType"
                      defaultValue=""
                      className="w-full rounded-[14px] border border-black/10 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-all duration-200 focus:border-[var(--prim)] focus:bg-white"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="residential">Residential Interior</option>
                      <option value="commercial">Commercial Interior</option>
                      <option value="hospitality">
                        Hospitality / Restaurant
                      </option>
                      <option value="consultation">Consultation Only</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="GolosText mb-2 block text-sm font-medium text-neutral-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share a brief overview of your project, timeline, and location."
                    className="w-full resize-y rounded-[14px] border border-black/10 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-all duration-200 placeholder:text-neutral-400 focus:border-[var(--prim)] focus:bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="CalSans inline-flex items-center justify-center rounded-full bg-[var(--prim)] px-7 py-3 text-sm text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-neutral-900 hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
                  >
                    Send Message
                    <i className="bi bi-arrow-right ms-2" />
                  </button>

                  <p className="GolosText mt-3 text-xs text-neutral-500">
                    By submitting this form, you agree that we may contact you
                    regarding your project inquiry.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="px-[8%] pb-20 lg:px-[12%] lg:pb-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[var(--prim)]" />
                <span className="GolosText text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500">
                  Visit Our Studio
                </span>
              </div>

              <h2 className="CalSans mt-5 max-w-[15ch] text-[clamp(2rem,3.4vw,3.5rem)] leading-[0.98] tracking-[-0.05em] text-neutral-900">
                Find us on the map
              </h2>
            </div>

            <p className="GolosText max-w-[48ch] text-[15px] leading-8 text-neutral-500 sm:text-base">
              Located in Spokane Valley, our studio welcomes clients by
              appointment. Use the map to plan your visit or explore the
              surrounding area.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-black/8 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
            <iframe
              title="Olivion Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.836575844491!2d-117.2778343!3d47.6748189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549e24c3b3a4c7f7%3A0x0000000000000000!2sE%20Sprague%20Ave%2C%20Spokane%20Valley%2C%20WA%2099212%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 sm:h-[420px] lg:h-[520px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
