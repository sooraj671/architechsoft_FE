import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const [searchValue, setSearchValue] = useState(""); // State to store the input value

  const handleInputChange = (e) => {
    setSearchValue(e.target.value); // Update state on input change
  };

  return (
    <div className="relative border border-gray-200 rounded-md">
      <div className="flex items-center px-2">
        <p className="text-gray-500">
          <IoIosSearch size={25} />
        </p>
        <input
          type="text"
          className="py-2 rounded-sm px-3 outline-none w-80"
          placeholder="Search active clients and caregivers..."
          value={searchValue} // Bind input value to state
          onChange={handleInputChange} // Handle input change
        />
      </div>

      {/* Conditionally render search results if input is not empty */}
      {searchValue && (
        <div className="absolute left-0 right-0 bg-white border border-gray-200 rounded-md mt-1 shadow-lg z-20">
          <div className="p-3">
            {/* Display a message indicating no clients or caregivers found */}
            No clients or caregivers found
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
