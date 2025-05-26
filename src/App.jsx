import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Components/main/Main";
import Error from "./Components/main/Error";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<Main />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
