import { Fragment, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Product, ProductFilter } from "../components";
import { fetchProductsByCategory, fetchProducts } from "../api";
import { Loading } from "../assets/icons";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const result = await fetchProducts();
        setProducts(result.products);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getAllProducts();
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getProductsByCategory = async (category) => {
    if (category) {
      const products = await fetchProductsByCategory(category);
      console.log(products.products);
      setLoading(false);
      setProducts(products.products);
    } else {
      const products = await fetchProducts();
      console.log(products.products);
      setLoading(false);
      setProducts(products.products);
    }
  };

  return (
    <>
      <div className="w-full flex justify-between pt-2 pb-2">
        <ProductFilter
          selectedCategory={selectedCategory}
          onSetSelectedCategory={setSelectedCategory}
          getProductsByCategory={getProductsByCategory}
        />
      </div>
      {loading ? (
        <div className="flex w-full justify-center items-center">
          <Loading />
        </div>
      ) : (
        products.map((product) => (
          <Fragment key={product.id}>
            <Product product={product} />
          </Fragment>
        ))
      )}
    </>
  );
}

export default Products;
