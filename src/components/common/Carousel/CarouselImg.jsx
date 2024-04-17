import { Carousel, Typography } from "@material-tailwind/react";
import { useState, useRef, useEffect } from "react";

export function CarouselTransition() {
  // const [isVisible, setIsVisible] = useState(false);
  // const componentRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const top = componentRef.current.getBoundingClientRect().top;
  //     const isVisible = top < window.innerHeight;
  //     setIsVisible(isVisible);
  //   };

  //   // Observador de la intersección para detectar la visibilidad del componente
  //   const observer = new IntersectionObserver(([entry]) => {
  //     setIsVisible(entry.isIntersecting);
  //   });

  //   observer.observe(componentRef.current);

  //   // Escucha del evento de scroll para actualizar la visibilidad del componente
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     observer.disconnect();
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isVisible]);
  return (
    <section className="rounded-xl overflow-hidden">
      <div className="h-full w-full pt-12">
        <img
          src="./src/assets/BANNER-WEB.png"
          alt="image 1"
          className=" h-full w-full object-contain"
        />
        {/* <div className="absolute inset-0 grid h-full w-full items-center bg-black/60 text-start">
          <div
            ref={componentRef}
            className="pl-12 sm:2/5 md:w-2/5 md:pl-20 lg:pl-32"
          >
            <Typography
              variant="h1"
              color="white"
              className={`mb-4 text-5xl md:text-7xl lg:text-8xl ${
                isVisible ? "animate-fade-in-y" : ""
              }`}
            >
              NUESTROS
            </Typography>
            <Typography
              variant="paragraph"
              color="white"
              className={`mb-4 ml-10 text-5xl md:text-7xl lg:text-8xl italic ${
                isVisible ? "animate-fade-in-y" : ""
              }`}
            >
              EGRESADOS
            </Typography>
          </div>
        </div> */}
      </div>
      {/* <div className="h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </div> */}
    </section>
  );
}
