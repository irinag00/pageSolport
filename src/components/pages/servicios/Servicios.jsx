import {
  Typography,
  Card,
  CardBody,
  CardFooter,
  Button,
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

  const fetchServices = async () => {
    const response = await getServices();
    setServices(response);
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas erat eu nisl blandit, nec posuere felis molestie. ",
    },
    {
      nameService: "Confección",
      icon: (
        <GiSewingMachine className="md:h-16 md:w-16 h-8 w-8 text-center items-center text-white" />
      ),
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas erat eu nisl blandit, nec posuere felis molestie.",
    },
    {
      nameService: "Entrega",
      icon: (
        <TbTruckDelivery className="md:h-16 md:w-16 h-8 w-8 text-center items-center text-white" />
      ),
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas erat eu nisl blandit, nec posuere felis molestie.",
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
    <div className="mt-20">
      <div>
        <Typography className="text-semibold text-center text-white text-xl font-bold ">
          NUESTROS
        </Typography>
        <Typography className="text-semibold text-center text-yellowSol text-5xl font-bold">
          Servicios
        </Typography>
        <Typography
          variant="paragraph"
          className="text-center text-white md:mt-8 mt-4 mb-6 md:mx-60 mx-14 text-xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          egestas erat eu nisl blandit, nec posuere felis molestie. Praesent
          nibh enim, pretium nec lectus id, auctor luctus justo.
        </Typography>
      </div>
      <section className="servicesIcons flex flex-wrap justify-center items-center gap-10 mb-12">
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
      <section className="services my-10">
        {services.map((item, index) => {
          const classname =
            index % 2 === 0
              ? "justify-end text-right"
              : "justify-start text-start";
          return (
            <section
              id={generateId(item.title)}
              key={index}
              className={`grid grid-cols-2 lg:mx-36 md:mx-20 mx-8 md:h-[500px] h-[300px] items-center justify-between ${classname}`}
            >
              {classname === "justify-end text-right" ? (
                <>
                  <div className="md:h-[500px] h-full" data-aos="fade-left">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-tl-[100px] rounded-bl-lg"
                    />
                  </div>
                  <div
                    className={`flex items-center justify-end p-6`}
                    data-aos="fade-left"
                  >
                    <div className={`${classname} `}>
                      <Typography className="font-bold md:text-5xl text-3xl text-yellowSol">
                        {item.title}
                      </Typography>
                      <Typography className="text-white md:text-xl text-lg">
                        {item.description}
                      </Typography>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`flex items-center p-6`}
                    data-aos="fade-right"
                  >
                    <div className={`${classname}`}>
                      <Typography className="font-bold md:text-5xl text-3xl text-yellowSol">
                        {item.title}
                      </Typography>
                      <Typography className="text-white  md:text-xl text-lg">
                        {item.description}
                      </Typography>
                    </div>
                  </div>
                  <div className="md:h-[500px] h-full " data-aos="fade-right">
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
      <ContactoFooter />
    </div>
  );
};

export default Servicios;
