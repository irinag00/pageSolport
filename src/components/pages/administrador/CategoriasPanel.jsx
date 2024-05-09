import React from "react";
import TableCrud from "../../common/TableCrud/TableCrud";
import img from "../../../assets/bolsa-mochila.png";
import { Typography } from "@material-tailwind/react";
import HeaderPanel from "../../layout/HeaderPanel/HeaderPanel";

const CategoriasPanel = () => {
  const TABLE_HEAD = ["Imágen", "Categoría", ""];
  const TABLE_ROWS = [
    {
      img: img,
      name: "Accesorios",
    },
  ];
  return (
    <div className="h-screen justify-center">
      <HeaderPanel />
      <TableCrud TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS} />
    </div>
  );
};

export default CategoriasPanel;
