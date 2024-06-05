import React, { useContext, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Svgs from "../../svg/Svgs";
import { AuthContext } from "../../Providers/AuthProviders";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NextNav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const background = useRef(null);

  const { contextSafe } = useGSAP(() => {}, { scope: background });

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  const routePath = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Instructors",
      path: "/instructors",
    },
    {
      title: "Programs",
      path: "/classes",
    },
    {
      title: "Dashboard",
      path: "/dashboard"
    }
  ];

  const handleMenu = contextSafe(() => {
    setIsMenuOpen(!isMenuOpen);
    const tl = gsap.timeline();

    if (isMenuOpen) {
      tl.to(background.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      tl.to(background.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.in",
      });
      tl.from(".linkAnime", { x: -100, duration: 1.5, opacity:0, ease: "power4.out", stagger:{
        ease: 1
      } });
    }
  });

  return (
    <>
      <div className="bg-gradient-to-r relative w-full from-black via-slate-900 to-cyan-950 text-white py-6 px-8">
        {/* LG devices */}
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <button onClick={handleMenu} className="md:hidden hover:scale-110">
              {isMenuOpen ? (
                <HiOutlineMenuAlt4 size={24} />
              ) : (
                <RxCross2 size={24} />
              )}
            </button>
            <h1 className="uppercase inline-flex gap-3 items-center text-xl md:text-2xl font-bold bg-gradient-to-br from-yellow-400 via-red-400 to-violet-500 bg-clip-text text-transparent">
              XTreme Camp
              <Svgs />
            </h1>
          </div>
          <div className="md:flex justify-center hidden flex-1">
            <div className="inline-flex space-x-4 font-space-grotesk font-semibold">
              {routePath.map((route, index) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 border-b border-white transition-all duration-500 scale-95 ease-out"
                      : ""
                  }
                  key={index}
                  to={`${route.path}`}
                >
                  {route.title}
                </NavLink>
              ))}
            </div>
          </div>
          <div>
            {user ? (
              <div className="flex items-center gap-4 justify-center">
                <h2
                  className="cursor-pointer hover:scale-105 ease-out duration-200 font-space-grotesk font-bold rounded-lg"
                  onClick={handleLogOut}
                >
                  Log Out
                </h2>
                <img
                  className="ring-2 ring-orange-500 rounded-lg w-8 h-8"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 border-b-2 hover:scale-105 border-opacity-75 border-white font-semibold transition-all duration-500 scale-90 ease-out"
                    : "font-semibold"
                }
                to="/login"
              >
                Sign Up
              </NavLink>
            )}
          </div>
        </div>
      </div>
      {/* Small devices */}
      <div
        ref={background}
        className="bg-gradient-to-r from-black via-slate-900 to-cyan-950 md:hidden z-50 h-[100vh] absolute top-20 w-full"
        style={{ transform: "translateX(-100%)" }}
      >
        <div className="flex flex-col font-bold text-4xl pt-5 gap-3">
          {routePath.map((route, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 border-b-2 border-white border-opacity-65 pl-8 pb-8 transition-all duration-500 ease-out"
                  : "border-b-2 border-white border-opacity-65 pb-8 pl-8 linkAnime text-white"
              }
              key={index}
              to={`${route.path}`}
            >
              {route.title}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default NextNav;
