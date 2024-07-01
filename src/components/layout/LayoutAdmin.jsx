import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar-Admin/Sidebar";
export const LayoutAdmin = () => {
  return (
    <div className="flex bg-gray-200">
      <div className="">
        <Sidebar />
      </div>
      <div className="lg:ml-[22rem] ml-[5rem] flex-1 mx-6 overflow-hidden ">
        <Outlet />
      </div>
    </div>
  );
};
