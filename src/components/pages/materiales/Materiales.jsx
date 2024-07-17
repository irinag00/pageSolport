import { Typography } from "@material-tailwind/react";
import ContactoFooter from "../../common/Sections/ContactoSection/ContactoFooter";
import { useEffect, useState } from "react";
import { getMaterials } from "../../../services/apiMaterials";

const Materiales = () => {
  const [materials, setMaterials] = useState([]);
  const fetchMaterials = async () => {
    const response = await getMaterials();
    setMaterials(response);
  };
  useEffect(() => {
    fetchMaterials();
  }, []);
  return (
    <div className="md:mt-20 mt-10">
      <Typography className="text-semibold text-center text-white md:text-2xl text-xl font-bold ">
        NUESTROS
      </Typography>
      <Typography className="text-semibold text-center text-yellowSol md:text-6xl text-4xl font-bold">
        Materiales
      </Typography>
      <Typography
        variant="paragraph"
        className="text-center text-white md:mt-8 mt-4 mb-6 md:mx-60 mx-6 md:text-xl text-lg"
      >
        En nuestra fábrica de indumentaria textil nos enorgullece ofrecer
        productos de alta calidad confeccionados con los mejores materiales del
        mercado. Utilizamos una amplia variedad de telas para garantizar la
        comodidad y durabilidad de nuestras prendas.
      </Typography>
      <div>
        <div
          className="relative bg-cover bg-center h-[250px] w-full flex justify-center items-center text-center group"
          style={{
            backgroundImage:
              "url('frontend/dist/colorful-knitted-fabric-background.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-300"></div>
          <div className="relative p-8 h-full md:px-26 px-4 flex items-center z-10">
            <Typography className="text-4xl font-bold text-white">
              TELAS DE PUNTO
            </Typography>
          </div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blackSol/90 flex justify-center items-center z-20">
            <Typography className=" text-white p-4 text-xl w-2/4">
              Entre los principales materiales que empleamos se encuentran las
              <span className="font-semibold"> telas de punto</span>, conocidas
              por su elasticidad y suavidad, ideales para ropa casual.
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="my-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid justify-center gap-8 content-center xl:w-[1200px] md:w-[700px] sm:w-[400px] w-[250px]">
          {materials
            .filter(
              (item) => item.description.toLowerCase() === "telas de punto"
            )
            .map((item) => (
              <div
                key={item.id}
                className="my-2 flex justify-center items-center"
              >
                <div className=" md:w-[250px] md:h-[250px] w-[150px] h-[150px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover object-center w-full h-full mb-2 rounded-lg"
                  />
                  <Typography className="text-center text-white text-lg font-medium">
                    {item.title}
                  </Typography>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div>
        <div
          className="mt-5 relative bg-cover bg-center h-[250px] w-full flex justify-center items-center text-center group"
          style={{
            backgroundImage:
              "url('frontend/dist/close-up-fabric-folded-stacked.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-300"></div>
          <div className="relative p-8 h-full md:px-26 px-4 flex items-center z-10">
            <Typography className="text-4xl font-bold text-white">
              TELAS PLANAS
            </Typography>
          </div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blackSol/90 flex justify-center items-center z-20">
            <Typography className=" text-white p-4 text-xl w-2/4">
              También utilizamos
              <span className="font-semibold"> telas planas</span>, reconocidas
              por su resistencia y versatilidad, perfectas para prendas
              formales.
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="my-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid justify-center gap-8 content-center xl:w-[1200px] md:w-[700px] sm:w-[400px] w-[250px]">
          {materials
            .filter((item) => item.description.toLowerCase() === "telas planas")
            .map((item) => (
              <div
                key={item.id}
                className="my-2 flex justify-center items-center"
              >
                <div className=" md:w-[250px] md:h-[250px] w-[150px] h-[150px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover object-center rounded-lg w-full h-full mb-2"
                  />
                  <Typography className="text-center text-white text-lg font-medium">
                    {item.title}
                  </Typography>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="md:mt-10 mt-4 lg:mx-36 mx-10 mb-10 flex flex-col justify-center items-center">
        <hr className="border-yellowSol w-1/4 border-[1px]" />
        <Typography className="mb-4 mt-6 text-semibold text-center text-white md:text-2xl text-xl font-semibold ">
          Cada uno de nuestros materiales es seleccionado cuidadosamente para
          asegurar que cada prenda no solo cumpla con los estándares de calidad,
          sino que también brinde una experiencia única a nuestros clientes.
        </Typography>
      </div>

      <ContactoFooter />
    </div>
  );
};

export default Materiales;
