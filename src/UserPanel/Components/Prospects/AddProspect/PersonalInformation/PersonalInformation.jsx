import React, { useEffect, useState } from "react";
import { IoIosCheckbox } from "react-icons/io";
import { RiCheckboxBlankFill } from "react-icons/ri";

const PersonalInformation = ({
  selectedTimeZone,
  setSelectedTimeZone,
  selectedStatus,
  setSelectedStatus,
  selectedMaritalStatus,
  setSelectedMaritalStatus,
  selectedLanguages,
  setSelectedLanguages,
  DNR,
  setDNR,
  selectedClientType,
  setSelectedClientType,
}) => {
  const clientTypes = [
    "All Client Types",
    "Lead Agency",
    "LTCI",
    "Medicaid",
    "Private Pay",
    "VA",
  ];
  const maritalStatuses = [
    "--Select Status--",
    "Divorced",
    "Married",
    "Single",
    "Unknown",
    "Widowed",
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
  const languages = [
    "Arabic",
    "Armenian",
    "Chinese",
    "English",
    "French/Creole",
    "Georgian",
    "German",
    "Greek",
    "Italian",
    "Russian",
    "Sign Language",
    "Spanish",
    "Swahili",
    "Tagalog",
    "Twi",
    "Ukrainian",
    "Other",
  ];
  const status = ["Active", "Inactive"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50 && window.scrollY <= 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // functions
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };
  const handleMaritalStatusChange = (e) => {
    setSelectedMaritalStatus(e.target.value);
  };

  const handleTimeZoneChange = (e) => {
    setSelectedTimeZone(e.target.value);
  };

  const handleClientTypeChange = (e) => {
    setSelectedClientType(e.target.value);
  };

  // Handle client selection
  const handleLanguagesArray = (language) => {
    setSelectedLanguages((prevSelectedLanguages) =>
      prevSelectedLanguages.includes(language)
        ? prevSelectedLanguages.filter((l) => l !== language)
        : [...prevSelectedLanguages, language]
    );
  };

  return (
    <div className="flex">
      <div className={`w-56 ${scrolled ? "pt-32" : ""} pb-5 px-4`}>
        <div className="sticky top-0">
          <h1 className="font-bold text-2xl ">Personal Information</h1>
          <p className="text-gray-500 mt-3">
            Enter the personal information for this new potential client.
            Required fields are marked with a red asterisk
          </p>
        </div>
      </div>
      <div className="bg-[#fff] w-full p-5 border-b shadow-xl">
        <div className="flex gap-6">
          {/* 1st column  */}
          <div className="flex-1 flex flex-col gap-5">
            <div className="flex gap-3">
              {/* first name  */}
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="firstname" className="text-sm">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
                />
                <p className="text-sm text-gray-500 ">Enter their first name</p>
              </div>
              {/* last name  */}
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="lastname" className="text-sm">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
                />
                <p className="text-sm text-gray-500 ">Enter their last name</p>
              </div>
            </div>
            {/* client type  */}
            <div className="flex flex-col gap-2">
              <label htmlFor="client-type" className="text-sm">
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
            {/* status  */}
            <div className="flex flex-col gap-2 ">
              <label htmlFor="status" className="text-sm">
                Status
              </label>
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
            {/* time zone  */}
            <div className="flex flex-col gap-2 ">
              <label htmlFor="time-zone" className="text-sm">
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
          </div>
          {/* 2nd column */}
          <div className="flex-1 flex flex-col gap-5">
            {/* email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
              />
              <p className="text-sm text-gray-500 ">
                Enter their email address. Ex: user@domain.com
              </p>
            </div>
            {/* phone munber  */}
            <div className="flex flex-col gap-2 ">
              <label htmlFor="phone-number" className="text-sm">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
              />
              <p className="text-sm text-gray-500 ">Enter full phone number.</p>
            </div>
            {/* date of birth  */}
            <div className="flex flex-col gap-2 ">
              <label htmlFor="date-of-birth" className="text-sm">
                Date of Birth
              </label>
              <input
                type="date"
                placeholder="MM/DD/YYYY"
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
              />
              <p className="text-sm text-gray-500 ">
                Enter their date of birth. Ex: DD/MM/YYYY
              </p>
            </div>
            {/* languages  */}
            <div className=" flex gap-1 flex-wrap">
              {languages.map((language, index) => {
                const isSelected = selectedLanguages.includes(language);
                return (
                  <div
                    key={index}
                    className="flex items-center p-1 gap-2 cursor-pointer"
                    onClick={() => handleLanguagesArray(language)}
                  >
                    <p className="text-[#7cdf3a]">
                      {isSelected ? (
                        <IoIosCheckbox size={25} />
                      ) : (
                        <RiCheckboxBlankFill size={25} />
                      )}
                    </p>
                    <p>{language}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-5">
          <div className="flex gap-6">
            {/* height weight  */}
            <div className="flex gap-3">
              {/* height */}
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="height" className="text-sm">
                  Height <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
                />
              </div>
              {/* weight  */}
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="weight" className="text-sm">
                  Weight <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
                />
              </div>
            </div>
            <div className="flex gap-3">
              {/* marital status  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="marital-status" className="text-sm">
                  Marital Status
                </label>
                <div className="w-full ">
                  <select
                    id="client-marital-status-select"
                    value={selectedMaritalStatus}
                    onChange={handleMaritalStatusChange}
                    className="border p-[10px]   rounded-md text-sm w-full"
                  >
                    {maritalStatuses.map((status, index) => (
                      <option key={index} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* spouse name  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="spouse-name" className="text-sm">
                  Spouse Name
                </label>
                <input
                  type="text"
                  required
                  className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
                />
              </div>
            </div>
          </div>
          <div
            className=" flex gap-3 cursor-pointer"
            onClick={() => setDNR(!DNR)}
          >
            <p className="text-[#7cdf3a]">
              {DNR ? (
                <IoIosCheckbox size={25} />
              ) : (
                <RiCheckboxBlankFill size={25} />
              )}
            </p>
            <p>Do Not Resuscitate(DNR)</p>
          </div>
          <div className="flex gap-6">
            {/* living arrangements  */}
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="living-arrangements" className="text-sm">
                Living Arrangements
              </label>
              <textarea
                type="text"
                required
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
              />
              <p className="text-sm text-gray-500 ">
                Describe prospect's living arrangements.
              </p>
            </div>
            {/* misc notes  */}
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="misc-notes" className="text-sm">
                Misc Notes
              </label>
              <textarea
                type="text"
                required
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
              />
            </div>
          </div>
          <div className="py-2 flex justify-end">
            <button className="bg-primary text-[#fff] py-2 px-3 rounded-md hover:shadow-xl transition duration-200 capitalize">
              save potential client
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
