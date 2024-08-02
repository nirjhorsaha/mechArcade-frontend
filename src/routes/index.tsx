import MainLayout from "@/components/layout/MainLayout";
import AboutUs from "@/pages/AboutUs";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import ContactUs from "@/pages/ContactUs";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import Products from "@/pages/Products";
import ErrorPage from "@/pages/Shared/ErrorPage";
import SuccessPage from "@/pages/SuccessPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{
  path: "/",
  element: <MainLayout />,
  errorElement: <ErrorPage />,
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
  ],
}]);

export default router;