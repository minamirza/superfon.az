import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import { BasketContext } from "../contexts/BasketContext";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function BasketPage() {
  const { basket, setBasket } = useContext(BasketContext);
  const navigate = useNavigate();
  const total = basket.reduce((sum, item) => sum + item.price * item.count, 0);

  function handleCheckout() {
    toast.success("Sifariş başladıldı!");
    navigate("/checkout");
  }

  function deleteItem(id) {
    const updated = basket.filter((item) => item.id !== id);
    setBasket(updated);
    toast.error("Məhsul səbətdən silindi!");
  }

  // Əgər səbət boşdursa
  if (basket.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-10">
        <CiShoppingBasket size={56} className="text-gray-400 mb-4" />
        <p
          className="text-xl font-medium text-gray-600 mb-6"
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          Səbət boşdur
        </p>
        <Link
          to="/"
          className="px-6 py-3 text-base items-center flex justify-center rounded w-35 h-11 font-semibold bg-purple-900 text-white transition"
        >
          Məhsullara bax
        </Link>
      </div>
    );
  }

  // Əgər səbətdə məhsul varsa
  return (
    <div className="min-h-screen max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Səbət</h1>

      <div className="space-y-4" style={{ paddingBlock: "50px", paddingLeft: "50px" }}>
        {basket.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b border-b-gray-200 py-4"
            style={{ paddingBottom: "10px", paddingTop: "10px" }}
          >
            <Link to={`/products/${item.id}`}>
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-md border border-gray-300"
              />
            </Link>

            <div className="flex-1">
              <Link
                to={`/products/${item.id}`}
                className="block text-base font-semibold text-gray-800 hover:underline"
              >
                {item.title.length > 30 ? item.title.slice(0, 25) + "..." : item.title}
              </Link>
              <p className="text-sm text-gray-500">Miqdar: x{item.count}</p>
              <p className="text-sm font-medium text-gray-800">{item.price} ₼</p>
            </div>

            <button
              onClick={() => deleteItem(item.id)}
              className="text-gray-400 hover:text-red-600 transition"
              title="Səbətdən sil"
            >
              <MdDelete size={24} />
            </button>
          </div>
        ))}
      </div>

      {/* Ümumi məbləğ */}
      <div className="flex justify-end mt-8">
        <div className="text-right">
          <p className="text-lg font-semibold text-gray-800">Ümumi məbləğ:</p>
          <p className="text-3xl font-bold text-purple-900 mt-2">
            {total.toFixed(2)}₼
          </p>
          <button
            onClick={handleCheckout}
            className="mt-6 px-8 py-3 text-lg font-semibold rounded bg-orange-500 hover:bg-orange-600 text-white transition"
            style={{ paddingRight: "10px", paddingLeft: "10px" }}
          >
            Sifarişi rəsmiləşdir
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
