import React from "react";
import { TbPointFilled } from "react-icons/tb";
import featuresList from "../../../assets/familyRoom/featuresPic.png";

const Features = () => {
  const points = [
    "Manage and confirm their care schedules effortlessly",
    "Review and update personal details as needed",
    "Access caregiver profiles to see who’s providing care",
    "View detailed payment and invoice histories",
    "Get end-of-year financial summaries",
    "Explore the knowledge base for helpful resources and support",
  ];

  return (
    <div className="p-5 flex justify-center items-center">
      <div className="md:flex flex-row-reverse my-5 md:my-12 gap-5 items-center w-full max-w-screen-xl">
        <div className="w-full sm:w-1/2 mb-10 sm:mb-0 md:h-96 flex justify-center items-center">
          <img
            src={featuresList}
            alt="billing"
            className="h-full object-cover"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <h1 className="mb-10 font-bold text-3xl text-gray-700">
            Empower Your Clients with Archi's Family Room Features:
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

export default Features;
