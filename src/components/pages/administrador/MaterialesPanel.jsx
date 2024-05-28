import HeaderPanel from "../../layout/HeaderPanel/HeaderPanel";
import TableCrud from "../../common/TableCrud/TableCrud";
import img from "../../../assets/estampado.webp";
import { useEffect, useState } from "react";
import { getMaterials } from "../../../services/apiMaterials";

const MaterialesPanel = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      const response = await getMaterials();
      console.log(response);
      setMaterials(response);
    };

    fetchMaterials();
  }, []);
  const TABLE_HEAD = ["Imagen", "Material", "Descripción", ""];
  return (
    <div className="h-screen justify-center">
      <HeaderPanel name={"Material"} />
      <TableCrud
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={materials.map((material) => ({
          id: material.id,
          img: material.img,
          name: material.title,
          description: material.description,
        }))}
        name={"Material"}
      />
    </div>
  );
};

export default MaterialesPanel;
