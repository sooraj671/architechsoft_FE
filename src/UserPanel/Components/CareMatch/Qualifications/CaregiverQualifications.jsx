import React, { useEffect, useState } from "react";
import { IoIosCheckbox } from "react-icons/io";
import { RiCheckboxBlankFill } from "react-icons/ri";

const CaregiverQualifications = () => {
  const requirements = [
    "Bathing - Shower",
    "Bathing - Bed",
    "Dressing",
    "Hygiene - Mouth Care",
    "Hygiene - Hair Care",
    "Shave",
    "Incontinence Care",
    "Toileting",
    "Catheter Care",
    "Ostomy Care",
    "Companion Care",
    "Turning & Repositioning",
    "Medication Reminders",
    "Safety Supervision",
    "Feeding",
    "Homemaker Services",
    "Transportation",
    "Meal Preparation",
    "Ambulation",
    "Wound Care",
    "Respite Care (Skilled Nursing)",
    "Respite Care (General)",
  ];
  const [selectedRequirements, setSelectedRequirements] = useState([]);
  const [allAdded, setAllAdded] = useState(false);
  const [hasWorkedForClientPreviously, setHasWorkedForClientPreviously] =
    useState(false);
  const [isWillingToPerformLiveInCare, setIsWillingToPerformLiveInCare] =
    useState(false);
  const [telLocation, setTelLocation] = useState(false);
  const [locationDistance, seTlocationDistance] = useState(10);
  const [hopeLocation2, setHopeLocation2] = useState(false);

  useEffect(() => {
    allAdded
      ? setSelectedRequirements(requirements)
      : setSelectedRequirements([]);
  }, [allAdded]);

  const handleRequirementsArray = (requirement) => {
    setSelectedRequirements((prevSelectedRequirements) =>
      prevSelectedRequirements.includes(requirement)
        ? prevSelectedRequirements.filter((r) => r !== requirement)
        : [...prevSelectedRequirements, requirement]
    );
  };

  return (
    <div className="flex mt-5 border ">
      <div className="bg-[#fff] w-48">
        <div className="sticky top-0 p-4">
          <p className="px-2 py-[2px] rounded-md bg-primary text-[#fff] w-min">
            3
          </p>
          <h1 className="text-lg leading-9">Caregiver Qualifications</h1>
          <p className="text-sm text-gray-500 ">
            Select the qualifications that this caregiver should match
          </p>
        </div>
      </div>
      <div className="flex-1 bg-green-50 p-5">
        <div>
          <div className="flex gap-10">
            <p className="uppercase">Services</p>
            <div
              className="flex gap-3 cursor-pointer"
              onClick={() => setAllAdded(!allAdded)}
            >
              <p className="text-green-400">
                {allAdded ? (
                  <IoIosCheckbox size={25} />
                ) : (
                  <RiCheckboxBlankFill size={25} />
                )}
              </p>
              <p className="capitalize select-none text-gray-600">
                Match all of client's ADL requirements
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-5 py-5 border-b">
            {requirements.map((requirement, index) => {
              const isSelected = selectedRequirements.includes(requirement);
              return (
                <div
                  key={index}
                  className="flex gap-3 cursor-pointer select-none"
                  onClick={() => handleRequirementsArray(requirement)}
                >
                  <p className="text-green-400">
                    {isSelected ? (
                      <IoIosCheckbox size={25} />
                    ) : (
                      <RiCheckboxBlankFill size={25} />
                    )}
                  </p>
                  <p className="capitalize select-none text-gray-600">
                    {requirement}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-5">
          <p className="uppercase">preferences</p>
          <div className="grid gap-4 mt-5">
            {/* worked previously  */}
            <div
              className="flex gap-3 cursor-pointer bg-[#fff] p-4 rounded-md shadow-md"
              onClick={() =>
                setHasWorkedForClientPreviously(!hasWorkedForClientPreviously)
              }
            >
              <p className="text-green-400">
                {hasWorkedForClientPreviously ? (
                  <IoIosCheckbox size={25} />
                ) : (
                  <RiCheckboxBlankFill size={25} />
                )}
              </p>
              <p className="capitalize select-none text-gray-600">
                Caregiver has worked for this client previously
              </p>
            </div>
            {/* willing to live- in care  */}
            <div
              className="flex gap-3 cursor-pointer bg-[#fff] p-4 rounded-md shadow-md"
              onClick={() =>
                setIsWillingToPerformLiveInCare(!isWillingToPerformLiveInCare)
              }
            >
              <p className="text-green-400">
                {isWillingToPerformLiveInCare ? (
                  <IoIosCheckbox size={25} />
                ) : (
                  <RiCheckboxBlankFill size={25} />
                )}
              </p>
              <p className="capitalize select-none text-gray-600">
                Caregiver willing to perform live-in care
              </p>
            </div>
            {/* location  */}
            <div className="flex gap-3 cursor-pointer bg-[#fff] p-4 rounded-md shadow-md items-center">
              <p className="text-green-400">
                {telLocation ? (
                  <IoIosCheckbox size={25} />
                ) : (
                  <RiCheckboxBlankFill size={25} />
                )}
              </p>
              <p className="capitalize select-none text-gray-600 relative">
                <p onClick={() => setTelLocation(!telLocation)}>
                  Located within a
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; mile radius
                  of service address
                </p>
                <input
                  type="text"
                  disabled={!telLocation}
                  className={` absolute -top-2 left-32 outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3 w-20 ${
                    !telLocation && "select-none"
                  }`}
                  value={locationDistance}
                  onChange={(e) => seTlocationDistance(e.target.value)}
                />
              </p>
            </div>
            {/* location 2  */}
            <div
              className="flex gap-3 cursor-pointer bg-[#fff] p-4 rounded-md shadow-md"
              onClick={() => setHopeLocation2(!hopeLocation2)}
            >
              <p className="capitalize select-none text-gray-600">Location 2</p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <p className="text-green-400">
                {hopeLocation2 ? (
                  <IoIosCheckbox size={25} />
                ) : (
                  <RiCheckboxBlankFill size={25} />
                )}
              </p>
              <p className="capitalize select-none text-gray-600">Hope</p>
            </div>
          </div>
        </div>
        <div className=" flex justify-end my-5">
          <button className="bg-primary text-[#fff] py-2 px-3 rounded-md hover:shadow-xl transition duration-200 capitalize">
            find caregivers
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaregiverQualifications;
