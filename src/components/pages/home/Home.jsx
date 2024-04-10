import { Typography, Button } from "@material-tailwind/react";
import { CarouselTransition } from "../../common/Carousel/CarouselImg";
import { NavbarSimple } from "../../layout/Navbar/Navbar";
import ProductsSection from "../../common/ProductsSection/ProductsSection";
import BannerQors from "../../common/Banner/BannerQors/BannerQors";
import ServiciosSection from "../../common/ServiciosSection/ServiciosSection";
import BannerFrase from "../../common/Banner/BannerFrase/BannerFrase";
import BeholdWidget from "@behold/react";
import { FaInstagram } from "react-icons/fa";
import ClientesSection from "../../common/ClientesSection/ClientesSection";

const Home = () => {
  return (
    <>
      <NavbarSimple />
      <CarouselTransition />
      <section className="section-frase-principal">
        <div className="mt-10">
          {/* <hr className="border-yellowSol max-w-[30%] sm:max-w-[30%] mx-auto border-[0,1px]" /> */}
          <div className="text-center mt-4 mx-3">
            <Typography
              color="white"
              className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-extralight"
            >
              Somos una empresa que se dedica a la confección de indumentaria
              deportiva, escolar, empresarial y publicitaria.
            </Typography>
            <Typography
              color="white"
              className=" text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl mt-3 font-extralight"
            >
              Con más de{" "}
              <span className="text-yellowSol text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold">
                -20 años-
              </span>{" "}
              de trayectoria.
            </Typography>
          </div>
        </div>
      </section>
      <ProductsSection />
      <BannerQors />
      <ServiciosSection />
      <BannerFrase />
      <section className="insta-section my-12 text-center">
        <div className="mb-4">
          <Typography
            color="white"
            className="text-2xl flex justify-center items-center"
          >
            <hr className="border-white w-10 border-[0,2px] mr-2" /> Seguínos{" "}
            <hr className="border-white w-10 border-[0,2px] ml-2" />
          </Typography>
          <Typography className="text-yellowSol text-3xl font-semibold">
            EN INSTAGRAM
          </Typography>
        </div>
        <div className="flex justify-center overflow-hidden">
          <div className="mb-6 w-[1300px] mx-2">
            <div className="flex gap-4 items-center md:justify-between justify-center xl:justify-between">
              <div className="flex items-center ">
                <a
                  href="https://www.instagram.com/solsportdevoto/"
                  target="_blank"
                >
                  <img
                    src="./src/assets/sol.png"
                    className="w-16 h-16 roudend-full"
                  />
                </a>
                <div className="ml-3">
                  <a
                    href="https://www.instagram.com/solsportdevoto/"
                    target="_blank"
                  >
                    <Typography color="white" className="text-2xl">
                      SOLSPORT
                    </Typography>
                  </a>
                  <a
                    href="https://www.instagram.com/solsportdevoto/"
                    target="_blank"
                  >
                    <Typography color="gray" className="text-lg">
                      @solsportdevoto
                    </Typography>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 hidden sm:block">
                <a
                  href="https://www.instagram.com/solsportdevoto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="px-auto flex items-center gap-2 bg-blueInstagram text-base">
                    <FaInstagram className="w-6 h-6" /> Seguir
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <BeholdWidget feedId="OzhR1sWVFNLRlBpC4v1m" />
        </div>
      </section>
      <ClientesSection />
    </>
  );
};

export default Home;
