import React, { useState } from "react";
import Search from "../../Components/Search/Search";

import ClientsCaregivers from "../../Components/Schedule/ClientsCaregivers/ClientsCaregivers";
import Filters from "../../Components/Schedule/Filters/Filters";
import ToolBar from "../../Components/Schedule/ToolBar/ToolBar";
import Footer from "../../Components/Footer/Footer";
import CaregiversTable from "../../Components/Schedule/Table/CaregiversTable";

const Schedule = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedClients, setSelectedClients] = useState([]);
  const [selectedCaregivers, setSelectedCaregivers] = useState([]);
  const [selectedView, setSelectedView] = useState("");
  const [scheduled, setScheduled] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [projected, setProjected] = useState(0);
  const [canceled, setCanceled] = useState(0);
  const [open, setOpen] = useState(0);

  return (
    <div className="pt-20 w-full h-screen overflow-y-auto">
      <div className="bg-[#fff] py-3 px-5 flex items-center justify-between">
        <p className="text-lg leading-9 capitalize font-semibold text-gray-800">
          schedule
        </p>
        <div>
          <Search />
        </div>
      </div>
      <div className="bg-green-100 p-4">
        <div className="bg-[#fff] p-4 flex flex-col gap-4">
          <Filters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <ClientsCaregivers
            selectedClients={selectedClients}
            setSelectedClients={setSelectedClients}
            selectedCaregivers={selectedCaregivers}
            setSelectedCaregivers={setSelectedCaregivers}
          />
          <ToolBar
            selectedView={selectedView}
            setSelectedView={setSelectedView}
            scheduled={scheduled}
            setScheduled={setScheduled}
            completed={completed}
            setCompleted={setCompleted}
            projected={projected}
            setProjected={setProjected}
            canceled={canceled}
            setCanceled={setCanceled}
            open={open}
            setOpen={setOpen}
          />
          <CaregiversTable />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Schedule;
