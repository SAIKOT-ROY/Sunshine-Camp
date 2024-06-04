import React from "react";
// import Navbars from "../Shared/Navbar/Navbars";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import NextNav from "../Components/NextNav/NextNav";

const Main = () => {
  return (
    <div>
      {/* <Navbars></Navbars> */}
      <NextNav />
      <div className="min-h-[calc(100vh-150px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
