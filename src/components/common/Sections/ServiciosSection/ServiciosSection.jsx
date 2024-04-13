import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ServiciosSection = () => {
  const images = [
    {
      src: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937513/solsport/services/bordado_tjowjx.jpg",
      name: "Bordado",
    },
    {
      src: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937502/solsport/services/impresion-dtf_zqg1ym.webp",
      name: "Impresión DTF",
    },
    {
      src: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937502/solsport/services/estampado_jgwyuc.webp",
      name: "Estampado",
    },
    {
      src: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937511/solsport/services/sublimacion_hrtqg2.jpg",
      name: "Sublimación",
    },
    {
      src: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937506/solsport/services/plastisol_l0cyxv.jpg",
      name: "Serigrafía con Plastisol",
    },
  ];
  return (
    <section className="flex flex-col my-12 justify-center">
      <div className=" px-20">
        <Typography className="text-semibold text-center text-white text-3xl font-semibold">
          NUESTROS SERVICIOS
        </Typography>
        <Typography
          variant="paragraph"
          className="text-center text-white mt-2 mb-6 text-xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          egestas erat eu nisl blandit, nec posuere felis molestie. Praesent
          nibh enim, pretium nec lectus id, auctor luctus justo.
        </Typography>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-6 h-full mx-12 justify-items-stretch">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex flex-col max-w-[350px] justify-self-center"
          >
            <img
              src={image.src}
              alt={image.name}
              className="w-[400px] h-[350px] object-cover rounded-tr-[100px] rounded-tl-lg rounded-b-lg"
            />

            <div className="flex absolute inset-0 grid h-full w-full items-center justify-center bg-black/60 text-center rounded-tr-[100px] rounded-tl-lg">
              <Typography className="text-center text-white text-2xl font-semibold mx-4">
                {image.name}
              </Typography>
              <Button
                fullWidth
                ripple={false}
                className="bg-transparent p-4 rounded-b-lg rounded-t-none bg-yellowSol text-base absolute bottom-0"
              >
                Ver más
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link to="/servicios">
          <Button className="p-4 lg:px-36 sm:px-32 mt-8 bg-yellowSol text-base text-center">
            Ver todos los servicios
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ServiciosSection;
