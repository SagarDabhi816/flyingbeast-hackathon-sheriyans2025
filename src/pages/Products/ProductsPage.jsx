import products from "../../Data/Products.js";
import ProductSection from "../../components/ProductSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const categories = [...new Set(products.map((p) => p.category))];

export default function ProductsPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Optional: scroll to top if no hash present
      window.scrollTo({ top:0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="container mx-auto px-4 py-10 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      {categories.map((category) => (
         <section key={category} id={category.replace(/\s+/g, "")} className="mb-16">
          <ProductSection
            category={category}
            products={products.filter((p) => p.category === category)}
          />
        </section>
      ))}
    </div>
  );
}
