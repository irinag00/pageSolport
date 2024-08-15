import HeaderPanel from "../../layout/HeaderPanel/HeaderPanel";
import TableCrud from "../../common/TableCrud/TableCrud";
import { useEffect, useState } from "react";
import { getServices } from "../../../services/apiServices";
const ServiciosPanel = () => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    const response = await getServices();
    console.log(response);
    setServices(response);
  };

  useEffect(() => {
    fetchServices();
  }, []);
  const TABLE_HEAD = ["Imágen", "Servicio", "Descripción", ""];
  return (
    <div className="h-full 2xl:h-screen justify-center">
      <HeaderPanel name={"Servicio"} onRefresh={fetchServices} />
      <TableCrud
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={services.map((service) => ({
          id: service.id,
          img: service.img,
          title: service.title,
          description: service.description,
        }))}
        name={"Servicio"}
        onRefresh={fetchServices}
      />
    </div>
  );
};

export default ServiciosPanel;
