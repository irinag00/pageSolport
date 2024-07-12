import { Carousel, Typography } from "@material-tailwind/react";
import { useState, useRef, useEffect } from "react";

export function CarouselTransition() {
  return (
    <section className="rounded-xl overflow-hidden">
      <div className="xl:h-screen h-full w-full">
        <img
          src="frontend/dist/BANNER-NUEVO.png"
          alt="image 1"
          className="xl:pb-10 h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
