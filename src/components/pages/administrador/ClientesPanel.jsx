import HeaderPanel from "../../layout/HeaderPanel/HeaderPanel";
import TableCrud from "../../common/TableCrud/TableCrud";
import img from "../../../assets/manfrey.png";

const ClientesPanel = () => {
  const TABLE_HEAD = ["Imágen", "Cliente", ""];
  const TABLE_ROWS = [
    {
      img: img,
      name: "Manfrey",
    },
  ];
  return (
    <div className="h-screen justify-center">
      <HeaderPanel name={"Cliente"} />
      <TableCrud TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS} />
    </div>
  );
};

export default ClientesPanel;
