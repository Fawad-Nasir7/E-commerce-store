
import { useState } from "react";

const products = [
  {
    id: 1,
    category: "Electronics",
    name: "Wireless Headphones",
    description: "Enjoy your favorite music anywhere.",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    cartImage:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&q=80",
  },
  {
    id: 2,
    category: "Fashion",
    name: "Running Sneakers",
    description: "Comfortable shoes for everyday wear.",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    cartImage:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=300&q=80",
  },
  {
    id: 3,
    category: "Electronics",
    name: "Smart Watch",
    description: "A smart companion for your daily routine.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    cartImage:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=300&q=80",
  },
  {
    id: 4,
    category: "Accessories",
    name: "Travel Backpack",
    description: "Carry your essentials with ease.",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    cartImage:
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=300&q=80",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Add product to cart
  function addToCart(product) {
    setCart((previousCart) => {
      const existing = previousCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  }

  // Increase quantity
  function increaseQuantity(id) {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // Decrease quantity
  function decreaseQuantity(id) {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Remove item from cart
  function removeFromCart(id) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  }

  // Search and category filter
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#fcfbf8] font-sans text-gray-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <a href="#" className="text-2xl font-black text-indigo-600">
            Shop<span className="text-gray-900">Ease</span>
          </a>

          <div className="hidden gap-6 font-medium md:flex">
            <a href="#" className="hover:text-indigo-600">Home</a>
            <a href="#products" className="hover:text-indigo-600">Products</a>
            <a href="#categories" className="hover:text-indigo-600">Categories</a>
            <a href="#footer" className="hover:text-indigo-600">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-36 rounded-xl border px-3 py-2 text-sm outline-none focus:border-indigo-500 sm:w-48"
            />

            <a
              href="#cart"
              className="rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700"
            >
              Cart ({cartCount})
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-100">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-12 md:py-24">
          <div>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm">
              Welcome to ShopEase
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
              Shop Smart.
              <span className="block text-indigo-600">
                Live Better.
              </span>
            </h1>

            <p className="mt-5 max-w-lg leading-7 text-gray-600">
              Discover quality products, explore the latest trends,
              and enjoy a simple shopping experience.
            </p>

            <a
              href="#products"
              className="mt-7 inline-block rounded-xl bg-indigo-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-indigo-700"
            >
              Shop Now →
            </a>

            <div className="mt-7 flex flex-wrap gap-4 text-sm text-gray-600">
              <span>✓ Quality Products</span>
              <span>✓ Easy Shopping</span>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=80"
            alt="Modern shopping store"
            className="h-72 w-full rounded-3xl object-cover shadow-xl md:h-96"
          />
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-6 py-16 md:px-12"
      >
        <p className="text-sm font-bold tracking-widest text-indigo-600">
          OUR COLLECTION
        </p>

        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          Featured Products
        </h2>

        <p className="mt-3 text-gray-500">
          Find something you will love.
        </p>

        {/* CATEGORY FILTER */}
        <div id="categories" className="mt-7 flex flex-wrap gap-3">
          {["All", "Electronics", "Fashion", "Accessories"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  category === item
                    ? "bg-indigo-600 text-white"
                    : "border bg-white text-gray-600 hover:border-indigo-400"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* PRODUCT CARDS */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-indigo-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-600 shadow">
                  {product.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-bold">{product.name}</h3>

                <p className="mt-2 h-10 text-sm text-gray-500">
                  {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="text-lg font-extrabold text-indigo-600">
                    ${product.price.toFixed(2)}
                  </span>

                  <button
                    onClick={() => addToCart(product)}
                    className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    + Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="mt-8 rounded-xl bg-white p-8 text-center text-gray-500">
            No products found. Try another search or category.
          </p>
        )}
      </section>

      {/* SHOPPING CART */}
      <section id="cart" className="bg-indigo-50 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-3xl font-black">Your Shopping Cart</h2>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-600">
              {cartCount} {cartCount === 1 ? "item" : "items"}
            </span>
          </div>

          {cart.length === 0 ? (
            <div className="rounded-2xl bg-white px-6 py-12 text-center shadow-sm">
              <p className="text-xl font-bold">Your cart is empty.</p>
              <p className="mt-2 text-gray-500">
                Add your favorite products to get started.
              </p>
              <a
                href="#products"
                className="mt-5 inline-block rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
              >
                Explore Products
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-wrap items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"
                >
                  {/* DIFFERENT IMAGE IN CART */}
                  <img
                    src={item.cartImage || item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-xl object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      ${item.price.toFixed(2)} each
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-2 text-sm font-semibold text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      aria-label={`Decrease ${item.name} quantity`}
                      className="h-9 w-9 rounded-lg border font-bold hover:bg-gray-100"
                    >
                      −
                    </button>

                    <span className="min-w-5 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      aria-label={`Increase ${item.name} quantity`}
                      className="h-9 w-9 rounded-lg border font-bold hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <p className="w-24 text-right font-extrabold text-indigo-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}

              {/* CART TOTAL */}
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-600">
                    Total
                  </span>
                  <span className="text-2xl font-black text-indigo-600">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() =>
                    window.alert(
                      "This is a demo checkout. No payment was processed."
                    )
                  }
                  className="mt-5 w-full rounded-xl bg-indigo-600 py-3 font-bold text-white transition hover:bg-indigo-700"
                >
                  Proceed to Checkout
                </button>

                <p className="mt-3 text-center text-xs text-gray-500">
                  Demo checkout — no payment will be processed.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="bg-gray-950 px-6 py-12 text-gray-300">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-black text-white">
              Shop<span className="text-indigo-400">Ease</span>
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Your everyday shopping destination for products you love.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#" className="hover:text-indigo-400">Home</a></li>
              <li><a href="#products" className="hover:text-indigo-400">Products</a></li>
              <li><a href="#categories" className="hover:text-indigo-400">Categories</a></li>
              <li><a href="#cart" className="hover:text-indigo-400">Cart</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white">Customer Support</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#footer" className="hover:text-indigo-400">Contact Us</a></li>
              <li><a href="#footer" className="hover:text-indigo-400">Shipping Information</a></li>
              <li><a href="#footer" className="hover:text-indigo-400">Returns & Refunds</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white">Stay Connected</h3>
            <p className="mt-4 text-sm text-gray-400">
              Thanks for shopping with ShopEase!
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ShopEase. Built with React.js and Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}

export default App;
