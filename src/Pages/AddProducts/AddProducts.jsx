import  { useState } from 'react';
import Swal from 'sweetalert2';

const AddProducts = () => {
  const [selectedRating, setSelectedRating] = useState(1);

  const handleAddProducts = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const type = form.type.value;
    const price = form.price.value;
    const brandsName = form.brandsName.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newProduct = { name, quantity, type, price, brandsName, details, rating: selectedRating, photo };
    console.log(newProduct);

    //send data to the server
    fetch('https://brand-shop-server-4wdfw8v0z-nazmuls-projects-da750e87.vercel.app/addProduct', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Product added successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div className="bg-gray-300 p-24">
      <h2 className="text-3xl font-extrabold">Add Product</h2>
      <form onSubmit={handleAddProducts}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Product Name" name="name" className="input input-bordered w-full" />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Type" name="type" className="input input-bordered w-full" />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">BrandsName</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="BrandsName" name="brandsName" className="input input-bordered w-full" />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Details" name="details" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <div className="rating input input-bordered w-full">
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
              <input type="text" placeholder="Photo url" name="photo" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        <input type="submit" value="Add Product" className="bg-slate-800 text-white hover:bg-slate-600 btn btn-block" />
      </form>
    </div>
  );
};

export default AddProducts;
