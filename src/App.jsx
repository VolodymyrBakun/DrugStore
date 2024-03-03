import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "components/navbar/Navbar";
import { Shop } from "pages/shop/Shop";
import { Cart } from "pages/cart/Cart";
import { ShopContextProvider } from "context/shop-context";

export const App = () => {
  return (
    <div className="app">
      <ShopContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
};
