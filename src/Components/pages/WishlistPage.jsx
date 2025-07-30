import React, { useContext } from 'react';
import { WishlistContext } from '../contexts/WishlistContext';

function WishlistPage() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">İstək Siyahısı ({wishlist.length})</h1>
      
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Sizin istək siyahınız boşdur</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {wishlist.map(item => (
            <div key={item.id} className="border p-4 rounded-lg shadow-sm">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-40 object-contain mb-3"
              />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-purple-900 font-bold my-2">{item.price} ₼</p>
              <button 
                onClick={() => removeFromWishlist(item.id)}
                className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
              >
                Siyahıdan çıxar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishlistPage;