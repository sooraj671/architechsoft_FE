import React, { useState } from "react";
import Search from "../../../Components/Search/Search";
import Footer from "../../../Components/Footer/Footer";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import ReferralSourcesTable from "../../../Components/ReferralSources/ReferralSourcesTable";

const ReferralSources = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showAddReferralModule, setShowAddReferralModule] = useState(false);
  const [searchValue, setSearchValue] = useState(""); // State to store the input value

  const handleInputChange = (e) => {
    setSearchValue(e.target.value); // Update state on input change
  };
  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };
  return (
    <div className="pt-20 w-full h-screen overflow-y-auto relative">
      <div className="bg-[#fff] py-3 px-5 flex items-center justify-between">
        <p className="text-lg leading-9 capitalize font-semibold text-gray-800">
          referral sources
        </p>
        <div>
          <Search />
        </div>
      </div>
      <div className="bg-green-100 p-4">
        <div className="bg-[#fff] rounded-[4px] overflow-hidden  p-2">
          <div className="flex justify-between items-center ">
            <div
              className="p-2 text-lg flex gap-2 items-center flex-1 cursor-pointer"
              onClick={handleToggleFilters}
            >
              <p>Filters</p>
              <p
                className={`mt-1 ${
                  showFilters && "rotate-180 "
                } transition duration-300`}
              >
                <MdKeyboardArrowDown size={20} />
              </p>
            </div>
            <button
              className="px-5 py-2 rounded-full bg-primary text-[#fff] flex items-center gap-2 hover:shadow-lg transition duration-200"
              onClick={() => setShowAddReferralModule(true)}
            >
              <p>
                <IoPersonAdd size={20} />
              </p>
              <p>Add Referral Source</p>
            </button>
            <div
              className={`bg-black backdrop-blur-md bg-opacity-30 h-screen overflow-y-auto top-0 left-0 w-full z-30 p-20 ${
                showAddReferralModule ? "fixed" : "hidden"
              }`}
            >
              <div className="bg-[#fff] h-screen rounded-md">
                <div className="flex py-2 px-5 border-b border-b-gray-200 justify-between items-center">
                  <div className="leading-9 text-lg font-semibold">
                    Add a new Referral
                  </div>
                  <div>
                    <button
                      onClick={() => setShowAddReferralModule(false)}
                      className="font-semibold"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`mt-3 p-3 flex gap-5 ${!showFilters && "hidden"}`}>
            <div className="flex flex-col gap-3 h-full ">
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <label htmlFor="companies">Show Companies</label>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <label htmlFor="individuals">Show Individuals</label>
              </div>
            </div>
            <div className="flex  gap-5 items-center">
              <div className="flex gap-1 items-center">
                <label htmlFor="search" className="text-lg">
                  Search
                </label>
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleInputChange}
                  className="py-2 px-3 outline-none border rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-300 focus:border-green-300 transition-all duration-200"
                />
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <label htmlFor="active-referral-sources" className="text-wrap">
                  Show Only Active Referral Sources
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <label htmlFor="collapse-contacts">
                  Collapse Contacts By Default
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-100 p-4">
        <ReferralSourcesTable searchValue={searchValue} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ReferralSources;
