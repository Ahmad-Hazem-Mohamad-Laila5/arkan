import React from "react";
import Hero from "./Hero/page";
import About from "./About/page";
import Paralex from "./Paralex/page";
import Services from "./Services/page";
import Expertise from "./Expertise/page";
import PricingPlans from "./PricingPlans/page";
import Testmonial from "./Testimonial/page";
import Faqs from "./Faq/page";
import Banner from "./Banner/page";
import Blog from "./Blogs/page";
import Newsletter from "./Newsletter/page";

const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <Paralex />
      <Services />
      <Expertise />
      <PricingPlans />
      <Testmonial />
      <Faqs />
      <Banner />
      <Blog />
      <Newsletter />
    </>
  );
};

export default Index;
