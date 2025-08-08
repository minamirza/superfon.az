import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Main from "./Components/pages/Main";
import Error from "./Components/pages/Error";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import EasyOrder from "./Components/delivery/EasyOrder";
import BasketPage from "./basket/BasketPage";
import { Toaster } from "react-hot-toast";
import { BasketProvider } from "./contexts/BasketContext";
import { WishlistContext, WishlistProvider } from "./contexts/WishlistContext";
import { LoginForm } from "./login/LoginForm";
import ProductDetail from "./cards/ProductDetail";
import WishlistPage from "./Components/pages/WishlistPage";
function App() {
  return (
    <WishlistProvider>
      <BasketProvider>
        <div className="container mx-auto px-4">
          <Header />
          <Toaster position="top-right" reverseOrder={false} />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/payment" element={<EasyOrder />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<Error />} />
            <Route path="/wishlist" element={<WishlistPage />} />
          </Routes>
          <Footer />
        </div>
      </BasketProvider>
    </WishlistProvider>
  );
}

export default App;
