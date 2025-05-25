import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/main/Main";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/header" element={<Header />} />
            <Route path="/" element={<Main />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
