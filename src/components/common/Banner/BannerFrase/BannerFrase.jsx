import { Typography } from "@material-tailwind/react";
import { BiSolidQuoteRight } from "react-icons/bi";

const BannerFrase = () => {
  return (
    <div
      className="h-[320px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('./src/assets/coser.jpg')" }}
    >
      <div className="absolute inset-0 flex justify-center items-center  bg-yellowSol/60 p-6">
        <div className="flex flex-col gap-10 items-center justify-center w-3/5 h-full">
          <BiSolidQuoteRight className="lg:w-12 lg:h-12 w-8 h-8" />
          <Typography
            color="white"
            className="lg:text-3xl md:text-2xl text-xl  text-center"
          >
            El trabajo en equipo es el combustible que permite que gente común
            alcance logros extraordinarios.
          </Typography>
          <hr className="border-black w-1/4 border-[1px]" />
        </div>
      </div>
    </div>
  );
};

export default BannerFrase;
// max-w-[30%] sm:max-w-[30%]
