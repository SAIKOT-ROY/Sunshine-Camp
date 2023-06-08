import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SiGoogle } from "react-icons/si";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const { googleLogin, logIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    logIn(data.email, data.password)
      .then((result) => {
        const signedUser = result.user;
        console.log(signedUser);
        reset();
      })
      .catch((error) => {
        console.log(error.message);
        reset();
      });
  };

  // Google sign In
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You Have successfully logged in',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((error) => console.log(error.message));
  };

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
            {/* TODO: HAVE TO INPUT HIDE/UNHIDE FUNCTION */}
            <div className="form-control my-4">
              <label className="label">
                <span className="text-xl font-semibold mb-2">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            {errors.email && (
              <span className="text-red-500 font-semibold">
                This field is required
              </span>
            )}
            <div className="form-control my-4">
              <input className="btn btn-primary" type="submit" />
            </div>
          </form>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="border border-black shadow bg-white btn-outline text-black rounded-lg my-10 h-12 flex text-center justify-center items-center gap-2"
        >
          <p className="font-semibold text-xl">Google</p>
          <SiGoogle className="w-10 h-6" />
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
