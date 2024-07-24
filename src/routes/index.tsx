import MainLayout from "@/components/layout/MainLayout";
import AboutUs from "@/pages/About-Us/AboutUs";
import ContactUs from "@/pages/Contact-Us/ContactUs";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Home from "@/pages/Home/Home";
import ProductDetails from "@/pages/Product-Details/ProductDetails";
import Products from "@/pages/Products/Products";
import Notfound from "@/pages/Shared/Notfound";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{
    path: "/",
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "/products",
      element: <Products/>
    },
    {
      path: "/products/:productId",
      element: <ProductDetails />,
    },
    {
      path: "/about",
      element: <AboutUs/>
    },
    {
      path: "/contact",
      element: <ContactUs/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ],
}]);

export default router;