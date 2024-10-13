import React, { useState } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { RiVerifiedBadgeLine, RiMoneyDollarBoxLine } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { PiGraphLight } from "react-icons/pi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Features = () => {
  const navElements = [
    {
      icon: <AiOutlineSchedule size={25} />,
      title: "Schedule Care",
      points: [
        "Complete Scheduling System",
        "Assign and Manage Care Plans",
        "Manage Recurring Visits",
        "Drag and Drop Schedule Changes",
        "Easily Filter Clients & Caregivers",
        "Customize Rates for Specific Schedules",
        "Search Caregiver Availability",
      ],
      moreLink: "More on Scheduling",
    },
    {
      icon: <RiVerifiedBadgeLine size={25} />,
      title: "Verify Care",
      points: [
        "Electronic Visit Verification via GPS and Telephony",
        "Eliminates Fraud, Fudging and Leakage",
        "Simple, clean user interface",
        "No Unique ID Codes for Caregivers to Memorize",
        "Easy for Caregivers to Learn and Use ",
        "Video Tutorials & Documentation Available",
      ],
      moreLink: "More on EVV & Mobile App",
    },
    {
      icon: <RiMoneyDollarBoxLine size={25} />,
      title: "Process Payments",
      points: [
        "Ally will process all client charges via Credit Card or ACH",
        "Ally's processing insulates the Registry and reduces the risk of being labeled the employer by the DOL",
        "Reposition in house labor from billing to marketing and sales",
        "Easily view all Pending and Completed Charges",
        "Manage credit card expirations",
        "Send and track the status of insurance claims directly through Ally's integrated claims submission platform",
      ],
      moreLink: "More on Revenue Cycle: Payments",
    },
    {
      icon: <GiTakeMyMoney size={25} />,
      title: "Pay Caregivers & Registry",
      points: [
        "Ally pays your caregivers each week",
        "Registry is paid their referral fees each week",
        "Payments sent via direct deposit - we are paperless!",
        "Payments can be sent to pre pay cards if caregiver does not have bank account",
      ],
      moreLink: "More on Revenue Cycle: Billing",
    },
    {
      icon: <PiGraphLight size={25} />,
      title: "Stay Connected",
      points: [
        "Client portal to view all care details and pay statements",
        "Caregiver portal to see all shifts worked and all payments received",
        "Call and text message support for registries to stay connected to their clients and caregivers",
        "Prebuilt reports for state and federal audits",
        "Activity reports to see all care details and empowering the registry owner to make more informed business decisions",
      ],
      moreLink: "More on Family Room",
    },
  ];

  const [activeElement, setActiveElement] = useState(navElements[0]);
  const [showElements, setShowElements] = useState(false);

  const handleSetActiveElement = (element) => {
    setActiveElement(element);
    setShowElements(false);
  };

  return (
    <div className="bg-gradient-to-b from-green-200 to-[#fff] px-5 py-10 md:py-16 lg:px-28 flex justify-center items-center h-max">
      <div
        className={`bg-green-50 rounded-3xl px-4 py-10 max-w-screen-xl w-full h-min`}
      >
        <h1 className="mb-10 sm:text-center font-bold text-3xl md:text-4xl text-gray-700">
          Features
        </h1>
        <p className="md:text-lg md:text-center">
          Powerful features to help you run your home care registry.
        </p>
        <div className="transition-all duration-500">
          <div
            className="mt-8 flex bg-[#fff] shadow-sm justify-between items-center px-5 py-3 h-16 cursor-pointer md:hidden"
            onClick={() => setShowElements(!showElements)}
          >
            <div className="flex justify-center items-center gap-4">
              <p className="bg-primary text-[#fff] rounded-full p-2">
                {activeElement.icon}
              </p>
              <h1 className="text-primary">{activeElement.title}</h1>
            </div>
            <p className="text-primary">
              <MdOutlineArrowDropDown size={25} />
            </p>
          </div>
          <div className={`${showElements ? "block" : "hidden"}`}>
            {navElements.map((elem, index) => {
              return (
                <div
                  className="md:hidden flex shadow-sm justify-between items-center px-5 py-3 cursor-pointer h-16"
                  key={index}
                  onClick={() => handleSetActiveElement(elem)}
                >
                  <div className="flex justify-center items-center gap-4">
                    <p
                      className={`${
                        elem.title === activeElement.title
                          ? "bg-primary text-[#fff]"
                          : "bg-[#fff] text-primary"
                      }  rounded-full p-2`}
                    >
                      {elem.icon}
                    </p>
                    <h1 className="text-primary">{elem.title}</h1>
                  </div>
                </div>
              );
            })}
          </div>
          {/* long nav  */}
          <div className="hidden md:flex mt-10 lg:gap-2 ">
            {navElements.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex justify-center items-center gap-4 flex-1 border-b-[3px] py-2 cursor-pointer transition-all duration-500 ${
                    item.title === activeElement.title
                      ? "border-primary"
                      : "border-green-50"
                  }`}
                  onClick={() => handleSetActiveElement(item)}
                >
                  <p
                    className={`rounded-full p-2 transition-all duration-500 ${
                      item.title === activeElement.title
                        ? "bg-primary text-[#fff] "
                        : "text-primary bg-[#fff]"
                    }`}
                  >
                    {item.icon}
                  </p>
                  <h1 className="text-primary">{item.title}</h1>
                </div>
              );
            })}
          </div>
          <div className={`bg-green-50 py-8 border-t w-full md:px-32`}>
            <h1 className="mb-7 font-bold text-2xl text-gray-700 ">
              {activeElement.title}
            </h1>
            {activeElement?.points?.map((point, index) => {
              return (
                <div key={index} className="flex gap-2 mb-2 px-3">
                  <p className="pt-1 text-orange-400">
                    <TbPointFilled />
                  </p>
                  <p>{point}</p>
                </div>
              );
            })}
            <Link
              to={"/"}
              className="mt-5 text-primary hover:text-[#6fd12de9] font-semibold flex items-center gap-3"
            >
              <p>{activeElement.moreLink}</p>
              <span>
                <FaArrowRightLong size={20} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
