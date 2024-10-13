import React from "react";

const CallerInfo = ({
  selectedCallerRelationship,
  setSelectedCallerRelationship,
  selectedCallerState,
  setSelectedCallerState,
}) => {
  const relationships = [
    "--Select a Relationship--",
    "Family",
    "Physician",
    "Medical Professional",
    "Case Manager",
    "Other",
    "Custom",
  ];
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

  const handleCallerRelationshipChange = (e) => {
    setSelectedCallerRelationship(e.target.value);
  };

  const handleStateChange = (e) => {
    setSelectedCallerState(e.target.value);
  };

  return (
    <div className="flex">
      <div className="w-56 p-4">
        <div className="sticky top-0">
          <h1 className="font-bold text-2xl ">Caller Information</h1>
          <p className="text-gray-500 mt-3">
            Enter any information about the caller here
          </p>
        </div>
      </div>
      <div className="bg-[#fff] w-full p-5 border-b pb-10 shadow-xl">
        <div className="flex gap-6">
          {/* caller name  */}
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="caller-name" className="text-sm">
              Caller Name
            </label>
            <input
              type="text"
              className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
            />
            <p className="text-sm text-gray-500 ">Caller's Name.</p>
          </div>
          {/* relationship select  */}
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="caller-relationship" className="text-sm">
              Relationship
            </label>
            <div className="w-full ">
              <select
                id="caller-relationship-select"
                value={selectedCallerRelationship}
                onChange={handleCallerRelationshipChange}
                className="border p-[10px]   rounded-md text-sm w-full"
              >
                {relationships.map((relationship, index) => (
                  <option key={index} value={relationship}>
                    {relationship}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex gap-6 mt-5">
          {/* caller phone  */}
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="caller-phone" className="text-sm">
              Caller Phone
            </label>
            <input
              type="number"
              className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
            />
            <p className="text-sm text-gray-500 ">Caller's Phone.</p>
          </div>
          {/* caller email  */}
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="caller-email" className="text-sm">
              Caller Email
            </label>
            <input
              type="email"
              className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
            />
            <p className="text-sm text-gray-500 ">Caller's Email.</p>
          </div>
        </div>
        <div className="flex gap-6 mt-5">
          <div className="flex gap-3 w-1/2">
            {/* caller address  */}
            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="caller-address" className="text-sm">
                Caller Address
              </label>
              <input
                type="text"
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3 w-full"
              />
              <p className="text-sm text-gray-500 ">
                Include any apartment numbers here as well
              </p>
            </div>
            {/* caller city  */}
            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="caller-city" className="text-sm">
                City
              </label>
              <input
                type="text"
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3 w-full"
              />
            </div>
          </div>
          <div className="flex gap-3 w-1/2">
            {/* state select  */}
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="caller-state" className="text-sm">
                State
              </label>
              <div className="w-full ">
                <select
                  id="caller-state-select"
                  value={selectedCallerState}
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
            {/* zip code */}
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="caller-zip-code" className="text-sm">
                Zip Code
              </label>
              <input
                type="text"
                className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-6 mt-5 ">
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="misc-notes" className="text-sm">
              Misc Notes
            </label>
            <textarea
              type="text"
              required
              className="outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200 py-2 px-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallerInfo;
