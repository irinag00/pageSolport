import HeaderPanel from "../../layout/HeaderPanel/HeaderPanel";
import TableCrud from "../../common/TableCrud/TableCrud";
import img from "../../../assets/REMERA-SUPERSOL.png";
import { useState, useEffect } from "react";
import { apiSolsport } from "../../../services/apiSolsport";
import { getProducts } from "../../../services/apiProducts";
const ProductosPanel = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      console.log(response);
      setProducts(response);
    };

    fetchProducts();
  }, []);
  const TABLE_HEAD = ["Imagen", "Producto", "Categoría", "Descripción", ""];
  return (
    <div className="h-screen justify-center">
      <HeaderPanel name={"Producto"} />
      <TableCrud
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={products.map((producto) => ({
          id: producto.id,
          img: producto.img,
          name: producto.title,
          category: producto.category.title,
          description: producto.description,
        }))}
        name={"Producto"}
      />
    </div>
  );
};

export default ProductosPanel;
