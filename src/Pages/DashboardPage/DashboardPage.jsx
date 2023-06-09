import React from "react";
import Dashboard from "../../Components/Dashboard/Dashboard";
import { Outlet } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <div className=" bg-black text-white w-1/4 flex-1">
        <Dashboard />
      </div>
      <div className="w-3/4 bg-slate-300 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
