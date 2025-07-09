import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import { BASKET } from "../contexts/BasketContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function BasketPage() {
  const { basket, setBasket } = useContext(BASKET);

  let total = 0;
  for (let i = 0; i < basket.length; i++) {
    total += basket[i].price * basket[i].count;
  }

  function deleteItem(id) {
    const updated = basket.filter((item) => item.id !== id);
    setBasket(updated);
    toast.error("Məhsul səbətdən silindi!");
  }

  return (
    <div className="absolute top-full right-0 w-[350px] bg-white p-4 rounded-lg shadow-lg z-[999]">
      <div className="max-h-[300px] overflow-y-auto space-y-4">
        {basket.length > 0 ? (
          basket.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b pb-3"
            >
              <Link to={`/products/${item.id}`}>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </Link>

              <div className="flex-1">
                <Link
                  to={`/products/${item.id}`}
                  className="block text-sm font-semibold text-gray-700"
                >
                  {item.name.length > 30
                    ? item.name.slice(0, 20) + "..."
                    : item.name}
                </Link>
                <p className="text-sm text-gray-500">x {item.count}</p>
                <p className="text-sm font-medium text-gray-800">
                  {item.price}₼
                </p>
              </div>

              <button
                onClick={() => deleteItem(item.id)}
                className="text-gray-500 hover:text-red-600"
              >
                <MdDelete size={20} />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-6 flex items-center justify-center gap-2">
            <CiShoppingBasket size={28} /> Səbət boşdur
          </p>
        )}
      </div>

      <div className="mt-4 border-t pt-4">
        <p className="text-right text-base font-semibold text-black">
          Ümumi məbləğ:{" "}
          <span className="font-normal">{total.toFixed(2)}₼</span>
        </p>

        <div className="mt-4 flex justify-between">
          <Link
            to="/basket"
            className="bg-gray-800 text-white px-4 py-2 text-sm rounded-full hover:bg-gray-700"
          >
            Səbət
          </Link>
          <button className="bg-orange-500 text-white px-4 py-2 text-sm rounded-full hover:bg-orange-600">
            Sifarişi rəsmiləşdir
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
