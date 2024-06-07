import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import { Typography } from "@material-tailwind/react";

const ContactoFooter = () => {
  const datosContacto = [
    {
      icon: <HiOutlinePhone className="w-8 h-8 mt-2" />,
      title: "Teléfono",
      info: "(+54) 3564 482356 - Int. 109",
      color: "bg-yellowSol",
    },
    {
      icon: <IoLocationOutline className="w-8 h-8 mt-2" />,
      title: "Localidad",
      info: "Bv. 25 de Mayo 850 (1er. Piso), Devoto (Cba)",
      color: "text-yellowSol border-2 border-yellowSol",
    },
    {
      icon: <MdOutlineMail className="w-8 h-8 mt-2" />,
      title: "Email",
      info: "solsportindumentaria @gmail.com",
      color: "bg-yellowSol",
    },
    {
      icon: <FaRegClock className="w-8 h-8 mt-2" />,
      title: "Horarios",
      info: "Lunes a Viernes 08:00-16:00. Sábados 08:00-12:00",
      color: "text-yellowSol border-2 border-yellowSol",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center md:px-32 px-2 gap-10">
      {datosContacto.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col w-[180px] h-[180px] items-center overflow-clip px-2 justify-center text-center rounded-lg ${item.color}`}
        >
          {item.icon}
          <Typography className="mt-4 font-bold text-base">
            {item.title}
          </Typography>
          <Typography className="font-medium mt-2 text-base">
            {item.info}
          </Typography>
        </div>
      ))}
    </div>
  );
};
// grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1

export default ContactoFooter;
