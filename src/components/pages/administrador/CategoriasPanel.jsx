import React from "react";
import TableCrud from "../../common/TableCrud/TableCrud";
import img from "../../../assets/bolsa-mochila.png";
import { Typography } from "@material-tailwind/react";
import HeaderPanel from "../../layout/HeaderPanel/HeaderPanel";
import { useEffect, useState } from "react";
import { apiSolsport } from "../../../services/apiSolsport";
import { getCategories } from "../../../services/apiCategories";

const CategoriasPanel = () => {
  const [categories, setCategoriess] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      console.log(response);
      setCategoriess(response);
    };

    fetchCategories();
  }, []);
  const TABLE_HEAD = ["Imágen", "Categoría", ""];
  return (
    <div className="h-screen justify-center">
      <HeaderPanel name={"Categoría"} />
      <TableCrud
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={categories.map((category) => ({
          id: category.id,
          img: category.img,
          name: category.title,
        }))}
        name={"Categoría"}
      />
    </div>
  );
};

export default CategoriasPanel;
