import React, { useState } from "react";
import { Link } from "react-router-dom";

const Toolbox = ({searchValue, setSearchValue}) => {
  // List of service coordinators for the dropdown
  const serviceCoordinators = [
    "All Service Coordinators",
    "Barr, Eugenie",
    "Karekezi, Ines",
    "Sarah, Ana",
  ];

  // List of client statuses for the second dropdown
  const clientStatuses = ["All Clients", "Active", "Inactive"];

  const clientTypes = [
    "All Client Types",
    "Lead Agency",
    "LTCI",
    "Medicaid",
    "Private Pay",
    "VA",
  ];

  // State to track the selected coordinator and client status
  const [selectedCoordinator, setSelectedCoordinator] = useState(
    "All Service Coordinators"
  );
  const [selectedClientStatus, setSelectedClientStatus] = useState("Active");

  const [selectedClientType, setSelectedClientType] =
    useState("All Client Types");
  const [showSelectColumnModule, setShowSelectColumnModule] = useState(false);
   // State to store the input value

  const handleInputChange = (e) => {
    setSearchValue(e.target.value); // Update state on input change
  };

  // Function to handle service coordinator selection change
  const handleCoordinatorChange = (e) => {
    setSelectedCoordinator(e.target.value);
  };

  // Function to handle client status selection change
  const handleClientStatusChange = (e) => {
    setSelectedClientStatus(e.target.value);
  };

  const handleClientTypeChange = (e) => {
    setSelectedClientType(e.target.value);
  };

  return (
    <div>
      <div className=" flex gap-2  flex-wrap items-start ">
        <Link to={"/business/clients/create"}>
          <button className="py-2 px-3 bg-primary text-[#fff] text-sm rounded-md hover:shadow-xl transition duration-300">
            Add Client
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
            id="coordinator-select"
            value={selectedCoordinator}
            onChange={handleCoordinatorChange}
            className="border p-2 rounded-md text-sm w-full"
          >
            {serviceCoordinators.map((coordinator, index) => (
              <option key={index} value={coordinator}>
                {coordinator}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2">
          <div className="w-full sm:w-max">
            {/* Client Status Select Dropdown */}
            <select
              id="client-status-select"
              value={selectedClientStatus}
              onChange={handleClientStatusChange}
              className="border p-2 rounded-md text-sm w-full"
            >
              {clientStatuses.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full sm:w-max">
            {/* Client Type Select Dropdown */}
            <select
              id="client-type-select"
              value={selectedClientType}
              onChange={handleClientTypeChange}
              className="border p-2 rounded-md text-sm w-full"
            >
              {clientTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="border rounded-md">
            <input
              type="text"
              className="h-full px-2 outline-none rounded-md"
              placeholder="Type to Search..."
              value={searchValue}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
