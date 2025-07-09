import ProductSlider from "../../cards/ProductSlider";
import EasyOrder from "../delivery/EasyOrder";
import Sidebar from "../layout/Sidebar";
import Slider from "../ui/Slider";
import products from "../../data/products";


function Main() {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <Slider />
      </div>
      <div>
        <EasyOrder />
      </div>
      <div>
        <ProductSlider title="Yeniliklər" products={products} />
        <ProductSlider title="Endirimlər" products={products} />
        <ProductSlider title="Populyar Məhsullar" products={products} />
      </div>
      <div>
        {/* brand */}
      </div>
    </>
  );
}

export default Main;
