import React from "react";
import BookDemo from "../../BookDemo/BookDemo";

const Main = () => {
  return (
    <div className=" flex-col flex justify-center items-center text-primary">
      <div className=" bg-green-100 p-7 md:p-12 flex flex-col justify-around items-center gap-5 max-w-screen-xl">
        <p className="text-xl uppercase font-bold text-primary text-center">
          pricing
        </p>

        <h1 className="text-wrap text-4xl sm:text-5xl md:text-6xl font-bold text-primary text-center">
          Are you paying too much?
        </h1>
        <p className="leading-9 text-lg text-center">
          Agency software doesn’t have to break the bank. Discover how much you
          can save with our solution.
        </p>
        <p className="leading-9 text-lg text-center">
          We charge a small percentage of the transactions we handle for you—no
          hidden fees, no setup costs, and no extra charges for software. Just
          simple, transparent pricing.
        </p>
        <BookDemo />
      </div>
      <div className="bg-green-100 rounded-b-full w-full py-10 max-w-screen-xl"></div>
    </div>
  );
};

export default Main;
