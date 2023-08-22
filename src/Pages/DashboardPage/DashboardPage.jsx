import React from "react";
import Dashboard from "../../Components/Dashboard/Dashboard";
import { Outlet, useLocation } from "react-router-dom";
import MainDash from "./MainDash/MainDash";

const DashboardPage = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="relative min-h-screen md:flex">
      <div className="bg-transparent md:bg-slate-50 text-white w-1/4 flex-1">
        <Dashboard />
      </div>
      {location.pathname == "/dashboard" ? (
        <div className="md:w-3/4 bg-slate-300 p-5">
          <MainDash />
        </div>
      ) : (
        <div className="md:w-3/4 bg-slate-300 p-5">
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
