import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
const ButtonWhatsapp = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 text-center mb-3 mr-3">
      <Button className="rounded-full bg-greenWsp hover:shadow-greenWsp/20 focus:shadow-greenWsp/20 active:shadow-greenWsp/10 w-20 h-20 flex justify-center items-center shadow-md">
        <a
          href="https://wa.me/xxxxxxxxxxx"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FaWhatsapp className="text-white h-12 w-12 text-center items-center" />
        </a>
      </Button>
    </div>
  );
};

export default ButtonWhatsapp;
