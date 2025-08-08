import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Məhsul Detalları</h1>
      <p>ID: {id}</p>
      <p>burda mehsul haqqda datalar olacaq bildiyimiz card seifesi</p>
    </div>
  );
}
