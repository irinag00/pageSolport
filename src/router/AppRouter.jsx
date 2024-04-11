import { Routes, Route } from "react-router-dom";
import { routes } from "./menuRoutes";
import { Layout } from "../components/layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => {
          return <Route key={id} path={path} element={<Element />} />;
        })}
      </Route>
      <Route path="*" element={<h1> 404 Not Found</h1>} />
    </Routes>
  );
};

export default AppRouter;
