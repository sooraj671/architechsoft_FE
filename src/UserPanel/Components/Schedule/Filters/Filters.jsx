import React, { useState } from "react";

const Filters = ({ selectedFilters, setSelectedFilters }) => {
  const filters = [
    "All Statuses",
    "Scheduled",
    "Unscheduled",
    "Clocked In",
    "Confirmed",
    "Unconfirmed",
    "Open Shift",
    "Client Canceled",
    "CG Canceled",
    "CG No Show",
    "Attention Required",
    "HOL / OT",
    "Added to Past",
    "Hospital Hold",
    "Unable to Staff",
    "Medicaid missed visit",
    "Fixed Billing Type",
  ];

  const [showScheduleModule, setShowScheduleModule] = useState(false);
  const [showBulkEditorModule, setShowBulkEditorModule] = useState(false);
  const [showDeleteScheduleModule, setShowDeleteScheduleModule] =
    useState(false);

  const handleFiltersArray = (filter) => {
    setSelectedFilters((prevSelectedFilters) => {
      if (prevSelectedFilters?.includes(filter)) {
        return prevSelectedFilters.filter((f) => f !== filter);
      } else {
        return prevSelectedFilters
          ? [...prevSelectedFilters, filter]
          : [filter];
      }
    });
  };

  const isSelectedFilter = (filter) => {
    return selectedFilters.includes(filter);
  };

  return (
    <div className="flex relative">
      <div className="w-1/2 flex flex-wrap gap-2">
        {filters.map((filter, index) => {
          const isSelected = isSelectedFilter(filter);
          return (
            <div
              key={index}
              className={`bg-green-100 border-primary rounded-[4px] px-1 text-xs cursor-pointer ${
                isSelected ? "border-2" : "border"
              }`}
              onClick={() => handleFiltersArray(filter)}
            >
              {filter}
            </div>
          );
        })}
      </div>
      <div className="w-1/2 flex gap-2 justify-end flex-wrap items-start ">
        {/* schedule shift module */}
        <button
          className="py-2 px-3 bg-primary text-[#fff] text-sm rounded-md hover:shadow-xl transition duration-300"
          onClick={() => setShowScheduleModule(true)}
        >
          Duty Agenda
        </button>
        <div
          className={`bg-black backdrop-blur-md bg-opacity-30 h-screen overflow-y-auto top-0 left-0 w-full z-30 p-20 ${
            showScheduleModule ? "fixed" : "hidden"
          }`}
        >
          <div className="bg-[#fff] h-screen rounded-md">
            <div className="flex py-2 px-5 border-b border-b-gray-200 justify-between items-center">
              <div className="leading-9 text-lg font-semibold">Duty Agenda</div>
              <div>
                <button
                  onClick={() => setShowScheduleModule(false)}
                  className="font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* bulk editor module */}
        <button
          className="py-2 px-3 bg-blue-400 text-[#fff] text-sm rounded-md hover:shadow-xl transition duration-300"
          onClick={() => setShowBulkEditorModule(true)}
        >
          Group Agenda
        </button>
        <div
          className={`bg-black backdrop-blur-md bg-opacity-30 h-screen overflow-y-auto top-0 left-0 w-full z-30 p-20 ${
            showBulkEditorModule ? "fixed" : "hidden"
          }`}
        >
          <div className="bg-[#fff] h-screen rounded-md">
            <div className="flex py-2 px-5 border-b border-b-gray-200 justify-between items-center">
              <div className="leading-9 text-lg font-semibold">
                Group Agenda
              </div>
              <div>
                <button
                  onClick={() => setShowBulkEditorModule(false)}
                  className="font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* delete schedule module */}
        <button
          className="py-2 px-3 bg-red-500 text-[#fff] text-sm rounded-md hover:shadow-xl transition duration-300"
          onClick={() => setShowDeleteScheduleModule(true)}
        >
          Discard Agenda
        </button>
        <div
          className={`bg-black backdrop-blur-md bg-opacity-30 h-screen overflow-y-auto top-0 left-0 w-full z-30 p-20 ${
            showDeleteScheduleModule ? "fixed" : "hidden"
          }`}
        >
          <div className="bg-[#fff] h-screen rounded-md">
            <div className="flex py-2 px-5 border-b border-b-gray-200 justify-between items-center">
              <div className="leading-9 text-lg font-semibold">
                Discard Agenda
              </div>
              <div>
                <button
                  onClick={() => setShowDeleteScheduleModule(false)}
                  className="font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
