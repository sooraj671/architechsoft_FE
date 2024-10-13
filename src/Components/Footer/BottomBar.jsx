import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const BottomBar = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col gap-5 md:flex-row p-5 py-10 mb-5 md:justify-center md:items-center">
      <div className="md:flex gap-2">
        <p className="mb-3 md:mb-0">
          &copy; Copyright {currentYear}. All Rights Reserved
        </p>
        {/* TODO: look again in links  */}
        <Link
          to={"/privacy-policy"}
          className="font-semibold hover:text-primary transition duration-200"
        >
          Privacy Policy
        </Link>
        <span> | </span>
        <Link
          to={"/terms-conditions"}
          className="font-semibold hover:text-primary transition duration-200"
        >
          Terms & Conditions
        </Link>
      </div>
      <div className="flex gap-6 justify-center items-center">
        {/* TODO: look on links, links are not real  */}
        <Link
          to={"/www.facebook.com"}
          className="hover:text-primary transition duration-200"
        >
          <FaFacebook size={30} />
        </Link>
        <Link
          to={"/www.linkedin.com"}
          className="hover:text-primary transition duration-200"
        >
          <FaLinkedin size={30} />
        </Link>
        <Link
          to={"/www.youtube.com"}
          className="hover:text-primary transition duration-200"
        >
          <FaYoutube size={35} />
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
