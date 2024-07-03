import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout";
import Skill from "../pages/Skill/Skill";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/skill',
          element: <Skill />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    },
  ]);

export default router;