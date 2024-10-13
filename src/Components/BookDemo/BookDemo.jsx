import React from "react";
import { Link } from "react-router-dom";

const BookDemo = () => {
  return (
    <Link to={"/book-a-demo"}>
      <button className="bg-primary text-white rounded-md mt-10 py-4 px-14 md:px-20 w-full md:w-max hover:bg-[#6fd12de9] transition duration-300">
        Book a Demo
      </button>
    </Link>
  );
};

export default BookDemo;
