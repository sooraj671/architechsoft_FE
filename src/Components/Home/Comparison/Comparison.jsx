import React from "react";

const Comparison = () => {
  const comparisons = [
    {
      title: "Audits",
      with: "Protect against workers classification audits",
      without: "Workers classification audits",
    },
    {
      title: "Efficiency",
      with: "You have registry specific language and processes",
      without: "Inefficiencies due to using non-registry software",
    },
    {
      title: "Worker Classification",
      with: "You do not collect payments from clients nor pay the caregivers, adding a layer of separation.",
      without:
        "Risk of being labeled an employer by collecting payment and paying the caregivers",
    },
    {
      title: "Time Saving",
      with: "Your caregivers and clients can edit their own shifts",
      without:
        "Additional admin hours due to manual approval and editing of shifts at the registry level.",
    },
    {
      title: "Cash FLow",
      with: "You have a more efficient registry requiring less staffing, giving you more margin to be competitive. ",
      without:
        "Higher operating costs impacting your rates, directly impacting your referrals",
    },
  ];
  return (
    <div className="p-5 py-12 sm:py-20">
      <h1 className="mb-10 sm:text-center font-bold text-3xl md:text-4xl text-gray-700">
        Why Archi?
      </h1>
      <p className="text-lg mb-10 max-w-screen-lg m-auto sm:text-center">
        We help maintain compliance, in addition to all your billing and
        administrative needs.
      </p>
      <div className="hidden md:flex gap-10 justify-between mb-8 max-w-screen-lg m-auto">
        <div className="w-1/3"></div>
        <div className=" flex gap-10 w-2/3">
          <div className="p-5 w-1/2 flex justify-center items-center">
            <p className="leading-8 text-lg text-center text-primary font-semibold">
              Without Archi you may face:
            </p>
          </div>
          <div className=" p-5 w-1/2 flex justify-center items-center">
            <p className="leading-8 text-center text-lg text-primary font-semibold">
              With Archi you can:
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-lg m-auto">
        {comparisons.map((comparison, index) => {
          return (
            <div key={index} className="md:flex gap-10 justify-between mb-10">
              <h1 className="md:w-1/3 flex justify-center items-center text-lg text-primary font-bold mb-8 md:mb-0">
                {comparison.title}
              </h1>
              <div className="flex flex-col md:flex-row gap-5 md:gap-10 md:w-2/3">
                <div className="bg-green-100 p-5 md:px-7 md:py-9 rounded-xl md:w-1/2 flex justify-center items-center">
                  <div className="leading-8 md:text-lg text-center">
                    <p className="leading-8 text-lg text-center text-primary font-semibold md:hidden">
                      Without Archi you may face:
                    </p>
                    {comparison.without}
                  </div>
                </div>
                <div className="bg-primary text-[#fff] p-5 md:px-7 md:py-9 rounded-xl md:w-1/2 ">
                  <div className="leading-8 md:text-lg text-center">
                    <p className="leading-8 text-center text-lg font-semibold md:hidden">
                      With Archi you can:
                    </p>
                    {comparison.with}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comparison;
