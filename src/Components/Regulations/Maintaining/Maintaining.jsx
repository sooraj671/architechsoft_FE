import React from "react";
import auditPic from "../../../assets/regulations/auditPic.png";
import { TbPointFilled } from "react-icons/tb";

const Maintaining = () => {
  const points = [
    "Archi employs registry-specific language and workflows that support the contractor model.",
    "Archi manages the collection of fees from families and disburses funds to caregivers and your registry.",
    "Archi ensures compliance by enabling families to negotiate rates, approve timecards, and manage caregiver support requests.",
  ];
  return (
    <div className="p-5 flex justify-center items-center">
      <div className=" bg-[#fff] h-full p-7 md:p-12 flex flex-col justify-around gap-5 max-w-screen-xl  lg:py-16">
        <div>
          <h1 className="font-bold text-3xl md:text-4xl text-gray-800 text-center">
            Effortless Management
          </h1>
          <div className="md:flex flex-row-reverse my-5 md:my-12 gap-5 items-center">
            <div className="w-full sm:w-1/2 mb-10 sm:mb-0 md:h-96 flex justify-center items-center">
              <img src={auditPic} alt="audit" className="h-full object-cover" />
            </div>
            <div className="w-full sm:w-1/2">
              <h1 className="mb-10 font-bold text-3xl text-gray-700">
                Before Audit
              </h1>
              <p className="mb-5 text-lg leading-9 font-bold text-gray-800">
                Archi helps in:
              </p>
              {points.map((item, index) => {
                return (
                  <div key={index} className="flex gap-2 mb-2 md:mb-3">
                    <p className="pt-1 text-orange-400">
                      <TbPointFilled />
                    </p>
                    <p className="text-lg leading-9">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="md:flex my-5 md:my-12 gap-5 items-center">
          <div className="w-full sm:w-1/2 mb-10 sm:mb-0 md:h-96 flex justify-center items-center">
            <img src={auditPic} alt="audit" className="h-full object-cover" />
          </div>
          <div className="w-full sm:w-1/2">
            <h1 className="mb-10 font-bold text-3xl text-gray-700">
              After Audit
            </h1>
            <p className="mb-5 text-lg leading-9 font-bold text-gray-800">
              Archi offers comprehensive support with
            </p>
            <p className="text-lg leading-9">
              Expert guidance and testimony to affirm that you are engaging with
              contractors rather than employees, ensuring that your practices
              are clearly understood and supported during audits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintaining;
