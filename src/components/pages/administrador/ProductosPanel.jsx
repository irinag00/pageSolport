import HeaderPanel from "../../layout/HeaderPanel/HeaderPanel";
import TableCrud from "../../common/TableCrud/TableCrud";
import img from "../../../assets/REMERA-SUPERSOL.png";
const ProductosPanel = () => {
  const TABLE_HEAD = ["Imágen", "Producto", "Categoría", "Descripción", ""];
  const TABLE_ROWS = [
    {
      img: img,
      name: "Remera de Trabajo",
      category: "Empresas",
      description: "Remera blanca de trabajo para el supermercado 'Supersol'.",
    },
  ];
  return (
    <div className="h-screen justify-center">
      <HeaderPanel name={"Producto"} />
      <TableCrud TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS} />
    </div>
  );
};

export default ProductosPanel;
