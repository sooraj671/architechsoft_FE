import React, { useEffect, useRef, useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";

const CreateCaregiverForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const [refContactSearchValue, setRefContactSearchValue] = useState("");
  const referralSourceRef = useRef(null);
  const referralSourceContactRef = useRef(null);
  const [showReferralSources, setShowReferralSources] = useState(false);
  const [showReferralSourceContact, setShowReferralSourceContact] =
    useState(false);
  const location = useLocation();

  const timeZones = [
    "America - New York (EDT)",
    "America - Chicago (CDT)",
    "America - Denver (MDT)",
    "America - Phoenix (MST)",
    "America - Los Angeles (PDT)",
    "America - Anchorage (AKST)",
    "Pacific - Honolulu (HST)",
  ];

  const applicationStage = [
    "New Applicant",
    "Interview Completed",
    "Passed Background Check",
    "Passed Phone Screen",
    "Passed Reference Check",
    "Passed Skills Screening Test",
    "Converted To Active Caregiver",
    "Not Referred",
  ];

  const status = ["Active", "Inactive", "Eugenie barr (Inactive)"];

  const [selectedTimeZone, setSelectedTimeZone] = useState(
    "America - New York (EDT)"
  );
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [selectedApplicationStage, setSelectedApplicationStage] =
    useState("New Applicant");

  // functions
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleRefContactInputChange = (e) => {
    setRefContactSearchValue(e.target.value);
  };
  const handleTimeZoneChange = (e) => {
    setSelectedTimeZone(e.target.value);
  };
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };
  const handleAppStageChange = (e) => {
    setSelectedApplicationStage(e.target.value);
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
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        referralSourceContactRef.current &&
        !referralSourceContactRef.current.contains(event.target)
      ) {
        setShowReferralSourceContact(false);
      }
      if (
        referralSourceRef.current &&
        !referralSourceRef.current.contains(event.target)
      ) {
        setShowReferralSources(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="w-full bg-primary px-4 py-2 text-[#fff] text-lg">
        New Caregiver
      </div>
      <form action="submit">
        <div className="border-b border-gray-200">
          <div className="flex">
            {/* first name  */}
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
            {/* title  */}
            <div className="flex flex-col gap-2 w-1/2 p-4">
              <label htmlFor="title">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
              />
              <p className="text-sm text-gray-500 ">
                Enter the caregiver's title (example: CNA)
              </p>
            </div>
          </div>
          <div className="flex">
            {/* last name  */}
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
            {/* email  */}
            <div className="flex flex-col gap-2 w-1/2 p-4">
              <label htmlFor="email">
                Email Address<span className="text-red-500">*</span>
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
          <div className="flex w-full ">
            <div className="w-1/2 ">
              {/* date of birth */}
              <div className="flex flex-col gap-2 p-4 ">
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
              {/* hire date  */}
              <div className="flex flex-col gap-2 p-4">
                <label htmlFor="hire-date">Hire Date</label>
                <input
                  type="date"
                  placeholder="MM/DD/YYYY"
                  className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
                />
              </div>
              <div className="flex flex-col gap-2  p-4">
                <label htmlFor="ssn">
                  Social Security Number (SSN) / Individual Taxpayer
                  Identification Number (ITIN)
                </label>
                <input
                  type="number"
                  className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
                />
                <p className="text-sm text-gray-500 ">
                  Enter their Social Security Number. Ex: 123-45-6789
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <label htmlFor="ein">
                  Employer Identification Number (EIN)
                </label>
                <input
                  type="number"
                  className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
                />
                <p className="text-sm text-gray-500 ">
                  Enter their Employer Identification Number. Ex: 12-3456789
                </p>
              </div>
              {/* referall  */}
              <div className=" p-4">
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
                      className={`py-2 px-3 flex-1 ${
                        showReferralSources && "hidden"
                      }`}
                      onClick={() => setShowReferralSources(true)}
                    >
                      Select a referral source
                    </div>
                    <div
                      className="cursor-pointer py-3 px-2"
                      onClick={() =>
                        setShowReferralSources(!showReferralSources)
                      }
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
              <div className="p-4">
                <div
                  className="relative w-full "
                  ref={referralSourceContactRef}
                >
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
            </div>
            <div className="w-1/2">
              {/* username  */}
              <div className="flex flex-col gap-2 p-4">
                <label htmlFor="username">
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
                />
                <p className="text-sm text-gray-500 ">
                  Enter their username to be used for logins
                </p>
              </div>
              {/* password  */}
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
              {/* confirm password  */}
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
              {/* status  */}
              <div className="flex flex-col gap-2 p-4">
                <label htmlFor="status">Status</label>
                <div className="w-full ">
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
              <div className="flex flex-col gap-2 p-4">
                <label htmlFor="time-zone">
                  Time Zone <span className="text-red-500">*</span>
                </label>
                <div className="w-full ">
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
              {/* application stage  */}
              {location.pathname ===
                "/business/caregivers/applications/create" && (
                <div className="flex flex-col gap-2 p-4">
                  <label htmlFor="application-stage">Applications Stage</label>
                  <div className="w-full ">
                    <select
                      id="application-stage-select"
                      value={selectedApplicationStage}
                      required
                      onChange={handleAppStageChange}
                      className="border p-[10px]   rounded-md text-sm w-full"
                    >
                      {applicationStage.map((stage, index) => (
                        <option key={index} value={stage}>
                          {stage}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
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

export default CreateCaregiverForm;
