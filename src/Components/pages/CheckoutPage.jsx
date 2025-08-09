import React from "react";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen py-10 px-4 flex items-center justify-center gap-3">
      <div
        className="max-w-3xl w-full p-8 rounded-lg shadow-lg"
        style={{ paddingBlock: "2rem", paddingInline: "1.5rem" }}
      >
        <h1 className="text-2xl font-semibold mb-6 text-center gap-3">
          Sifariş məlumatları
        </h1>

        {/* Müştəri məlumatları */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Ad Soyad <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-500"
              placeholder="Adınızı və soyadınızı daxil edin"
              style={{ paddingBlock: "5px", paddingLeft: "15px" }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-500"
              placeholder="example@mail.com"
              style={{ paddingBlock: "5px", paddingLeft: "15px" }}
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
              style={{ paddingBlock: "5px", paddingLeft: "15px" }}
            />
          </div>
        </div>

        {/* Çatdırılma üsulu */}
        <div className="mt-8">
          <label className="block text-sm font-medium mb-3">
            Çatdırılma üsulu <span className="text-red-500">*</span>
          </label>

          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="delivery" className="w-4 h-4" />
              Unvana çatdırılma
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="delivery"
                className="w-4 h-4"
                style={{ paddingBlock: "5px", paddingLeft: "15px" }}
              />
              Mağazadan götürmək
            </label>
          </div>
        </div>

        {/* Ünvan məlumatları */}
        <div className="mt-6 flex flex-col gap-4">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              style={{ paddingBlock: "5px" }}
            >
              Şəhəri seçin
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-500"
              style={{ paddingBlock: "5px", paddingLeft: "15px" }}
            >
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
              style={{ paddingBlock: "5px", paddingLeft: "15px" }}
            />
          </div>
        </div>

        {/* Ödəmə üsulu */}
        <div className="mt-8">
          <label className="block text-sm font-medium mb-3">
            Ödəmə üsulu <span className="text-red-500">*</span>
          </label>

          <div className="flex flex-col gap-2">
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
          className="mt-12 w-full bg-purple-900 text-white py-3 px-6 rounded-lg font-semibold 
             shadow-md hover:bg-purple-800 focus:ring-2 focus:ring-purple-500 
             focus:outline-none transition-all duration-200 active:scale-95"
          style={{ paddingBlock: "10px" }}
        >
          Sifarişi tamamla
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
