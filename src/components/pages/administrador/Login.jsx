import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [usernameAdmin, setUsernameAdmin] = useState("");
  const [passwordAdmin, setPasswordAdmin] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (usernameAdmin !== "" && passwordAdmin !== "") {
        console.log(usernameAdmin);
        console.log(passwordAdmin);
        window.location.href = "/admin/home";
      }
    } catch (error) {}
  };
  return (
    <div className="">
      <Card
        shadow={false}
        className="flex justify-center items-center bg-transparent h-full mt-20"
      >
        <img
          src="./src/assets/S AMARILLA.svg"
          alt=""
          className="w-28 h-28 mb-4"
        />
        <Typography variant="h4" className="text-yellowSol">
          Administrador
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              Usuario
            </Typography>
            <Input
              type="text"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={usernameAdmin}
              onChange={(e) => setUsernameAdmin(e.target.value)}
            />
            <Typography variant="h6" color="white" className="-mb-3">
              Contraseña
            </Typography>
            <Input
              type="password"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={passwordAdmin}
              onChange={(e) => setPasswordAdmin(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="mt-6 bg-yellowSol text-base text-black"
            fullWidth
          >
            Iniciar Sesión
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
