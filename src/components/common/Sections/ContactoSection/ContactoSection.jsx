import { Typography, Input, Textarea, Button } from "@material-tailwind/react";

const ContactoSection = () => {
  return (
    <div className="w-full h-full my-12">
      <Typography className="text-semibold text-center text-yellowSol text-3xl font-bold overflow-hidden">
        CONTÁCTANOS
      </Typography>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-8 mx-8 gap-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d851.3207171902116!2d-62.30395443034727!3d-31.406331698391682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cb322e7d93034f%3A0xe32915373056baa5!2sBv.%2025%20de%20Mayo%20850%2C%20Devoto%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1712772819555!5m2!1ses!2sar"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="overflow-hidden w-full h-full rounded-lg"
        ></iframe>
        <div>
          <form action="" className="flex flex-col gap-8">
            <div className=" flex flex-row gap-8 ">
              <Input
                size="lg"
                placeholder="Nombre"
                labelProps={{
                  className: "hidden",
                }}
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-black placeholder:opacity-100 focus:!border-yellowSol focus:!border-t-yellowSol focus:ring-yellowSol/20 py-6 placeholder:text-lg sm:mb-8"
              ></Input>
              <Input
                size="lg"
                placeholder="Apellido"
                labelProps={{
                  className: "hidden",
                }}
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-black placeholder:opacity-100 focus:!border-yellowSol focus:!border-t-yellowSol focus:ring-yellowSol/20 py-6 placeholder:text-lg"
              ></Input>
            </div>
            <Input
              size="lg"
              placeholder="Asunto"
              labelProps={{
                className: "hidden",
              }}
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-black placeholder:opacity-100 focus:!border-yellowSol focus:!border-t-yellowSol focus:ring-yellowSol/20 py-6 placeholder:text-lg "
            ></Input>
            <div className="">
              <Textarea
                size="lg"
                placeholder="Mensaje"
                labelProps={{
                  className: "hidden",
                }}
                rows={12}
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-black placeholder:opacity-100 focus:!border-yellowSol focus:!border-t-yellowSol focus:ring-yellowSol/20 placeholder:text-lg"
              ></Textarea>
              <Button
                fullWidth
                ripple={false}
                className=" p-4 rounded-lg bg-yellowSol text-base text-black mt-6"
              >
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactoSection;
