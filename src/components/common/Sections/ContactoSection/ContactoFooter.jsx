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
      info: "(+54) 3564 482356",
      color: "bg-yellowSol",
    },
    {
      icon: <IoLocationOutline className="w-8 h-8 mt-2" />,
      title: "Localidad",
      info: ["Bv. 25 de Mayo 850, ", "1er. Piso", " Devoto (Cba)."],
      color: "text-yellowSol border-2 border-yellowSol",
    },
    {
      icon: <MdOutlineMail className="w-8 h-8 mt-2" />,
      title: "Email",
      info: "info@sol-sport.com.ar",
      color: "bg-yellowSol",
    },
    {
      icon: <FaRegClock className="w-8 h-8 mt-2" />,
      title: "Horarios",
      info: ["Lunes a Viernes", " 08:00-16:00hs.", "Sábados 08:00-12:00hs."],
      color: "text-yellowSol border-2 border-yellowSol",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center md:px-32 px-2 gap-10">
      {datosContacto.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col w-[200px] h-[200px] items-center overflow-clip px-2 justify-start pt-6 text-center rounded-lg ${item.color}`}
        >
          {item.icon}
          <Typography className="mt-4 font-bold text-base">
            {item.title}
          </Typography>
          <Typography className="font-medium mt-2 text-sm">
            {Array.isArray(item.info)
              ? item.info.map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex < item.info.length - 1 && <br />}
                  </React.Fragment>
                ))
              : item.info}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default ContactoFooter;
