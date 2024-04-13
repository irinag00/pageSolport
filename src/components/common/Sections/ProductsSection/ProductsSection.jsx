import { Typography } from "@material-tailwind/react";
const ProductsSection = () => {
  return (
    <section>
      <div className="mb-12 mt-16 mx-16">
        <div className="grid columns-[2rem] lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 lg:h-[800px] gap-8 justify-items-stretch">
          <div className=" w-full relative md:row-span-3 md:col-span-1 transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105">
            <img
              src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937505/solsport/products/odontologia_fe4hul.jpg"
              alt=""
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-4xl md:text-3xl text-center font-medium mx-auto"
              >
                Empresas
              </Typography>
            </div>
          </div>
          <div className="relative lg:col-span-2 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:scale-105">
            <img
              src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937513/solsport/products/botinero_gzrqqp.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-4xl md:text-3xl text-center font-medium mx-auto"
              >
                Accesorios
              </Typography>
            </div>
          </div>
          <div className="relative  transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105">
            <img
              src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937512/solsport/products/barreiro-chb_dmfynu.jpg"
              alt=""
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-4xl md:text-3xl text-center font-medium mx-auto"
              >
                Escolares
              </Typography>
            </div>
          </div>
          <div className="relative md:row-span-2 transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105">
            <img
              src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937515/solsport/products/camp-trini_cijgwv.jpg"
              alt=""
              className="h-full w-full object-cover md:object-center object-top"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-4xl md:text-3xl text-center font-medium mx-auto"
              >
                Egresados
              </Typography>
            </div>
          </div>
          <div className="relative transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105">
            <img
              src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1712937514/solsport/products/camperon-bomberos-freyre_qw48io.jpg"
              alt=""
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-4xl md:text-3xl text-center font-medium mx-auto"
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
