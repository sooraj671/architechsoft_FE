import React from "react";
import calculator from "../../../assets/calculator.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Calculator = () => {
  return (
    <div className="p-5 py-10 md:py-20 flex justify-center items-center w-full">
      <div className="sm:flex flex-row-reverse items-center gap-5 max-w-screen-xl">
        <div className="w-full sm:w-1/2 mb-10 sm:mb-0 md:h-96 ">
          <img
            src={calculator}
            alt="calculator"
            className="h-full object-cover"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <h1 className="mb-10  font-bold text-3xl md:text-4xl text-gray-700">
            Labor Efficiency Gains
          </h1>
          <p className="mb-5">
            Streamline the calculation of non-medical hours to unlock
            reinvestment opportunities with Archi.
          </p>

          <Link
            to={"/"}
            className="mt-5 text-primary hover:text-[#6fd12de9] font-semibold flex items-center gap-3"
          >
            <p>Check Out the Calculator</p>
            <span>
              <FaArrowRightLong size={20} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
