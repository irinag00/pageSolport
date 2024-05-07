import { Button, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function NavList() {
  const listProducts = [
    { title: "Accesorios", img: "./src/assets/bolsa-mochila.png" },
    { title: "Deportes", img: "./src/assets/camisa-supersol.png" },
    { title: "Empresas", img: "./src/assets/chaleco-agronorte.png" },
    { title: "Escolares", img: "./src/assets/campera-remera-barreiro.png" },
    {
      title: "Instituciones",
      img: "./src/assets/BOMBEROS-HORNILLOS-MANGA-LARGA.png",
    },
    { title: "Egresados", img: "./src/assets/IPETYM-ALIMENTACION.png" },
  ];
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      {listProducts.map((item, index) => (
        <Typography
          key={index}
          as="li"
          color="white"
          className="p-2 font-medium text-xl"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              src={item.img}
              alt=""
              className="w-[85px] h-[85px] bg-yellowSol/80 rounded-tl-[30px] rounded-tr-lg rounded-b-lg rounded-br-[30px] overflow-visible object-cover "
            />
            <a
              href="#"
              className="flex items-center hover:text-yellowSol transition-colors"
            >
              {item.title.toUpperCase()}
            </a>
          </div>
        </Typography>
      ))}
    </ul>
  );
}

const Productos = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="mt-20">
      <div>
        <Typography className="text-semibold text-center text-white text-xl font-bold ">
          NUESTROS
        </Typography>
        <Typography className="text-semibold text-center text-yellowSol text-5xl font-bold">
          Productos
        </Typography>
      </div>
      <Navbar className="bg-blackSol border-none shadow-none mx-auto px-6 py-3 mt-6">
        <div className="flex items-center justify-center">
          <div className="hidden lg:block">
            <NavList />
          </div>
          <Button
            variant="text"
            className="text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            <Typography className="flex items-center gap-6">
              Ver todas las categorías
              <MdOutlineKeyboardArrowDown className="h-8 w-8" />
            </Typography>
          </Button>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Productos;
