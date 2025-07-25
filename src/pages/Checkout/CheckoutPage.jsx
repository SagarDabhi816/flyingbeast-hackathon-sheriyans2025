import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  notes: "",
};

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const requiredFields = ["name", "email", "address"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errorObj = {};
    requiredFields.forEach((field) => {
      if (!form[field]) errorObj[field] = "This field is required.";
    });
    return errorObj;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorObj = validate();
    setErrors(errorObj);

    if (Object.keys(errorObj).length !== 0) return;

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      id: Date.now(),
      ...form,
      items: cartItems,
      total: cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      ),
      date: new Date().toLocaleString(),
    };

    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));
    clearCart();
    navigate("/account");
  };

  if (!cartItems.length) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">No items to checkout</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 !text-black rounded-xl shadow-md p-8 w-full max-w-xl flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
        {/* Name */}
        <div>
          <input
            name="name"
            placeholder="Name*"
            value={form.name}
            onChange={handleChange}
            className="input w-full"
            required
          />
          {errors.name && <span className="text-rose-500 text-xs">{errors.name}</span>}
        </div>
        {/* Email */}
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email*"
            value={form.email}
            onChange={handleChange}
            className="input w-full"
            // required
          />
          {errors.email && <span className="text-rose-500 text-xs">{errors.email}</span>}
        </div>
        {/* Phone */}
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="input w-full"
        />
        {/* Address */}
        <div>
          <textarea
            name="address"
            placeholder="Address*"
            value={form.address}
            onChange={handleChange}
            className="input w-full"
            // required
            rows={3}
          />
          {errors.address && <span className="text-rose-500 text-xs">{errors.address}</span>}
        </div>
        {/* Notes */}
        <textarea
          name="notes"
          placeholder="Notes (optional)"
          value={form.notes}
          onChange={handleChange}
          className="input w-full"
          rows={2}
        />
        {/* Submit */}
        <button className="w-full bg-rose-600 text-white py-3 rounded-lg shadow font-bold text-lg mt-4 hover:bg-rose-700 transition">
          Place Order
        </button>
      </form>
    </div>
  );
}
