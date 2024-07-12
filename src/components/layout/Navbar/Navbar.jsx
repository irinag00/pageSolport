import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function NavList() {
  const lists = [
    { name: "Inicio", path: "/irinagorlino" },
    { name: "Nosotros", path: "/irinagorlino/nosotros" },
    { name: "Servicios", path: "/irinagorlino/servicios" },
    { name: "Materiales", path: "/irinagorlino/materiales" },
    { name: "Productos", path: "/irinagorlino/productos" },
    { name: "Contacto", path: "/irinagorlino/contacto" },
  ];
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {lists.map((list, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="white"
          className="p-1 text-lg"
        >
          <Link
            to={list.path}
            className={`p-1 text-lg flex items-center hover:text-yellowSol transition-colors ${
              list.path === currentPath
                ? "font-semibold text-yellowSol border-b-2 border-yellowSol"
                : ""
            }`}
          >
            {list.name.toUpperCase()}
          </Link>
        </Typography>
      ))}
      <div>
        <a
          href="https://www.facebook.com/SolsportDevoto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton className="rounded-full bg-yellowSol hover:shadow-yellowSol/20 focus:shadow-yellowSol/20 active:shadow-yellowSol/10 mr-2">
            <FaFacebookF className="text-black text-lg" />
          </IconButton>
        </a>
        <a
          href="https://www.instagram.com/solsportdevoto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton className="rounded-full bg-yellowSol hover:shadow-yellowSol/20 focus:shadow-yellowSol/20 active:shadow-yellowSol/10">
            <FaInstagram className="text-black text-lg" />
          </IconButton>
        </a>
      </div>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 1040 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="max-h-[768px]">
      <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none px-2 py-2 lg:px-8 lg:py-4 bg-blackSol border-transparent">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937509/solsport/SOLSPORT_HORIZONTAL_-_AMARILLA_eay57j.svg"
              alt=""
              className="h-16"
            />
          </Link>
          <div className="hidden xl:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <HiXMark className="h-6 w-6 text-white" strokeWidth={2} />
            ) : (
              <HiBars3 className="h-6 w-6 text-white" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}
