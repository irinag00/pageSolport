import React from "react";
import Sidebar from "../../layout/SideBar-Admin/Sidebar";
import { Typography } from "@material-tailwind/react";

const HomeAdministrator = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      <div>
        <Sidebar />
      </div>
      <div className="lg:ml-[22rem] ml-6 mt-6">
        <Typography className="text-black">Bienvenidos</Typography>
      </div>
    </div>
  );
};

export default HomeAdministrator;
