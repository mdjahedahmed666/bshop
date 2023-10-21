import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

  const [userData, setUserData] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user?.email) {
      fetch('serverbshop.vercel.app/users')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const matchedUser = data.find(
            (userData) => userData.email === user.email
          );
          console.log(matchedUser);
          if (matchedUser) {
            setUserData(matchedUser);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      // Set userData to a default value or an empty object
      setUserData([]);
    }
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(
        Swal.fire({
          title: "Log Out",
          text: "Successfully logged out",
          icon: "Success",
          confirmButtonText: "ok",
        }),
        navigate("/")
      )
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addproduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/myCart">My Cart</NavLink>
      </li>
    </>
  );


  return (
    <div className="container mx-auto px-4 md:px-32 bg-base-150">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="w-40 md:w-60">
            <img className="w-full" src={logo} alt="" />
          </Link>
          {/* <a className="btn btn-ghost normal-case text-xl">Brand Shop</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={userData.photo} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li className=" text-lg mb-2 text-center">{userData.name}</li>
                  <li
                    onClick={handleLogOut}
                    className="btn btn-ghost text-purple-400 text-lg"
                  >
                    Logout
                  </li>
                </ul>
              </div>
              {/* <p className=" font-rancho">{userData.name}</p>
              <button
                onClick={handleLogOut}
                className="btn btn-ghost text-purple-400 text-lg"
              >
                Logout
              </button> */}
            </div>
          ) : (
            <Link to="/login" className="btn btn-ghost text-purple-400 text-lg">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
