import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";

const Login = () => {
  return (
    <div className="md:flex flex-col justify-center md:flex-row-reverse mt-44 md:gap-20">
      <div className="md:w-1/3">
        <img
          src="https://i.ibb.co/yfvFmpy/Blue-Green-Cute-Illustration-Kids-Summer-Camp-Instagram-Post.png"
          alt=""
        />
      </div>
      <div className="border my-10 md:w-1/3 px-10 pb-32 pt-10 rounded-lg shadow-md  bg-gray-100">
        <div>
          <p className="text-3xl font-bold text-center text-blue-500">Login</p>
          <div>
            <div className="form-control my-4">
              <label className="label">
                <span className="text-xl font-semibold mb-2">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control my-4">
              <label className="label">
                <span className="text-xl font-semibold mb-2">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-50 shadow bg-blue-500 text-white rounded-lg my-10 h-12 flex text-center justify-center items-center gap-2">
            <p className="font-semibold text-xl">Facebook</p>
            <BsFacebook className="w-10 h-6" />
        </div>
        <p className="font-medium text-center">
          Are you new Here ? <Link className="text-blue-700" to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
