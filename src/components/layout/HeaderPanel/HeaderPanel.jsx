import { Typography, Button, Input } from "@material-tailwind/react";
import { IoMdAdd } from "react-icons/io";

const HeaderPanel = () => {
  return (
    <div className="pt-8">
      <Typography className="text-center text-3xl font-semibold mb-4">
        CATEGORÍAS
      </Typography>
      <hr className="my-2 border-blue-gray-100 " />

      <div className="flex justify-end px-10">
        <Button className="my-4 flex bg-yellowSol text-black gap-2">
          <IoMdAdd className="w-4 h-4" />
          Añadir nueva categoría
        </Button>
      </div>
    </div>
  );
};

export default HeaderPanel;
