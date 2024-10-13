import React from "react";
import { TbPointFilled } from "react-icons/tb";
import manWorking from "../../../assets/whoWeHelp/man-working.jpg";

const OrangePart = () => {
  return (
    <div className="p-5 bg-orange-400 flex justify-center items-center">
      <div className="md:h-screen md:flex max-w-screen-xl  lg:my-16">
        <div className=" md:w-[45%] sm:h-full">
          <img
            src={manWorking}
            alt="care-for-you"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:w-[55%] bg-[#fff] h-full p-7 md:p-12 flex flex-col justify-around ">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-700">
            Effortless Care and Payment Management
          </h1>
          <span className="leading-9">
            Verify care visits and automate payments with our secure system,
            ensuring quality care and fraud protection.
          </span>
          <div className="px-5 flex flex-col gap-5">
            <div className="flex gap-3">
              <div className="text-red-400 pt-1">
                <TbPointFilled size={20} />
              </div>
              <p>
                <strong>Visit Verification:</strong>&nbsp; Track caregiver
                visits in real-time for assurance.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="text-red-400 pt-1">
                <TbPointFilled size={20} />
              </div>
              <p>
                <strong>Automated Payments:</strong>&nbsp; Pay caregivers
                seamlessly via credit card or ACH.
              </p>
            </div>
            <div className="flex gap-3 ">
              <div className="text-red-400 pt-1">
                <TbPointFilled size={20} />
              </div>
              <p>
                <strong>Client Portal: </strong>&nbsp; Review visit details and
                manage care effortlessly.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="text-red-400 pt-1">
                <TbPointFilled size={20} />
              </div>
              <p>
                <strong>Fraud Protection:</strong>&nbsp; Prevent overpayments
                with our secure system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrangePart;
