import { Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCategories } from "../../../../services/apiCategories";
const ProductsSection = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      // Filtrar las categorías para excluir "Deportes"
      const filteredCategories = response.filter(
        (category) => category.title.toLowerCase() !== "deportes"
      );
      setCategories(filteredCategories);
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/productos/${category}`);
  };

  const getCategoryImage = (title) => {
    const category = categories.find(
      (category) => category.title.toLowerCase() === title.toLowerCase()
    );
    return category ? category.img : "";
  };

  return (
    <section>
      <div className="mb-12 mt-16 mx-20">
        <div className="grid columns-[2rem] lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 lg:h-[800px] gap-8 justify-items-stretch overflow-hidden">
          <div
            className=" w-full relative md:row-span-3 md:col-span-1 transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105"
            onClick={() => handleCategoryClick("empresas")}
          >
            <img
              src={getCategoryImage("empresas")}
              alt="categoria empresas"
              className=" md:h-full sm:h-[300px] h-[200px] w-full lg:object-cover md:object-center object-contain"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-4xl md:text-3xl text-center font-bold mx-auto"
              >
                EMPRESAS
              </Typography>
            </div>
          </div>
          <div
            className="relative lg:col-span-2 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:scale-105 lg:flex "
            onClick={() => handleCategoryClick("accesorios")}
          >
            <img
              src={getCategoryImage("accesorios")}
              alt="categoria accesorios"
              className="md:h-full sm:h-[300px] h-[200px] w-full object-contain scale-110"
            />
            <img
              src={getCategoryImage("accesorios")}
              alt="categoria accesorios"
              className="md:h-full sm:h-[300px] h-[200px] w-full object-contain scale-110 lg:flex hidden"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-4xl md:text-3xl text-center font-bold mx-auto"
              >
                ACCESORIOS
              </Typography>
            </div>
          </div>
          <div
            className="relative  transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105"
            onClick={() => handleCategoryClick("escolares")}
          >
            <img
              src={getCategoryImage("escolares")}
              alt="categoria escolares"
              className="md:h-full sm:h-[300px] h-[200px] w-full object-contain scale-110"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-4xl md:text-3xl text-center font-bold mx-auto"
              >
                ESCOLARES
              </Typography>
            </div>
          </div>
          <div
            className="relative md:row-span-2 transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105"
            onClick={() => handleCategoryClick("egresados")}
          >
            <img
              src={getCategoryImage("egresados")}
              alt="categoria egresados"
              className="md:h-full sm:h-[300px] h-[200px] w-full object-contain md:object-center object-top scale-110"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-4xl md:text-3xl text-center font-bold mx-auto"
              >
                EGRESADOS
              </Typography>
            </div>
          </div>
          <div
            className="relative transition-all duration-300 cursor-pointer hover:-translate-y-0.4 hover:scale-105"
            onClick={() => handleCategoryClick("instituciones")}
          >
            <img
              src={getCategoryImage("instituciones")}
              alt="categoria instituciones"
              className="md:h-full sm:h-[300px] h-[200px] w-full object-contain scale-110"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/30 text-start">
              <Typography
                variant="h5"
                color="white"
                className="mb-4 lg:text-4xl md:text-3xl text-center font-bold mx-auto"
              >
                INSTITUCIONES
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
