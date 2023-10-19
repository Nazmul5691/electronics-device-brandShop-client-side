/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';


const UpdateProduct = () => {

    const product = useLoaderData()

    const { _id, name, quantity, type, price, brandsName, details, rating, photo } = product;

    const [selectedRating, setSelectedRating] = useState(4);

    const handleUpdateProduct = (event) => {
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const type = form.type.value;
        const price = form.price.value;
        const brandsName = form.brandsName.value;
        const details = form.details.value;
        const photo = form.photo.value;
    
        const updatedProduct = { name, quantity, type, price, brandsName, details, rating: selectedRating, photo };
        // console.log(updatedProduct);
    
        //send data to the server
        fetch(`http://localhost:5001/addProduct/${_id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(updatedProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              Swal.fire({
                title: 'Success!',
                text: 'Product Updated successfully',
                icon: 'success',
                confirmButtonText: 'Cool',
              });
            }
          });
      };
    

    return (
        <div className="bg-gray-300 p-24">
      <h2 className="text-3xl font-extrabold">Update Product : {name}</h2>
      <form onSubmit={handleUpdateProduct}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Product Name" defaultValue={name} name="name" className="input input-bordered w-full" />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Available Quantity" defaultValue={quantity} name="quantity" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Type" defaultValue={type} name="type" className="input input-bordered w-full" />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Price" defaultValue={price} name="price" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">BrandsName</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="BrandsName" defaultValue={brandsName} name="brandsName" className="input input-bordered w-full" />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Details" defaultValue={details} name="details" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <div className="rating input input-bordered w-full" defaultValue={rating}>
                <input type="radio" name="rating-1" className="mask mask-star mt-3" value="1" checked={selectedRating === 1} onChange={() => setSelectedRating(1)} />
                <input type="radio" name="rating-1" className="mask mask-star mt-3" value="2" checked={selectedRating === 2} onChange={() => setSelectedRating(2)} />
                <input type="radio" name="rating-1" className="mask mask-star mt-3" value="3" checked={selectedRating === 3} onChange={() => setSelectedRating(3)} />
                <input type="radio" name="rating-1" className="mask mask-star mt-3" value="4" checked={selectedRating === 4} onChange={() => setSelectedRating(4)} />
                <input type="radio" name="rating-1" className="mask mask-star mt-3" value="5" checked={selectedRating === 5} onChange={() => setSelectedRating(5)} />
              </div>
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Photo url</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Photo url" defaultValue={photo} name="photo" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        <input type="submit" value="Update Product" className="bg-slate-800 text-white hover:bg-slate-600 btn btn-block" />
      </form>
    </div>
    );
};

export default UpdateProduct;