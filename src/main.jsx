import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./components/routes/AppRoutes.jsx";
import { AuthProvider } from "./components/context/AuthContext.jsx";
import { CartProvider } from "./components/context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
