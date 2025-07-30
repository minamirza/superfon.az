import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Components/pages/Main";
import Error from "./Components/pages/Error";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import EasyOrder from "./Components/delivery/EasyOrder";
import BasketPage from "./basket/BasketPage";
import { Toaster } from "react-hot-toast";
import { BasketProvider } from "./contexts/BasketContext";
import { WishlistProvider } from "./contexts/WishlistContext";

function App() {
  return (
    <BasketProvider>
      <WishlistProvider>
        <div className="container mx-auto px-4">
          <Header />
          <Toaster position="top-right" reverseOrder={false} />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/payment" element={<EasyOrder />} />
            <Route path="*" element={<Error />} />
          </Routes>
            <Footer />
          </div>
      </WishlistProvider>
    </BasketProvider>
  );
}

export default App;
