import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="py-3 pl-8 flex gap-3 items-center">
      <p>&copy; Archi {year}</p>
      <p>|</p>
      <Link
        to={"/terms-and-conditions"}
        className="capitalize hover:text-primary transition duration-200"
      >
        terms & conditions
      </Link>
      <p>|</p>
      <Link
        to={"/privacy-policy"}
        className="capitalize hover:text-primary transition duration-200"
      >
        privacy policy
      </Link>
    </div>
  );
};

export default Footer;
