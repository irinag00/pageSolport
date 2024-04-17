import { Typography, Carousel } from "@material-tailwind/react";
import { useState, useRef, useEffect } from "react";
import { FaHandshakeSimple } from "react-icons/fa6";
import BannerFrase from "../../common/Banner/BannerFrase/BannerFrase";

const Nosotros = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  const frase =
    "Nuestro enfoque principal es fabricar un producto que cuente con las cualidades esenciales que el cliente demande respecto a calidad, diseño, precio y funcionalidad del mismo.";

  useEffect(() => {
    const handleScroll = () => {
      const top = componentRef.current.getBoundingClientRect().top;
      const isVisible = top < window.innerHeight;
      setIsVisible(isVisible);
    };

    // Observador de la intersección para detectar la visibilidad del componente
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    observer.observe(componentRef.current);

    // Escucha del evento de scroll para actualizar la visibilidad del componente
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div className="">
      <div
        ref={componentRef}
        className="relative lg:h-screen md:h-[500px] overflow-hidden"
      >
        <img
          src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1713188853/solsport/nosotros/nosotros2_onz5mk.jpg"
          alt="image 1"
          className=" h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 h-full w-full items-start bg-black/50 flex flex-col justify-end lg:p-20 md:p-10 p-5">
          <Typography
            className={`text-semibold text-white lg:text-5xl md:text-3xl text-2xl font-bold px-4 ${
              isVisible ? "animate-fade-in-y" : ""
            }`}
          >
            QUIÉNES
          </Typography>
          <Typography
            className={`text-semibold text-yellowSol lg:text-9xl md:text-7xl text-5xl font-bold px-4 ${
              isVisible ? "animate-fade-in-y" : ""
            }`}
          >
            Somos
          </Typography>
        </div>
      </div>
      <div className="flex flex-col items-center p-8 py-6 rounded-lg lg:mx-52 mx-auto">
        <Typography className="text-center text-white text-3xl font-normal">
          Somos una empresa social con más de 20 años de trayectoria en la
          industria textil que pertenece a la{" "}
        </Typography>
        <Typography className="text-white font-semibold text-3xl text-center">
          Cooperativa de Trabajo "El Progreso" de Devoto LTDA.
        </Typography>
        <FaHandshakeSimple className="text-white w-28 h-28" />
      </div>
      <section className="section-double">
        <div className="grid grid-cols-2 px-36 items-center">
          <div className=" h-[400px]">
            <img
              src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1713272951/solsport/nosotros/nosotros3_zqagkl.jpg"
              alt=""
              className={`rounded-lg h-full w-full object-cover animate-fade-in-l`}
            />
          </div>
          <div className="pl-10">
            <Typography className="text-white text-2xl font-light">
              Nos especializamos en diseño y confección de:
            </Typography>
            <ul className="text-white space-y-1 list-disc list-inside text-2xl font-light mt-4 marker:text-yellowSol">
              <li>uniformes escolares,</li>
              <li>empresariales,</li>
              <li>profesionales</li>
              <li>indumentaria deportiva y publicitaria</li>
              <li>promociones para quinto y sexto año</li>
              <li>accesorios varios.</li>
            </ul>
            <Typography className="text-white text-2xl font-light mt-4">
              Realizamos extensa variedad de artículos textiles para satisfacer
              la demanda de nuestros clientes.
            </Typography>
          </div>
          <div className="pr-10">
            <Typography className="text-white text-2xl font-light mt-4">
              Contamos con amplia infraestructura y maquinaria de última
              generación para la confección de los diferentes productos, en una
              planta modelo.
            </Typography>
            <Typography className="text-white text-2xl font-light mt-4">
              Cubrimos todas las etapas en el proceso productivo, entre las que
              destacamos:
            </Typography>
            <ul className="text-white space-y-1 list-disc list-inside text-2xl font-light mt-4 marker:text-yellowSol">
              <li>servicio de diseño con profesionales a cargo</li>
              <li>bordados y estampados personalizados</li>
              <li>serigrafía y sublimación</li>
              <li>corte y confección.</li>
            </ul>
          </div>
          <div className="h-[400px]">
            <img
              src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1713272950/solsport/nosotros/nosotros5_no2nfx.jpg"
              alt=""
              className={`rounded-lg h-full w-full object-cover animate-fade-in-r`}
            />
          </div>
        </div>
      </section>
      <div className="mt-10">
        <BannerFrase frase={frase} />
      </div>
    </div>
  );
};

export default Nosotros;
