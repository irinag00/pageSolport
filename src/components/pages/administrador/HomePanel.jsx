import React from "react";
import Sidebar from "../../layout/SideBar-Admin/Sidebar";
import { Button, Typography } from "@material-tailwind/react";
import { TbCategoryPlus } from "react-icons/tb";
import { MdHandyman, MdOutlineDesignServices } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { Link } from "react-router-dom";

const HomePanel = () => {
  const listSideBar = [
    {
      name: "Categorías",
      icon: <TbCategoryPlus className="text-yellowSol h-8 w-8" />,
      path: "/admin/categorias",
    },
    {
      name: "Servicios",
      icon: <MdOutlineDesignServices className="text-yellowSol h-8 w-8" />,
      path: "/admin/servicios",
    },
    {
      name: "Materiales",
      icon: <MdHandyman className="text-yellowSol h-8 w-8" />,
      path: "/admin/materiales",
    },
    {
      name: "Clientes",
      icon: <FaUsers className="text-yellowSol h-8 w-8" />,
      path: "/admin/clientes",
    },
    {
      name: "Productos",
      icon: <GiClothes className="text-yellowSol h-8 w-8" />,
      path: "/admin/productos",
    },
  ];
  return (
    <div className="md:h-screen h-full pt-8">
      <Typography className="text-center text-3xl font-semibold mb-4">
        ¡Bienvenido al Panel de Administrador!
      </Typography>
      <Typography variant="paragraph" className="text-center">
        Administra tu información desde aquí.
      </Typography>
      <div className=" flex flex-wrap w-full items-center justify-center gap-10 mt-20">
        {listSideBar.map((list, index) => (
          <div className=" bg-white rounded-3xl border shadow-xl p-10 overflow-hidden">
            <div className="flex flex-col justify-center items-center gap-6 mb-8">
              {list.icon}
              <Typography className="font-semibold text-xl">
                {list.name}
              </Typography>
            </div>
            <Link to={list.path}>
              <Button
                fullWidth
                ripple={false}
                className="bg-yellowSol text-black"
              >
                Administrar
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePanel;
