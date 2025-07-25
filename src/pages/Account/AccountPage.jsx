import React, { useEffect, useState } from "react";
import products from "../../Data/Products";
import { useParams } from "react-router-dom";

export default function AccountPage() {
  const [orders, setOrders] = useState([]);

  const { id } = useParams();
   const product = products.find((p) => p.id === id);
    const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || product?.image);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders.reverse()); // most recent first
  }, []);

  if (!orders.length) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">No Orders Yet</h1>
        <p className="text-gray-600">You haven’t placed any orders. Start shopping!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 mt-30">
      <h1 className="text-3xl font-bold mb-8 text-center">My Orders</h1>
      <div className="flex flex-col gap-8">
        {orders.map((order) => (
          <div key={order.id} className="bg-white text-black shadow rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-3">
              <span className="font-semibold text-lg">
                Order Date: <span className="font-normal text-gray-600">{order.date}</span>
              </span>
              <span className="font-semibold text-md text-rose-600">
                Total: &#8377;{order.total}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left mt-2">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-2">Product</th>
                    <th className="py-2 px-2">Quantity</th>
                    <th className="py-2 px-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map(({ product, quantity }) => (
                    <tr key={product.id} className="border-b last:border-b-0">
                      <td className="py-1 px-2">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-10 h-10 object-cover rounded"
                          />
                          <span>{product.name}</span>
                        </div>
                      </td>
                      <td className="py-1 px-2">{quantity}</td>
                      <td className="py-1 px-2">&#8377;{product.price * quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-sm text-gray-500">
              Shipping to: <span className="font-medium text-gray-800">{order.address}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
