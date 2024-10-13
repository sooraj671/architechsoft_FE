import React from "react";
import Search from "../../../Components/Search/Search";
import CreateCaregiverForm from "../../../Components/Caregivers/AddCaregiver/CreateCaregiverForm";
import Footer from "../../../Components/Footer/Footer";

const ApplicationsCreate = () => {
  return (
    <div className="pt-20 w-full h-screen overflow-y-auto">
      <div className="bg-[#fff] py-3 px-5 flex items-center justify-between">
        <p className="text-lg leading-9 capitalize font-semibold text-gray-800">
          create new cargiver application
        </p>
        <div>
          <Search />
        </div>
      </div>
      <div className="bg-green-100 p-4">
        <div className="bg-[#fff] rounded-[4px] overflow-hidden flex flex-col gap-4">
          <CreateCaregiverForm />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ApplicationsCreate;
