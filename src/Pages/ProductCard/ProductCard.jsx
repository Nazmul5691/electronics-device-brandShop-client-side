/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { _id, name, quantity, type, price, brandsName, details, rating, photo } = product;

    return (



        <div className="card lg:card-side bg-base-100 md:h-[400px] my-8 shadow-xl">
             <figure><img className="h-full w-[550px]" src={photo} alt="" /></figure>
        
             <div className="card-body">
          <h2 className="card-title font-bold">Product Name: {name}</h2>
          <h2 className="font-bold">Brand Name: {brandsName}</h2>
          <h2>Type: {type}</h2>
          <h2>Price: {price}</h2>
          <h2>Rating: {rating}</h2>
          <p className="text-lg">{details}</p>
          <Link to={`/viewDetails/${_id}`}>
            <button className="btn btn-primary w-[153px]">View Details</button>
          </Link>
          <Link to={`/updateProduct/${_id}`}>
            <button className="btn btn-primary">Update Product</button>
          </Link>
        </div>
        </div>


        

    );
};

export default ProductCard;
