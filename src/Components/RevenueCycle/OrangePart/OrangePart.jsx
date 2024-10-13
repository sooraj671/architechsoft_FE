import React from "react";
import { TbPointFilled } from "react-icons/tb";
import tiredPerson from "../../../assets/revenueCycle/tiredPerson.jpeg";

const OrangePart = () => {
  return (
    <div className="p-5 bg-orange-400 flex justify-center items-center">
      <div className="md:h-screen md:flex max-w-screen-xl  lg:my-16">
        <div className=" md:w-[45%] sm:h-full">
          <img
            src={tiredPerson}
            alt="tired-of-billing"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:w-[55%] bg-[#fff] h-full p-7 md:p-12 flex flex-col gap-12">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-700">
            Exhausted from spending countless hours each week tracking down
            payments from your clients?
          </h1>
          <p className="leading-9 text-lg">
            Dealing with inaccurate payment reports that result in incorrect
            caregiver pay? We understand the difficulties. With Archi handling
            your billing and payments, you can enhance accuracy, save up to 40
            hours a month, and increase your income.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrangePart;
