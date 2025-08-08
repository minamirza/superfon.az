import React from "react";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen py-10 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full p-8 rounded-lg shadow-lg"
      style={{paddingBlock: "2rem", paddingInline: "1.5rem"}}
      >
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Sifariş məlumatları
        </h1>

        {/* Müştəri məlumatları */}
        <div className="space-y-4 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">
              Ad Soyad <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-500"
              placeholder="Adınızı və soyadınızı daxil edin"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-500"
              placeholder="example@mail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Mobil nömrə <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-500"
              placeholder="+994 xx xxx xx xx"
            />
          </div>
        </div>

        {/* Çatdırılma üsulu */}
        <div className="mt-8">
          <label className="block text-sm font-medium mb-3">
            Çatdırılma üsulu <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="delivery" className="w-4 h-4" />
              Unvana çatdırılma
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="delivery" className="w-4 h-4" />
              Mağazadan götürmək
            </label>
          </div>
        </div>

        {/* Ünvan məlumatları */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Şəhəri seçin
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-500">
              <option value="">Seçin</option>
              <option>Bakı</option>
              <option>Nərimanov</option>
              <option>Elmlər</option>
              <option>Abşeron</option>
              <option>Xırdalan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Ünvan (küçə, bina, blok, mənzil)
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Ödəmə üsulu */}
        <div className="mt-8">
          <label className="block text-sm font-medium mb-3">
            Ödəmə üsulu <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="w-4 h-4" />
              Bank kartı ilə nağd ödəniş
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="w-4 h-4" />
              Taksitlə onlayn ödəniş
            </label>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-8 w-full bg-purple-900 text-white py-3 rounded-lg font-medium hover:bg-purple-800 transition"
        >
          Sifarişi tamamla
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
