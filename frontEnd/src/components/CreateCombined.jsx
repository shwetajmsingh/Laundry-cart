import React from "react";
import Sidebar from "./sidebar/Sidebar";
import CreateOrder from "./createorder/CreateOrder";
import Copyright from "./footer/Copyright";
import Navbar from "./LogNav/Navbar";

const CreateCombined = () => {
  return (
    <>
      <Navbar />
      <div className="side-bar-and-create-order-wrapper">
        <Sidebar></Sidebar>
        <CreateOrder></CreateOrder>
      </div>
      <Copyright></Copyright>
    </>
  );
};

export default CreateCombined;
