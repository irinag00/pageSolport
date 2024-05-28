import HeaderPanel from "../../layout/HeaderPanel/HeaderPanel";
import TableCrud from "../../common/TableCrud/TableCrud";
import { useEffect, useState } from "react";
import { getServices } from "../../../services/apiServices";
const ServiciosPanel = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await getServices();
      console.log(response);
      setServices(response);
    };

    fetchServices();
  }, []);
  const TABLE_HEAD = ["Imágen", "Servicio", "Descripción", ""];
  return (
    <div className="h-screen justify-center">
      <HeaderPanel name={"Servicio"} />
      <TableCrud
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={services.map((service) => ({
          id: service.id,
          img: service.img,
          name: service.title,
          description: service.description,
        }))}
        name={"Servicio"}
      />
    </div>
  );
};

export default ServiciosPanel;
