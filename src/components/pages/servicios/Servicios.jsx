import {
  Typography,
  Card,
  CardBody,
  CardFooter,
  Button,
  Spinner,
} from "@material-tailwind/react";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiSewingMachine } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import ContactoFooter from "../../common/Sections/ContactoSection/ContactoFooter";
import { useLocation, useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { getServices } from "../../../services/apiServices";
const Servicios = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    const response = await getServices();
    setServices(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const listServicesIcons = [
    {
      nameService: "Diseño",
      icon: (
        <MdOutlineDesignServices className="md:h-16 md:w-16 h-8 w-8 text-center items-center text-white" />
      ),
      descripcion:
        "Nos dedicamos a crear textiles innovadores, ofreciendo soluciones creativas y personalizadas para satisfacer las necesidades de nuestros clientes.",
    },
    {
      nameService: "Confección",
      icon: (
        <GiSewingMachine className="md:h-16 md:w-16 h-8 w-8 text-center items-center text-white" />
      ),
      descripcion:
        "Atención meticulosa a cada detalle, produciendo textiles de alta calidad que cumplen con los más altos estándares de la industria.",
    },
    {
      nameService: "Entrega",
      icon: (
        <TbTruckDelivery className="md:h-16 md:w-16 h-8 w-8 text-center items-center text-white" />
      ),
      descripcion:
        "Garantizamos entregas rápidas y confiables a todo el país. Nos aseguramos de que nuestros productos lleguen a tiempo y en perfectas condiciones.",
    },
  ];
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location, services]);

  const generateId = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .normalize("NFD") // Eliminar acentos
      .replace(/[\u0300-\u036f]/g, "");
  };

  return (
    <div className="md:mt-20 mt-10">
      <div>
        <Typography className="text-semibold text-center text-white md:text-2xl text-xl font-bold ">
          NUESTROS
        </Typography>
        <Typography className="text-semibold text-center text-yellowSol md:text-6xl text-4xl font-bold">
          Servicios
        </Typography>
        <Typography
          variant="paragraph"
          className="text-center text-white md:mt-8 mt-4 mb-6 md:mx-60 mx-14 md:text-xl text-lg"
        >
          Nos especializamos en la producción textil personalizada y de alta
          calidad, atendiendo las demandas con compromiso en cada etapa del
          proceso.
        </Typography>
      </div>
      <section className="servicesIcons flex flex-wrap justify-center items-center md:gap-10 gap-4 md:mb-16 mb-8 px-10 ">
        {listServicesIcons.map((item, index) => (
          <Card
            className="mt-6 w-96 flex justify-center bg-gray-800"
            key={index}
          >
            <CardBody className="text-center flex flex-col items-center">
              {item.icon}
              <Typography variant="h5" className="mb-2 text-yellowSol">
                {item.nameService}
              </Typography>
              <Typography className="text-white">{item.descripcion}</Typography>
            </CardBody>
          </Card>
        ))}
      </section>
      {loading ? (
        <div className="flex justify-center items-center w-full my-10">
          <Spinner color="yellow" className="h-10 w-10" />
        </div>
      ) : (
        <section className="services md:my-10 my-6 h-full">
          {services.map((item, index) => {
            const classname =
              index % 2 === 0
                ? "lg:justify-end lg:text-right text-center"
                : "lg:justify-start lg:text-start text-center";
            return (
              <section
                id={generateId(item.title)}
                key={index}
                className={`grid lg:grid-cols-2 grid-cols-1 md:mx-32 mx-8 lg:gap-0 gap-6 h-auto items-center lg:justify-between justify-center ${classname}  whitespace-pre-line`}
              >
                {classname === "lg:justify-end lg:text-right text-center" ? (
                  <>
                    <div
                      className="md:h-[500px] h-[300px] lg:order-first order-end"
                      data-aos="fade-left"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-tl-[100px] rounded-bl-lg"
                      />
                    </div>
                    <div
                      className={`flex items-center justify-end p-6 lg:order-end order-first`}
                      data-aos="fade-left"
                    >
                      <div className={`${classname} `}>
                        <Typography className="font-bold md:text-5xl text-2xl text-yellowSol">
                          {item.title}
                        </Typography>
                        <Typography className="text-white md:text-xl text-lg mt-3 font-light lg:pl-8">
                          {item.description}
                        </Typography>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={`flex items-center p-6 whitespace-pre-line lg:order-end order-first`}
                      data-aos="fade-right"
                    >
                      <div className={`${classname}`}>
                        <Typography className="font-bold md:text-5xl text-2xl text-yellowSol">
                          {item.title}
                        </Typography>
                        <Typography className="text-white md:text-xl text-lg text-lg mt-3 font-light lg:pr-8">
                          {item.description}
                        </Typography>
                      </div>
                    </div>
                    <div
                      className="md:h-[500px] h-[300px] lg:order-first order-end"
                      data-aos="fade-right"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-tr-lg rounded-br-[100px]"
                      />
                    </div>
                  </>
                )}
              </section>
            );
          })}
        </section>
      )}
      <ContactoFooter />
    </div>
  );
};

export default Servicios;
