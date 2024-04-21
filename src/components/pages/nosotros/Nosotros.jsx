import { Typography, Carousel } from "@material-tailwind/react";
import { useState, useRef, useEffect } from "react";
import { FaRegHandshake } from "react-icons/fa";
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
        className="relative lg:h-screen h-full overflow-hidden"
      >
        <img
          src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1713188853/solsport/nosotros/nosotros2_onz5mk.jpg"
          alt="image 1"
          className=" h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 h-full w-full items-start bg-black/50 flex flex-col justify-end lg:py-20 lg:py-24 p-10 p-5">
          <Typography
            className={`text-semibold text-white lg:text-5xl md:text-3xl text-2xl font-bold px-4 lg:ml-14 ${
              isVisible ? "animate-fade-in-y" : ""
            }`}
          >
            QUIÉNES
          </Typography>
          <Typography
            className={`text-semibold text-yellowSol lg:text-9xl md:text-7xl text-5xl font-bold px-4 lg:ml-14 lg:mb-10  ${
              isVisible ? "animate-fade-in-y" : ""
            }`}
          >
            Somos
          </Typography>
        </div>
      </div>
      <section className=" section-double">
        <div className="grid md:grid-cols-2 items-center justify-center ">
          <div className="md:order-2 xl:pr-36 md:pr-10 md:text-start text-center my-10 text-white px-3">
            <Typography className="lg:text-2xl md:text-2xl text-xl font-light mb-4">
              Somos una empresa social con más de 20 años de trayectoria en la
              industria textil que pertenece a la{" "}
              <span className="text-white font-semibold lg:text-2xl">
                Cooperativa de Trabajo "El Progreso" de Devoto LTDA.
              </span>
            </Typography>
            <Typography className="lg:text-2xl md:text-2xl text-xl font-light">
              Nos especializamos en diseño y confección de:
            </Typography>
            <ul className="space-y-1 list-disc list-inside lg:text-2xl md:text-2xl text-xl font-light mt-4 marker:text-yellowSol">
              <li>uniformes escolares,</li>
              <li>empresariales,</li>
              <li>profesionales</li>
              <li>indumentaria deportiva y publicitaria</li>
              <li>promociones para quinto y sexto año</li>
              <li>accesorios varios.</li>
            </ul>
            <Typography className="text-white lg:text-2xl md:text-2xl text-xl  font-light mt-4">
              Realizamos extensa variedad de artículos textiles para satisfacer
              la demanda de nuestros clientes.
            </Typography>
          </div>
          <div className="flex md:flex-row flex-wrap  justify-end mr-20">
            <img
              src="./src/assets/nosotros5.jpg"
              alt=""
              className="rounded-full lg:h-[450px] lg:w-[450px] h-[300px] w-[300px] object-cover border border-yellowSol p-2"
            />
          </div>
          <div className="order-3 mt-10 xl:pl-36 md:pl-10 px-3">
            <Typography className="text-white lg:text-2xl md:text-2xl text-xl font-light mt-4 md:text-start text-center">
              Contamos con amplia infraestructura y maquinaria de última
              generación para la confección de los diferentes productos, en una
              planta modelo.
            </Typography>
            <Typography className="text-white lg:text-2xl md:text-2xl text-xl font-light mt-4 md:text-start text-center">
              Cubrimos todas las etapas en el proceso productivo, entre las que
              destacamos:
            </Typography>
            <ul className="text-white space-y-1 list-disc list-inside lg:text-2xl md:text-2xl text-xl font-light mt-4 marker:text-yellowSol md:text-start text-center">
              <li>servicio de diseño con profesionales a cargo</li>
              <li>bordados y estampados personalizados</li>
              <li>serigrafía y sublimación</li>
              <li>corte y confección.</li>
            </ul>
          </div>
          <div className="order-4 flex md:flex-row flex-wrap  justify-start md:items-start items-center ml-20 mt-6">
            <img
              src="./src/assets/nosotros3.jpg"
              alt=""
              className="rounded-full lg:h-[450px] lg:w-[450px] h-[300px] w-[300px] object-cover border border-yellowSol p-2"
            />
          </div>
        </div>
      </section>
      <div className="my-16">
        <BannerFrase frase={frase} />
      </div>
      <section className="vision-mision">
        <div className="flex lg:flex-row flex-col justify-center items-stretch text-center gap-10 lg:mx-36 mx-10">
          <div className="text-center ">
            <div className="flex flex-col justify-center items-center bg-white p-8 rounded-xl shadow-xl h-full md:px-16 px-4">
              <Typography className="text-semibold text-center text-black text-xl font-bold">
                NUESTRA
              </Typography>
              <Typography className="text-center text-yellowSol text-5xl font-bold">
                - Misión -
              </Typography>
              <ul className="text-black space-y-1 list-disc list-inside text-xl font-normal mt-4 marker:text-yellowSol">
                <li>
                  Somos un equipo de personas con convicciones de solidaridad y
                  ayuda mutua, nos unimos y formamos una empresa social con el
                  objetivo de contribuir al desarrollo y crecimiento de todos
                  sus asociados y comunidad toda.
                </li>
                <li>
                  Nos dedicamos a la industria indumentaria, desde el diseño y
                  confección, hasta la comercialización, marketing, venta y
                  servicio al cliente del producto. Nuestro enfoque principal es
                  fabricar un producto que no afecte al medio ambiente y cuente
                  con las cualidades esenciales que la sociedad demanda con
                  respecto a calidad, diseño, precio justo y funcionalidad del
                  mismo.
                </li>
                <li>
                  Consideramos que los que consumen nuestros servicios y
                  productos junto a nuestros proveedores y organizaciones
                  relacionadas al proyecto, son socios estratégicos para
                  nuestros logros y el de ellos.
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center ">
            <div className="flex flex-col justify-start bg-white p-8 rounded-xl shadow-xl items-center h-full md:px-16 px-4">
              <div className="">
                <Typography className="text-semibold text-center text-black text-xl font-bold ">
                  NUESTRA
                </Typography>
                <Typography className="text-semibold text-center text-yellowSol text-5xl font-bold">
                  - Visión -
                </Typography>
              </div>
              <div className="">
                <ul className="text-black space-y-1 list-disc list-inside text-xl font-normal mt-4 marker:text-yellowSol">
                  <li>
                    Posicionar a la empresa social con herramientas de última
                    generación, con una estructura sólida, sostenible en el
                    tiempo y la formación de encadenamientos productivos de
                    trabajos asociativos en redes, logrando sustentabilidad en
                    base a la innovación permanente, a la eficacia y eficiencia
                    de los responsables de la organización y la reciprocidad
                    entre sus asociados y la comunidad.
                  </li>{" "}
                  <li>
                    Nos basamos fundamentalmente en que nadie puede dar lo que
                    no tiene, y para lograr vivir con dignidad sino realizamos
                    día a día nuestra tarea con empeño personal dando lo mejor
                    de nuestra profesión, no lograremos obtener resultados
                    positivos en el cuerpo, mente y espíritu.
                  </li>
                </ul>
                <Typography
                  variant="paragraph"
                  className="text-center text-black mt-2 text-xl font-medium"
                ></Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="valores mt-16">
        <Typography className="text-semibold text-center text-white text-2xl font-bold ">
          NUESTROS
        </Typography>
        <Typography className="text-semibold text-center text-yellowSol text-5xl font-bold">
          - Valores -
        </Typography>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center mx-2 gap-8">
          <div className="flex flex-col justify-start items-center p-8 rounded-xl px-6">
            <div className="mt-3 rounded-full bg-yellowSol hover:shadow-yellowSol/20 focus:shadow-yellowSol/20 w-24 h-24  flex justify-center items-center shadow-xl mb-4">
              <FaRegHandshake className="text-black h-16 w-16  " />
            </div>
            <Typography
              variant="paragraph"
              className="text-center text-white mt-4 mb-6 text-2xl"
            >
              Nos basamos en los valores de{" "}
              <span className="font-semibold">ayuda mutua</span>,{" "}
              <span className="font-semibold">responsabilidad</span>,
              <span className="font-semibold"> democracia</span>,{" "}
              <span className="font-semibold">igualdad</span>,{" "}
              <span className="font-semibold">equidad</span> y{" "}
              <span className="font-semibold">solidaridad</span>.
            </Typography>
          </div>
          <div className="flex flex-col justify-start items-center p-8 rounded-xl">
            <div className="mt-3 rounded-full bg-yellowSol hover:shadow-yellowSol/20 focus:shadow-yellowSol/20 w-24 h-24 flex justify-center items-center shadow-xl mb-4">
              <img
                className="h-16 w-16 "
                src="./src/assets/responsabilidad.png"
              />
            </div>
            <Typography
              variant="paragraph"
              className="text-center text-white mt-4 mb-6 text-2xl"
            >
              Los asociados creen en los valores éticos de{" "}
              <span className="font-semibold">honestidad</span>,{" "}
              <span className="font-semibold">transparencia</span>,
              <span className="font-semibold"> responsabilidad social</span> y{" "}
              <span className="font-semibold">preocupación por los demás</span>.
            </Typography>
          </div>
          <div className="flex flex-col justify-start items-center p-8 rounded-xl">
            <div className="mt-3 rounded-full bg-yellowSol hover:shadow-yellowSol/20 focus:shadow-yellowSol/20 w-24 h-24 flex justify-center items-center shadow-xl mb-4">
              <img className=" h-20 w-20" src="./src/assets/satisfaccion.png" />
            </div>
            <Typography
              variant="paragraph"
              className="text-center text-white mt-4 mb-6 text-2xl"
            >
              Nuestro compromiso es la{" "}
              <span className="font-semibold">
                satisfacción de los clientes
              </span>
              .
            </Typography>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
