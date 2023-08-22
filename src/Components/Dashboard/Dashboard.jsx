import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Dashboard = () => {
  const { user, role } = useContext(AuthContext);

  return (
    <div className="font-bold flex flex-col gap-5 justify-center items-center my-auto">
      {role === "admin" && (
        <>
          <div className="dropdown bg-black z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#3f82ca] rounded-box w-52"
            >
              <figure className="flex justify-center mb-4 items-center">
                <img
                  className="rounded-full w-10"
                  src={
                    user.photoURL &&
                    typeof user.photoURL === "string" &&
                    user.photoURL === null
                      ? user.photoURL
                      : "https://i.ibb.co/3cC2nVt/pngtree-businessman-avatar-cartoon-style-png-image-5234654.jpg"
                  }
                />
              </figure>
              <div className="flex justify-center items-center flex-col gap-3 text-black">
                <div>
                  <p>
                    <span>Name :</span> <span>{user.displayName}</span>
                  </p>
                  <p>
                    <span>Role :</span>{" "}
                    <span className="uppercase">{role}</span>
                  </p>
                </div>
                <div className="w-1/2 ml-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex mr-4 gap-2 justify-center items-center">
                      <img
                        className="h-5"
                        src="https://i.ibb.co/TYnb4Wd/group-10242974.png"
                        alt=""
                      />
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-slate-100" : "text-black"
                        }
                        to="/dashboard/allUser"
                      >
                        Manage User
                      </NavLink>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                      <img
                        className="h-5"
                        src="https://i.ibb.co/3WhJPy6/training-9186678.png"
                        alt=""
                      />
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-slate-100" : "text-black"
                        }
                        to="/dashboard/manageClass"
                      >
                        Manage Classes
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          {/* Computer Or big Device Part  */}
          <div className="min-h-screen hidden md:block min-w-full mt-5">
            <figure className="flex justify-center mb-4 items-center">
              <img
                className="rounded-full w-40 hidden md:block"
                src={
                  user.photoURL &&
                  typeof user.photoURL === "string" &&
                  user.photoURL === null
                    ? user.photoURL
                    : "https://i.ibb.co/3cC2nVt/pngtree-businessman-avatar-cartoon-style-png-image-5234654.jpg"
                }
              />
            </figure>
            <div className="flex justify-center items-center flex-col gap-3 text-black">
              <div>
                <p>
                  <span>Name :</span> <span>{user.displayName}</span>
                </p>
                <p>
                  <span>Role :</span> <span className="uppercase">{role}</span>
                </p>
              </div>
              <div className="w-1/2 ml-2">
                <div className="flex flex-col gap-2">
                  <div className="flex mr-4 gap-2 justify-center">
                    <img
                      className="w-5"
                      src="https://i.ibb.co/TYnb4Wd/group-10242974.png"
                      alt=""
                    />
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-blue-300" : "text-black"
                      }
                      to="/dashboard/allUser"
                    >
                      Manage User
                    </NavLink>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <img
                      className="w-5"
                      src="https://i.ibb.co/3WhJPy6/training-9186678.png"
                      alt=""
                    />
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-blue-300" : "text-black"
                      }
                      to="/dashboard/manageClass"
                    >
                      Manage Classes
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {role !== "admin" && role !== "instructor" && user && (
        <>
          {/* dropdown part for user  */}
          <div className="dropdown bg-black z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#3f82ca] rounded-box w-52"
            >
              <figure className="flex justify-center mb-4 items-center">
                <img
                  className="rounded-full w-10"
                  src={
                    user.photoURL &&
                    typeof user.photoURL === "string" &&
                    user.photoURL === null
                      ? user.photoURL
                      : "https://i.ibb.co/3cC2nVt/pngtree-businessman-avatar-cartoon-style-png-image-5234654.jpg"
                  }
                />
              </figure>
              <div className="flex justify-center items-center flex-col gap-3 text-black">
                <div>
                  <p>
                    <span>Name :</span> <span>{user.displayName}</span>
                  </p>
                  <p>
                    <span>Role :</span>
                    <span className="uppercase text-black">{role}</span>
                  </p>
                </div>
                <div className="w-1/2 ml-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 justify-center items-center">
                      <img
                        className="h-5"
                        src="https://i.ibb.co/TYnb4Wd/group-10242974.png"
                        alt=""
                      />
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-black btn btn-xs w-32"
                            : "btn btn-xs text-black w-32"
                        }
                        to="/dashboard/select-class"
                      >
                        Selected Classes
                      </NavLink>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                      <img
                        className="h-5"
                        src="https://i.ibb.co/3WhJPy6/training-9186678.png"
                        alt=""
                      />
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#5779e0] w-32 btn btn-xs"
                            : "btn btn-xs w-32"
                        }
                        to="/dashboard/enrolled"
                      >
                        Enrolled Classes
                      </NavLink>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                      <img
                        className="h-5"
                        src="https://i.ibb.co/3WhJPy6/training-9186678.png"
                        alt=""
                      />
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#5779e0] w-32 btn btn-xs"
                            : "btn btn-xs w-32"
                        }
                        to="/dashboard/payment-history"
                      >
                        Payment History
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div className="min-h-screen hidden md:block min-w-full mt-5">
            <figure className="flex justify-center items-center">
              <img
                className="rounded-full w-40 hidden md:block"
                src={
                  user.photoURL &&
                  typeof user.photoURL === "string" &&
                  user.photoURL === null
                    ? user.photoURL
                    : "https://i.ibb.co/3cC2nVt/pngtree-businessman-avatar-cartoon-style-png-image-5234654.jpg"
                }
                alt=""
              />
            </figure>
            <div className="card-body items-center text-center">
              <div className="border-b">
                <p className="text-black">
                  {user.displayName ? user?.displayName : user?.name}
                </p>
                <p className="text-black">Role : {role ? role : "Student"}</p>
              </div>
              <div className="card-actions font-bold">
                <div className="flex flex-col gap-2">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-[#5779e0] btn" : "btn"
                    }
                    to="/dashboard/select-class"
                  >
                    Selected Classes
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-[#5779e0] btn" : "btn"
                    }
                    to="/dashboard/enrolled"
                  >
                    Enrolled Classes
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-[#5779e0] btn" : "btn"
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
          {/* dropdown part for instructor  */}
          <div className="dropdown bg-black z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 pb-5 shadow bg-[#3f82ca] rounded-box w-52"
            >
              <figure className="flex justify-center mb-4 items-center">
                <img
                  className="rounded-full w-10"
                  src={
                    user.photoURL &&
                    typeof user.photoURL === "string" &&
                    user.photoURL === null
                      ? user.photoURL
                      : "https://i.ibb.co/3cC2nVt/pngtree-businessman-avatar-cartoon-style-png-image-5234654.jpg"
                  }
                />
              </figure>
              <div className="flex justify-center items-center flex-col gap-3 text-black">
                <div>
                  <p>
                    <span>Name :</span> <span>{user.displayName}</span>
                  </p>
                  <p>
                    <span>Role :</span>
                    <span className="uppercase text-black">{role}</span>
                  </p>
                </div>
                <div className="w-1/2 ml-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 justify-center items-center">
                      <img
                        className="h-5"
                        src="https://i.ibb.co/TYnb4Wd/group-10242974.png"
                        alt=""
                      />
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#31689b] btn btn-xs w-28"
                            : "btn btn-xs w-28"
                        }
                        to="/dashboard/myClass"
                      >
                        My Classes
                      </NavLink>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                      <img
                        className="h-5"
                        src="https://i.ibb.co/3WhJPy6/training-9186678.png"
                        alt=""
                      />
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#31689b] btn btn-xs w-28"
                            : "btn-xs btn w-28"
                        }
                        to="/dashboard/addClass"
                      >
                        Add a class
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div className="min-h-screen hidden md:block min-w-full mt-5">
            <figure className="flex justify-center items-center">
              <img
                className="rounded-full w-40 hidden md:block"
                src={user.photoURL}
                alt="https://i.ibb.co/3cC2nVt/pngtree-businessman-avatar-cartoon-style-png-image-5234654.jpg"
              />
            </figure>
            <div className="card-body items-center text-center">
              <div className="border-b">
                <p className="text-black">
                  {user.displayName ? user?.displayName : user?.name}
                </p>
                <p className="text-black">Role : {role ? role : "Student"}</p>
              </div>
              <div className="card-actions">
                <div className="flex flex-col gap-2">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-[#31689b] btn" : "btn"
                    }
                    to="/dashboard/myClass"
                  >
                    My Classes
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-[#31689b] btn" : "btn"
                    }
                    to="/dashboard/addClass"
                  >
                    Add a class
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
