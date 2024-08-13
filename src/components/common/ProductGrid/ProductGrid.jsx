import { Typography } from "@material-tailwind/react";
import React from "react";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:mx-20 mx-6 mt-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative group bg-gray-800 rounded-md flex items-center"
        >
          <div className="">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-auto max-w-full md:w-[550px] md:h-[550px] object-contain rounded-lg"
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-md"></div>
          <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-white">
              <Typography className="text-2xl font-bold">
                {product.title}
              </Typography>
              <p className="text-md">{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
