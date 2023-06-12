import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Dashboard = () => {
  const { user, role } = useContext(AuthContext);

  return (
    <div className="font-bold flex flex-col gap-5 justify-center items-center my-auto">
      {role === "admin" && (
        <>
          <div className="card w-96 bg-[#E3B448] shadow-xl mt-5">
            <figure className="px-10 pt-10">
              <img
                className="rounded-full"
                src={user.photoURL}
                alt="https://i.ibb.co/3cC2nVt/pngtree-businessman-avatar-cartoon-style-png-image-5234654.jpg"
              />
            </figure>
            <div className="card-body items-center text-center">
              <p>{user.displayName}</p>
              <p>{role}</p>
              <div className="card-actions">
                <div className="flex flex-col gap-2">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-black btn" : "btn"
                    }
                    to="/dashboard/allUser"
                  >
                    Manage User
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-black btn" : "btn"
                    }
                    to="/dashboard/manageClass"
                  >
                    Manage Classes
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {role !== "admin" && role !== "instructor" && user && (
        <>
          <div className="card w-96 bg-[#E3B448] shadow-xl mt-5">
            <figure className="px-10 pt-10">
              <img
                className="rounded-full"
                src={user.photoURL}
                alt="https://i.ibb.co/3cC2nVt/pngtree-businessman-avatar-cartoon-style-png-image-5234654.jpg"
              />
            </figure>
            <div className="card-body items-center text-center">
              <p>{user.displayName}</p>
              <p>{role ? role : "Student"}</p>
              <div className="card-actions">
                <div className="flex flex-col gap-2">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-[#E3B448] btn" : "btn"
                    }
                    to="/dashboard/select-class"
                  >
                    Selected Classes
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-[#E3B448] btn" : "btn"
                    }
                    to="/dashboard/enrolled"
                  >
                    Enrolled Classes
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-[#E3B448] btn" : "btn"
                    }
                    to="/dashboard/payment-history"
                  >
                    Payment History
                  </NavLink>
                </div>
              </div>
            </div>
          </div>     
        </>
      )}
      {role === "instructor" && (
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
