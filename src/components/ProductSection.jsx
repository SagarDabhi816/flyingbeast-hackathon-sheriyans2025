import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductSection({ category, products }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only observe once
        }
      },
      { threshold: 0.1 } // Slight scroll into view triggers
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mb-8" ref={sectionRef}>
      {isVisible && (
        <>
          <h2 className="text-2xl font-semibold mb-4 ml-2">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
