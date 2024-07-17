import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { deleteCategory } from "../../../../services/apiCategories";
import { deleteService } from "../../../../services/apiServices";
import { deleteMaterial } from "../../../../services/apiMaterials";
import { deleteClient } from "../../../../services/apiClients";
import { deleteProduct } from "../../../../services/apiProducts";
import { useState } from "react";

const ModalDelete = ({ open, handlerClose, itemId, name }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    setIsLoading(true);
    if (token) {
      try {
        let response;
        switch (name) {
          case "Categoría":
            response = await deleteCategory(itemId, token);
            break;
          case "Servicio":
            response = await deleteService(itemId, token);
            break;
          case "Material":
            response = await deleteMaterial(itemId, token);
            break;
          case "Cliente":
            response = await deleteClient(itemId, token);
            break;
          case "Producto":
            response = await deleteProduct(itemId, token);
            break;
          default:
            throw new Error("Tipo de entidad incorrecto");
        }
        console.log(`${name} eliminado con éxito:`, response);
        handlerClose();
      } catch (error) {
        console.error(`Error eliminando ${name.toLowerCase()}:`, error);
      }
    }
    setIsLoading(false);
  };

  return (
    <Dialog open={open} size="xs" handler={handlerClose}>
      <DialogHeader>¿Desea eliminar este elemento?</DialogHeader>
      <DialogBody>
        Esta operación es irreversible por lo que los datos no podrán ser
        recuperados.
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="black"
          onClick={handlerClose}
          className="mr-1"
        >
          <span>Cancelar</span>
        </Button>
        <Button
          variant="gradient"
          color="red"
          onClick={handleDelete}
          loading={isLoading ? true : false}
        >
          <span>Confirmar</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default ModalDelete;
