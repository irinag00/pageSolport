import { Routes, Route } from "react-router-dom";
import { routes } from "./menuRoutes";
import { Layout } from "../components/layout/Layout";
import PageNotFound from "../components/pages/notFound/PageNotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => {
          return <Route key={id} path={path} element={<Element />} />;
        })}
      </Route>
      {/* <Route path="*" element={<Layout />}>
        <Route element={<PageNotFound />} />
      </Route> */}
    </Routes>
  );
};

export default AppRouter;
