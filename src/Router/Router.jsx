import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import NotFound from "../Pages/Error/NotFound";
import HomePageCom from "../Pages/HomePageCom";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <HomePageCom></HomePageCom>
            },
        ],
    }, {
        path: "/login",
        element: <Login></Login>
    }, {
        path: "/signup",
        element: <SignUp></SignUp>
    },
]);

export default router;