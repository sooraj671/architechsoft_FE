import React from "react";
import BookDemo from "../BookDemo/BookDemo";

const LearnMore = () => {
  return (
    <div className="p-5 bg-[#6fd12de9] flex justify-center items-center ">
      <div className=" bg-[#fff] rounded-md md:rounded-xl w-full h-full p-7 md:p-12 flex flex-col justify-around gap-5 max-w-screen-xl lg:m-16 lg:py-16 items-center">
        <h1 className="font-bold text-3xl md:text-4xl text-gray-800 text-center">
          Ready to learn more ?
        </h1>
        <BookDemo />
      </div>
    </div>
  );
};

export default LearnMore;
