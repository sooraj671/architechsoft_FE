import React, { useState } from "react";

const SelectClient = ({ selectedClient, setSelectedClient }) => {
  // fetch registered clients from backend and then update the state with that
  const [clients, setClients] = useState(["--Select a Client--"]);

  const handleClientChange = (e) => {
    setSelectedClient(e.target.value);
  };
  return (
    <div className="flex border rounded-md overflow-hidden">
      <div className="bg-[#fff] w-[30%] p-6 flex justify-center flex-col gap-3">
        <div className=" gap-3 flex  items-center  w-full ">
          <p className="px-2 py-[2px] rounded-md bg-primary text-[#fff]">1</p>
          <h1 className="text-lg leading-9">Select a Client</h1>
        </div>
        <p className="text-sm text-gray-500 ">
          Select the client who needs a caregiver
        </p>
      </div>
      <div className="flex flex-col gap-2 w-[70%] p-6 bg-green-50">
        <label htmlFor="marital-status" className="">
          Select a Client <span className="text-red-500">*</span>
        </label>
        <div className="w-full">
          <select
            id="client-marital-status-select"
            value={selectedClient}
            onChange={handleClientChange}
            className="border p-[10px] rounded-md w-full"
          >
            {clients.map((client, index) => (
              <option key={index} value={client}>
                {client}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectClient;
