import React from "react";

const Outcomes = () => {
  const outcome = [
    {
      value: "40",
      text: "hours saved of admin work each month",
    },
    {
      value: "20%",
      text: "increase in productivity",
    },
    {
      value: "100%",
      text: "more peace of mind with your compliance",
    },
  ];
  return (
    <div className="my-16 p-5">
      <h1 className="text-xl md:text-2xl mb-14 text-center">
        All-in-one software designed specifically for registries gives you:
      </h1>
      <div className="sm:flex gap-5 max-w-screen-xl m-auto">
        {outcome.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#fff] w-full sm:w-1/3 p-5 md:p-10 md:flex justify-center items-center flex-col mt-8 sm:mt-0 shadow-xl rounded-lg"
            >
              <span className="text-3xl sm:text-4xl md:text-6xl text-primary">
                {item.value}
              </span>
              <p className="mt-6 md:mt-12">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Outcomes;
