import React, { useState } from "react";
import Search from "../../../Components/Search/Search";
import Footer from "../../../Components/Footer/Footer";

import PersonalInformation from "../../../Components/Prospects/AddProspect/PersonalInformation/PersonalInformation";
import CallerInfo from "../../../Components/Prospects/AddProspect/CallerInfo/CallerInfo";
import Address from "../../../Components/Prospects/AddProspect/Address/Address";
import SalesInfo from "../../../Components/Prospects/AddProspect/SalesInfo/SalesInfo";

const AddPotentialClient = () => {
  // personal info
  const [selectedTimeZone, setSelectedTimeZone] = useState(
    "America - New York (EDT)"
  );
  const [selectedClientType, setSelectedClientType] =
    useState("All Client Types");

  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [selectedMaritalStatus, setSelectedMaritalStatus] =
    useState("--Select Status--");
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [DNR, setDNR] = useState(false);
  // caller info
  const [selectedCallerRelationship, setSelectedCallerRelationship] = useState(
    "--Select a Relationship--"
  );
  const [selectedCallerState, setSelectedCallerState] = useState("--Select--");
  const [addressState, setAddressState] = useState("--Select--");

  return (
    <div className="pt-20 w-full h-screen overflow-y-auto ">
      <div className="bg-[#fff] py-3 px-5 flex items-center justify-between">
        <p className="text-lg leading-9 capitalize font-semibold text-gray-800">
          add a new potential client
        </p>
        <div>
          <Search />
        </div>
      </div>
      <div className="bg-green-100 p-4 ">
        {/* personal information  */}
        <PersonalInformation
          selectedTimeZone={selectedTimeZone}
          setSelectedTimeZone={setSelectedTimeZone}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          selectedMaritalStatus={selectedMaritalStatus}
          setSelectedMaritalStatus={setSelectedMaritalStatus}
          selectedLanguages={selectedLanguages}
          setSelectedLanguages={setSelectedLanguages}
          DNR={DNR}
          setDNR={setDNR}
          selectedClientType={selectedClientType}
          setSelectedClientType={setSelectedClientType}
        />

        {/* caller information */}
        <CallerInfo
          selectedCallerRelationship={selectedCallerRelationship}
          setSelectedCallerRelationship={setSelectedCallerRelationship}
          selectedCallerState={selectedCallerState}
          setSelectedCallerState={setSelectedCallerState}
        />
        {/* address  */}
        <Address
          addressState={addressState}
          setAddressState={setAddressState}
        />
        <SalesInfo />
        <div className=" flex justify-end my-5">
          <button className="bg-primary text-[#fff] py-2 px-3 rounded-md hover:shadow-xl transition duration-200 capitalize">
            save potential client
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AddPotentialClient;
