import React, { useContext } from "react";
import { BsFacebook } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { saveUser } from "../../Api/auth";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const { newUser, googleLogin, update } = useContext(AuthContext);
  const navigate = useNavigate();

  // New User Sign In
  const onSubmit = (data) => {
    const { email, password, name, photoUrl } = data;
    console.log(data);
    newUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        saveUser(loggedUser);
        update(name, photoUrl).then(() => {
          console.log(loggedUser);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You Have created an Account",
            showConfirmButton: false,
            timer: 1500,
          });
        });
        reset();
        navigate("/");
      })
      .catch((err) => {
        reset();
        console.log(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        saveUser(user);
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  // TODO: HAVE TO VALIDATION IN PASSWORD AND CONFIRM PASSWORD

  return (
    <div className="md:flex justify-center mt-40">
      <div className="border md:w-1/3 px-10 pb-32 pt-10 rounded-lg shadow-md my-auto bg-gray-100">
        <p className="text-3xl font-bold text-center text-blue-500">Register</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="form-control my-4">
              <label className="label">
                <span className="text-xl font-semibold mb-2">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            {errors.name && (
              <span className="text-red-500 font-semibold">
                This field is required
              </span>
            )}
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
                Please insert an Email
              </span>
            )}
            <div className="form-control my-4">
              <label className="label">
                <span className="text-xl font-semibold mb-2">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
                })}
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <span className="text-red-500 font-semibold">
              {errors?.password && (
                <span className="text-red-500 font-semibold">
                  {errors?.password?.type === "required" &&
                    "This field is required"}
                  {errors?.password?.type === "minLength" &&
                    "Password must be at least 6 characters long"}
                  {errors?.password?.type === "pattern" &&
                    "Password must contain at least one uppercase letter, one digit, and one special character"}
                </span>
              )}
            </span>
            <div className="form-control my-4">
              <label className="label">
                <span className="text-xl font-semibold mb-2">
                  Confirm Password
                </span>
              </label>
              <input
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === watch("password"),
                })}
                type="text"
                placeholder="confirm password"
                className="input input-bordered"
              />
            </div>
            {errors.confirmPassword && (
              <span className="text-red-500 font-semibold">
                {errors.confirmPassword.type === "required" &&
                  "This field is required"}
                {errors.confirmPassword.type === "validate" &&
                  "Passwords do not match Make sure to enter same password as password field"}
              </span>
            )}
            <div className="form-control my-4">
              <label className="label">
                <span className="text-xl font-semibold mb-2">Photo Url</span>
              </label>
              <input
                {...register("photoUrl", { required: true })}
                type="text"
                placeholder="Photo Url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control my-4">
              <input
                type="submit"
                className="btn bg-blue-400 btn-primary text-white font-bold text-xl"
              />
            </div>
          </div>
        </form>
        <div
          onClick={handleGoogleSignIn}
          className="border border-black shadow bg-grey-50 btn-outline text-black rounded-lg my-10 h-12 flex text-center justify-center items-center gap-2"
        >
          <p className="font-semibold text-xl">Google</p>
          <FcGoogle className="w-10 h-6" />
        </div>
        <div className="border border-gray-50 shadow btn-neutral bg-blue-500 text-white rounded-lg my-10 h-12 flex text-center justify-center items-center gap-2">
          <p className="font-semibold text-xl">Facebook</p>
          <BsFacebook className="w-10 h-6" />
        </div>
        {/* TODO: IF Have extra time implement facebook authentication */}
        <p className="font-medium text-center">
          Already Have an Account ?
          <Link className="text-blue-700" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
