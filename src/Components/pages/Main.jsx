import { Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Sidebar from '../layout/Sidebar';
import Slider from '../ui/Slider';
import Footer from '../footer/Footer';

function Main() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="flex flex-row">
                <Sidebar />
                <Slider />
              </div>
              <div>
                <EasyOrder />
                <FastDelivery />
                <Extradite />
              </div>
            </>
          }
        />
        <Route path="/slider" element={<Slider />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
