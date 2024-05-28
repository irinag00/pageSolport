import { Typography, Button, Input } from "@material-tailwind/react";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import ModalNew from "../../common/Modals/ModalNew/ModalNew";

const HeaderPanel = ({ name, onRefresh }) => {
  const [openNew, setOpenNew] = useState(false);
  const handleOpenNewElement = () => {
    setOpenNew(!openNew);
  };

  const handleCloseNew = () => {
    setOpenNew(false);
    onRefresh(); // Llamar a la función de actualización
  };
  return (
    <div className="pt-8">
      <Typography className="text-center text-3xl font-semibold mb-4">
        {name.toUpperCase() + "S"}
      </Typography>
      <hr className="my-2 border-blue-gray-100 " />

      <div className="flex justify-end px-10">
        <Button
          onClick={handleOpenNewElement}
          className="my-4 flex bg-yellowSol text-black gap-2"
        >
          <IoMdAdd className="w-4 h-4" />
          Añadir nuevo/a {name}
        </Button>
      </div>
      <ModalNew open={openNew} handleOpen={handleCloseNew} name={name} />
    </div>
  );
};

export default HeaderPanel;
