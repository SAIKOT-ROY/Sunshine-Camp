import React from "react";
import Dashboard from "../../Components/Dashboard/Dashboard";
import DashboardDetails from "../../Components/DashboardDetails/DashboardDetails";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className=" bg-black col-span-2">
        <Dashboard />
      </div>
      <div className="col-span-2 bg-slate-300">
        <DashboardDetails />
      </div>
    </div>
  );
};

export default DashboardPage;
