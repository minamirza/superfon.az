import ProductSlider from "../../cards/ProductSlider";
import EasyOrder from "../delivery/EasyOrder";
import Sidebar from "../layout/Sidebar";
import Slider from "../ui/Slider";
import products from "../../data/products";

function Main() {
  return (
    <>
      <div className="w-full flex flex-col lg:grid lg:grid-cols-3 gap-8 pt-6"
      style={{ paddingTop: "20px"}}>
        {/* Sidebar yalnız lg və yuxarıda görünəcək */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Slider hər ekranda görünür, amma lg-də 2 column tutacaq */}
        <div className="w-full lg:col-span-2">
          <Slider />
        </div>
      </div>

      <div>
        <EasyOrder />
      </div>
      <div>
        <ProductSlider title="Yeniliklər" products={products} />
        <ProductSlider title="Endirimlər" products={products} />
        <ProductSlider title="Populyar Məhsullar" products={products} />
      </div>
      <div>{/* brand */}</div>
    </>
  );
}

export default Main;
