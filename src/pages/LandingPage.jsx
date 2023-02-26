import React from "react";
import Categories from "../parts/Categories";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";
import Testimonial from "../parts/Testimonial";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <MostPicked />
      <Categories />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default LandingPage;
