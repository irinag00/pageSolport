import { Typography, Button } from "@material-tailwind/react";
import { HiArrowRight } from "react-icons/hi2";

const BannerQors = () => {
  return (
    <div
      className="h-[320px] lg:h-full bg-yellowSol bg-cover bg-center items-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('./TRAMA QORS BLANCA 130.svg')",
      }}
    >
      <img
        src="./camiseta futbol 1.png"
        alt=""
        className="object-top hidden md:block ml-2 lg:h-[400px] h-full my-3"
      />
      <div className="flex flex-col justify-center">
        <img
          src="./LOGO QORS (colores originales).svg"
          alt=""
          className="max-w-[320px]"
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
            <Button className="animate-bounce rounded-full mt-6 text-yellowSol flex items-center gap-2">
              Ver más
              <HiArrowRight />
            </Button>
          </a>
        </div>
      </div>
      <img
        src="./camiseta futbol 2.png"
        alt=""
        className=" lg:h-[400px] h-full object-top hidden md:block my-3"
      />
    </div>
  );
};

export default BannerQors;
