import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Məhsul tapılmadı</h1>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md p-6 mx-auto">
      <h1 className="text-xl font-bold mb-4">{product.title}</h1>
      <div className="flex flex-col md:flex-row">
        <img
          src={product.img}
          alt={product.title}
          className="w-full md:w-[500px] h-auto mb-4"
        />
        <div className="w-full md:ml-4">
          <p className="mb-2 flex flex-col w-full">
            Qiymət:{" "}
            <span className="line-through text-gray-500">${product.price}</span>{" "}
            <span className="text-red-600 font-semibold">
              ${product.discountPrice}
            </span>
          </p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
