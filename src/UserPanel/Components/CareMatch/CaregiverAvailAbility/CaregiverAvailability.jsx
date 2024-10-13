import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { IoIosCheckbox } from "react-icons/io";
import { RiCheckboxBlankFill } from "react-icons/ri";

const CaregiverAvailability = ({
  selectedDays,
  setselectedDays,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}) => {
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];

  const handleDaysArray = (day) => {
    setselectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter((d) => d !== day)
        : [...prevSelectedDays, day]
    );
  };

  return (
    <div className="flex mt-5 border">
      <div className="bg-[#fff] w-48">
        <div className="sticky top-0 p-4">
          <p className="px-2 py-[2px] rounded-md bg-primary text-[#fff] w-min">
            2
          </p>
          <h1 className="text-lg leading-9">Caregiver Availability</h1>
          <p className="text-sm text-gray-500 ">
            Select the dates and times that this caregiver must be available to
            be matched
          </p>
        </div>
      </div>
      <div className="flex-1 bg-green-50">
        {/* specific date  */}
        <div className="w-full p-5">
          <div className="flex gap-4 items-center">
            <p className="uppercase">Specific Date</p>
            <FaQuestionCircle />
          </div>
          <div className="flex gap-6 mt-5 border-b pb-8">
            <div className="flex flex-col gap-2 w-full">
              {/* start date  */}
              <label htmlFor="assessment-date">Start Date</label>
              <input
                type="date"
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3 w-full"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              {/* end date  */}
              <label htmlFor="assessment-date">End Date</label>
              <input
                type="date"
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3 w-full"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Ongoing Availability  */}
        <div className=" w-full p-5 ">
          <div className="flex gap-4 items-center">
            <p className="uppercase">Ongoing Availability</p>
            <FaQuestionCircle />
          </div>
          <div className="flex gap-6 mt-5 ">
            <div className="flex flex-col gap-2 w-full">
              {/* start time   */}
              <label htmlFor="assessment-date">Start Time</label>
              <input
                type="time"
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3 w-full"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              {/* end time  */}
              <label htmlFor="assessment-date">End Time</label>
              <input
                type="time"
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3 w-full"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="w-full p-5 flex flex-wrap gap-4">
          {days.map((day, index) => {
            const isSelected = selectedDays.includes(day);
            return (
              <div
                key={index}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleDaysArray(day)}
              >
                <p className="text-green-400">
                  {isSelected ? (
                    <IoIosCheckbox size={25} />
                  ) : (
                    <RiCheckboxBlankFill size={25} />
                  )}
                </p>
                <p className="capitalize select-none text-gray-600">{day}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CaregiverAvailability;
