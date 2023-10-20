import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layouts/Root";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Brands from "../Pages/Brands/Brands";
import AddProducts from "../Pages/AddProducts/AddProducts";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyCart from "../Pages/MyCart/MyCart";
import NoDataPage from "../Pages/NoDataPage/NoDataPage";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import ProductsData from "../Pages/ProductsData/ProductsData";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:  <Home></Home>,
                loader : () => fetch('/brands.json')
            },
            {
                // path: '/services/:id',
                // element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                // loader: () => fetch('/services.json')
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/addProducts',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            {
                path: '/brands',
                element: <Brands></Brands>,
                loader : () => fetch('/brands.json')
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path: '/nodata',
                element: <NoDataPage></NoDataPage>
            },
            {
                path: '/productsData',
                element: <ProductsData></ProductsData>,
                loader: () => fetch('http://localhost:5001/addProduct')
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5001/addProduct/${params.id}`)
            },
            {
                path: '/viewDetails/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5001/viewDetails/${params.id}`)

                
            }
              
            
        ]
    }
]);

export default router;