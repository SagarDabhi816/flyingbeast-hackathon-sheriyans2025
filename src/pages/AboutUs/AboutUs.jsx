export default function AboutUs() {
  return (
    <div className="about-page  text-gray-800">

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] bg-cover bg-center mt-30" style={{
        backgroundImage:
          "url('https://www.rosierfoods.com/cdn/shop/files/A_NOTE_FROM_OUR_FOUNDER_Website_1.png?v=1743061487&width=2000')"
      }}>
        <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          {/* Use your logo instead of text if available */}
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Rosier Foods
          </h1>
          <p className="text-white text-lg md:text-2xl font-light max-w-2xl drop-shadow-md">
            Crafted by Nature. Perfected by Tradition.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-rose-50 py-16 px-6 md:px-20 text-center md:text-left flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Rosier Foods was born from a passion for authentic nourishment and a belief in the power of nature’s bounty. We partner directly with Indian farmers, ensuring every product carries the purity of tradition and the care of conscious sourcing.
            <br /><br />
            From our kitchen to yours, we’re committed to real taste, clean ingredients, and joyful health for families everywhere.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://www.rosierfoods.com/cdn/shop/files/rosier_family.png?v=1743061819&width=750"
            alt="Founder or Team"
            className="rounded-xl shadow-lg w-[70%] mx-auto md:mx-0 object-cover"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            {
              title: "Purity",
              desc: "100% natural, no artificial additives",
              icon: "🍃",
            },
            {
              title: "Tradition",
              desc: "Sourced and crafted using ancestral methods",
              icon: "🛕",
            },
            {
              title: "Sustainability",
              desc: "Transparent sourcing and ethical trade",
              icon: "🌍",
            },
            {
              title: "Wellness",
              desc: "Made for families, fitness, and festive rituals",
              icon: "💪",
            },
          ].map(({ title, desc, icon }) => (
            <div
              key={title}
              className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center"
              aria-label={title}
            >
              <div className="text-4xl mb-4 animate-pulse">{icon}</div>
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Showcase Mosaic */}
      <section className="bg-rose-50 py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Product Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">

          {[
            {
              name: "Energy Bars",
              caption: "Nature’s energy, anytime snack",
              image: "https://www.rosierfoods.com/cdn/shop/files/4_Orange_Cocoa.jpg?v=1743769781&width=823",
            },
            {
              name: "Oils",
              caption: "Cold-pressed for real flavor",
              image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "Ghee",
              caption: "A2 cow ghee, the golden elixir",
              image: "https://images.unsplash.com/photo-1565992449538-6f6a8af44a48?auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "Nut Butters",
              caption: "Pure, protein-rich spreads",
              image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "Pooja Essentials",
              caption: "For every sacred moment",
              image: "https://images.unsplash.com/photo-1518432030-fd8a0d487782?auto=format&fit=crop&w=400&q=80",
            },
          ].map(({ name, caption, image }) => (
            <div
              key={name}
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transform transition duration-300"
              tabIndex={0}
              role="button"
              aria-label={`${name}: ${caption}`}
            >
              <img
                src={image}
                alt={name}
                className="w-full h-60 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg mb-1">{name}</h3>
                <p className="text-gray-600 text-sm">{caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Rosier */}
      <section className="py-16 px-6 md:px-20 bg-rose-100 max-w-7xl mx-auto rounded-lg text-center">
        <h2 className="text-3xl font-semibold mb-12">Why Choose Rosier?</h2>

        <div className="flex flex-col md:flex-row justify-center gap-12 max-w-5xl mx-auto">
          {[
            "Trusted by hundreds of health-conscious homes",
            "Supports Indian farmers and rural livelihoods",
            "Stringent quality checks on every batch",
            "Eco-friendly packaging with care",
          ].map((reason, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 md:flex-col md:justify-center md:text-center"
            >
              <div className="text-3xl text-rose-600 font-bold">✔️</div>
              <p className="text-lg text-gray-700 max-w-xs">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer & Contact Section */}
      <footer className="bg-white py-12 mt-16 border-t border-gray-200 text-center">
        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
        <p className="mb-3 text-gray-600">
          Email: <a href="mailto:support@rosierfoods.com" className="text-rose-600 hover:underline">support@rosierfoods.com</a>
        </p>
        <p className="mb-6 text-gray-600">
          WhatsApp: <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="text-rose-600 hover:underline">+91 12345 67890</a>
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com/rosierfoods" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-rose-600 hover:text-rose-800 text-2xl">📘</a>
          <a href="https://instagram.com/rosierfoods" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-rose-600 hover:text-rose-800 text-2xl">📸</a>
          <a href="https://twitter.com/rosierfoods" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-rose-600 hover:text-rose-800 text-2xl">🐦</a>
        </div>
        <a
          href="/products"
          className="inline-block bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-rose-700 transition"
        >
          Discover Our Products
        </a>
      </footer>
    </div>
  );
}
