import { Typography } from "@material-tailwind/react";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiSewingMachine } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import ContactoFooter from "../../common/Sections/ContactoSection/ContactoFooter";
const Servicios = () => {
  const listServicesIcons = [
    {
      nameService: "Diseño",
      icon: (
        <MdOutlineDesignServices className="md:h-16 md:w-16 h-8 w-8 text-center items-center" />
      ),
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas erat eu nisl blandit, nec posuere felis molestie. Praesent nibh enim, pretium nec lectus id, auctor luctus justo.",
    },
    {
      nameService: "Confección",
      icon: (
        <GiSewingMachine className="md:h-16 md:w-16 h-8 w-8 text-center items-center" />
      ),
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas erat eu nisl blandit, nec posuere felis molestie. Praesent nibh enim, pretium nec lectus id, auctor luctus justo.",
    },
    {
      nameService: "Entrega",
      icon: (
        <TbTruckDelivery className="md:h-16 md:w-16 h-8 w-8 text-center items-center" />
      ),
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas erat eu nisl blandit, nec posuere felis molestie. Praesent nibh enim, pretium nec lectus id, auctor luctus justo.",
    },
  ];

  const services = [
    {
      src: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937513/solsport/services/bordado_tjowjx.jpg",
      name: "Bordado",
      classname: "justify-end text-right",
    },
    {
      src: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937502/solsport/services/impresion-dtf_zqg1ym.webp",
      name: "Impresión DTF",
      classname: "justify-start text-start",
    },
    {
      src: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937502/solsport/services/estampado_jgwyuc.webp",
      name: "Estampado",
      classname: "justify-end text-right",
    },
    {
      src: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937511/solsport/services/sublimacion_hrtqg2.jpg",
      name: "Sublimado",
      classname: "justify-start text-start",
    },
    {
      src: "https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937506/solsport/services/plastisol_l0cyxv.jpg",
      name: "Serigrafía con Plastisol",
      classname: "justify-end text-right",
    },
  ];
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
          className="text-center text-white mt-4 mb-6 text-xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          egestas erat eu nisl blandit, nec posuere felis molestie. Praesent
          nibh enim, pretium nec lectus id, auctor luctus justo.
        </Typography>
      </div>
      <section className="services my-10">
        {services.map((item) => (
          <div
            id={item.name.toLowerCase()}
            className={`flex mx-36 h-[400px] items-center justify-between ${item.classname}`}
          >
            {item.classname === "justify-end text-right" ? (
              <>
                <div className="h-[400px] w-1/2">
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-full object-cover rounded-tl-[100px] rounded-bl-lg"
                  />
                </div>
                <div className={`flex items-center p-6`}>
                  <div className={`${item.classname}`}>
                    <Typography className="font-bold text-5xl text-yellowSol">
                      {item.name}
                    </Typography>
                    <Typography className="text-white text-xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={`flex items-center p-6`}>
                  <div className={`${item.classname}`}>
                    <Typography className="font-bold text-5xl text-yellowSol">
                      {item.name}
                    </Typography>
                    <Typography className="text-white text-xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                  </div>
                </div>
                <div className="h-[400px] w-1/2">
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-full object-cover rounded-tr-lg rounded-br-[100px]"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </section>
      <ContactoFooter />
    </div>
  );
};

export default Servicios;
