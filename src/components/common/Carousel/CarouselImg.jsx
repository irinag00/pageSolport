import { Carousel, Typography } from "@material-tailwind/react";
import { useState, useRef, useEffect } from "react";

export function CarouselTransition() {
  return (
    <section className="rounded-xl">
      <div className="w-full h-full">
        <img
          src="frontend/dist/BANNER-NUEVO.jpg"
          alt="image 1"
          className="w-full h-full xl:mt-11 md:mt-6 mt-3.5 object-cover object-bottom"
        />
      </div>
    </section>
  );
}
