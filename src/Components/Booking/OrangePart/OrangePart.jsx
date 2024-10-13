import React from "react";
import happyMan from "../../../assets/booking/happyMan.jpg";

const OrangePart = () => {
  return (
    <div className="p-5 bg-orange-400 flex justify-center items-center">
      <div className="md:h-screen md:flex max-w-screen-xl  lg:my-16">
        <div className=" md:w-[45%] sm:h-full">
          <img
            src={happyMan}
            alt="easy-booking"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:w-[55%] bg-[#fff] h-full p-7 md:p-12 flex flex-col gap-12">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-700">
            Booking Should Be Straightforward
          </h1>
          <h1 className="font-bold text-3xl md:text-4xl text-gray-700">
            Booking Should Be Effortless
          </h1>
          <h1 className="font-bold text-3xl md:text-4xl text-gray-700">
            Archi's user-friendly interface streamlines your daily tasks,
            ensuring maximum productivity and ease of use
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OrangePart;
