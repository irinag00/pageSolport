import HeaderPanel from "../../layout/HeaderPanel/HeaderPanel";
import TableCrud from "../../common/TableCrud/TableCrud";
import img from "../../../assets/REMERA-SUPERSOL.png";
import { useState, useEffect } from "react";
import { apiSolsport } from "../../../services/apiSolsport";
import { getProducts } from "../../../services/apiProducts";
const ProductosPanel = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await getProducts();
    console.log(response);
    setProducts(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const TABLE_HEAD = ["Imagen", "Producto", "Categoría", "Descripción", ""];
  return (
    <div className="h-full justify-center">
      <HeaderPanel name={"Producto"} onRefresh={fetchProducts} />
      <TableCrud
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={products.map((producto) => ({
          id: producto.id,
          img: producto.img,
          title: producto.title,
          category: producto.category.title,
          description: producto.description,
        }))}
        name={"Producto"}
        onRefresh={fetchProducts}
      />
    </div>
  );
};

export default ProductosPanel;
