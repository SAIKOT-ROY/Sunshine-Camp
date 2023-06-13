import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { BounceLoader } from "react-spinners";

const AdmitRoute = ({children}) => {
    const location = useLocation()
    const {role, loading} = useContext(AuthContext)

    if(loading){
        <div className="flex justify-center items-center mt-80">
        <BounceLoader color="#36d7b7" size={100} />
      </div>
    }
    if(role === 'admin'){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
}; 

export default AdmitRoute;