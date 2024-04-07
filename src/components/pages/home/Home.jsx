import { Typography } from "@material-tailwind/react";
import { CarouselTransition } from "../../common/Carousel/CarouselImg";
import { NavbarSimple } from "../../layout/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <NavbarSimple />
      <CarouselTransition />
      <div className="mt-10">
        <hr className="border-yellowSol max-w-[30%] sm:max-w-[30%] mx-auto border-[0,1px]" />
        <div className="text-center mt-4">
          <Typography color="white" className=" text-3xl">
            Somos una empresa que se dedica a la confección de indumentaria
            deportiva, escolar, empresarial y publicitaria.
          </Typography>
          <Typography color="white" className=" text-3xl mt-3">
            Con más de{" "}
            <span className="text-yellowSol text-4xl font-semibold">
              -20 años-
            </span>{" "}
            de trayectoria.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Home;
