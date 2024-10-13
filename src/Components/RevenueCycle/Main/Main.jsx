import React from "react";
import BookDemo from "../../BookDemo/BookDemo";
import invoicePic from "../../../assets/revenueCycle/invoicePic.png";

const Main = () => {
  return (
    <div className="p-5 md:py-20 flex justify-center items-center w-full">
      <div className="sm:flex items-center gap-5 max-w-screen-xl">
        <div className="w-full sm:w-1/2">
          <p className="text-xl uppercase font-bold text-primary mb-5">
            revenue cycle
          </p>
          <h1 className="text-wrap text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
            Ensure Timely Payments and Never Miss Paying Your Caregivers
          </h1>
          <BookDemo />
        </div>
        <div className="w-full sm:w-1/2 mt-10 sm:mt-0">
          <img src={invoicePic} alt="invoice aging" />
        </div>
      </div>
    </div>
  );
};

export default Main;
