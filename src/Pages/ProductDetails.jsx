import { useState, useEffect } from "react";
import { ProductContent, ProductImage } from "../components";
import { fetchProductDetails } from "../api";
import { api } from "../conf";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductDetails(id);
        setProduct(data);
        setCurrentImage(data.images[0]);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {product ? (
        <div className="flex flex-row gap-4 justify-start h-full mt-2 rounded p-2">
          <div className="w-full">
            <div className="flex w-full h-full bg-white ">
              <ProductImage
                images={product.images}
                current={currentImage}
                onSetCurrent={setCurrentImage}
              />
            </div>
          </div>
          <ProductContent product={product} />
        </div>
      ) : null}
    </>
  );
}

export default ProductDetails;
