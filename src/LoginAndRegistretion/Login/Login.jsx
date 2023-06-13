import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Player } from "@lottiefiles/react-lottie-player";
import lottieLogin from "../../assets/lottieAnimation/142230-login.json";
import { saveUser } from "../../Api/auth";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";

const Login = () => {
  const { googleLogin, logIn } = useContext(AuthContext);
  const [errMessage, setErrMessage] = useState(" ");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    setErrMessage(" ");
    logIn(data.email, data.password)
      .then((result) => {
        const signedUser = result.user;
        console.log(signedUser);
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You Have successfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const messageError = error.message.split(" ");
        console.log(messageError);
        setErrMessage(messageError[2]);
        reset();
      });
  };

  // Google sign In
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        saveUser(user);
        console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You Have successfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
    reset();
  };

  return (
    <div className="md:flex flex-col justify-center items-center md:flex-row mt-44 md:gap-20">
      <div className="md:w-1/3">
        <Player
          autoplay
          loop
          src={lottieLogin}
          style={{ height: "500px", width: "100%" }}
        ></Player>
      </div>
      <div className="border my-10 md:w-1/3 px-10 pb-32 pt-10 rounded-lg shadow-md  bg-gray-100">
        <div>
          <p className="text-3xl font-bold text-center text-blue-500">Login</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control my-4">
              <label className="label">
                <span className="text-xl font-semibold mb-2">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            {errors.email && (
              <span className="text-red-500 font-semibold">
                This field is required
              </span>
            )}
            <div className="form-control my-4">
              <label className="label">
                <span className="text-xl font-semibold mb-2">Password</span>
              </label>
              <div className="flex items-center gap-2 relative">
                <input
                  {...register("password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                />
                <div>
                  {showPassword ? (
                    <AiTwotoneEyeInvisible
                      className="w-6 mr-2 h-6 absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <AiTwotoneEye
                      className="w-6 mr-2 h-6 absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
              </div>
            </div>
            {errors.email && (
              <span className="text-red-500 font-semibold">
                This field is required
              </span>
            )}
            <div className="form-control my-4">
              <input className="btn btn-primary" type="submit" />
            </div>
            <p>{errMessage}</p>
          </form>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="border border-black shadow bg-white btn-outline text-black rounded-lg my-10 h-12 flex text-center justify-center items-center gap-2"
        >
          <p className="font-semibold text-xl">Google</p>
          <FcGoogle className="w-10 h-6" />
        </div>
        <p className="font-medium text-center">
          Are you new Here ?
          <Link className="text-blue-700" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
