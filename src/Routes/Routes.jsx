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
import AppleData from "../Pages/AppleData/AppleData";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";

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
                // path: '/login',
                // element: <Login></Login>
            },
            {
                // path: '/register',
                // element: <Register></Register>
            },
            {
                path: '/addProducts',
                element: <AddProducts></AddProducts>
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
                // path: '/services',
                // element: <Services></Services>,
                // loader : () => fetch('/services.json')
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/nodata',
                element: <NoDataPage></NoDataPage>
            },
            {
                path: '/appleData',
                element: <AppleData></AppleData>,
                loader: () => fetch('http://localhost:5001/addProduct')
            },
            {
                path: '/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`http://localhost:5001/addProduct/${params.id}`)
            }
        ]
    }
]);

export default router;