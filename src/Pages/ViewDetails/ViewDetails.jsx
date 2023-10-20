/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link, useLoaderData } from "react-router-dom";



const ViewDetails = () => {

    
    const product = useLoaderData()

    const { _id, name, quantity, type, price, brandsName, details, rating, photo } = product;

    return (
        <div className="card card-side bg-base-300 h-[400px] my-10 shadow-xl hover:cursor-pointer">
            <figure>
                <img className="h-full w-[550px]" src={photo} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">Product Name: {name}</h2>
                <h2 className="font-bold">Brand Name : {brandsName}</h2>
                <h2>Type : {type}</h2>
                <h2>Price : {price}</h2>
                <h2>Rating : {rating}</h2>
                <p className="text-lg">{details}</p>

                <Link to={'/myCart'}>
                    <button className="btn btn-primary">Add To Cart</button>
                </Link>
                
            </div>

        </div>
    );
};

export default ViewDetails;