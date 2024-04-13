import { Typography, Button } from "@material-tailwind/react";
import { HiArrowRight } from "react-icons/hi2";

const BannerQors = () => {
  return (
    <div
      className="h-[320px] lg:h-full bg-yellowSol bg-cover bg-center items-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937508/solsport/qors/QORSsvg_e2vvlc.svg')",
      }}
    >
      <img
        src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937507/solsport/qors/qors2_p163ar.png"
        alt=""
        className=" h-full object-top hidden md:block ml-2 "
      />
      <div className="flex flex-col justify-center">
        <img
          src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937507/solsport/qors/qorshorizontal_1_bn99kg.png"
          alt=""
          className="max-w-[320px]"
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
            <Button className="animate-bounce rounded-full mt-4 text-yellowSol flex items-center gap-2">
              Ver más
              <HiArrowRight />
            </Button>
          </a>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937506/solsport/qors/qors1_gaisnr.png"
        alt=""
        className=" h-full object-top hidden md:block"
      />
    </div>
  );
};

export default BannerQors;
