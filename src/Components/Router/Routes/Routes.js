import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import CategoryAllProducts from "../../Pages/CategoryAllProducts/CategoryAllProducts";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import Allseller from "../../Pages/DashBoard/AllSeller/Allseller";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import MyBookings from "../../Pages/DashBoard/MyBookings/MyBookings";
import MyWishlist from "../../Pages/DashBoard/MyWishlist/MyWishlist";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
import SellerRoute from "../SellerRoute/SellerRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryAllProducts></CategoryAllProducts>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    },
    {
        path: '/dashboard',
        element:

            <DashBoardLayout></DashBoardLayout>,

        children: [
            {
                path: '/dashboard/bookings',
                element: <BuyerRoute><MyBookings></MyBookings></BuyerRoute>
            },
            {
                path: "/dashboard/wishlists",
                element: <BuyerRoute><MyWishlist></MyWishlist></BuyerRoute>
            },
            {
                path: "/dashboard/sellers",
                element: <AdminRoute><Allseller></Allseller></AdminRoute>
            },
            {
                path: "/dashboard/buyers",
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: "/dashboard/addproduct",
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            }



        ]
    }
])
export default router