import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Benefits = () => {
  const points = [
    "Complimentary customer support",
    "No-cost training",
    "Free setup",
    "Family portal access and notifications included",
    "Unlimited staff accounts",
    "Unlimited client management",
    "Flexible monthly contract",
    "Continuous updates and enhancements",
  ];
  return (
    <div className="flex justify-center items-center text-primary p-5">
      <div className=" w-full h-full py-7 md:p-12 flex flex-col items-center gap-5 max-w-screen-xl lg:my-10 ">
        <h1 className="font-bold text-3xl md:text-4xl text-center mb-5">
          All customers benefit from
        </h1>
        <div className="bg-[#fff] shadow-2xl p-3 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-3 border-t-8 rounded-lg border-t-primary max-w-screen-lg py-10 border border-gray-200">
          {points.map((point, index) => {
            return (
              <div key={index} className="flex gap-3">
                <p className="mt-3">
                  <FaCheckCircle />
                </p>
                <p className="text-lg leading-9">{point}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
