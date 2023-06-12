import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Dashboard = () => {
  const { user, role } = useContext(AuthContext);

  return (
    <div className="font-bold flex flex-col gap-5 justify-center items-center my-auto">
      {role === 'admin' && (
        <>
          <p>Admin</p>
          <Link className="btn" to="/dashboard/allUser">
            Manage User
          </Link>
          <p className="btn">
            <NavLink
              className={({ isActive }) => (isActive ? "text-black" : "")}
              to="/dashboard/manageClass"
            >
              Manage Classes
            </NavLink>
          </p>
        </>
      )}
      {role !== "admin" && role !== "instructor" && user && (
        <>
          <p>User</p>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#E3B448]" : "")}
            to="/dashboard/select-class"
          >
            Selected Classes
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text-[#E3B448]" : "")}
            to="/dashboard/enrolled"
          >
            Enrolled Classes
          </NavLink>
          <p className="btn">Payment History</p>
        </>
      )}
      {role === 'instructor' && (
        <>
          <p>Instructor</p>
          <div className="btn">
            <Link to="/dashboard/addClass">Add a class</Link>
          </div>
          <div className="btn">
            <Link to="/dashboard/myClass">My Classes</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
