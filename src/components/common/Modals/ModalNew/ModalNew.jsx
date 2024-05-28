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
import { newCategories } from "../../../../services/apiCategories";
import { newMaterial } from "../../../../services/apiMaterials";
import { newProduct } from "../../../../services/apiProducts";
import { newClient } from "../../../../services/apiClients";
import { newService } from "../../../../services/apiServices";
import { getCategories } from "../../../../services/apiCategories";
import { useState, useEffect } from "react";
const ModalNew = ({ open, handleOpen, name }) => {
  const [categories, setCategories] = useState([]);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response);
    };

    fetchCategories();
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    img: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData((prevData) => ({ ...prevData, [name]: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (token) {
      try {
        let response;
        switch (name) {
          case "Categoría":
            response = await newCategories(formData, token);
            break;
          case "Servicio":
            response = await newService(formData, token);
            break;
          case "Material":
            response = await newMaterial(formData, token);
            break;
          case "Cliente":
            response = await newClient(formData, token);
            break;
          case "Producto":
            response = await newProduct(formData, token);
            break;
          default:
            throw new Error("Tipo de entidad incorrecto");
        }
        console.log(`${name} creado:`, response);
        handleOpen();
        setPreview(null);
        setFormData({
          title: "",
          description: "",
          category: "",
          img: null,
        });
      } catch (error) {
        console.error(`Error creando ${name.toLowerCase()}:`, error);
      }
    }
  };

  return (
    <Dialog
      size="md"
      open={open}
      handler={handleOpen}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[30rem]">
        <form onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Añadir {name}
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Nombre
            </Typography>
            <Input
              label="Nombre"
              size="lg"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            {name === "Servicio" ||
            name === "Material" ||
            name === "Producto" ? (
              <div className="flex flex-col gap-4">
                <Typography className="-mb-2" variant="h6">
                  Descripción
                </Typography>
                <Textarea
                  label="Descripción"
                  size="lg"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
            ) : null}

            {name === "Producto" && (
              <div className="flex flex-col gap-4">
                <Typography className="-mb-2" variant="h6">
                  Categoría
                </Typography>
                <Select
                  label="Categoría"
                  size="lg"
                  name="category"
                  value={formData.category}
                  onChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  {categories.map((category) => (
                    <Option key={category.id} value={category.title}>
                      {category.title}
                    </Option>
                  ))}
                </Select>
              </div>
            )}

            <Typography className="-mb-2" variant="h6">
              Subir imagen
            </Typography>
            <div class="flex justify-center items-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                  {preview ? (
                    <div className="flex justify-center items-center w-100 mt-4">
                      <img
                        src={preview}
                        alt="Vista previa"
                        className="h-64 rounded-lg"
                      />
                    </div>
                  ) : (
                    <>
                      <svg
                        aria-hidden="true"
                        class="mb-3 w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewbox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">
                          Click para cargar archivo
                        </span>{" "}
                        o arrastre y suelte aquí
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG o JPEG
                      </p>{" "}
                    </>
                  )}
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  name="img"
                  onChange={handleChange}
                  accept=".svg, .png, .jpg, .jpeg" // Limita los tipos de archivo
                  required
                />
              </label>
            </div>
          </CardBody>
          <CardFooter className="pt-0 flex justify-center">
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancelar</span>
            </Button>
            <Button variant="gradient" className="" type="submit">
              <span>Confirmar</span>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </Dialog>
  );
};

export default ModalNew;
