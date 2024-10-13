import React, { useState } from "react";

const CreateClientForm = () => {
  const clientTypes = [
    "All Client Types",
    "Lead Agency",
    "LTCI",
    "Medicaid",
    "Private Pay",
    "VA",
  ];
  const timeZones = [
    "America - New York (EDT)",
    "America - Chicago (CDT)",
    "America - Denver (MDT)",
    "America - Phoenix (MST)",
    "America - Los Angeles (PDT)",
    "America - Anchorage (AKST)",
    "Pacific - Honolulu (HST)",
  ];

  const status = ["Active", "Inactive"];
  const agreementStatus = [
    "--Select--",
    "Needs Agreement/Send Electronically",
    "Signed Paper Agreement",
  ];

  const [selectedClientType, setSelectedClientType] =
    useState("All Client Types");
  const [selectedTimeZone, setSelectedTimeZone] = useState(
    "America - New York (EDT)"
  );
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [selectedAgreementStatus, setSelectedAgreementStatus] = useState(
    "Needs Agreement/Send Electronically"
  );

  const handleClientTypeChange = (e) => {
    setSelectedClientType(e.target.value);
  };
  const handleTimeZoneChange = (e) => {
    setSelectedTimeZone(e.target.value);
  };
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };
  const handleAgreementStatusChange = (e) => {
    setSelectedAgreementStatus(e.target.value);
  };

  return (
    <div>
      <div className="w-full bg-primary px-4 py-2 text-[#fff] text-lg">
        New Client
      </div>
      <form action="submit">
        <div className="border-b border-gray-200">
          <div className="flex">
            <div className="flex flex-col gap-2 w-1/2 p-4">
              <label htmlFor="name">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
              />
              <p className="text-sm text-gray-500 ">Enter their first name</p>
            </div>
            <div className="flex flex-col gap-2 w-1/2 p-4">
              <label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
              />
              <p className="text-sm text-gray-500 ">
                Enter their email address
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-2 w-1/2 p-4">
              <label htmlFor="lastname">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
              />
              <p className="text-sm text-gray-500 ">Enter their last name</p>
            </div>
            <div className="flex flex-col gap-2 w-1/2 p-4">
              <label htmlFor="username">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
              />
              <p className="text-sm text-gray-500 ">
                Enter their username to be used for logins.
              </p>
            </div>
          </div>
          <div className="flex w-full ">
            <div className="w-1/2 ">
              <div className="flex flex-col gap-2 p-4">
                <label htmlFor="client-type">
                  Client Type <span className="text-red-500">*</span>
                </label>
                <div className="w-full ">
                  {/* Client Type Select Dropdown */}
                  <select
                    id="client-type-select"
                    value={selectedClientType}
                    required
                    onChange={handleClientTypeChange}
                    className="border p-[10px]   rounded-md text-sm w-full"
                  >
                    {clientTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="text-sm text-gray-500 ">
                  Select the type of payment the client will use.
                </p>
              </div>
              <div className="p-4">
                <input type="checkbox" className="mr-2" />
                <label htmlFor="">Use Provider Pay</label>
                <p className="text-sm text-gray-500 mt-3">
                  Set the payment method to the registry's bank account.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col gap-2 p-4">
                <label htmlFor="password">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  required
                  className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
                />
                <p className="text-sm text-gray-500 ">
                  Enter the password they will use to login for the first time.
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <label htmlFor="confirm-password">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  required
                  className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
                />
                <p className="text-sm text-gray-500 ">
                  Re-enter the above password.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-200 pb-5">
          <div className="w-1/2">
            <div className="flex flex-col gap-2 p-4">
              <label htmlFor="time-zone">
                Time Zone <span className="text-red-500">*</span>
              </label>
              <div className="w-full ">
                {/* Client Type Select Dropdown */}
                <select
                  id="client-time-zone-select"
                  value={selectedTimeZone}
                  required
                  onChange={handleTimeZoneChange}
                  className="border p-[10px]   rounded-md text-sm w-full"
                >
                  {timeZones.map((zone, index) => (
                    <option key={index} value={zone}>
                      {zone}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-sm text-gray-500 ">
                Select your default timezone.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <label htmlFor="status">Status</label>
              <div className="w-full ">
                {/* Client Type Select Dropdown */}
                <select
                  id="client-status-select"
                  value={selectedStatus}
                  onChange={handleStatusChange}
                  className="border p-[10px]   rounded-md text-sm w-full"
                >
                  {status.map((status, index) => (
                    <option key={index} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-2 p-4">
              <label htmlFor="date-of-birth">Date of Birth</label>
              <input
                type="date"
                placeholder="MM/DD/YYYY"
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
              />
              <p className="text-sm text-gray-500 ">
                Enter their date of birth. Ex: DD/MM/YYYY
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <label htmlFor="agreement-status">
                Archi Client Agreement Status
                <span className="text-red-500">*</span>
              </label>
              <div className="w-full ">
                {/* Client Type Select Dropdown */}
                <select
                  id="client-agreement-status-select"
                  value={selectedAgreementStatus}
                  required
                  onChange={handleAgreementStatusChange}
                  className="border p-[10px]   rounded-md text-sm w-full"
                >
                  {agreementStatus.map((status, index) => (
                    <option key={index} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-2 w-1/2 p-4">
            <label htmlFor="ssn">Social Security Number (SSN)</label>
            <input
              type="number"
              className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
            />
            <p className="text-sm text-gray-500 ">
              Enter their Social Security Number. Ex: 123-45-6789
            </p>
          </div>
          <div className="flex flex-col gap-2 w-1/2 p-4">
            <label htmlFor="ein">Employer Identification Number (EIN)</label>
            <input
              type="number"
              className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
            />
            <p className="text-sm text-gray-500 ">
              Enter their Employer Identification Number. Ex: 12-3456789
            </p>
          </div>
        </div>
        <div className="p-4">
          <button
            className="py-2 px-3 bg-primary text-[#fff] rounded-md shadow-md hover:bg-[#72d72f] transition duration-200"
            type="submit"
          >
            Create & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateClientForm;
