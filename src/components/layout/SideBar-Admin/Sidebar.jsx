import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Collapse,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { TbCategoryPlus } from "react-icons/tb";
import {
  MdHandyman,
  MdPowerSettingsNew,
  MdOutlineDesignServices,
} from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const listSideBar = [
    {
      name: "Categorías",
      icon: <TbCategoryPlus className="text-yellowSol h-6 w-6" />,
    },
    {
      name: "Servicios",
      icon: <MdOutlineDesignServices className="text-yellowSol h-6 w-6" />,
    },
    {
      name: "Materiales",
      icon: <MdHandyman className="text-yellowSol h-6 w-6" />,
    },
    {
      name: "Clientes",
      icon: <FaUsers className="text-yellowSol h-6 w-6" />,
    },
    {
      name: "Productos",
      icon: <GiClothes className="text-yellowSol h-6 w-6" />,
    },
  ];
  return (
    <>
      <Card className="fixed top-0 left-0 z-40 transition-transform -translate-x-full sm:translate-x-0 h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-yellowSol/5 hidden lg:block bg-blackSol rounded-none">
        <div className="mb-2 p-4">
          <img
            src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937509/solsport/SOLSPORT_HORIZONTAL_-_AMARILLA_eay57j.svg"
            alt=""
            className="w-[180px]"
          />
        </div>
        <List>
          {listSideBar.map((list, index) => (
            <ListItem
              key={index}
              className="font-semibold text-white text-lg hover:bg-yellowSol/50 hover:text-white focus:bg-yellowSol focus:text-white"
            >
              <ListItemPrefix>{list.icon}</ListItemPrefix>
              {list.name}
            </ListItem>
          ))}
          <hr className="my-2 border-blue-gray-50" />
          <ListItem className="font-semibold text-white text-lg hover:bg-yellowSol/50 hover:text-white focus:bg-yellowSol focus:text-white">
            <ListItemPrefix>
              <MdPowerSettingsNew className="text-yellowSol h-6 w-6" />
            </ListItemPrefix>
            Cerrar Sesión
          </ListItem>
        </List>
      </Card>
      <Card className="h-screen max-w-[4rem] block lg:hidden pt-2 px-2 bg-blackSol shadow-xl shadow-yellowSol/5">
        <div className="">
          {listSideBar.map((list, index) => (
            <Tooltip
              key={index}
              placement="right-end"
              content={list.name}
              className="text-yellowSol"
            >
              <ListItem className="font-semibold text-blackSol text-lg hover:bg-yellowSol/50 focus:bg-yellowSol focus:text-white">
                {list.icon}
              </ListItem>
            </Tooltip>
          ))}
          <hr className="my-2 border-blue-gray-50" />
          <ListItem className="font-semibold text-blackSol text-lg hover:bg-yellowSol/50 focus:bg-yellowSol focus:text-white">
            <ListItemPrefix>
              <MdPowerSettingsNew className="text-yellowSol h-6 w-6" />
            </ListItemPrefix>
          </ListItem>
        </div>
      </Card>
    </>
  );
};

export default Sidebar;
