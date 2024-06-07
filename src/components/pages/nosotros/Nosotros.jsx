import { Typography, Carousel } from "@material-tailwind/react";
import { useState, useRef, useEffect } from "react";
import { FaRegHandshake } from "react-icons/fa";
import BannerFrase from "../../common/Banner/BannerFrase/BannerFrase";
import Aos from "aos";
import "aos/dist/aos.css";
import ContactoFooter from "../../common/Sections/ContactoSection/ContactoFooter";

const Nosotros = () => {
  const frase =
    "Nuestro enfoque principal es fabricar un producto que cuente con las cualidades esenciales que el cliente demande respecto a calidad, diseño, precio y funcionalidad del mismo.";

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  return (
    <div className="">
      <div className="mt-20 mb-2">
        <Typography className="text-semibold text-center text-white text-2xl font-bold ">
          QUIÉNES
        </Typography>
        <Typography className="text-semibold text-center text-yellowSol text-5xl font-bold">
          Somos
        </Typography>
      </div>
      <section className="section-double w-full">
        <div className="grid md:grid-cols-2">
          <div
            className="md:order-2 xl:pr-36 md:pr-10 md:text-start text-center md:my-10 mt-4 text-white px-3 mx-4"
            data-aos="fade-right"
          >
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
          <div
            className="flex md:flex-row flex-wrap  justify-center md:justify-end mx-4 mt-6"
            data-aos="fade-right"
          >
            <img
              src="./nosotros3.jpg"
              alt=""
              className=" lg:w-[700px] md:w-[300px] h-full object-cover rounded-tl-[100px] rounded-br-[100px] rounded-lg"
            />
          </div>
        </div>
        <div className="lg:mx-60 md:mx-40 mx-10" data-aos="fade-up">
          <div>
            <Typography className="text-white lg:text-2xl md:text-2xl text-xl font-light mt-8 text-center">
              Contamos con amplia infraestructura y maquinaria de última
              generación para la confección de los diferentes productos, en una
              planta modelo. Cubrimos todas las etapas en el proceso productivo,
              entre las que destacamos:
            </Typography>
            <Typography className="text-white lg:text-2xl md:text-2xl text-xl mt-2 font-semibold italic text-center">
              Servicio de diseño con profesionales a cargo, bordados y
              estampados personalizados, serigrafía y sublimación, corte y
              confección.{" "}
            </Typography>
          </div>
        </div>
      </section>
      <section className="vision-mision mt-16 mb-8">
        <div className="flex lg:flex-row flex-col justify-center items-stretch text-center">
          <div
            className="bg-cover bg-center relative"
            style={{
              backgroundImage: "url('./Mision_vision_empresas.jpg')",
            }}
            data-aos="zoom-in"
          >
            <div className="absolute inset-0 bg-yellowSol/60"></div>
            <div className="relative p-8 h-full md:px-16 px-4 py-10 flex flex-col justify-center items-start text-start">
              <Typography className="text-center text-black text-5xl font-bold border-b-4 pb-2">
                MISIÓN
              </Typography>
              <ul className="text-black space-y-1 list-disc list-inside md:text-lg text-base font-normal mt-4 marker:text-white">
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
          <div
            className="relative bg-cover bg-center "
            style={{
              backgroundImage: "url('./vision.jpg')",
            }}
            data-aos="zoom-in"
          >
            <div className="absolute inset-0 bg-blackSol/90"></div>
            <div className="relative flex flex-col justify-start text-end p-8 items-end h-full md:px-16 px-4">
              <Typography className="text-semibold text-end text-yellowSol text-5xl font-bold border-b-4 pb-2">
                VISIÓN
              </Typography>
              <div className="">
                <ul className="text-white space-y-1 list-disc list-inside md:text-lg text-base font-normal mt-4 marker:text-yellowSol">
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
      <section className="valores mt-4 lg:mx-36 mx-10 mb-6">
        <Typography className="text-semibold text-center text-white text-2xl font-bold ">
          NUESTROS
        </Typography>
        <Typography className="text-semibold text-center text-yellowSol text-5xl font-bold">
          - Valores -
        </Typography>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center mx-2 md:gap-8 gap-3 mt-6">
          <div
            className="flex flex-col justify-start items-center md:p-8 p-2 rounded-xl md:px-6 px-2 bg-gray-800"
            data-aos="flip-left"
          >
            <div className="mt-3 rounded-full bg-yellowSol hover:shadow-yellowSol/20 focus:shadow-yellowSol/20 w-24 h-24 flex justify-center items-center shadow-xl mb-4">
              <FaRegHandshake className="text-black h-16 w-16  " />
            </div>
            <Typography
              variant="paragraph"
              className="text-center text-white mt-4 mb-6 text-xl"
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
          <div
            className="flex flex-col justify-start items-center md:p-8 p-2 md:px-6 px-2 rounded-xl bg-gray-800"
            data-aos="flip-left"
          >
            <div className="mt-3 rounded-full bg-yellowSol hover:shadow-yellowSol/20 focus:shadow-yellowSol/20 w-24 h-24 flex justify-center items-center shadow-xl mb-4">
              <img className="h-16 w-16 " src="./responsabilidad.png" />
            </div>
            <Typography
              variant="paragraph"
              className="text-center text-white mt-4 mb-6 text-xl"
            >
              Los asociados creen en los valores éticos de{" "}
              <span className="font-semibold">honestidad</span>,{" "}
              <span className="font-semibold">transparencia</span>,
              <span className="font-semibold"> responsabilidad social</span> y{" "}
              <span className="font-semibold">preocupación por los demás</span>.
            </Typography>
          </div>
          <div
            className="flex flex-col justify-start items-center md:p-8 p-2 md:px-6 px-2 rounded-xl bg-gray-800"
            data-aos="flip-left"
          >
            <div className="mt-3 rounded-full bg-yellowSol hover:shadow-yellowSol/20 focus:shadow-yellowSol/20 w-24 h-24 flex justify-center items-center shadow-xl mb-4">
              <img className=" h-20 w-20" src="./satisfaccion.png" />
            </div>
            <Typography
              variant="paragraph"
              className="text-center text-white mt-4 mb-6 text-xl"
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
      <div className="bg-gradient-to-r from-blackSol from-10% via-yellowSol via-50% to-blackSol from-10% py-2 my-12">
        <div className="h-auto py-8 px-2 py-2 bg-white/80">
          <div className="mb-8">
            <Typography className="text-semibold text-center text-black text-3xl font-bold ">
              NUESTRO EQUIPO
            </Typography>
            <Typography className="text-center mt-4" variant="paragraph">
              Somos una familia compuesta por valores, compromiso y
              profesionalidad en cada uno de sus integrantes.
            </Typography>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:gap-6 gap-4">
            <div className="">
              <img
                src="./nosotros2.jpg"
                alt=""
                className="w-[300px] h-[300px] mb-8 rounded-md object-cover object-center"
              />
            </div>
            <div className="">
              <img
                src="./nosotros1.jpg"
                alt=""
                className="w-[300px] h-[300px] mb-8 rounded-md object-cover object-center"
              />
            </div>
            <div className="">
              <img
                src="./nosotros2.jpg"
                alt=""
                className="w-[300px] h-[300px] mb-8 rounded-md object-cover object-center"
              />
            </div>
            <div className="">
              <img
                src="./nosotros1.jpg"
                alt=""
                className="w-[300px] h-[300px] mb-8 rounded-md object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <ContactoFooter />
    </div>
  );
};

export default Nosotros;
