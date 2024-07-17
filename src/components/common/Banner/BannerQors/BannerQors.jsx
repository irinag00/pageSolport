import { Typography, Button } from "@material-tailwind/react";
import { HiArrowRight } from "react-icons/hi2";

const BannerQors = () => {
  return (
    <div
      className="h-[280px] lg:h-full bg-gray-500 bg-cover bg-center items-center flex items-center justify-center overflow-hidden xl:gap-32 lg:gap-10 gap-4"
      style={{
        backgroundImage: "url('./Group.svg')",
      }}
    >
      <img
        src="./camiseta futbol 1.png"
        alt=""
        className="object-top hidden md:block lg:h-[350px] h-full my-3 mr-2"
      />
      <div className="flex flex-col items-center justify-center">
        <img
          src="./LOGO QORS (colores originales) sombreado.png"
          alt=""
          className="md:w-[320px] w-[250px] mb-2"
        />
        <Typography className="text-center md:text-xl text-lg font-light">
          ¡Conocé nuestra marca deportiva!
        </Typography>
        <div className="flex items-center justify-center">
          <a
            href="https://qors.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="animate-bounce rounded-full mt-6 text-white flex items-center gap-2">
              Ver más
              <HiArrowRight />
            </Button>
          </a>
        </div>
      </div>
      <img
        src="./camiseta futbol 2.png"
        alt=""
        className=" lg:h-[350px] h-full object-top hidden md:block my-3"
      />
    </div>
  );
};

export default BannerQors;
