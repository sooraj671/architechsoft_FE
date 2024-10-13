import React from "react";
import BookDemo from "../../BookDemo/BookDemo";
import mainImage from "../../../assets/familyRoom/shift-management.png";

const Main = () => {
  return (
    <div className="p-5 md:py-20 flex justify-center items-center w-full">
      <div className="sm:flex items-center gap-5 max-w-screen-xl">
        <div className="w-full sm:w-1/2">
          <p className="text-xl uppercase font-bold text-primary mb-5">
            family room
          </p>
          <h1 className="text-wrap text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
            Your Gateway to Long-Term Client Satisfaction
          </h1>
          <BookDemo />
        </div>
        <div className="w-full sm:w-1/2 mt-10 sm:mt-0 flex justify-center items-center">
          <img src={mainImage} alt="shift-management" className="h-96" />
        </div>
      </div>
    </div>
  );
};

export default Main;
