import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CategoryAllProducts from "../../Pages/CategoryAllProducts/CategoryAllProducts";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";


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
    }
])
export default router