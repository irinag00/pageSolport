import ButtonWhatsapp from "../common/ButtonWsp/ButtonWhatsapp";
import Footer from "./Footer/Footer";
import { NavbarSimple } from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <div>
      <div style={{ height: "5vh" }}>
        <NavbarSimple />
      </div>
      <div style={{ minHeight: "75vh" }}>
        <Outlet />
      </div>
      <div style={{ height: "20vh" }}>
        <Footer />
      </div>
      <ButtonWhatsapp />
    </div>
  );
};
