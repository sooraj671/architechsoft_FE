import React from "react";
import womanPic from "../../../assets/old_black_woman.jpeg";
import { TbPointFilled } from "react-icons/tb";

const OrangePart = () => {
  return (
    <div className="p-5 bg-orange-400 flex justify-center items-center">
      <div className="md:h-screen md:flex max-w-screen-xl  lg:my-16">
        <div className=" md:w-[45%] sm:h-full">
          <img
            src={womanPic}
            alt="compliance"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:w-[55%] bg-[#fff] h-full p-7 md:p-12 flex flex-col justify-around gap-5">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-700">
            Compliance is at the heart of what we do - while helping you
            supercharge your growth.
          </h1>
          <span>Archi has it all:</span>
          <div className="px-5 flex flex-col gap-5">
            <div className="flex gap-3">
              <div className="text-red-400 pt-1">
                <TbPointFilled size={20} />
              </div>
              <span>Scheduling</span>
            </div>
            <div className="flex gap-3">
              <div className="text-red-400 pt-1">
                <TbPointFilled size={20} />
              </div>
              <span>EVV mobile app</span>
            </div>
            <div className="flex gap-3 ">
              <div className="text-red-400 pt-1">
                <TbPointFilled size={20} />
              </div>
              <span>Payment processing</span>
            </div>
            <div className="flex gap-3">
              <div className="text-red-400 pt-1">
                <TbPointFilled size={20} />
              </div>
              <span>
                Powerful functionality that helps protect you in the event of a
                potential DOL audit
              </span>
            </div>
          </div>
          <span>
            We collect all payments and disperse to caregivers, helping you
            maintain compliance.
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrangePart;
