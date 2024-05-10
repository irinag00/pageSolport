import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import img from "../../../../assets/bolsa-mochila.png";
const ModalUpdate = ({ open, handler, name }) => {
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

            {name === "Producto" ? (
              <div className="flex flex-col gap-4">
                <Typography className="-mb-2" variant="h6">
                  Categoría
                </Typography>
                <Select label="Categorías" size="lg">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
            ) : null}

            {name === "Servicio" ||
            name === "Material" ||
            name === "Producto" ? (
              <div className="flex flex-col gap-4">
                <Typography className="-mb-2" variant="h6">
                  Descripción
                </Typography>
                <Textarea label="Descripción" size="lg" />
              </div>
            ) : null}
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
