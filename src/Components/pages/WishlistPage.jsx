import React, { useContext } from "react";
import { WishlistContext } from "../../contexts/WishlistContext";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-10">
        <CiHeart size={56} className="text-gray-400 mb-4" />
        <p
          className="text-xl font-medium text-gray-600 mb-6"
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          Sevimlilərin boşdur
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

  return (
    <div className="h-[600px] max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Sevimlilər</h1>
      <div className="space-y-4" style={{ paddingBlock: "50px", paddingLeft: "50px" }}>
        {wishlist.map(
          ({ id, title, img, price, discountPrice, description }) => (
            <div key={id} className="flex items-center gap-4 border-b border-b-gray-200 pb-4">
              <Link to={`/product/${id}`}>
                <img
                  src={img}
                  alt={title}
                  className="w-24 h-24 object-cover rounded-md border"
                />
              </Link>

              <div className="flex-1">
                <Link
                  to={`/product/${id}`}
                  className="block text-base font-semibold text-gray-800 hover:underline"
                >
                  {title.length > 30 ? title.slice(0, 25) + "..." : title}
                </Link>
                <p className="text-sm text-gray-500">
                  {description?.slice(0, 50) || "Məhsul təsviri yoxdur."}
                </p>
                <p className="text-sm font-medium text-gray-800">
                  {discountPrice} ₼{" "}
                  <span className="line-through ml-2">{price} ₼</span>
                </p>
              </div>

              <button
                onClick={() => removeFromWishlist(id)}
                className="text-gray-400 hover:text-red-600 transition"
                title="Sevimlilərdən sil"
              >
                <MdDelete size={24} />
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
