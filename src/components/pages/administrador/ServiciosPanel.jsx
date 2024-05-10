import HeaderPanel from "../../layout/HeaderPanel/HeaderPanel";
import TableCrud from "../../common/TableCrud/TableCrud";
import img from "../../../assets/estampado.webp";
const ServiciosPanel = () => {
  const TABLE_HEAD = ["Imágen", "Servicio", "Descripción", ""];
  const TABLE_ROWS = [
    {
      img: img,
      name: "Estampado",
      description: "lorem ipsum",
    },
  ];
  return (
    <div className="h-screen justify-center">
      <HeaderPanel name={"Servicio"} />
      <TableCrud
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={TABLE_ROWS}
        name={"Servicio"}
      />
    </div>
  );
};

export default ServiciosPanel;
