import Home from "../components/pages/home/Home";
import Servicios from "../components/pages/servicios/Servicios";
import Materiales from "../components/pages/materiales/Materiales";
import Productos from "../components/pages/productos/Productos";
import Nosotros from "../components/pages/nosotros/Nosotros";
import Contacto from "../components/pages/contacto/Contacto";
export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
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
    id: "nosotros",
    path: "/nosotros",
    Element: Nosotros,
  },
  {
    id: "contacto",
    path: "/contacto",
    Element: Contacto,
  },
];
