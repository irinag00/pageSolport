import { useState } from "react";
import { Button } from "@material-tailwind/react";
import "./App.css";
import { NavbarSimple } from "./components/layout/Navbar/Navbar";
import { CarouselTransition } from "./components/common/Carousel/CarouselImg";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
