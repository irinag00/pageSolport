import { Typography } from "@material-tailwind/react";
import { CarouselTransition } from "../../common/Carousel/CarouselImg";
import { NavbarSimple } from "../../layout/Navbar/Navbar";
import ProductsSection from "../../common/ProductsSection/ProductsSection";
import BannerQors from "../../common/Banner/BannerQors/BannerQors";
import ServiciosSection from "../../common/ServiciosSection/ServiciosSection";
import BannerFrase from "../../common/Banner/BannerFrase/BannerFrase";

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
    </>
  );
};

export default Home;
