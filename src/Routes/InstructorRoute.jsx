import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { BounceLoader } from "react-spinners";

const InstructorRoute = ({ children }) => {
  const location = useLocation();
  const { adminLoading, loading, role, user } = useContext(AuthContext);

  if(loading || adminLoading){
    return <div className="flex justify-center items-center mt-80">
    <BounceLoader color="#36d7b7" size={100} />
  </div>        
  }


  if (user && role === "instructor") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
