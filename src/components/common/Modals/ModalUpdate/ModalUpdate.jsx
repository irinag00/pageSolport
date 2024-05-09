import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import img from "../../../../assets/bolsa-mochila.png";
const ModalUpdate = ({ open, handler }) => {
  return (
    <Dialog
      size="md"
      open={open}
      handler={handler}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[40rem]">
        <form enctype="multipart/form-data">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Editar
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Subir imagen
            </Typography>
            <div class="flex justify-center items-center w-full gap-8">
              <img src={img} className="rounded-full w-20 h-20 p-0" />
              <div>
                <input
                  class="block w-full p-2 border"
                  type="file"
                  accept=".jpg, .jpeg, .png, .svg"
                />
                <p class="mt-1 ml-2 text-sm text-gray-500 dark:text-gray-300">
                  SVG, PNG, JPG o JPEG
                </p>
              </div>
            </div>
            <Typography className="-mb-2" variant="h6">
              Nombre
            </Typography>
            <Input label="Accesorios" size="lg" />
          </CardBody>
          <CardFooter className="pt-0 flex justify-center">
            <Button
              variant="text"
              color="red"
              onClick={handler}
              className="mr-1"
            >
              <span>Cancelar</span>
            </Button>
            <Button variant="gradient" className="" onClick={handler}>
              <span>Confirmar</span>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </Dialog>
  );
};

export default ModalUpdate;
