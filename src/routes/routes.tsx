import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])