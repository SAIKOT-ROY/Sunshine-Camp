import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const isAdmin = true;
  const isInstructor = true;

  return (
    <div className="font-bold flex flex-col gap-5 justify-center items-center my-auto">
      {isAdmin && (
        <>
          <p>Admin</p>
          <Link className="btn" to="/dashboard/allUser">
            All User
          </Link>
          <p className="btn">Payment History</p>
        </>
      )}
      {user && (
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
       {isInstructor && (
        <>
          <p>Instructor</p>
           <div className="btn"><Link to="/dashboard/addClass">Add a class</Link></div>
           <div className="btn"><Link to="/dashboard/myClass">My Classes</Link></div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
