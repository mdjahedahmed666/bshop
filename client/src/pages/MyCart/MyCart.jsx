import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";


const MyCart = () => {
  const { user } = useContext(AuthContext);
  const { email } = user || {};


  const [myCart, setMyCart] = useState([]);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
       
        fetch(`bshopserv.vercel.app/addToCart/${_id}`,{
          method: 'DELETE'
        })
        .then((res) => res.json())
      .then((data) =>{
        if(data.deletedCount){
          setMyCart((remainingCart) => remainingCart.filter((item) => item._id !== _id));
          Swal.fire(
            'Deleted!',
            'Your cart has been deleted.',
            'success'
          )
        }
      })
      }
    })

  };
  useEffect(() => {
    fetch('bshopserv.vercel.app/myCart')
      .then((res) => res.json())
      .then((data) => {
        const userCart = data.filter(user => user.userEmail===email);
        setMyCart(userCart);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-32 my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
      myCart.map((item,index) =>
        <div key={index} className="card bg-base-100 shadow-xl">
        <figure><img src={item.photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">£{item.price}</div>
          </h2>
          <p className="mb-4">{item.shortDescription}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleDelete(item._id) } className="btn btn-outline">Delete Cart</button>
            <button className="btn btn-outline">Buy the product</button>
          </div>
        </div>
      </div>
      )
    }
    </div>
    </div>
  )
}

export default MyCart;
