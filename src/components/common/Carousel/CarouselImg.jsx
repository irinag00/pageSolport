import { Carousel, Typography } from "@material-tailwind/react";
import { useState, useRef, useEffect } from "react";

export function CarouselTransition() {
  return (
    <section className="rounded-xl overflow-hidden">
      <div className="xl:h-screen h-full w-full">
        <img
<<<<<<< HEAD
          src="frontend/dist/BANNER-NUEVO.png"
=======
          src="./BANNER-NUEVO.png"
>>>>>>> main
          alt="image 1"
          className="h-full w-full object-cover object-bottom"
        />
      </div>
    </section>
  );
}
