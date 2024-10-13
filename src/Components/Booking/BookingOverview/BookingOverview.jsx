import React from "react";
import calendar from "../../../assets/booking/calendar.jpeg";
import { TbPointFilled } from "react-icons/tb";

const BookingOverview = () => {
  return (
    <div className="p-5 flex justify-center items-center">
      <div className="md:flex flex-row-reverse my-5 md:my-12 gap-5 items-center w-full max-w-screen-xl">
        <div className="w-full sm:w-1/2 mb-10 sm:mb-0 md:h-96 flex justify-center items-center">
          <img src={calendar} alt="calendar" className="h-full object-cover" />
        </div>
        <div className="w-full sm:w-1/2">
          <h1 className="mb-10 font-bold text-3xl text-gray-700">
            Archi’s booking features offer:
          </h1>
          <p className="text-lg leading-9">
            Archi’s booking system simplifies management with color-coded
            schedules, filters for location, client, and caregiver, and
            convenient bulk editing. Easily switch between daily, weekly, and
            monthly views, with quick access to shift details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingOverview;
