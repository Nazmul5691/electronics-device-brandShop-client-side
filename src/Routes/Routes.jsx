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
                element: <Brands></Brands>
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
            }
        ]
    }
]);

export default router;