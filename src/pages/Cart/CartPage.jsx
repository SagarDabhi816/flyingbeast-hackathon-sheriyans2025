import { useCart } from "../../context/CartContext";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const navigate = useNavigate();


  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center min-h-[51vh] flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <Link
          to="/products"
          className="text-rose-600 font-medium underline hover:text-rose-800"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 mt-30">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="flex flex-col gap-5">
        {cartItems.map((item) => {
          // Updated here: use first image from images array or fallback to image string
          const mainImage = item.product.images?.[0] || item.product.image;

          return (
            <div
              key={item.product.id}
              className="flex items-center gap-6 rounded-lg shadow p-4"
            >
              <img
                src={mainImage}
                alt={item.product.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <div className="font-bold text-lg">{item.product.name}</div>
                <div className="text-gray-500">{item.product.category}</div>
                <div className="text-rose-600 font-semibold">
                  &#8377;{item.product.price} × {item.quantity}
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.product.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
        <div>
          <span className="text-xl font-bold">Total: </span>
          <span className="text-2xl text-rose-600 font-bold">&#8377;{getTotal()}</span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => clearCart()}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded transition"
          >
            Clear Cart
          </button>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-2 rounded transition font-medium"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
