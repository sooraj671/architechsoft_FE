import React from "react";
import { TbSettingsSearch } from "react-icons/tb";
import { BsBarChartFill } from "react-icons/bs";
import { MdMobileFriendly } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { GiClover } from "react-icons/gi";
import { Link } from "react-router-dom";

const ProductNew = () => {
  const products = [
    {
      link: "regulations",
      title: "Ensure DOL Regulations",
      description:
        "Stay compliant and avoid being classified as the employer with our payment processing system.",
      icon: <TbSettingsSearch size={60} />,
    },
    {
      link: "revenue-cycle",
      title: "Accelerate Your Growth",
      description:
        "Archi automates payment processing, giving you more time to grow your business.",
      icon: <BsBarChartFill size={60} />,
    },
    {
      link: "pricing",
      title: "No Software Fees",
      description:
        "Access our platform for free, with no hidden costs for home care registries.",
      icon: <MdMobileFriendly size={60} />,
    },
    {
      link: "family-room",
      title: "Client Care Portal",
      description:
        "Give clients control to manage shifts, view payments, and access caregiver details.",
      icon: <GiClover size={60} />,
    },
  ];

  return (
    <div className="bg-green-100 py-10 px-5 md:px-16 md:py-20">
      <div
        className="flex flex-col md:flex-row gap-14 md:gap-5
      "
      >
        {products.map((item, index) => {
          return (
            <Link
              key={index}
              className="flex flex-col gap-5 group bg-[#fff] rounded-lg p-5 shadow-xl flex-1"
              to={`/${item.link}`}
            >
              <p className="text-primary group-hover:translate-x-3 transition duration-500">
                {item.icon}
              </p>
              <h1 className="font-bold text-xl">{item.title}</h1>
              <p className="leading-9 text-lg">{item.description}</p>
              <button>
                <GoArrowRight
                  size={40}
                  className="group-hover:scale-125 transition duration-300 text-primary"
                />
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductNew;
