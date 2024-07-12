import CategoriasPanel from "../components/pages/administrador/CategoriasPanel";
import ClientesPanel from "../components/pages/administrador/ClientesPanel";
import HomePanel from "../components/pages/administrador/HomePanel";
import MaterialesPanel from "../components/pages/administrador/MaterialesPanel";
import ProductosPanel from "../components/pages/administrador/ProductosPanel";
import ServiciosPanel from "../components/pages/administrador/ServiciosPanel";

export const routesAdmin = [
  {
    id: "homePanel",
    path: "/irinagorlino/admin/home",
    Element: HomePanel,
  },
  {
    id: "categoriasPanel",
    path: "/irinagorlino/admin/categorias",
    Element: CategoriasPanel,
  },
  {
    id: "serviciosPanel",
    path: "/irinagorlino/admin/servicios",
    Element: ServiciosPanel,
  },
  {
    id: "materialesPanel",
    path: "/irinagorlino/admin/materiales",
    Element: MaterialesPanel,
  },
  {
    id: "clientesPanel",
    path: "/irinagorlino/admin/clientes",
    Element: ClientesPanel,
  },
  {
    id: "productosPanel",
    path: "/irinagorlino/admin/productos",
    Element: ProductosPanel,
  },
];
