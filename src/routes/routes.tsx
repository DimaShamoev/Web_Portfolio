import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import Expertise from "../pages/Expertise";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/expertise',
                element: <Expertise />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])