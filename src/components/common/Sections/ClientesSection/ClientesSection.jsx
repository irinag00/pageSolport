import { Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { getClients } from "../../../../services/apiClients";

const ClientesSection = () => {
  const [clients, setClients] = useState([]);
  const fetchClients = async () => {
    const response = await getClients();
    setClients(response);
  };

  useEffect(() => {
    fetchClients();
  }, []);

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
          {clients.map((client) => (
            <div key={client.id} className="">
              <img
                src={client.img}
                alt={client.title}
                className="lg:w-[250px] w-[180px] mb-8"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientesSection;
