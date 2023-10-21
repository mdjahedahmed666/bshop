import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, brandName, type, price, photo, rating } = product;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const rating = form.rating.value;

    const updatedProduct = { name, brandName, type, price, photo, rating };

    //send data to the server
    fetch(`https://server-iul79kjuo-mdjahedahmed12-gmailcom.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Product is updated successfully",
            confirmButtonText: "Cool",
          });
          // Reset the form input fields
          form.reset();
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-[#F4F3F0]">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mt-10 font-rancho">
            Update Product
          </h1>
          <p className="text-lg mt-2 font-raleway">
            Be careful! Put right information
          </p>
        </div>
        <div className="w-full lg:w-[600px] shadow-sm bg-base-100 p-10">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="form-control">
              <label className="label">
                <span className="text-base">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                required
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-base">Brand Name</span>
              </label>
              <input
                type="text"
                name="brandName"
                defaultValue={brandName}
                required
                placeholder="brand name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-base">Type</span>
              </label>
              <input
                type="text"
                name="type"
                required
                defaultValue={type}
                placeholder="type"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-base">Price</span>
              </label>
              <input
                type="text"
                name="price"
                required
                defaultValue={price}
                placeholder="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-base">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                required
                defaultValue={photo}
                placeholder="photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-base">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                required
                defaultValue={rating}
                placeholder="rating"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline btn-[#331A15]">
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
