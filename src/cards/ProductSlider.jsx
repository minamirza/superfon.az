import { useState, useEffect } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

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
    <div className="w-full flex justify-around my-4 py-4">
      <div className="w-full max-w-6xl mx-auto pb-4 mb-10">
        <h2
          className="text-2xl font-bold mt-8 px-6 py-4"
          style={{
            paddingTop: "64px",
            paddingBottom: "32px",
          }}
        >
          {title}
        </h2>

        <div className="flex gap-6 overflow-hidden justify-around">
          {visibleProducts.map(
            ({ id, title, img, price, discountPrice, description }) => (
              <div
                key={id}
                className="group relative block overflow-hidden flex-shrink-0 w-72"
              >
                <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span className="sr-only">Wishlist</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <img
                  src={img}
                  alt={title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="relative border border-gray-100 bg-white p-6">
                  <p className="text-gray-700">
                    {discountPrice} ₼
                    <span className="text-gray-400 line-through ml-2">
                      {price} ₼
                    </span>
                  </p>

                  <h3 className="mt-1.5 text-lg font-medium text-gray-900">
                    {title}
                  </h3>

                  <p className="mt-1.5 line-clamp-3 text-gray-700">
                    {description ||
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                  </p>

                  <form className="mt-4 flex gap-4">
                    <button className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105">
                      Add to Cart
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAddToFavorites(product)}
                      className="block w-[150px] h-10 rounded-sm bg-pink-500 px-4 py-3 text-sm font-medium text-white transition hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <FaHeart />
                    </button>
                  </form>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
