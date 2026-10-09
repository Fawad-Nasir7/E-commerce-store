
function Hero() {
  return (
    <section className="overflow-hidden bg-purple-50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* Hero Text */}
        <div>
          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Your Everyday Shopping Destination
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Shop Smart.
            <span className="block text-purple-700">Live Better.</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-8 text-gray-600">
            Discover quality products, explore the latest trends, and enjoy
            a simple shopping experience with ShopEase.
          </p>

          <a
            href="#products"
            className="mt-8 inline-block rounded-xl bg-purple-700 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-purple-800"
          >
            Shop Now →
          </a>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
            <span>✓ Quality Products</span>
            <span>✓ Easy Shopping</span>
            <span>✓ Great Selection</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="absolute inset-4 rounded-3xl bg-purple-200 blur-2xl" />

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
            alt="Modern shopping store"
            className="relative h-72 w-full rounded-3xl object-cover shadow-xl sm:h-96"
          />

          <div className="absolute bottom-5 left-5 rounded-xl bg-white p-4 shadow-lg">
            <p className="text-sm text-gray-500">Discover more</p>
            <p className="font-bold text-gray-900">Your style, your choice.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
