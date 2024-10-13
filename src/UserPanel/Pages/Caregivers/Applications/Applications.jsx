import React, { useState } from "react";
import Search from "../../../Components/Search/Search";
import CaregiversTable from "../../../Components/Schedule/Table/CaregiversTable";
import Footer from "../../../Components/Footer/Footer";
import Toolbox from "../../../Components/Caregivers/Applications/Toolbox/Toolbox";

const Applications = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="pt-20 w-full h-screen overflow-y-auto">
      <div className="bg-[#fff] py-3 px-5 flex items-center justify-between">
        <p className="text-lg leading-9 capitalize font-semibold text-gray-800">
          Caregiver Applications
        </p>
        <div>
          <Search />
        </div>
      </div>
      <div className="bg-green-100 p-4">
        <div className="bg-[#fff] p-4 flex flex-col gap-4">
          <Toolbox searchValue={searchValue} setSearchValue={setSearchValue} />
          {/* TODO here table is template , need to be reviewed  */}
          <CaregiversTable searchValue={searchValue} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Applications;
