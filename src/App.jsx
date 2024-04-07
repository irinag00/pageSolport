import { useState } from "react";
import { Button } from "@material-tailwind/react";
import "./App.css";
import { NavbarSimple } from "./components/layout/Navbar/Navbar";
import { CarouselTransition } from "./components/common/Carousel/CarouselImg";
import Home from "./components/pages/home/Home";
import ButtonWhatsapp from "./components/common/ButtonWsp/ButtonWhatsapp";
import ProductsSection from "./components/common/ProductsSection/ProductsSection";

function App() {
  return (
    <>
      <Home />
      <ButtonWhatsapp />
      <ProductsSection />
    </>
  );
}

export default App;
