import React, { useState } from "react";
import { Card, Typography, Button } from "@material-tailwind/react";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import ModalDelete from "../Modals/ModalDelete/ModalDelete";
import ModalUpdate from "../Modals/ModalUpdate/ModalUpdate";

const TableCrud = ({ TABLE_HEAD, TABLE_ROWS, name, onRefresh }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleOpenDelete = (id) => {
    setOpenDelete(!openDelete);
    setSelectedId(id);
  };

  const handleOpenUpdate = (item) => {
    setOpenUpdate(!openUpdate);
    setSelectedItem(item);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
    setSelectedItem(null);
    onRefresh(); // Llamar a la función de actualización
    console.log(onRefresh);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
    setSelectedId(null);
    onRefresh(); // Llamar a la función de actualización
  };

  return (
    <section className="">
      <Card className="h-full w-full overflow-x-scroll">
        <table className="w-full table-auto text-center">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((list, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4 md:px-6 px-auto"
                : "p-4 px-6 border-b border-blue-gray-50";

              return (
                <tr key={list.id}>
                  <td className={`${classes}`}>
                    <div className="flex justify-center items-center md:w-full md:h-full w-20 h-20">
                      <img
                        src={list.img}
                        alt=""
                        className="rounded-full w-20 h-20 p-0"
                      />
                    </div>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      color="blue-gray"
                      className="font-semibold md:text-lg text-base"
                    >
                      {list.title}
                    </Typography>
                  </td>
                  {!list.category ? null : (
                    <td className={`${classes}`}>
                      <Typography
                        color="blue-gray"
                        className="font-normal text-base"
                      >
                        {list.category}
                      </Typography>
                    </td>
                  )}
                  {!list.description ? null : (
                    <td
                      className={
                        !list.category
                          ? `${classes} flex-wrap`
                          : `${classes} bg-blue-gray-50/50  flex-wrap`
                      }
                    >
                      <Typography
                        color="blue-gray"
                        className="font-normal text-base"
                      >
                        {list.description}
                      </Typography>
                    </td>
                  )}
                  <td
                    className={
                      !list.description || list.category
                        ? `${classes}`
                        : `${classes} bg-blue-gray-50/50`
                    }
                  >
                    <div className="flex text-center items-center justify-center gap-4 md:flex-row flex-col">
                      <Button
                        onClick={() => handleOpenUpdate(list)}
                        className="flex items-center gap-2 bg-yellowSol text-black"
                      >
                        <FaPencilAlt className="w-4 h-4" /> Editar
                      </Button>
                      <Button
                        onClick={() => handleOpenDelete(list.id)}
                        color="red"
                        className="flex items-center gap-2"
                      >
                        <FaTrashAlt className="w-4 h-4" /> Eliminar
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
      <ModalDelete
        open={openDelete}
        handlerClose={handleDeleteClose}
        itemId={selectedId}
        name={name}
      />
      <ModalUpdate
        open={openUpdate}
        handler={handleCloseUpdate}
        item={selectedItem}
        name={name}
      />
    </section>
  );
};

export default TableCrud;
