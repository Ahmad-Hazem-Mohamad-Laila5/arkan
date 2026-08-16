"use client";

const pricingPlansData = [
  {
    id: "1",
    plan: "Basic Plan",
    desc: "Our foundation plan offers essential design support at an affordable price.",
    price: "$99.0",
    planInfo: [
      "Ideal for individuals & small projects",
      "Access to core design features",
      "Limited library of decoration items",
      "Email support",
      "Monthly updates",
    ],
  },
  {
    id: "2",
    plan: "Premium Plan",
    desc: "Expanded services with deeper design collaboration and priority support.",
    price: "$199.0",
    planInfo: [
      "Perfect for growing homes or businesses",
      "Extended access to design tools",
      "Broader selection of décor & materials",
      "Priority email support",
      "Bi-weekly updates",
    ],
  },
];

import SectionHeader from "@/app/Components/SectionHeader/SectionHeader";

const PricingPlans = () => {
  return (
    <section className="px-[8%] py-10 md:m-[3%] lg:px-[12%]">
      
      <SectionHeader
        eyebrow="About Olivion"
        title="We shape"
        highlighted="interior designs, crafting"
        suffix="timeless and inspiring spaces"
        align="left"
      />

      <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:h-full">
        
        <div className="w-full lg:w-1/2">
          <div className="pricing-wrap h-full rounded-2xl p-5 pt-20">
            <h2 className="CalSans w-full text-3xl text-white md:text-4xl lg:w-[70%]">
              Thoughtfully structured plans designed to match different project
              scales, timelines, and levels of involvement.
            </h2>
            <p className="GolosText mt-4 max-w-[40ch] text-[15px] leading-8 text-white/70 sm:text-base">
              Whether you&apos;re refreshing a single room or shaping an entire
              interior, our pricing tiers give you clear options tailored to
              your needs.
            </p>
          </div>
        </div>

        
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {pricingPlansData.map((plan) => (
              <article
                key={plan.id}
                className="pricing-card rounded-2xl bg-white p-5 shadow"
              >
                <h2 className="GolosText mb-5 text-3xl font-semibold">
                  {plan.plan}
                </h2>

                <p className="text-[15px] text-gray-500 lg:text-[20px]">
                  {plan.desc}
                </p>

                <h3 className="CalSans mt-5 flex border-b border-gray-300 pb-3 text-6xl text-[var(--prim)] lg:text-7xl">
                  {plan.price}
                  <span className="ml-2 self-end text-xl text-gray-600">
                    / Per Month
                  </span>
                </h3>

                <div className="my-5 flex flex-col gap-2">
                  {plan.planInfo.map((info, idx) => (
                    <p
                      key={idx}
                      className="GolosText text-[15px] font-semibold text-gray-800"
                    >
                      <i className="bi bi-check-circle-fill pr-2 text-[var(--prim)]" />
                      {info}
                    </p>
                  ))}
                </div>

                <button className="GolosText cursor-pointer rounded-full border border-gray-300 px-4 py-2 text-sm transition-all duration-300 hover:border-transparent hover:bg-[var(--prim)] hover:text-white">
                  Get Started Now
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
