import React from "react";
import { TbPointFilled } from "react-icons/tb";

const OrangePart = () => {
  return (
    <div className="p-5 bg-orange-400 flex justify-center items-center ">
      <div className=" bg-[#fff] h-full p-7 md:p-12 flex flex-col justify-around gap-5 max-w-screen-xl lg:my-16 lg:py-16">
        <h1 className="font-bold text-3xl md:text-4xl text-gray-800 text-center">
          We recognize the hurdles involved in managing a registry.
        </h1>
        <p className="leading-9 text-lg text-center">
          Frequently, you find yourself juggling your business needs while
          ensuring compliance with worker classification regulations.
        </p>
        <p className="font-bold text-gray-800 leading-9 text-lg text-center">
          There's no need to handle this by yourself.
        </p>
        <p className="leading-9 text-lg text-center">
          With Archi, you gain a reliable partner who truly understands the
          registry model. We not only get it, but we also actively work to
          safeguard you during worker classification audits.
        </p>
      </div>
    </div>
  );
};

export default OrangePart;
