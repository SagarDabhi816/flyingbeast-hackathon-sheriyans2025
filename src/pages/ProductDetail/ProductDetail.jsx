import { useParams } from "react-router-dom";
import products from "../../Data/Products";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ProductDetailPage() {

   const auth = localStorage.getItem("isAuthenticated") === "true";

  
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || product?.image);
  const [buttonAnimation, setButtonAnimation] = useState(false);

  // New quantity state, initialize to 1
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-semibold">Product not found!</h2>
      </div>
    );
  }

  // Handler to add product with quantity to cart
  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // Pass quantity too
    setButtonAnimation(true);
    toast.success(`${product.name} added to cart!`);
    setTimeout(() => setButtonAnimation(false), 300);
  };

  // Handlers to increase/decrease quantity (min 1)
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));


  return (
    <div className="container mx-auto px-4 py-10 mt-30">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image & Thumbnails */}
        <div className="w-full md:w-1/2 p-8">
          <motion.img
            key={selectedImage}
            src={selectedImage}
            alt={product.name}
            initial={{ opacity: 0.2, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
             style={{objectFit: "cover"}}
            className="w-4/5 h-[80%] object-center !object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />

          {/* Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className="mt-4 flex gap-4 justify-center flex-wrap">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-full rounded-md object-cover cursor-pointer border-4 ${
                    selectedImage === img ? "border-white" : "border-transparent"
                  } hover:border-yellow-500 transition`}
                  alt={`Thumbnail ${index}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>

          <div className="text-3xl font-semibold text-rose-600 mb-6">₹{product.price}</div>

          {/* Quantity Selector */}
          <div className="flex items-center mb-6 space-x-4">
            <button
              onClick={decrementQuantity}
              className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400 transition"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <div className="text-xl font-semibold w-10 text-center">{quantity}</div>
            <button
              onClick={incrementQuantity}
              className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400 transition"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

        

          {
            auth ? (
               <motion.button
            onClick={handleAddToCart}
            animate={buttonAnimation ? { scale: 1.2 } : { scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-rose-700 active:scale-95"
          >
            Add to Cart
          </motion.button>
            ) : (
              // <p className="text-sm text-red-500 mt-2">
              //   Please log in to add items to your cart.
              // </p>
                <motion.button
            onClick={()=>toast.error("Please login to add items to cart")}
            animate={buttonAnimation ? { scale: 1.2 } : { scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-rose-700 active:scale-95"
          >
          Please log in to add items to your cart.
          </motion.button>
            )
          }
        </div>
      </div>
    </div>
  );
}
