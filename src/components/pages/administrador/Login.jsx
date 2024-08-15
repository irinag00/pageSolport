import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useAuth } from "../../../auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import PrivateRoute from "../../../auth/PrivateRoute";

const Login = () => {
  const [usernameAdmin, setUsernameAdmin] = useState("");
  const [passwordAdmin, setPasswordAdmin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token, isToken] = useState(localStorage.getItem("token"));
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (usernameAdmin !== "" && passwordAdmin !== "") {
        const data = await login(usernameAdmin, passwordAdmin);
        if (data.user.username === usernameAdmin) {
          navigate("/admin/home");
        }
      }
    } catch (error) {
      if (error.message === "Invalid credentials") {
        setError("El usuario o contraseña ingresado es incorrecto");
      }
    }
  };
  return (
    <div className="">
      <Card
        shadow={false}
        className="flex justify-center items-center bg-transparent h-full mt-20"
      >
        <Link to="/">
          <img src="/S AMARILLA.svg" alt="" className="w-28 h-28 mb-4" />
        </Link>

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
              className={
                error !== null
                  ? `!border-red-500 focus:!border-red-500 bg-white`
                  : `!border-t-blue-gray-200 focus:!border-t-gray-900 bg-white`
              }
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
              className={
                error
                  ? `!border-red-500 focus:!border-red-500 bg-white`
                  : `!border-t-blue-gray-200 focus:!border-t-gray-900 bg-white`
              }
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={passwordAdmin}
              onChange={(e) => setPasswordAdmin(e.target.value)}
            />
            <Typography variant="h6" color="red" className="-mb-3 text-center">
              <span>{error}</span>
            </Typography>
          </div>
          <Button
            type="submit"
            className="mt-6 bg-yellowSol text-base text-black flex justify-center"
            fullWidth
            loading={isLoading ? true : false}
          >
            Iniciar Sesión
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
