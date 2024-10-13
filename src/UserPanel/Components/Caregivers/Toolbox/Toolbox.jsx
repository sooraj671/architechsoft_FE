import React, { useState } from "react";
import { Link } from "react-router-dom";

const Toolbox = ({ searchValue, setSearchValue }) => {
  const caregiversTypes = [
    "All Caregivers",
    "Active Caregivers",
    "Inactive Caregivers",
    "Eugenie Barr",
  ];

  // State to track the selected coordinator and client status
  const [selectedCaregiver, setSelectedCaregiver] = useState("All Caregivers");
  const [showSelectColumnModule, setShowSelectColumnModule] = useState(false);

  // Function to handle service coordinator selection change
  const handleCaregiverChange = (e) => {
    setSelectedCaregiver(e.target.value);
  };
  const handleInputChange = (e) => {
    setSearchValue(e.target.value); // Update state on input change
  };

  return (
    <div>
      <div className=" flex gap-2  flex-wrap items-start ">
        <Link to={"/business/caregivers/create"}>
          <button className="py-2 px-3 bg-primary text-[#fff] text-sm rounded-md hover:shadow-xl transition duration-300">
            Add Caregiver
          </button>
        </Link>

        <button
          className="py-2 px-3 bg-blue-400 text-[#fff] text-sm rounded-md hover:shadow-xl transition duration-300"
          onClick={() => setShowSelectColumnModule(true)}
        >
          Show or Hide Columns
        </button>
        <div
          className={`bg-black backdrop-blur-md bg-opacity-30 h-screen overflow-y-auto top-0 left-0 w-full z-30 p-20 flex justify-center ${
            showSelectColumnModule ? "fixed" : "hidden"
          }`}
        >
          <div className="bg-[#fff] h-screen rounded-md w-[60%]">
            <div className="flex py-2 px-5 border-b border-b-gray-200 justify-between items-center">
              <div className="leading-9 text-lg font-semibold">
                select column
              </div>
              <div>
                <button
                  onClick={() => setShowSelectColumnModule(false)}
                  className="font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center flex-wrap">
        <div className="w-full sm:w-max">
          {/* Service Coordinator Select Dropdown */}
          <select
            id="caregiver-select"
            value={selectedCaregiver}
            onChange={handleCaregiverChange}
            className="border p-2 rounded-md text-sm w-full"
          >
            {caregiversTypes.map((caregiver, index) => (
              <option key={index} value={caregiver}>
                {caregiver}
              </option>
            ))}
          </select>
        </div>

        <div className="border rounded-md">
          <input
            type="text"
            className="h-full px-3 py-[7px] outline-none rounded-md"
            placeholder="Type to Search..."
            value={searchValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
