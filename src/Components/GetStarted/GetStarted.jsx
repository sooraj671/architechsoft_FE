import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import customerSupport from "../../assets/free-customer-service.png";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="p-5 py-10 md:py-20 flex justify-center items-center w-full bg-green-100">
      <div className="sm:flex items-center gap-5  w-full max-w-screen-xl">
        <div className="w-full sm:w-1/2 mb-10 sm:mb-0">
          <h1 className="mb-10 text-wrap font-bold text-3xl md:text-4xl text-gray-700">
            Get started, with no start up fee
          </h1>

          <img
            src={customerSupport}
            alt="Customer Support"
            className="h-80 md:h-96"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
