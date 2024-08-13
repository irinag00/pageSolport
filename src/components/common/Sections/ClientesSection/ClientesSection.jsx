import { Typography, Spinner } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { getClients } from "../../../../services/apiClients";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ClientesSection = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchClients = async () => {
    const response = await getClients();
    setClients(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blackSol from-10% via-yellowSol via-50% to-blackSol from-10% py-2 bg-yellowSol">
      <div className="bg-white">
        <div className="h-auto mb-4 py-3 pt-4 px-2 bg-white">
          <div className="text-center">
            <Typography className="text-semibold text-center text-black text-xl font-bold ">
              NUESTROS
            </Typography>
            <Typography className="text-semibold text-center text-yellowSol text-5xl font-bold">
              Clientes
            </Typography>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center w-full pt-2 pb-8">
            <Spinner color="yellow" className="h-10 w-10" />
          </div>
        ) : (
          <div className="px-2 py-6 bg-white flex text-center">
            <Swiper
              spaceBetween={20}
              // slidesPerView={5}
              centeredSlides={true}
              speed={900}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                300: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              modules={[Autoplay]}
            >
              {clients.map((client) => (
                <SwiperSlide
                  key={client.id}
                  className="flex justify-center items-center h-full mt-2"
                >
                  {client.title.startsWith("Escudo") ? (
                    <img
                      src={client.img}
                      alt={client.title}
                      className="lg:w-[200px] lg:h-[140px] w-[140px] h-[100px] mb-8 object-contain"
                    />
                  ) : (
                    <img
                      src={client.img}
                      alt={client.title}
                      className="lg:w-[200px] w-[140px] mb-8 object-contain"
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientesSection;
