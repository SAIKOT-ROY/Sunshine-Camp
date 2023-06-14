import axios from "axios";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../Providers/AuthProviders";
// import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

// TODO: uncomment this function

// const useAxioxSecure = () => {
//   const navigate = useNavigate();
//   const { logOut } = useContext(AuthContext);

//   useEffect(() => {
//     axiosSecure.interceptors.request.use((config) => {
//       const token = `Bearer${localStorage.getItem("access-token")}`;
//       if (token) {
//         config.headers.Authorization = token;
//       }
//       return config;
//     });
//     axiosSecure.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         if (
//           (error.response && error.response.status === 401) ||
//           error.response.status === 403
//         ) {
//           await logOut();
//           navigate("/login");
//         }
//         return Promise.reject(error);
//       }
//     );
//   }, [logOut, navigate]);
//   return axiosSecure;
// };

export default axiosSecure;

// import axios from "axios";
// import { useContext } from 'react';
// import { AuthContext } from '../Providers/AuthProviders';
// import { useEffect } from 'react';

// const useAxioxSecure = () => {
// //  const {token} = useContext(AuthContext)
// const token = localStorage.getItem('access-token')
// if(!token){
//   return <p>Loading</p>
// }
//  const axiosSecure = axios.create({
//   baseURL: `${import.meta.env.VITE_API_URL}`,
// });

//   useEffect(() => {
//     axiosSecure.interceptors.request.use((config) => {
//       if(token){
//         config.headers.Authorization = `Bearer ${token}`
//       }
//       return config

//     })
//     axiosSecure.interceptors.response.use(
//        (response) => response,
//        async (error) => {
//         if(error.response && (error.response.status === 401)){
//           return console.log('mal da kaj kore na')

//         }
//         return Promise.reject(error);
//        }
//        )
//   },[token, axiosSecure])
//   return [axiosSecure]
// };

// export default useAxioxSecure;