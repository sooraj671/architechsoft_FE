import React from "react";
import Search from "../../../Components/Search/Search";
import Footer from "../../../Components/Footer/Footer";
import CreateClientForm from "../../../Components/Clients/AddClient/CreateClientForm/CreateClientForm";

const AddCLient = () => {
  return (
    <div className="pt-20 w-full h-screen overflow-y-auto">
      <div className="bg-[#fff] py-3 px-5 flex items-center justify-between">
        <p className="text-lg leading-9 capitalize font-semibold text-gray-800">
          add a new client
        </p>
        <div>
          <Search />
        </div>
      </div>
      <div className="bg-green-100 p-4">
        <div className="bg-[#fff] rounded-[4px] overflow-hidden flex flex-col gap-4">
          <CreateClientForm />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AddCLient;
