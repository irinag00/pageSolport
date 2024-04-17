import { Routes, Route } from "react-router-dom";
import { routes } from "./menuRoutes";
import { Layout } from "../components/layout/Layout";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageNotFound from "../components/pages/notFound/PageNotFound";

const AppRouter = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Desplazar a la parte superior de la página en cada cambio de ruta
    }, [pathname]);

    return null;
  }
  return (
    <Routes>
      {ScrollToTop()}
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => {
          return <Route key={id} path={path} element={<Element />} />;
        })}
      </Route>
    </Routes>
  );
};

export default AppRouter;
