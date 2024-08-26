import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Error from "../error/Error";
import HomeLayout from "../components/Home/HomeLayout";
import Others from "../components/Others/Others";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <HomeLayout />,
            },
            {
                path: "/about",
                element: <Others/>
            },
            {
                path: "/management",
                element: <Others/>
            },
            {
                path: "/services",
                element: <Others/>
            },
            {
                path: "/study",
                element: <Others/>
            },
            {
                path: "/contact",
                element: <Others/>
            }
        ],
    },
]);

export default router;