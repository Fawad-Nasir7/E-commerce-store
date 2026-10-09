
function Navbar({ search, setSearch, cartCount }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold text-purple-700">
          Shop<span className="text-gray-900">Ease</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-6 md:flex">
          <a href="#" className="font-medium text-gray-700 hover:text-purple-700">
            Home
          </a>
          <a href="#products" className="font-medium text-gray-700 hover:text-purple-700">
            Products
          </a>
          <a href="#categories" className="font-medium text-gray-700 hover:text-purple-700">
            Categories
          </a>
          <a href="#footer" className="font-medium text-gray-700 hover:text-purple-700">
            Contact
          </a>
        </div>

        {/* Search and Cart */}
        <div className="flex items-center gap-3">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-36 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-purple-600 sm:w-48"
          />

          <a
            href="#cart"
            className="relative rounded-lg bg-purple-700 px-4 py-2 font-semibold text-white transition hover:bg-purple-800"
          >
            Cart
            <span className="ml-2 rounded-full bg-white px-2 py-1 text-xs text-purple-700">
              {cartCount}
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
