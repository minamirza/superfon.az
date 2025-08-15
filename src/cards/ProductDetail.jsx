import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Məhsul tapılmadı</h1>
        <p className="text-gray-500">Axtardığınız məhsul mövcud deyil.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start rounded-xl p-6">
        
        {/* Məhsul şəkli */}
        <div className="flex justify-center">
          <img
            src={product.img}
            alt={product.title}
            className="rounded-lg object-contain max-h-[500px] w-full"
          />
        </div>

        {/* Məhsul detalları */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">{product.title}</h1>

          <div className="flex items-center gap-4 mb-4 text-center">
            <span className=" text-center text-lg line-through text-gray-500">
              ${product.price}
            </span>
            <span className="text-2xl text-red-600 font-semibold">
              ${product.discountPrice}
            </span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {product.description || "Bu məhsul haqqında ətraflı məlumat yoxdur."}
          </p>

         

          <div className="mt-8 text-sm text-gray-500 border-t pt-4">
            <p>Çatdırılma: 3-5 iş günü</p>
            <p>Zəmanət: 1 il</p>
          </div>
        </div>
      </div>
    </div>
  );
}
