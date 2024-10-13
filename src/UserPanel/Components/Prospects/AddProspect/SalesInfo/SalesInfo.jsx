import React, { useEffect, useRef, useState } from "react";
import { IoIosCheckbox } from "react-icons/io";
import { RiArrowDownSFill, RiCheckboxBlankFill } from "react-icons/ri";

const SalesInfo = () => {
  // states
  const [searchValue, setSearchValue] = useState("");
  const [refContactSearchValue, setRefContactSearchValue] = useState("");
  const [salespersonSearchValue, setSalespersonSearchValue] = useState(""); // Salesperson search value

  const [showReferralSources, setShowReferralSources] = useState(false);
  const [showReferralSourceContact, setShowReferralSourceContact] =
    useState(false);
  const [showSalesperson, setShowSalesperson] = useState(false); // Show/Hide Salesperson dropdown

  // boolean states for each checkbox
  const [requestedRegistry, setRequestedRegistry] = useState(false);
  const [requestedCareManagement, setRequestedCareManagement] = useState(false);
  const [requestedAssessment, setRequestedAssessment] = useState(false);
  const [requestedOnCall, setRequestedOnCall] = useState(false);
  const [requestedTransitional, setRequestedTransitional] = useState(false);
  const [requestedInformation, setRequestedInformation] = useState(false);

  //   refs
  const referralSourceRef = useRef(null);
  const referralSourceContactRef = useRef(null);
  const salespersonRef = useRef(null); // Ref for Salesperson dropdown

  const requestOptions = [
    "Requested Registry",
    "Requested Care Management",
    "Requested Assessment",
    "Requested On-Call",
    "Requested Transitional",
    "Requested Information",
  ];

  //   functions
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleRefContactInputChange = (e) => {
    setRefContactSearchValue(e.target.value);
  };
  const handleSalespersonInputChange = (e) => {
    setSalespersonSearchValue(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        referralSourceRef.current &&
        !referralSourceRef.current.contains(event.target)
      ) {
        setShowReferralSources(false);
      }
      if (
        referralSourceContactRef.current &&
        !referralSourceContactRef.current.contains(event.target)
      ) {
        setShowReferralSourceContact(false);
      }
      if (
        salespersonRef.current &&
        !salespersonRef.current.contains(event.target)
      ) {
        setShowSalesperson(false); // Hide Salesperson dropdown
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex">
      <div className="w-56 p-4">
        <div className="sticky top-0">
          <h1 className="font-bold text-2xl ">Sales Information</h1>
        </div>
      </div>
      <div className="bg-[#fff] w-full p-5 border-b flex gap-6 pb-10 shadow-xl">
        {/* first column  */}
        <div className=" w-1/2">
          {/* referall  */}
          <div>
            <div className="relative w-full " ref={referralSourceRef}>
              <p className="mb-2">Referral Source</p>
              <div className="border border-gray-200 flex items-center rounded-[4px] w-full">
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleInputChange}
                  className={`py-2 px-3 outline-none flex-1 ${
                    !showReferralSources && "hidden"
                  }`}
                  placeholder="Select a referral source"
                />
                <div
                  className={`py-2 px-3 flex-1  ${
                    showReferralSources && "hidden"
                  }`}
                  onClick={() => setShowReferralSources(true)}
                >
                  Select a referral source
                </div>
                <div
                  className="cursor-pointer py-3 px-2"
                  onClick={() => setShowReferralSources(!showReferralSources)}
                >
                  <RiArrowDownSFill />
                </div>
              </div>
              <div
                className={`border border-gray-200 p-2 flex flex-col gap-2 h-max mt-1 overflow-y-auto absolute top-100 left-0 right-0 bg-[#fff] z-20 ${
                  !showReferralSources && "hidden"
                }`}
              >
                <div className="text-center text-gray-500 ">
                  No referral source found
                </div>
              </div>
            </div>
          </div>
          {/* referral source contact  */}
          <div className="mt-4">
            <div className="relative w-full " ref={referralSourceContactRef}>
              <p className="mb-2">Referral Source Contact</p>
              <div className="border border-gray-200 flex items-center rounded-[4px] w-full">
                <input
                  type="text"
                  value={refContactSearchValue}
                  onChange={handleRefContactInputChange}
                  className={`py-2 px-3 outline-none flex-1 ${
                    !showReferralSourceContact && "hidden"
                  }`}
                  placeholder="Select a referral source"
                />
                <div
                  className={`py-2 px-3 flex-1 ${
                    showReferralSourceContact && "hidden"
                  }`}
                  onClick={() => setShowReferralSourceContact(true)}
                >
                  Select a referral source
                </div>
                <div
                  className="cursor-pointer py-3 px-2"
                  onClick={() =>
                    setShowReferralSourceContact(!showReferralSourceContact)
                  }
                >
                  <RiArrowDownSFill />
                </div>
              </div>
              <div
                className={`border border-gray-200 p-2 flex flex-col gap-2 h-max mt-1 overflow-y-auto absolute top-100 left-0 right-0 bg-[#fff] ${
                  !showReferralSourceContact && "hidden"
                }`}
              >
                <div className="text-center text-gray-500">
                  No referral source contact found
                </div>
              </div>
            </div>
          </div>
          {/* salesperson */}
          <div className="mt-4">
            <div className="relative w-full " ref={salespersonRef}>
              <p className="mb-2">Salesperson</p>
              <div className="border border-gray-200 flex items-center rounded-[4px] w-full">
                <input
                  type="text"
                  value={salespersonSearchValue}
                  onChange={handleSalespersonInputChange}
                  className={`py-2 px-3 outline-none flex-1 ${
                    !showSalesperson && "hidden"
                  }`}
                  placeholder="Select a salesperson"
                />
                <div
                  className={`py-2 px-3 flex-1 ${showSalesperson && "hidden"}`}
                  onClick={() => setShowSalesperson(true)}
                >
                  Select a salesperson
                </div>
                <div
                  className="cursor-pointer py-3 px-2"
                  onClick={() => setShowSalesperson(!showSalesperson)}
                >
                  <RiArrowDownSFill />
                </div>
              </div>
              <div
                className={`border border-gray-200 p-2 flex flex-col gap-2 h-max mt-1 overflow-y-auto absolute top-100 left-0 right-0 bg-[#fff] ${
                  !showSalesperson && "hidden"
                }`}
              >
                <div className="text-center text-gray-500">
                  No salesperson found
                </div>
              </div>
            </div>
          </div>
          {/* consultation  */}
          <div className="mt-4">
            <label htmlFor="consultation">Consultation</label>
            <div className="flex gap-3 flex-wrap mt-3">
              <input
                type="date"
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
              />
              <input
                type="time"
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
              />
              <input
                type="text"
                placeholder="Location"
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3 flex-1"
              />
            </div>
          </div>
          {/* checkbox  */}
          <div className="flex flex-wrap gap-3 mt-4">
            <div
              className="flex gap-3 cursor-pointer"
              onClick={() => setRequestedRegistry(!requestedRegistry)}
            >
              <p className="text-[#7cdf3a]">
                {requestedRegistry ? (
                  <IoIosCheckbox size={25} />
                ) : (
                  <RiCheckboxBlankFill size={25} />
                )}
              </p>
              <p className="select-none">Requested Registry</p>
            </div>
            <div
              className="flex gap-3 cursor-pointer"
              onClick={() =>
                setRequestedCareManagement(!requestedCareManagement)
              }
            >
              <p className="text-[#7cdf3a]">
                {requestedCareManagement ? (
                  <IoIosCheckbox size={25} />
                ) : (
                  <RiCheckboxBlankFill size={25} />
                )}
              </p>
              <p className="select-none">Requested Care Management</p>
            </div>
            <div
              className="flex gap-3 cursor-pointer"
              onClick={() => setRequestedTransitional(!requestedTransitional)}
            >
              <p className="text-[#7cdf3a]">
                {requestedTransitional ? (
                  <IoIosCheckbox size={25} />
                ) : (
                  <RiCheckboxBlankFill size={25} />
                )}
              </p>
              <p className="select-none">Requested Transitional</p>
            </div>
            <div
              className="flex gap-3 cursor-pointer"
              onClick={() => setRequestedInformation(!requestedInformation)}
            >
              <p className="text-[#7cdf3a]">
                {requestedInformation ? (
                  <IoIosCheckbox size={25} />
                ) : (
                  <RiCheckboxBlankFill size={25} />
                )}
              </p>
              <p className="select-none">Requested Information</p>
            </div>
            <div
              className="flex gap-3 cursor-pointer"
              onClick={() => setRequestedAssessment(!requestedAssessment)}
            >
              <p className="text-[#7cdf3a]">
                {requestedAssessment ? (
                  <IoIosCheckbox size={25} />
                ) : (
                  <RiCheckboxBlankFill size={25} />
                )}
              </p>
              <p className="select-none">Requested Assessment</p>
            </div>
            <div
              className="flex gap-3 cursor-pointer"
              onClick={() => setRequestedOnCall(!requestedOnCall)}
            >
              <p className="text-[#7cdf3a]">
                {requestedOnCall ? (
                  <IoIosCheckbox size={25} />
                ) : (
                  <RiCheckboxBlankFill size={25} />
                )}
              </p>
              <p className="select-none">Requested On-Call</p>
            </div>
          </div>
        </div>
        {/* second column  */}
        <div className="flex flex-col gap-3 w-1/2">
          {/* last contacted  */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="last-contact-date">Last Contacted</label>
            <input
              type="date"
              className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3 w-full"
            />
            <p className="text-sm text-gray-500 ">
              Enter when the prospect was contacted.
            </p>
          </div>
          {/* inquiry date  */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="inquiry-date">Date Inquired about Service</label>
            <input
              type="date"
              className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3 w-full"
            />
          </div>
          {/* assessment date  */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="assessment-date">Assessment Date</label>
            <input
              type="date"
              className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3 w-full"
            />
          </div>
          {/* follow up date  */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="follow-up-date">Follow Up Date</label>
            <input
              type="date"
              className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3 w-full"
            />
            <p className="text-sm text-gray-500 ">
              If filled out, will automatically create a follow up task due on
              this date
            </p>
          </div>
          {/* initial call date  */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="initial-call-date">Initial Call Date</label>
            <input
              type="date"
              className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesInfo;
