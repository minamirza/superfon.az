import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Components/pages/Main";
import Error from "./Components/pages/Error";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import EasyOrder from "./Components/delivery/EasyOrder";

function App() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/payment" element={<EasyOrder />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
