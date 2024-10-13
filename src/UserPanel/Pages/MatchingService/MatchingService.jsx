import React, { useState } from "react";
import Search from "../../Components/Search/Search";
import Footer from "../../Components/Footer/Footer";
import SelectClient from "../../Components/CareMatch/SelectClient/SelectClient";
import CaregiverAvailability from "../../Components/CareMatch/CaregiverAvailAbility/CaregiverAvailability";
import CaregiverQualifications from "../../Components/CareMatch/Qualifications/CaregiverQualifications";

const MatchingService = () => {
  const [selectedClient, setSelectedClient] = useState("--Select a Client--");
  const [selectedDays, setselectedDays] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  return (
    <div className="pt-20 w-full h-screen overflow-y-auto ">
      <div className="bg-[#fff] py-3 px-5 flex items-center justify-between">
        <p className="text-lg leading-9 capitalize font-semibold text-gray-800">
          careMatch
        </p>
        <div>
          <Search />
        </div>
      </div>
      <div className="bg-green-100 p-4">
        <SelectClient
          selectedClient={selectedClient}
          setSelectedClient={setSelectedClient}
        />
        <CaregiverAvailability
          selectedDays={selectedDays}
          setselectedDays={setselectedDays}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          startTime={startTime}
          setStartTime={setStartTime}
          endTime={endTime}
          setEndTime={setEndTime}
        />
        <CaregiverQualifications />
        <div>4</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MatchingService;
