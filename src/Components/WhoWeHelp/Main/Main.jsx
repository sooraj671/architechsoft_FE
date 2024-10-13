import React from "react";
import mainImage from "../../../assets/whoWeHelp/whoWeHelp.png";
import BookDemo from "../../BookDemo/BookDemo";

const Main = () => {
  return (
    <div className="p-5 md:py-20 flex justify-center items-center w-full">
      <div className="sm:flex items-center gap-5 max-w-screen-xl">
        <div className="w-full sm:w-1/2">
          <h1 className="text-wrap text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-10">
            Empower Your Registry’s Growth with Archi
          </h1>
          <p className="my-10 leading-8 text-lg">
            Unified platform for scheduling, payments, caregiver compensation,
            and claims management.
          </p>
          <BookDemo />
        </div>
        <div className="w-full sm:w-1/2 mt-10 sm:mt-0">
          <img src={mainImage} alt="hero img" />
        </div>
      </div>
    </div>
  );
};

export default Main;
