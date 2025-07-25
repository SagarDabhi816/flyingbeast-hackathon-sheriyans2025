
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./context/CartContext.jsx";


createRoot(document.getElementById("root")).render(

    <CartProvider>
      <App />
      <ToastContainer />
    </CartProvider>

);
