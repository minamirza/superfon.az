import { Link } from "react-router-dom";
import { FaCreditCard, FaTruck } from "react-icons/fa";
import { BsBoxArrowInRight } from "react-icons/bs";

function EasyOrder() {
  return (
    <div
      className="flex justify-around items-center bg-gray-50 p-8 h-40 my-8"
      style={{
        paddingTop: "64px",
        paddingBottom: "64px",
        marginTop: "22px",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Link to="/order" className="flex flex-col items-center gap-3 p-4">
        <FaCreditCard className="text-4xl" />
        <p className="font-semibold text-slate-800 text-center">
          Asan və təhlükəsiz ödəniş
        </p>
      </Link>

      <Link to="/delivery" className="flex flex-col items-center gap-3 p-4">
        <FaTruck className="text-4xl" />
        <p className="font-semibold text-slate-800 text-center">
          Sürətli çatdırılma
        </p>
      </Link>

      <Link to="/returns" className="flex flex-col items-center gap-3 p-4">
        <BsBoxArrowInRight className="text-4xl" />
        <p className="font-semibold text-slate-800 text-center">
          Qaytarma və dəyişmə
        </p>
      </Link>
    </div>
  );
}

export default EasyOrder;
