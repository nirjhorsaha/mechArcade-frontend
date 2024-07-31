import MainLayout from "@/components/layout/MainLayout";
import AboutUs from "@/pages/About-Us/AboutUs";
import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/Checkout/Checkout";
import ContactUs from "@/pages/Contact-Us/ContactUs";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Home from "@/pages/Home/Home";
import ProductDetails from "@/pages/Product-Details/ProductDetails";
import Products from "@/pages/Products/Products";
import Notfound from "@/pages/Shared/Notfound";
import SuccessPage from "@/pages/SuccessPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{
  path: "/",
  element: <MainLayout />,
  errorElement: <Notfound />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "/products",
      element: <Products />
    },
    {
      path: "/product/:id",
      element: <ProductDetails />,
    },
    {
      path: "/about",
      element: <AboutUs />
    },
    {
      path: "/contact",
      element: <ContactUs />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/checkout",
      element: <Checkout />
    },
    {
      path: '/success',
      element: <SuccessPage />
    },
    // {
    //   path: "*",
    //   element: <Notfound />,
    // },
  ],
}]);

export default router;