import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import ProductCategory from "../pages/productCategory/productCategory";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import MyCart from "../pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <PageNotFound/>,
      children: [
       {
        path: "/",
        element: <Home/>,
       },
       {
        path: "/addproduct",
        element: <PrivateRoute><AddProduct/> </PrivateRoute>,
       },
       {
        path: "/products/:brandName",
        element: <ProductCategory/>,
       },
       {
        path: "/productDetails/:id",
        element: <PrivateRoute><ProductDetails/></PrivateRoute>,
       },
       {
        path: "/updateProduct/:id",
        element: <PrivateRoute><UpdateProduct/></PrivateRoute>,
        loader: ({params}) => fetch(`https://server-iul79kjuo-mdjahedahmed12-gmailcom.vercel.app/product/${params.id}`)
       },
       {
        path: "/myCart",
        element: <PrivateRoute><MyCart/></PrivateRoute>,
       },
       {
        path: "/login",
        element: <Login/>,
       },
       {
        path: "/register",
        element: <Register/>,
       },
      ]
    },
  ]);

  export default router;