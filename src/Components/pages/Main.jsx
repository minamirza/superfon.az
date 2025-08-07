import ProductSlider from "../../cards/ProductSlider";
import EasyOrder from "../delivery/EasyOrder";
import Sidebar from "../layout/Sidebar";
import Slider from "../ui/Slider";
import products from "../../data/products";

function Main() {
  return (
    <>
      <div
        className="w-full grid gap-8 lg:grid-cols-3"
        style={{
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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
      <div>{/* brand */}</div>
    </>
  );
}

export default Main;
