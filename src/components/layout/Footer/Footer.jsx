import { Typography, IconButton } from "@material-tailwind/react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-12">
      <footer className=" w-full bg-yellowSol p-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-yellowSol text-center md:justify-between lg:mx-28">
          <img
            src="frontend/dist/SOLSPORT VERTICAL - NEGRA.svg"
            alt="logo-solsportnegro"
            className="md:w-56 w-36"
          />
          <ul className="flex flex-col flex-wrap md:items-end gap-y-2 gap-x-8">
            <Typography className="font-bold mb-4 text-lg">
              Datos de Contacto
            </Typography>
            <li>
              <Typography color="black" className="font-normal">
                <span className="font-bold">Dirección: </span> Bv. 25 de Mayo
                850 (1er. Piso)
              </Typography>
            </li>
            <li>
              <Typography color="black" className="font-normal">
                <span className="font-bold">Localidad: </span> Devoto, Córdoba
              </Typography>
            </li>
            <li>
              <Typography color="black" className="font-normal">
                <span className="font-bold">Teléfono: </span> (+54) 3564 482356
                - Int. 109
              </Typography>
            </li>
            <li>
              <Typography color="black" className="font-normal">
                <span className="font-bold">Email: </span>{" "}
                solsportindumentaria@gmail.com
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-black lg:mx-28" />
        <div className="flex flex-row justify-center gap-2 sm:justify-between lg:mx-28 mb-6">
          <Typography color="black" className=" font-normal">
            &copy; 2024 SOLSPORT
          </Typography>
          <div>
            <a
              href="https://www.facebook.com/SolsportDevoto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className="rounded-full bg-black hover:shadow-yellowSol/20 focus:shadow-yellowSol/20 active:shadow-yellowSol/10 mr-2">
                <FaFacebookF className="text-yellowSol text-lg" />
              </IconButton>
            </a>
            <a
              href="https://www.instagram.com/solsportdevoto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className="rounded-full bg-black hover:shadow-yellowSol/20 focus:shadow-yellowSol/20 active:shadow-yellowSol/10">
                <FaInstagram className="text-yellowSol text-lg" />
              </IconButton>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
