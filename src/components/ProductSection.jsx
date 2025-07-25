import ProductCard from "./ProductCard";

export default function ProductSection({ category, products }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 ml-2">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
