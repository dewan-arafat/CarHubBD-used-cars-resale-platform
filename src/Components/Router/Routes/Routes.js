import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CategoryAllProducts from "../../Pages/CategoryAllProducts/CategoryAllProducts";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";


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
            <PrivateRoutes>
                <DashBoard></DashBoard>
            </PrivateRoutes>
    }
])
export default router