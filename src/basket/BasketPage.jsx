 import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import { BasketContext } from "../contexts/BasketContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function BasketPage() {
  const { basket, setBasket } = useContext(BasketContext);
  const total = basket.reduce((sum, item) => sum + item.price * item.count, 0);

  function deleteItem(id) {
    const updated = basket.filter((item) => item.id !== id);
    setBasket(updated);
    toast.error("Məhsul səbətdən silindi!");
  }

  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      {basket.length > 0 ? (
        <div className="w-full max-w-5xl bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Səbət</h2>

          <div className="space-y-4">
            {basket.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b pb-4"
              >
                <Link to={`/products/${item.id}`}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md border"
                  />
                </Link>

                <div className="flex-1">
                  <Link
                    to={`/products/${item.id}`}
                    className="block text-base font-semibold text-gray-800 hover:underline"
                  >
                    {item.name.length > 30
                      ? item.name.slice(0, 25) + "..."
                      : item.name}
                  </Link>
                  <p className="text-sm text-gray-500">Miqdar: x{item.count}</p>
                  <p className="text-sm font-medium text-gray-800">
                    {item.price}₼
                  </p>
                </div>

                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-gray-400 hover:text-red-600 transition"
                >
                  <MdDelete size={24} />
                </button>
              </div>
            ))}
          </div>

          {/* Əlavə etdiyin checkout hissəsi */}
          <div className="mt-8 border-t pt-6">
            <p className="text-right text-lg font-semibold text-gray-800">
              Ümumi məbləğ:{" "}
              <span className="text-purple-700 font-bold">
                {total.toFixed(2)}₼
              </span>
            </p>

            <div className="mt-6 flex justify-between">
              <Link
                to="/basket"
                className="px-6 py-2 text-sm font-semibold rounded bg-purple-900 hover:bg-purple-950 text-white"
              >
                Səbət
              </Link>
              <button className="px-6 py-2 text-sm font-semibold rounded bg-orange-500 hover:bg-orange-600 text-white">
                Sifarişi rəsmiləşdir
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <CiShoppingBasket size={56} className="text-gray-400 mb-4" />
          <p className="text-xl font-medium text-gray-600 mb-6">
            Səbət boşdur
          </p>
          <Link
            to="/"
            className="px-6 py-3 text-base items-center flex justify-center rounded w-35 h-11 font-semibold bg-purple-900 text-white transition"
          >
            Məhsullara bax
          </Link>
        </div>
      )}
    </div>
  );
}

export default BasketPage;
