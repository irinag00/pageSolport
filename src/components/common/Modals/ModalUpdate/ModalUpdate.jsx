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
import { useEffect, useState } from "react";
import {
  getCategories,
  updateCategories,
} from "../../../../services/apiCategories";
import { updateService } from "../../../../services/apiServices";
import { updateMaterial } from "../../../../services/apiMaterials";
import { updateClient } from "../../../../services/apiClients";
import { updateProduct } from "../../../../services/apiProducts";
const ModalUpdate = ({ open, handler, item, name }) => {
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
    title: item?.title || "",
    description: item?.description || "",
    category: item?.category || "",
    img: item?.img || null,
  });

  useEffect(() => {
    if (item) {
      if (name === "Categoría" || name === "Cliente") {
        setFormData({
          title: item.title,
          img: item.img,
        });
      }
      if (name === "Material" || name === "Servicio") {
        setFormData({
          title: item.title,
          description: item.description,
          img: item.img,
        });
      }
      if (name === "Producto") {
        setFormData({
          title: item.title,
          description: item.description,
          category: item.category,
          img: item.img,
        });
      }
    }
  }, [item]);

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
    console.log(formData);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        let response;
        switch (name) {
          case "Categoría":
            response = await updateCategories(item.id, formData, token);
            break;
          case "Servicio":
            response = await updateService(item.id, formData, token);
            break;
          case "Material":
            response = await updateMaterial(item.id, formData, token);
            break;
          case "Cliente":
            response = await updateClient(item.id, formData, token);
            break;
          case "Producto":
            response = await updateProduct(item.id, formData, token);
            break;
          default:
            throw new Error("Tipo de entidad incorrecto");
        }
        handler();
        console.log(`${name} actualizado:`, response);
      } catch (error) {
        console.error(`Error actualizando ${name.toLowerCase()}:`, error);
      }
    }
  };

  return (
    <Dialog
      size="md"
      open={open}
      handler={handler}
      className="bg-transparent shadow-none"
    >
      {item !== null ? (
        <Card className="mx-auto w-full max-w-[40rem]">
          <form onSubmit={handleSubmit}>
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Editar {name}
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Subir imagen
              </Typography>
              <div class="flex justify-center items-center w-full gap-8">
                {preview ? (
                  <img
                    src={preview}
                    alt="Vista previa"
                    className="rounded-full w-20 h-20 p-0"
                  />
                ) : (
                  <img
                    src={formData.img}
                    className="rounded-full w-20 h-20 p-0"
                  />
                )}

                <div>
                  <input
                    className="block w-full p-2 border"
                    type="file"
                    accept=".jpg, .jpeg, .png, .svg"
                    name="img"
                    onChange={handleChange}
                  />
                  <p className="mt-1 ml-2 text-sm text-gray-500 dark:text-gray-300">
                    SVG, PNG, JPG o JPEG
                  </p>
                </div>
              </div>
              <Typography className="-mb-2" variant="h6">
                Nombre
              </Typography>
              <Input
                size="lg"
                label={formData.title}
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />

              {name === "Producto" ? (
                <div className="flex flex-col gap-4">
                  <Typography className="-mb-2" variant="h6">
                    Categoría
                  </Typography>
                  <Select
                    label="Categorías"
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
              ) : null}

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
                  />
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
              <Button variant="gradient" className="" type="submit">
                <span>Confirmar</span>
              </Button>
            </CardFooter>
          </form>
        </Card>
      ) : null}
    </Dialog>
  );
};

export default ModalUpdate;
