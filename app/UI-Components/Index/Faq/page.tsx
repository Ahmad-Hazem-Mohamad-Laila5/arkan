"use client";

import Image from "next/image";
import { useState } from "react";

import faqBanner from "@/public/faq-banner.jpg";
import SectionHeader from "@/app/Components/SectionHeader/SectionHeader";

import FaqsData from '@/app/JsonData/Faqs.json'

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-[8%] py-9 lg:px-[12%]">
      
      <SectionHeader
        eyebrow="About Olivion"
        title="We shape"
        highlighted="interior designs, crafting"
        suffix="timeless and inspiring spaces"
        align="left"
      />

      <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:py-10">
        {/* قائمة الأسئلة */}
        <div className="w-full lg:w-2/3">
          <div className="w-full space-y-4">
            {FaqsData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.id}
                  className="overflow-hidden border-b border-gray-300 py-2 transition-all duration-300"
                >
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-between py-4 text-left focus:outline-none"
                    onClick={() => toggle(index)}
                  >
                    <div className="faq-heading flex items-center gap-5">
                      <h3 className="CalSans text-3xl font-semibold text-[var(--prim)]">
                        {item.id}
                      </h3>
                      <span className="GolosText text-2xl font-semibold text-gray-800 md:text-3xl">
                        {item.question}
                      </span>
                    </div>

                    <i
                      className={`bi ${
                        isOpen ? "bi-dash" : "bi-plus"
                      } text-3xl text-[var(--prim)] transition-all duration-300`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden px-7 transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "max-h-[260px] opacity-100 py-3"
                        : "max-h-0 opacity-0 py-0"
                    }`}
                  >
                    <p className="GolosText text-[15px] leading-7 text-gray-600 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full pt-5 lg:w-1/3">
          <div className="faq-card flex flex-col items-center gap-6 md:flex-row md:items-center lg:flex-col">
            <Image
              src={faqBanner}
              alt="FAQ banner"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
