import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const { email } = user || {};
  console.log(email);
  const [product, setProduct] = useState([]);
  const { name, brandName, price,type, shortDescription, photo, rating } =
    product;
  const { id } = useParams();
  useEffect(() => {
    fetch(`bshopserv.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleAddToCart = () => {
    // You can customize the product data to send to the server
    const productData = {
      userEmail: email,
      name,
      brandName,
      type,
      price,
      shortDescription,
      photo,
      rating,
    };

    //send data to the server
    fetch('bshopserv.vercel.app/addToCart', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Cart is added successfully",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="my-16 container mx-auto px-4 md:px-32">
      <div className="card lg:card-side bg-base-300 shadow-sm rounded-none p-10">
        <figure className="w-1/2 p-10">
          <img className="w-full" src={photo} alt="Album" />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title font-rancho text-2xl font-bold p-5">
              {name}
            </h2>
            <p className="pl-5 font-raleway text-yellow-500">
              Rating {rating} out of 5
            </p>
          </div>
          <div className="pl-5 mt-5">
            <p className="font-rancho font-bold text-2xl mb-2">£{price}</p>
            <p className="font-raleway">Brand: {brandName}</p>
          </div>
          <div className="pl-5 mb-10">
            <p className="font-raleway text-xl text-gray-400">
              {shortDescription}
            </p>
          </div>
          <div className="card-actions justify-center w-1/2 flex">
            <button onClick={handleAddToCart} className="btn btn-info w-full">
              Add to card
            </button>
            <button className="btn btn-info w-full">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
