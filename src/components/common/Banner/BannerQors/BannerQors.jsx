import { Typography, Button } from "@material-tailwind/react";
import { HiArrowRight } from "react-icons/hi2";

const BannerQors = () => {
  return (
    <div
      className="h-[280px] bg-yellowSol bg-cover bg-center items-center flex items-center justify-center"
      style={{ backgroundImage: "url('./src/assets/QORSsvg.svg')" }}
    >
      <img
        src="./src/assets/qors2.png"
        alt=""
        className="w-[350px] h-full object-top"
      />
      <div className="flex flex-col justify-evenly">
        <img
          src="./src/assets/qorshorizontal 1.png"
          alt=""
          className="w-[320px]"
        />
        <Typography className="text-center text-lg font-light">
          ¡Conocé nuestra marca deportiva!
        </Typography>
        <div className="flex items-center justify-center">
          <a
            href="https://qors.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-full mt-4 text-yellowSol flex items-center gap-2">
              Ver más
              <HiArrowRight />
            </Button>
          </a>
        </div>
      </div>
      <img
        src="./src/assets/qors1.png"
        alt=""
        className="w-[350px] h-full pt-3"
      />
    </div>
  );
};

export default BannerQors;
