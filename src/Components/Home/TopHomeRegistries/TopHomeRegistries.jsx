import React from "react";
import demoLogo from "../../../assets/markiLogo.png";

const TopHomeRegistries = () => {
  return (
    <div className="mt-5 mb-16 flex flex-col items-center">
      <h1 className="p-5 font-bold text-3xl md:text-4xl text-gray-700">
        Top Home Care Registries Trust Archi
      </h1>

      <div>
        <marquee behavior="" direction="right">
          <div className="flex gap-16">
            <img src={demoLogo} alt="logo" className="h-24" />
            <img src={demoLogo} alt="logo" className="h-24" />
            <img src={demoLogo} alt="logo" className="h-24" />
            <img src={demoLogo} alt="logo" className="h-24" />
            <img src={demoLogo} alt="logo" className="h-24" />
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default TopHomeRegistries;
