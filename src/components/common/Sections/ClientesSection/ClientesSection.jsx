import { Typography } from "@material-tailwind/react";
import React from "react";

const ClientesSection = () => {
  const clientes = [
    {
      src: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937503/solsport/clients/manfrey_ytdylo.png",
      name: "Manfrey",
    },
    {
      src: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937505/solsport/clients/piamontesa_pmnqe7.png",
      name: "La Piamontesa",
    },
    {
      src: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937515/solsport/clients/capyc_uzr4jv.png",
      name: "Capyc",
    },
    {
      src: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937502/solsport/clients/logo_grandiet_color1_vlboqi.png",
      name: "Grandiet",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-blackSol from-10% via-yellowSol via-50% to-blackSol from-10% py-2">
      <div className="h-auto py-8 px-2 bg-white">
        <div className="mb-8">
          <Typography className="text-semibold text-center text-black text-xl font-bold ">
            NUESTROS
          </Typography>
          <Typography className="text-semibold text-center text-yellowSol text-5xl font-bold">
            Clientes
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
