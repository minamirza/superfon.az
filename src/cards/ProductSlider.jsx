// cards/ProductSlider.jsx
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";


export default function ProductSlider({ title, products }) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleProducts = products.slice(startIndex, startIndex + 4);

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + 4 >= products.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? products.length - 4 : prev - 1
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 mb-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevSlide} className="px-3 py-1 border rounded hover:bg-gray-200">
          Prev
        </button>
        <button onClick={nextSlide} className="px-3 py-1 border rounded hover:bg-gray-200">
          Next
        </button>
      </div>
      <div className="flex gap-6 overflow-hidden">
        {visibleProducts.map(({ id, title, img, price, discountPrice }) => (
          <div
            key={id}
            className="flex-shrink-0 w-60 border rounded p-4 flex flex-col items-center shadow hover:shadow-lg transition"
          >
            <img src={img} alt={title} className="w-40 h-40 object-contain mb-4" />
            <h3 className="text-center font-semibold mb-2">{title}</h3>
            <div className="relative w-full text-center mb-4">
              <span className="text-gray-500 line-through">{price} ₼</span>
              <span className="block font-bold text-lg text-gray-800 mt-1">
                {discountPrice} ₼
              </span>
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 bg-green-600 text-white text-xs px-2 rounded">
                Endirimli
              </span>
            </div>
            <button className="ml-auto bg-green-600 p-2 rounded text-white hover:bg-green-700">
              <FaShoppingCart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
