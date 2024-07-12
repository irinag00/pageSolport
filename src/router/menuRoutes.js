import Home from "../components/pages/home/Home";
import Servicios from "../components/pages/servicios/Servicios";
import Materiales from "../components/pages/materiales/Materiales";
import Productos from "../components/pages/productos/Productos";
import Nosotros from "../components/pages/nosotros/Nosotros";
import Contacto from "../components/pages/contacto/Contacto";
import PageNotFound from "../components/pages/notFound/PageNotFound";
import HomeAdministrator from "../components/pages/administrador/HomePanel";
import Login from "../components/pages/administrador/Login";
export const routes = [
  {
    id: "home",
    path: "/irinagorlino",
    Element: Home,
  },
  {
    id: "nosotros",
    path: "/irinagorlino/nosotros",
    Element: Nosotros,
  },
  {
    id: "servicios",
    path: "/irinagorlino/servicios",
    Element: Servicios,
  },
  {
    id: "materiales",
    path: "/irinagorlino/materiales",
    Element: Materiales,
  },
  {
    id: "productos",
    path: "/irinagorlino/productos",
    Element: Productos,
  },
  {
    id: "categorias",
    path: "/irinagorlino/productos/:category",
    Element: Productos,
  },
  {
    id: "contacto",
    path: "/irinagorlino/contacto",
    Element: Contacto,
  },
  {
    id: "not found",
    path: "*",
    Element: PageNotFound,
  },
];
