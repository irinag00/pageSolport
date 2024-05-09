import CategoriasPanel from "../components/pages/administrador/CategoriasPanel";
import ClientesPanel from "../components/pages/administrador/ClientesPanel";
import HomePanel from "../components/pages/administrador/HomePanel";
import MaterialesPanel from "../components/pages/administrador/MaterialesPanel";
import ServiciosPanel from "../components/pages/administrador/ServiciosPanel";

export const routesAdmin = [
  {
    id: "homePanel",
    path: "/admin/home",
    Element: HomePanel,
  },
  {
    id: "categoriasPanel",
    path: "/admin/categorias",
    Element: CategoriasPanel,
  },
  {
    id: "serviciosPanel",
    path: "/admin/servicios",
    Element: ServiciosPanel,
  },
  {
    id: "materialesPanel",
    path: "/admin/materiales",
    Element: MaterialesPanel,
  },
  {
    id: "clientesPanel",
    path: "/admin/clientes",
    Element: ClientesPanel,
  },
];
