import React from "react";
import servicesPic from "../../../assets/services.png";
import { TbPointFilled } from "react-icons/tb";

const Services = () => {
  const points = [
    "Win more referrals with CRM",
    "Safely stores client and caregiver schedules & records",
    "Collect payments from clients via timeclock/EVV",
    "Pays caregivers under our entity (not yours!), and submits tax reporting",
  ];
  return (
    <div className="p-5 py-10 md:py-20 flex justify-center items-center w-full">
      <div className="sm:flex items-center gap-5 max-w-screen-xl">
        <div className="w-full sm:w-1/2 mb-10 sm:mb-0 md:h-96">
          <img
            src={servicesPic}
            alt="billing services"
            className="h-full object-cover"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <h1 className="mb-10 sm:text-center font-bold text-3xl md:text-4xl text-gray-700">
            How We Work
          </h1>
          <p className="mb-5">
            Archi uniquely offers technology and billing services tailored for
            home care registries. It helps:
          </p>
          {points.map((item, index) => {
            return (
              <div key={index} className="flex gap-2 mb-2 md:mb-3">
                <p className="pt-1 text-orange-400">
                  <TbPointFilled />
                </p>
                <p>{item}</p>
              </div>
            );
          })}
          <h1 className="mt-5 md:mt-8 font-bold">
            Keeping your registry on track with profitability and compliance.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
