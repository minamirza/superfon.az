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

  return (
    <div className="min-h-screen flex items-start justify-between px-6 max-w-screen-md mx-auto mt-6 gap-8 align-center"
    style={{ paddingTop: "32px", paddingRight: "32px", display: "flex", justifyContent:"space-between"}}
    >
      {basket.length > 0 ? (
        <>
          <div className="w-[900px] overflow-y-auto max-h-[75vh]"
            >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Səbət</h2>
            <div className="space-y-4"
                style={{ paddingTop: "32px"}}

            >
              {basket.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 pb-4"
                      style={{ paddingTop: "32px", paddingRight: "32px", display: "flex", justifyContent:"space-between"}}

                >
                  <Link to={`/products/${item.id}`}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  </Link>

                  <div className="flex-1">
                    <Link
                      to={`/products/${item.id}`}
                      className="block text-base font-semibold text-gray-800 hover:underline"
                    >
                      {item.title.length > 30
                        ? item.title.slice(0, 25) + "..."
                        : item.title}
                    </Link>
                    <p className="text-sm text-gray-500">
                      Miqdar: x{item.count}
                    </p>
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
          </div>

          <div className="w-1/2 flex flex-col justify-between pl-8"
              style={{ paddingLeft: "30px" }}

          >
            <div style={{ paddingTop: "8px", paddingBottom: "8px", right: "50px"  }}>
              <p className="text-lg font-semibold text-gray-800 " style={{ paddingTop: "8px", paddingBottom: "8px", right: "50px" }}>
                Ümumi məbləğ:
              </p>
              <p className="text-4xl font-bold text-purple-900 mt-2"
              style={{ paddingTop: "8px", paddingBottom: "8px" }}
              >
                {total.toFixed(2)}₼
              </p>
            </div>

            <button
              onClick={handleCheckout}
              className="mt-8 px-8 py-3 text-lg font-semibold rounded bg-orange-500 hover:bg-orange-600 text-white transition"
            >
              Sifarişi rəsmiləşdir
            </button>
          </div>
        </>
      ) : (
       <div className="relative flex flex-col items-center justify-center text-center gap-3 w-full" style={{ top: "180px", left: "270px" }}>
          <CiShoppingBasket size={56} className="text-gray-400 mb-4" />
          <p className="text-xl font-medium text-gray-600 mb-6">Səbət boşdur</p>
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
