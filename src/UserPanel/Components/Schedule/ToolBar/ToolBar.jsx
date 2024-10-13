import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { LuDownload } from "react-icons/lu";

const ToolBar = ({
  selectedView,
  setSelectedView,
  scheduled,
  completed,
  projected,
  canceled,
  open,
}) => {
  const toggleView = (view) => {
    setSelectedView(view);
    console.log(selectedView);
  };

  return (
    <div>
      <div className="flex ">
        {/* changing date, week month  */}
        <div className="flex">
          <button className="bg-gray-200 py-2 px-3 rounded-l-md hover:bg-gray-700 transition duration-200 hover:text-[#fff]">
            <MdOutlineKeyboardArrowLeft size={25} />
          </button>
          <button className="bg-gray-200 py-2 px-3 rounded-r-md hover:bg-gray-700 transition duration-200 hover:text-[#fff]">
            <MdOutlineKeyboardArrowRight size={25} />
          </button>
        </div>
        {/* showing period, either it is day, week, or month  */}
        <div className="flex justify-center items-center  uppercase px-5 ml-5 leading-9 text-lg font-semibold">
          date
        </div>
        <div className="flex gap-5 justify-end w-full leading-9 text-lg">
          <div>
            <button className="bg-gray-200 px-3 rounded-l-md hover:bg-gray-700 transition duration-200 hover:text-[#fff] h-full">
              Day
            </button>
            <button className="bg-gray-200 px-3  hover:bg-gray-700 transition duration-200 hover:text-[#fff] h-full">
              Week
            </button>
            <button className="bg-gray-200  px-3 rounded-r-md hover:bg-gray-700 transition duration-200 hover:text-[#fff] h-full">
              Month
            </button>
          </div>
          <div>
            {selectedView === "client" ? (
              <button
                className="bg-gray-200 px-3 rounded-md hover:bg-gray-700 transition duration-200 hover:text-[#fff] h-full"
                value={"caregiver"}
                onClick={(e) => toggleView(e.target.value)}
              >
                {/* view  */}
                Caregiver View
              </button>
            ) : (
              <button
                className="bg-gray-200 px-3 rounded-md hover:bg-gray-700 transition duration-200 hover:text-[#fff] h-full"
                value={"client"}
                onClick={(e) => toggleView(e.target.value)}
              >
                {/* view  */}
                Client View
              </button>
            )}
          </div>
          <div>
            <button className="bg-gray-200 px-3 rounded-md hover:bg-gray-700 transition duration-200 hover:text-[#fff] h-full">
              <LuDownload size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-5 justify-center">
        <div className="capitalize text-sm">scheduled: ({scheduled})</div>
        <div className="capitalize text-sm">completed: ({completed})</div>
        <div className="capitalize text-sm">projected: ({projected})</div>
        <div className="capitalize text-sm">canceled: ({canceled})</div>
        <div className="capitalize text-sm">open: ({open})</div>
      </div>
    </div>
  );
};

export default ToolBar;
