import { Carousel, Typography } from "@material-tailwind/react";

export function CarouselTransition() {
  return (
    <Carousel className="rounded-xl lg:h-[780px] sm:h-[400px] md:h-[400px] overflow-hidden">
      <div className="relative h-full w-full">
        <img
          src="./src/assets/egresados.jpg"
          alt="image 1"
          className=" h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/60 text-start">
          <div className="pl-12 sm:2/5 md:w-2/5 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-5xl md:text-7xl lg:text-8xl hidden sm:block"
            >
              NUESTROS
            </Typography>
            <Typography
              variant="paragraph"
              color="white"
              className="mb-4 ml-10 text-5xl md:text-7xl lg:text-8xl hidden sm:block italic"
            >
              EGRESADOS
            </Typography>
          </div>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

//transition={{ duration: 2 }}
