
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
                const response = await fetch(`https://brand-shop-server-lake.vercel.app/productsData/${brandsName}`);
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
            
        <div className="carousel w-full my-10">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/gRwwBh9/s1.jpg" className="w-full h-[350px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/VpqHvYy/s2.jpg" className="w-full h-[350px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/0rqyJwD/s3.jpg" className="w-full h-[350px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/jfsz5nG/s4.jpg" className="w-full h-[350px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
   
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


