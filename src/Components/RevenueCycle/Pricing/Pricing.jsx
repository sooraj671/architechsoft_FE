import React from "react";
import calculate from "../../../assets/calculator.png";
import { TbPointFilled } from "react-icons/tb";

const Pricing = () => {
  const points = [
    "Streamlined Payment Collection and Processing",
    "Safeguard Your Registry from DOL Risks",
    "Free Up Time to Focus on Marketing and Sales",
    "Easily Monitor All Transactions and Expirations",
    "Integrated Insurance Claims Submission and Tracking",
  ];
  return (
    <div className="p-5 flex justify-center items-center">
      <div className="md:flex my-5 md:my-12 gap-5 items-center w-full max-w-screen-xl">
        <div className="w-full sm:w-1/2 mb-10 sm:mb-0 md:h-96 flex justify-center items-center">
          <img src={calculate} alt="billing" className="h-full object-cover" />
        </div>
        <div className="w-full sm:w-1/2">
          <h1 className="mb-10 font-bold text-3xl text-gray-700">
            Payment Processing
          </h1>

          {points.map((item, index) => {
            return (
              <div key={index} className="flex gap-2 mb-2 md:mb-3">
                <p className="pt-3 text-orange-400">
                  <TbPointFilled />
                </p>
                <p className="text-lg leading-9">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
