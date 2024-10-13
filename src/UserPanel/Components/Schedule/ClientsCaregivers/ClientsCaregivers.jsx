import React, { useState, useEffect, useRef } from "react";
import { RiCheckboxBlankFill, RiArrowDownSFill } from "react-icons/ri";
import { IoIosCheckbox } from "react-icons/io";

const ClientsCaregivers = ({
  selectedClients,
  setSelectedClients,
  selectedCaregivers,
  setSelectedCaregivers,
}) => {
  const templateClients = [
    "John Doe",
    "Jane Smith",
    "Robert Johnson",
    "Emily Davis",
    "Michael Brown",
    "Sarah Wilson",
    "David Lee",
    "Olivia Taylor",
    "James Moore",
    "Sophia Anderson",
  ];
  const templateCaregivers = [
    "Anna Clark",
    "Matthew Garcia",
    "Lisa Martinez",
    "Christopher Rodriguez",
    "Karen Harris",
    "Daniel Lewis",
    "Laura Walker",
    "Brian Hall",
    "Rebecca Young",
    "Joshua King",
  ];

  const [clients, setClients] = useState(templateClients);
  const [caregivers, setCaregivers] = useState(templateCaregivers);
  const [searchTerm, setSearchTerm] = useState("");
  const [caregiverSearchTerm, setCaregiverSearchTerm] = useState("");
  const [showClientsMenu, setShowClientsMenu] = useState(false);
  const [showCaregiversMenu, setShowCaregiversMenu] = useState(false);

  const clientsMenuRef = useRef(null);
  const caregiversMenuRef = useRef(null);

  // Handle client selection
  const handleClientsArray = (client) => {
    setSelectedClients((prevSelectedClients) =>
      prevSelectedClients.includes(client)
        ? prevSelectedClients.filter((c) => c !== client)
        : [...prevSelectedClients, client]
    );
  };

  // Handle caregiver selection
  const handleCaregiversArray = (caregiver) => {
    setSelectedCaregivers((prevSelectedCaregivers) =>
      prevSelectedCaregivers.includes(caregiver)
        ? prevSelectedCaregivers.filter((c) => c !== caregiver)
        : [...prevSelectedCaregivers, caregiver]
    );
  };

  // Filter clients based on the search term
  useEffect(() => {
    if (searchTerm.trim()) {
      const filteredClients = templateClients.filter((client) =>
        client.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setClients(filteredClients);
    } else {
      setClients(templateClients);
    }
  }, [searchTerm]);

  // Filter caregivers based on the search term
  useEffect(() => {
    if (caregiverSearchTerm.trim()) {
      const filteredCaregivers = templateCaregivers.filter((caregiver) =>
        caregiver.toLowerCase().includes(caregiverSearchTerm.toLowerCase())
      );
      setCaregivers(filteredCaregivers);
    } else {
      setCaregivers(templateCaregivers);
    }
  }, [caregiverSearchTerm]);

  // Handle clicks outside of dropdowns to close them
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        clientsMenuRef.current &&
        !clientsMenuRef.current.contains(event.target)
      ) {
        setShowClientsMenu(false);
      }
      if (
        caregiversMenuRef.current &&
        !caregiversMenuRef.current.contains(event.target)
      ) {
        setShowCaregiversMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex gap-5 justify-end flex-wrap">
      {/* Clients Section */}
      <div>
        <p className="capitalize leading-9 text-lg">Clients</p>
        <div className="relative" ref={clientsMenuRef}>
          <div className="border border-gray-200 flex items-center w-60 rounded-[4px]">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`py-2 px-3 outline-none flex-1 ${
                !showClientsMenu && "hidden"
              }`}
              placeholder="All Clients"
            />
            <div
              className={`py-2 px-3 flex-1 ${showClientsMenu && "hidden"}`}
              onClick={() => setShowClientsMenu(true)}
            >
              All Clients
            </div>
            <div
              className="cursor-pointer py-3 px-2"
              onClick={() => setShowClientsMenu(!showClientsMenu)}
            >
              <RiArrowDownSFill />
            </div>
          </div>
          <div
            className={`border border-gray-200 p-2 flex flex-col gap-2 h-60 overflow-y-auto absolute top-100 bg-[#fff] w-full ${
              !showClientsMenu && "hidden"
            }`}
          >
            {clients.length > 0 ? (
              clients.map((client, index) => {
                const isSelected = selectedClients.includes(client);
                return (
                  <div
                    key={index}
                    className="flex items-center p-1 gap-2 cursor-pointer"
                    onClick={() => handleClientsArray(client)}
                  >
                    <p className="text-green-200">
                      {isSelected ? (
                        <IoIosCheckbox size={25} />
                      ) : (
                        <RiCheckboxBlankFill size={25} />
                      )}
                    </p>
                    <p>{client}</p>
                  </div>
                );
              })
            ) : (
              <div className="text-center text-gray-500">No client found</div>
            )}
          </div>
        </div>
      </div>

      {/* Caregivers Section */}
      <div>
        <p className="capitalize leading-9 text-lg">Caregivers</p>
        <div className="relative" ref={caregiversMenuRef}>
          <div className="border border-gray-200 flex items-center w-60 rounded-[4px]">
            <input
              type="text"
              value={caregiverSearchTerm}
              onChange={(e) => setCaregiverSearchTerm(e.target.value)}
              className={`py-2 px-3 outline-none flex-1 ${
                !showCaregiversMenu && "hidden"
              }`}
              placeholder="All Caregivers"
            />
            <div
              className={`py-2 px-3 flex-1 ${showCaregiversMenu && "hidden"}`}
              onClick={() => setShowCaregiversMenu(true)}
            >
              All Caregivers
            </div>
            <div
              className="cursor-pointer py-3 px-2"
              onClick={() => setShowCaregiversMenu(!showCaregiversMenu)}
            >
              <RiArrowDownSFill />
            </div>
          </div>
          <div
            className={`border border-gray-200 p-2 flex flex-col gap-2 h-60 overflow-y-auto absolute top-100 bg-[#fff] w-full ${
              !showCaregiversMenu && "hidden"
            }`}
          >
            {caregivers.length > 0 ? (
              caregivers.map((caregiver, index) => {
                const isSelected = selectedCaregivers.includes(caregiver);
                return (
                  <div
                    key={index}
                    className="flex items-center p-1 gap-2 cursor-pointer"
                    onClick={() => handleCaregiversArray(caregiver)}
                  >
                    <p className="text-green-200">
                      {isSelected ? (
                        <IoIosCheckbox size={25} />
                      ) : (
                        <RiCheckboxBlankFill size={25} />
                      )}
                    </p>
                    <p>{caregiver}</p>
                  </div>
                );
              })
            ) : (
              <div className="text-center text-gray-500">
                No caregiver found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsCaregivers;
