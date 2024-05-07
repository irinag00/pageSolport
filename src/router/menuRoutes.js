import Home from "../components/pages/home/Home";
import Servicios from "../components/pages/servicios/Servicios";
import Materiales from "../components/pages/materiales/Materiales";
import Productos from "../components/pages/productos/Productos";
import Nosotros from "../components/pages/nosotros/Nosotros";
import Contacto from "../components/pages/contacto/Contacto";
import PageNotFound from "../components/pages/notFound/PageNotFound";
import HomeAdministrator from "../components/pages/administrador/HomeAdministrator";
import Login from "../components/pages/administrador/Login";
export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "nosotros",
    path: "/nosotros",
    Element: Nosotros,
  },
  {
    id: "servicios",
    path: "/servicios",
    Element: Servicios,
  },
  {
    id: "materiales",
    path: "/materiales",
    Element: Materiales,
  },
  {
    id: "productos",
    path: "/productos",
    Element: Productos,
  },
  {
    id: "contacto",
    path: "/contacto",
    Element: Contacto,
  },
  {
    id: "not found",
    path: "*",
    Element: PageNotFound,
  },
  // {
  //   id: "admin",
  //   path: "/admin",
  //   Element: Login,
  // },
];
