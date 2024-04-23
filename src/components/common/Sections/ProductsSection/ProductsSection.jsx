import { Typography } from "@material-tailwind/react";
const ProductsSection = () => {
  return (
    <section>
      <div className="mb-12 mt-16 mx-20">
        <div className="grid columns-[2rem] lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 lg:h-[800px] gap-8 justify-items-stretch overflow-hidden">
          <div className=" w-full relative md:row-span-3 md:col-span-1 transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105">
            <img
              src="./src/assets/chaleco-agronorte.png"
              alt=""
              className=" md:h-full sm:h-[300px] h-[200px] w-full lg:object-cover md:object-center object-contain"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-4xl md:text-3xl text-center font-bold mx-auto"
              >
                EMPRESAS
              </Typography>
            </div>
          </div>
          <div className="relative lg:col-span-2 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:scale-105 lg:flex ">
            <img
              src="./src/assets/bolsa-mochila.png"
              alt=""
              className="md:h-full sm:h-[300px] h-[200px] w-full object-contain scale-110"
            />
            <img
              src="./src/assets/bolsa-mochila.png"
              alt=""
              className="md:h-full sm:h-[300px] h-[200px] w-full object-contain scale-110 lg:flex hidden"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-4xl md:text-3xl text-center font-bold mx-auto"
              >
                ACCESORIOS
              </Typography>
            </div>
          </div>
          <div className="relative  transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105">
            <img
              src="./src/assets/campera-remera-barreiro.png"
              alt=""
              className="md:h-full sm:h-[300px] h-[200px] w-full object-contain scale-110"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-4xl md:text-3xl text-center font-bold mx-auto"
              >
                ESCOLARES
              </Typography>
            </div>
          </div>
          <div className="relative md:row-span-2 transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105">
            <img
              src="./src/assets/IPETYM-ALIMENTACION.png"
              alt=""
              className="md:h-full sm:h-[300px] h-[200px] w-full object-contain md:object-center object-top scale-110"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-4xl md:text-3xl text-center font-bold mx-auto"
              >
                EGRESADOS
              </Typography>
            </div>
          </div>
          <div className="relative transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105">
            <img
              src="./src/assets/BOMBEROS-HORNILLOS-MANGA-LARGA.png"
              alt=""
              className="md:h-full sm:h-[300px] h-[200px] w-full object-contain scale-110"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-4xl md:text-3xl text-center font-bold mx-auto"
              >
                INSTITUCIONES
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
