// cards/ProductSlider.jsx
import { useState, useEffect } from "react";

export default function ProductSlider({ title, products }) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleProducts = products.slice(startIndex, startIndex + 4);

  // slayd dəyiş
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 4 >= products.length ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="w-full flex justify-around">
      <div className="w-full max-w-6xl mx-auto p-4 mb-10">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        <div className="flex gap-6 overflow-hidden justify-around">
          {visibleProducts.map(({ id, title, img, price, discountPrice }) => (
            <div
              key={id}
              className="flex-shrink-0 w-60 border rounded p-4 flex flex-col items-center shadow hover:shadow-lg transition"
            >
              <img
                src={img}
                alt={title}
                className="w-54 h-56 object-contain mb-4"
              />
              <h3 className="text-center font-semibold mb-2">{title}</h3>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
