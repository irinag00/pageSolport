import { Typography } from "@material-tailwind/react";
const ProductsSection = () => {
  return (
    <section>
      <div className="my-12 mx-16">
        <div className="grid lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:h-[800px] gap-8 ">
          <div className=" relative row-span-3 lg:row-span-3 md:row-start-3 sm:row-start-3 transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105">
            <img
              src="./src/assets/odontologia.jpg"
              alt=""
              className="h-full w-full object-cover "
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-5xl text-center font-medium mx-auto"
              >
                Empresas
              </Typography>
            </div>
          </div>
          <div className="relative col-span-2 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:scale-105">
            <img
              src="./src/assets/botinero.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-5xl text-center font-medium mx-auto"
              >
                Accesorios
              </Typography>
            </div>
          </div>
          <div className="relative transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105">
            <img
              src="./src/assets/barreiro-chb.jpg"
              alt=""
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-5xl text-center font-medium mx-auto"
              >
                Escolares
              </Typography>
            </div>
          </div>
          <div className="relative row-span-2 transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105">
            <img
              src="./src/assets/camp-trini.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-5xl text-center font-medium mx-auto"
              >
                Egresados
              </Typography>
            </div>
          </div>
          <div className="relative transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105">
            <img
              src="./src/assets/camperon-bomberos-freyre.jpg"
              alt=""
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-5xl text-center font-medium mx-auto"
              >
                Instituciones
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
