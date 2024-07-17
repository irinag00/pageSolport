import HeaderPanel from "../../layout/HeaderPanel/HeaderPanel";
import TableCrud from "../../common/TableCrud/TableCrud";
import img from "../../../assets/manfrey.png";
import { useState, useEffect } from "react";
import { getClients } from "../../../services/apiClients";

const ClientesPanel = () => {
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    const response = await getClients();
    console.log(response);
    setClients(response);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const TABLE_HEAD = ["Imágen", "Cliente", ""];
  return (
    <div className="h-full justify-center">
      <HeaderPanel name={"Cliente"} onRefresh={fetchClients} />
      <TableCrud
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={clients.map((client) => ({
          id: client.id,
          img: client.img,
          title: client.title,
        }))}
        name={"Cliente"}
        onRefresh={fetchClients}
      />
    </div>
  );
};

export default ClientesPanel;
