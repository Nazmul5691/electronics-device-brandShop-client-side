import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const ProductsData = () => {
  const allProducts = useLoaderData();

  return (
    <div className="md:m-20 m-8">

        <div className="grid grid-cols-1">
        {
            allProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
        }
        </div>
    </div>
  );
};

export default ProductsData;
