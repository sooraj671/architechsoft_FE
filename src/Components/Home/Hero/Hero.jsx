import React from "react";
import heroImage from "../../../assets/hero_image.png";
import BookDemo from "../../BookDemo/BookDemo";

const Hero = () => {
  return (
    <div className="p-5 md:py-20 flex justify-center items-center w-full">
      <div className="sm:flex flex-row-reverse items-center gap-5 max-w-screen-xl">
        <div className="w-full sm:w-1/2 mb-10 sm:mb-0">
          <img src={heroImage} alt="hero img" />
        </div>
        <div className="w-full sm:w-1/2">
          <h1 className="text-wrap text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-12">
            Software & Billing Services Designed for Your Caregiver Registry
          </h1>
          <BookDemo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
