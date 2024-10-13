import React from "react";

const Address = (addressState, setAddressState) => {
  const states = [
    "--Select State--",
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Federated States Of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const handleStateChange = (e) => {
    setAddressState(e.target.value);
  };

  return (
    <div className="flex">
      <div className="w-56 p-4">
        <div className="sticky top-0">
          <h1 className="font-bold text-2xl ">Address</h1>
          <p className="text-gray-500 mt-3">
            If you have address information for this client, enter it here
          </p>
        </div>
      </div>
      <div className="bg-[#fff] w-full p-5 border-b shadow-xl">
        <div className="flex gap-6 mt-5">
          {/* address line 1  */}
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="address-line-1" className="text-sm">
              Address line 1
            </label>
            <input
              type="text"
              className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
            />
            <p className="text-sm text-gray-500 ">e.g. 1234 North Sunset St</p>
          </div>
          {/* address line 2  */}
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="address-line-2" className="text-sm">
              Address line 2
            </label>
            <input
              type="email"
              className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
            />
            <p className="text-sm text-gray-500 ">
              e.g. Apt 2, Suite C (Optional)
            </p>
          </div>
        </div>
        <div className="flex gap-6 mt-5">
          <div className="flex gap-3 w-1/2">
            {/* city  */}
            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="city" className="text-sm">
                City
              </label>
              <input
                type="text"
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3 w-full"
              />
            </div>
            {/* state select  */}
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="caller-state" className="text-sm">
                State
              </label>
              <div className="w-full ">
                <select
                  id="caller-state-select"
                  value={addressState}
                  onChange={handleStateChange}
                  className="border p-[10px]   rounded-md text-sm w-full"
                >
                  {states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-3 w-1/2">
            {/* zip code  */}
            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="caller-city" className="text-sm">
                Zip Code
              </label>
              <input
                type="text"
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3 w-full"
              />
            </div>
            {/* country , NEEDS TO BE REVIEWED, states are being rendered instead of countries*/}
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="caller-state" className="text-sm">
                Country
              </label>
              <div className="w-full ">
                <select
                  id="caller-state-select"
                  value={addressState}
                  onChange={handleStateChange}
                  className="border p-[10px]   rounded-md text-sm w-full"
                >
                  {states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <p className="text-sm text-gray-500 ">
                  Select the country from the drop down.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
