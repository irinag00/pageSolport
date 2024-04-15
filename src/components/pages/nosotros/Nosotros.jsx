import { Typography } from "@material-tailwind/react";
import { useState, useRef, useEffect } from "react";

const Nosotros = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

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
      {/* <div className="relative h-screen text-white">
        <img
          src="./src/assets/nosotros2.jpg"
          alt="image 1"
          className=" h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 h-full w-full items-center bg-yellowSol/50 flex flex-col justify-center">
          <Typography className="text-center text-4xl px-36">
            Somos una empresa social con más de 20 años de trayectoria en la
            industria textil que pertenece a la Cooperativa de Trabajo "El
            Progreso" de Devoto LTDA.
          </Typography>
          <Typography className="text-center text-4xl px-36">
            Nos especializamos en diseño y confección de: uniformes escolares,
            empresariales, profesionales, indumentaria deportiva y publicitaria,
            promociones para quinto y sexto año, y accesorios varios.
          </Typography>
        </div>
      </div> */}
    </div>
  );
};

export default Nosotros;
