import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./CartContext";
import Dashboard from "./Components/Dashboard";
import Error from "./Components/Error";
import Home from "./Components/Home/Home";
import Gadgets from "./Components/Main/Gadgets";
import ProductDetails from "./Components/Main/ProductDetails";
import Statistics from "./Components/Statistics";
import "./index.css";

const loadProducts = () => fetch("/product.JSON");
const loadProductById = async ({ params }) => {
  const response = await fetch("/product.JSON");
  const products = await response.json();
  return products.find(
    (item) => item.product_id === parseInt(params.product_id)
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home />, loader: loadProducts },
      { path: "gadgets", element: <Gadgets />, loader: loadProducts },
      {
        path: "gadgets/:product_id",
        element: <ProductDetails />,
        loader: loadProductById,
      },
      { path: "statistics", element: <Statistics />, loader: loadProducts },
      { path: "dashboard", element: <Dashboard />, loader: loadProducts },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
