import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Aboutus from "./pages/AboutUs/Aboutus";
import ProductsPage from "./pages/Products/ProductsPage";
import ProductDetailPage from "./pages/ProductDetail/ProductDetail";
import PrivateRoute from "./pages/ProtectedRoute/ProtectedRoute";
import CartPage from "./pages/Cart/CartPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import AccountPage from "./pages/Account/AccountPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "aboutus", element: <Aboutus /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "cart", element: <CartPage /> },
         { path: "checkout", element: <CheckoutPage /> },
        
        // Public routes
        { path: "products", element: <ProductsPage /> },
        { path: "product/:id", element: <ProductDetailPage /> },

        // Protected routes wrapped by PrivateRoute
        {
          element: <PrivateRoute />,
          children: [
            { path: "account", element: <AccountPage /> },
        
          ],
        },

        // 404 Page - Not Found
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
