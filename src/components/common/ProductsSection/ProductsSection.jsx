import { Typography } from "@material-tailwind/react";
const ProductsSection = () => {
  return (
    <div className="my-12 mx-16">
      <div className="grid grid-cols-3 grid-rows-3 h-[800px] gap-8 ">
        <div className=" relative row-span-3 transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105">
          <img
            src="./src/assets/odontologia.jpg"
            alt=""
            className="h-full w-full object-cover "
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
            <Typography
              variant="h5"
              color="white"
              className="mb-4 text-4xl text-center font-medium"
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
              className="mb-4 text-4xl text-center font-medium"
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
              className="mb-4 text-4xl text-center font-medium"
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
              className="mb-4 text-4xl text-center font-medium"
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
              className="mb-4 text-4xl text-center font-medium"
            >
              Instituciones
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
