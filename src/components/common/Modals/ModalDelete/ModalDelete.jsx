import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const ModalDelete = ({ open, handler }) => {
  return (
    <Dialog open={open} size="xs" handler={handler}>
      <DialogHeader>¿Desea eliminar este elemento?</DialogHeader>
      <DialogBody>
        Esta operación es irreversible por lo que los datos no podrán ser
        recuperados.
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="black" onClick={handler} className="mr-1">
          <span>Cancelar</span>
        </Button>
        <Button variant="gradient" color="red" onClick={handler}>
          <span>Confirmar</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default ModalDelete;
