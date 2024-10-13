import React, { useState, useEffect } from "react";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { BsFillPersonLinesFill, BsPersonAdd } from "react-icons/bs";
import { MdArrowRight, MdPersonOutline } from "react-icons/md";
import { RxCopy } from "react-icons/rx";
import {
  IoCallOutline,
  IoChatbubblesOutline,
  IoBulbOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { GoHistory, GoPaste } from "react-icons/go";
import { PiHandCoinsThin } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    name: "schedule",
    link: "business/schedule",
    icon: <RiCalendarScheduleLine size={25} />,
  },
  {
    name: "clients",
    icon: <BsFillPersonLinesFill size={25} />,
    sublinks: [
      {
        name: "client list",
        link: "business/clients",
      },
      {
        name: "add client",
        link: "business/clients/create",
      },
      {
        name: "referral sources",
        link: "business/referral-sources/type-clients",
      },
    ],
  },
  {
    name: "caregivers",
    icon: <MdPersonOutline size={25} />,
    sublinks: [
      {
        name: "caregiver list",
        link: "business/caregivers",
      },
      {
        name: "add caregiver",
        link: "business/caregivers/create",
      },
      {
        name: "applications",
        link: "business/caregivers/applications",
      },
      {
        name: "referral sources",
        link: "business/referral-sources/type-caregiver",
      },
    ],
  },
  {
    name: "potential clients",
    icon: <BsPersonAdd size={25} />,
    sublinks: [
      {
        name: "potential clients list",
        link: "business/potential-clients",
      },
      {
        name: "add potential clients",
        link: "business/potential-clients/create",
      },
    ],
  },
  {
    name: "matching service",
    link: "business/matching-service",
    icon: <RxCopy size={25} />,
  },
  {
    name: "customer service center",
    icon: <IoCallOutline size={25} />,
    sublinks: [
      {
        name: "daily log",
        link: "business/daily-log",
      },
      {
        name: "schedule board",
        link: "business/schedule-board",
      },
      {
        name: "tasks",
        link: "business/task-manager",
      },
      {
        name: "tags & templates",
        link: "business/tags-and-template",
      },
    ],
  },
  {
    name: "shift history",
    link: "business/reports/shifts",
    icon: <GoHistory size={25} />,
  },
  {
    name: "invoicing",
    icon: <GoPaste size={25} />,
    sublinks: [
      {
        name: "payers",
        link: "business/payers",
      },
      {
        name: "service codes",
        link: "business/services",
      },
      {
        name: "create claims",
        link: "business/claims-create",
      },
      {
        name: "manage claims",
        link: "business/claims-manager",
      },
      {
        name: "remits",
        link: "business/claims-remits",
      },
      {
        name: "835 EOP imports",
        link: "business/eop-imports",
      },
      {
        name: "missed visit reports",
        link: "business/reports/claims/missed-visit-reports",
      },
      {
        name: "AR aging report",
        link: "business/report/account-receivable-aging",
      },
      {
        name: "transmission report",
        link: "business/reports/claims/transmissions",
      },
      {
        name: "remit applications report",
        link: "business/reports/claims/remit-application",
      },
      {
        name: "offline invoice AR",
        link: "business/offline-invoice-ar",
      },
      {
        name: "quickbooks queue",
        link: "business/quickbooks-queue",
      },
    ],
  },
  {
    name: "debtor accounts",
    link: "business/debtor-accounts",
    icon: <PiHandCoinsThin size={25} />,
  },
  {
    name: "documentation",
    link: "business/documentation",
    icon: <TbReportAnalytics size={25} />,
  },
  {
    name: "messaging",
    icon: <IoChatbubblesOutline size={25} />,
    sublinks: [
      {
        name: "text caregivers",
        link: "business/communication/text-caregivers",
      },
      {
        name: "send texts",
        link: "business/communication/sms-threads",
      },
      {
        name: "view unsorted replies",
        link: "business/communication/sms-other-replies",
      },
    ],
  },
  {
    name: "knowledge base",
    link: "business/knowledge-base",
    icon: <IoBulbOutline size={25} />,
  },
  {
    name: "settings",
    icon: <IoSettingsOutline size={25} />,
    sublinks: [
      {
        name: "general",
        link: "business/settings",
      },
      {
        name: "bank accounts",
        link: "business/settings/bank-accounts",
      },
      {
        name: "business representatives",
        link: "business/representatives",
      },
      {
        name: "activities",
        link: "business/activities",
      },
      {
        name: "quickbooks",
        link: "business/quickbooks",
      },
      {
        name: "office groups",
        link: "business/office-groups",
      },
    ],
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  console.log("activeIndex", activeIndex);

  const location = useLocation(); // Get the current path

  // Function to toggle sublinks visibility
  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    location.pathname === "business/schedule" && setActiveIndex(0);
  }, []);

  // Function to check if the current path matches any link or sublink
  const isLinkActive = (link) => {
    if (!link) return false; // Check if the link is undefined or null

    const [path, query] = link.split("?"); // Split path and query parameters
    if (query) {
      return (
        location.pathname === `/${path}` && location.search === `?${query}`
      );
    } else {
      return location.pathname === `/${path}`;
    }
  };

  return (
    <div className="w-64 h-screen pt-[72px] relative ">
      <div className="bg-[#fff] overflow-y-auto h-full pb-32 px-2 pt-2">
        {navLinks.map((item, index) => {
          // Check if the current navItem or any of its sublinks is active
          const isActive =
            isLinkActive(item.link) ||
            (item.sublinks &&
              item.sublinks.some((sub) => isLinkActive(sub.link)));

          return (
            <div key={index} className="mb-2">
              <div
                onClick={() => handleToggle(index)}
                className={`flex items-center cursor-pointer ${
                  isActive || activeIndex === index
                    ? "bg-primary text-[#fff]"
                    : "bg-[#fff] text-gray-800 hover:bg-green-100"
                } rounded-md overflow-hidden `}
              >
                <div className={`flex items-center gap-2 w-full px-3`}>
                  {item.icon}
                  {item.sublinks ? (
                    <h1 className="capitalize font-semibold py-2">
                      {item.name}
                    </h1>
                  ) : (
                    <Link to={`/${item.link}`} className="w-full">
                      <p className="capitalize font-semibold py-2">
                        {item.name}
                      </p>
                    </Link>
                  )}
                </div>
                {item.sublinks && (
                  <p>
                    <MdArrowRight
                      size={20}
                      className={`transition duration-300 ${
                        activeIndex === index && "rotate-90"
                      }`}
                    />
                  </p>
                )}
              </div>

              {item.sublinks && (
                <div
                  className={`flex flex-col transition-all duration-300 ${
                    activeIndex === index ? "block" : "hidden"
                  }`}
                >
                  {item.sublinks.map((subLink, subIndex) => {
                    const isSubLinkActive = isLinkActive(subLink.link);

                    return (
                      <Link to={`/${subLink.link}`} key={subIndex}>
                        <p
                          className={`py-2 pl-7 hover:text-primary transition-all duration-200 capitalize ${
                            isSubLinkActive ? "font-bold text-primary" : ""
                          }`}
                        >
                          {subLink.name}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 z-20 w-full">
        <button className="bg-green-50 w-full capitalize font-semibold py-3 text-start pl-5">
          logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
