import React from "react";
import TableCrud from "../../common/TableCrud/TableCrud";
import HeaderPanel from "../../layout/HeaderPanel/HeaderPanel";
import { useEffect, useState } from "react";
import { getCategories } from "../../../services/apiCategories";

const CategoriasPanel = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await getCategories();
    console.log(response);
    setCategories(response);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const TABLE_HEAD = ["Imágen", "Categoría", ""];
  return (
    <div className="h-screen justify-center">
      <HeaderPanel name={"Categoría"} onRefresh={fetchCategories} />
      <TableCrud
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={categories.map((category) => ({
          id: category.id,
          img: category.img,
          title: category.title,
        }))}
        name={"Categoría"}
        onRefresh={fetchCategories}
      />
    </div>
  );
};

export default CategoriasPanel;
