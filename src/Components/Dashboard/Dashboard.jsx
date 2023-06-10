import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const isAdmin = true;

  return (
    <div className="font-bold flex flex-col gap-5 justify-center items-center my-auto">
      {isAdmin && (
        <>
          <p>Admin</p>
          <Link className="btn" to="/dashboard/allUser">
            All User
          </Link>
          <p className="btn">Enrolled Class</p>
          <p className="btn">Payment History</p>
        </>
      )}
      {user && (
        <>
          <p>User</p>
          <Link className="btn" to="/dashboard/select-class">
            Selected Class
          </Link>
          <p className="btn">Enrolled Class</p>
          <p className="btn">Payment History</p>
        </>
      )}
    </div>
  );
};

export default Dashboard;
