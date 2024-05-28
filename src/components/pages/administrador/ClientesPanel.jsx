import HeaderPanel from "../../layout/HeaderPanel/HeaderPanel";
import TableCrud from "../../common/TableCrud/TableCrud";
import img from "../../../assets/manfrey.png";
import { useState, useEffect } from "react";
import { getClients } from "../../../services/apiClients";

const ClientesPanel = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const response = await getClients();
      console.log(response);
      setClients(response);
    };

    fetchClients();
  }, []);

  const TABLE_HEAD = ["Imágen", "Cliente", ""];
  return (
    <div className="h-screen justify-center">
      <HeaderPanel name={"Cliente"} />
      <TableCrud
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={clients.map((client) => ({
          id: client.id,
          img: client.img,
          name: client.title,
        }))}
        name={"Cliente"}
      />
    </div>
  );
};

export default ClientesPanel;
