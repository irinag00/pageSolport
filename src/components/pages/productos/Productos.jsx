import { Button, Typography, Spinner } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { getCategories } from "../../../services/apiCategories";
import { getProducts } from "../../../services/apiProducts";
import ProductGrid from "../../common/ProductGrid/ProductGrid";
import { Link, useNavigate, useParams } from "react-router-dom";
import ContactoFooter from "../../common/Sections/ContactoSection/ContactoFooter";

function NavList({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { category: selectedCategory } = useParams();

  const fetchCategories = async () => {
    const response = await getCategories();
    setCategories(response);
  };

  const handleCategoryClick = (title) => {
    if (title.toLowerCase() === "deportes") {
      window.location.href = "https://qors.com.ar/";
    } else {
      if (onSelectCategory) {
        onSelectCategory(title.toLowerCase());
      } else {
        navigate(`/irinagorlino/productos/${title.toLowerCase()}`);
      }
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      <Typography
        as="li"
        color="white"
        className={`p-2 font-medium text-xl cursor-pointer hover:text-yellowSol transition-colors ${
          !selectedCategory ? "text-yellowSol cursor-pointer" : "text-white"
        }`}
        onClick={() => navigate("/irinagorlino/productos")}
      >
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="frontend/dist/todos-category-web.png"
            alt=""
            className={`w-[85px] h-[85px] bg-yellowSol/80 rounded-tl-[30px] rounded-tr-lg rounded-b-lg rounded-br-[30px] overflow-visible object-cover hover:shadow-md transition-colors hover:shadow-yellowSol/30 ${
              !selectedCategory ? "shadow-lg shadow-yellowSol/30" : ""
            }`}
          />
          <Typography className="flex items-center  text-xl font-semibold">
            TODOS
          </Typography>
        </div>
      </Typography>
      {categories.map((item) => {
        const isSelected = selectedCategory === item.title.toLowerCase();
        return (
          <Typography
            key={item.id}
            as="li"
            color="white"
            className={`p-2 font-medium text-xl cursor-pointer hover:text-yellowSol transition-colors ${
              isSelected ? "text-yellowSol cursor-pointer" : ""
            }`}
            onClick={() => handleCategoryClick(item.title)}
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                src={item.img}
                alt=""
                className={`w-[85px] h-[85px] bg-yellowSol/80 rounded-tl-[30px] rounded-tr-lg rounded-b-lg rounded-br-[30px] overflow-visible object-cover hover:shadow-md transition-colors hover:shadow-yellowSol/30 ${
                  isSelected ? "shadow-lg shadow-yellowSol/30" : ""
                }`}
              />
              <Typography className="flex items-center  text-xl font-semibold">
                {item.title.toUpperCase()}
              </Typography>
            </div>
          </Typography>
        );
      })}
    </ul>
  );
}

const Productos = () => {
  const [openNav, setOpenNav] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { category } = useParams();

  const fetchProducts = async () => {
    const response = await getProducts();
    setProducts(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (category) {
      const filtered = products.filter(
        (product) =>
          product.category.title.toLowerCase() === category.toLowerCase()
      );
      console.log(filtered);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="md:mt-20 mt-10">
      <div>
        <Typography className="text-semibold text-center text-white md:text-2xl text-xl font-bold ">
          NUESTROS
        </Typography>
        <Typography className="text-semibold text-center text-yellowSol md:text-6xl text-4xl font-bold">
          Productos
        </Typography>
      </div>
      <Navbar className="bg-blackSol border-none shadow-none mx-auto px-6 py-3 mt-6">
        <div className="flex items-center justify-center">
          <div className="hidden lg:block">
            <NavList />
          </div>
          <Button
            variant="text"
            className="text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            <Typography className="flex items-center gap-6">
              Ver todas las categorías
              <MdOutlineKeyboardArrowDown className="h-8 w-8" />
            </Typography>
          </Button>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
      {loading ? (
        <div className="flex justify-center items-center w-full my-12 mb-20">
          <Spinner color="yellow" className="h-10 w-10" />
        </div>
      ) : (
        <div className="flex items-center justify-center mb-16">
          <ProductGrid products={filteredProducts} />
        </div>
      )}
      <ContactoFooter />
    </div>
  );
};

export default Productos;
