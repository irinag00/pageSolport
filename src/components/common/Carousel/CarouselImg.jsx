import { Carousel, Typography } from "@material-tailwind/react";
import { useState, useRef, useEffect } from "react";

export function CarouselTransition() {
  return (
    <section className="rounded-xl">
      <div className="2xl:h-screen h-full w-full xl:mt-4">
        <img
          src="/BANNER-NUEVO.jpg"
          alt="image 1"
          className="h-full w-full object-cover object-bottom"
        />
      </div>
    </section>
  );
}
