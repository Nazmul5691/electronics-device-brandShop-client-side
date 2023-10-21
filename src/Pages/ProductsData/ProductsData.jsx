
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import NoDataPage from "../NoDataPage/NoDataPage";


const ProductsData = () => {
    const { brandsName } = useParams();
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://brand-shop-server-4wdfw8v0z-nazmuls-projects-da750e87.vercel.app/productsData/${brandsName}`);
                if (response.ok) {
                    const data = await response.json();
                    
                    setProducts(data);
                }
            } catch (error) {
                // Handle errors, e.g., display an error message
            }
        };

        fetchData();
    }, [brandsName]);

    return (
        <div>

            <h2 className="text-center text-4xl my-5">Products of {brandsName}</h2>
          
   
    {/*  */}
            {
              products.length > 0  ? (
                <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div> 
              ) : (
                <NoDataPage></NoDataPage>
              )
            }
        </div>
    );
};

export default ProductsData;


