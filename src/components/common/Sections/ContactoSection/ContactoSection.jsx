import { Typography, Input, Textarea, Button } from "@material-tailwind/react";
import "./contactoSection.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import Swal from "sweetalert2";

const ContactoSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_dac10q2", //service id
        "template_7a72vgw", //template id
        formData,
        "Z4Xb4r3lmmFdwe3do" //user id
      )
      .then((result) => {
        console.log(result.text);
        // sweet alert
        if (result.text === "OK") {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Mensaje enviado con éxito!",
          });
          setLoading(false);
        }
      }),
      (error) => {
        console.log(error.text);
        alert("Ocurrió un error al enviar el mensaje");
      };

    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <div className="w-full h-full my-12">
      <Typography className="text-semibold text-center text-yellowSol text-3xl font-bold overflow-hidden">
        CONTÁCTANOS
      </Typography>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-8 mx-8 gap-8">
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d851.3207171902116!2d-62.30395443034727!3d-31.406331698391682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cb322e7d93034f%3A0xe32915373056baa5!2sBv.%2025%20de%20Mayo%20850%2C%20Devoto%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1712772819555!5m2!1ses!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className=" w-full h-full rounded-lg"
          ></iframe>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className=" flex md:flex-row flex-col gap-8 ">
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                size="lg"
                placeholder="Nombre"
                labelProps={{
                  className: "hidden",
                }}
                required
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-black placeholder:opacity-100 focus:!border-yellowSol focus:!border-t-yellowSol focus:ring-yellowSol/20 py-6 placeholder:text-lg sm:mb-8 text-xl"
              ></Input>
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                size="lg"
                placeholder="Email"
                labelProps={{
                  className: "hidden",
                }}
                required
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-black placeholder:opacity-100 focus:!border-yellowSol focus:!border-t-yellowSol focus:ring-yellowSol/20 py-6 placeholder:text-lg text-xl"
              ></Input>
            </div>
            <Input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              size="lg"
              placeholder="Asunto"
              labelProps={{
                className: "hidden",
              }}
              required
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-black placeholder:opacity-100 focus:!border-yellowSol focus:!border-t-yellowSol focus:ring-yellowSol/20 py-6 placeholder:text-lg text-xl"
            ></Input>
            <div className="">
              <Textarea
                type="text"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                size="lg"
                placeholder="Mensaje"
                labelProps={{
                  className: "hidden",
                }}
                rows={12}
                required
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-black placeholder:opacity-100 focus:!border-yellowSol focus:!border-t-yellowSol focus:ring-yellowSol/20 placeholder:text-lg"
              ></Textarea>
              <Button
                fullWidth
                type="submit"
                ripple={false}
                loading={loading ? true : false}
                className=" p-4 rounded-lg bg-yellowSol text-base flex items-center justify-center text-black mt-6"
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
