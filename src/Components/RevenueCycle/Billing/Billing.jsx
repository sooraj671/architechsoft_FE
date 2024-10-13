import React from "react";
import calculate from "../../../assets/calculator.png";
import { TbPointFilled } from "react-icons/tb";

const Billing = () => {
  const points = [
    "Personalized Billing",
    "Payment Tracking",
    "Aging Analysis",
    "Advanced Reporting",
  ];
  return (
    <div className="p-5 flex justify-center items-center">
      <div className="md:flex flex-row-reverse my-5 md:my-12 gap-5 items-center w-full max-w-screen-xl">
        <div className="w-full sm:w-1/2 mb-10 sm:mb-0 md:h-96 flex justify-center items-center">
          <img src={calculate} alt="billing" className="h-full object-cover" />
        </div>
        <div className="w-full sm:w-1/2">
          <h1 className="mb-10 font-bold text-3xl text-gray-700">Billing</h1>

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

export default Billing;
