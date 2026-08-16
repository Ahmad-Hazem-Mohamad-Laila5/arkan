// finish this page

"use client";
import Image from "next/image";
import CountUp from "react-countup";

import AboutImg1 from "@/public/About-1.jpg";
import AboutImg2 from "@/public/About-2.jpg";
import AboutImg3 from "@/public/About-3.jpg";

import SectionHeader from "@/app/Components/SectionHeader/SectionHeader";

const statsData = [
  {
    value: 2013,
    suffix: "",
    title: "Years experience",
    desc: "Improving homes with expert craftsmanship for year",
  },
  {
    value: 190,
    suffix: "+",
    title: "Projects completed",
    desc: "Delivering tailored interiors across residential and commercial spaces",
  },
  {
    value: 206,
    suffix: "+",
    title: "Satisfied clients",
    desc: "Building long‑term relationships through thoughtful design",
  },
  {
    value: 260,
    suffix: "+",
    title: "Design concepts",
    desc: "Exploring materials, light, and form to craft timeless spaces",
  },
];

const About = () => {
  return (
    <>
      <section className="px-[8%] py-5 lg:px-[12%]">
        
        <SectionHeader
          eyebrow="About Olivion"
          title="We shape"
          highlighted="interior designs, crafting"
          suffix="timeless and inspiring spaces"
          align="left"
        />

        
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="about-image">
            <Image
              src={AboutImg1}
              alt="About image 1"
              className="rounded-3xl object-cover transition-all duration-300 hover:-translate-y-1.5"
            />
          </div>
          <div className="about-image lg:pt-10">
            <Image
              src={AboutImg2}
              alt="About image 2"
              className="rounded-3xl object-cover transition-all duration-300 hover:-translate-y-1.5"
            />
          </div>
          <div className="about-image lg:pt-20">
            <Image
              src={AboutImg3}
              alt="About image 3"
              className="rounded-3xl object-cover transition-all duration-300 hover:-translate-y-1.5"
            />
          </div>
        </div>
      </section>

      <section className="px-[8%] pb-2 pt-8 lg:px-[12%]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((item, index) => (
            <article key={index} className="about-card">
              <h2 className="CalSans mb-6 text-5xl font-bold tracking-wider">
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2.5}
                  enableScrollSpy
                />
                {item.suffix}
              </h2>
              <div className="about-content border-t border-gray-400 py-6">
                <h3 className="CalSans mb-3 text-2xl">{item.title}</h3>
                <p className="GolosText text-gray-400">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
