import React from "react";
import mainImage from "../../../assets/regulations/regulations.jpg";
import BookDemo from "../../BookDemo/BookDemo";

const Main = () => {
  return (
    <div className="p-5 md:py-20 flex justify-center items-center w-full">
      <div className="sm:flex items-center gap-5 max-w-screen-xl">
        <div className="w-full sm:w-1/2">
          <p className="text-xl uppercase font-bold text-primary mb-5">
            regulations
          </p>
          <h1 className="text-wrap text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
            When Regulations Come into Play, You Have a Reliable Partner on Your
            Side.
          </h1>
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
