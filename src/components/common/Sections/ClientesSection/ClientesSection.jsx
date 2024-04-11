import { Typography } from "@material-tailwind/react";
import React from "react";

const ClientesSection = () => {
  const clientes = [
    {
      src: "./src/assets/manfrey.png",
      name: "Manfrey",
    },
    {
      src: "./src/assets/piamontesa.png",
      name: "La Piamontesa",
    },
    {
      src: "./src/assets/capyc.png",
      name: "Capyc",
    },
    {
      src: "./src/assets/logo_grandiet_color1.png",
      name: "Grandiet",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-blackSol from-10% via-yellowSol via-50% to-blackSol from-10% py-2">
      <div className="h-auto py-8 px-2 bg-white">
        <div className="">
          <Typography className="text-semibold text-center text-black text-3xl font-bold pt-6 mb-8">
            NUESTROS CLIENTES
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:gap-20 gap-4">
          {clientes.map((client, index) => (
            <div key={index} className="">
              <img
                src={client.src}
                alt={client.name}
                className="lg:w-[250px] w-[100px]  mb-8"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientesSection;
