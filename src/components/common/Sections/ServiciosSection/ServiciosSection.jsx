import { Typography, Button, Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { getServices } from "../../../../services/apiServices";

const ServiciosSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  const fetchCategories = async () => {
    const response = await getServices();
    setServices(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const generateId = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .normalize("NFD") // Eliminar acentos
      .replace(/[\u0300-\u036f]/g, "");
  };

  return (
    <section className="flex flex-col my-12 justify-center">
      <div className=" px-20">
        <Typography className="text-semibold text-center text-white text-3xl font-semibold">
          NUESTROS SERVICIOS
        </Typography>
        <Typography
          variant="paragraph"
          className="text-center text-white mt-2 mb-6 md:text-xl text-base"
        >
          Nos especializamos en la producción textil personalizada y de alta
          calidad, atendiendo las demandas con compromiso en cada etapa del
          proceso.
        </Typography>
      </div>
      {loading ? (
        <div className="flex justify-center items-center w-full">
          <Spinner color="yellow" className="h-10 w-10" />
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 h-full mx-12 justify-items-center">
          {services.map((list) => (
            <div
              key={list.id}
              className="relative flex flex-col max-w-[380px] justify-self-center"
              data-aos="flip-left"
            >
              <img
                src={list.img}
                alt={list.title}
                className="w-[400px] h-[380px] object-cover rounded-tl-[100px] rounded-tr-lg rounded-b-lg"
              />

              <div className="flex absolute inset-0 grid h-full w-full items-center justify-center bg-black/60 text-center rounded-tl-[100px] rounded-tr-lg">
                <Typography className="text-center text-white text-2xl font-semibold mx-4">
                  {list.title.toUpperCase()}
                </Typography>
                <div className="absolute bottom-0 w-full">
                  <Link to={`/servicios#${generateId(list.title)}`}>
                    <Button
                      fullWidth
                      ripple={false}
                      className="bg-transparent p-4 rounded-b-lg rounded-t-none bg-yellowSol text-base text-black absolute bottom-0"
                    >
                      Ver más
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center justify-center">
        <Link to="/servicios">
          <Button className="p-4 lg:px-36 sm:px-32 mt-8 bg-yellowSol text-base text-black  text-center">
            Ver todos los servicios
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ServiciosSection;
