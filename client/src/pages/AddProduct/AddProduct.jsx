import Swal from 'sweetalert2';

const AddProduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const photo = form.photo.value;
        const rating = form.rating.value;

        console.log(name, brandName, type, price, shortDescription, photo, rating);
        const newProduct = {name, brandName, type, price, shortDescription, photo, rating}

        //send data to the server
        fetch('bshopserv.vercel.app/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
              Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Product is added successfully',
                confirmButtonText: 'Cool'
              })
              // Reset the form input fields
        form.reset();
            }
           
        })

    };
  return (
    <div className="hero min-h-screen bg-[#F4F3F0]">
    <div className="hero-content flex-col">
      <div className="text-center">
        <h1 className="text-5xl font-bold mt-10 font-rancho">Add new Product</h1>
        <p className="text-lg mt-2 font-raleway">Be careful! Put right information</p>
      </div>
      <div className="w-full lg:w-[600px] shadow-smbg-base-100 p-10">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="form-control">
            <label className="label">
              <span className="text-base">Name</span>
            </label>
            <input type="text" name="name" required placeholder="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base">Brand Name</span>
            </label>
            <input type="text" name="brandName" required placeholder="brand name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base">Type</span>
            </label>
            <input type="text" name="type" required placeholder="type" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base">Price</span>
            </label>
            <input type="text" name="price" required placeholder="price" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base">Short description</span>
            </label>
            <input type="text" name="shortDescription" required placeholder="short description" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base">Photo URL</span>
            </label>
            <input type="text" name="photo" required placeholder="photo url" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base">Rating</span>
            </label>
            <input type="text" name="rating" required placeholder="rating" className="input input-bordered" />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline btn-[#331A15]">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default AddProduct;
