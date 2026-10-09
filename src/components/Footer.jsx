
function Footer() {
  return (
    <footer id="footer" className="bg-gray-950 px-6 py-12 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#" className="text-2xl font-extrabold text-white">
            Shop<span className="text-purple-400">Ease</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
            Your everyday shopping destination for discovering products
            you love.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href="#" className="hover:text-purple-400">Home</a></li>
            <li><a href="#products" className="hover:text-purple-400">Products</a></li>
            <li><a href="#categories" className="hover:text-purple-400">Categories</a></li>
            <li><a href="#cart" className="hover:text-purple-400">Shopping Cart</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white">Customer Support</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href="#footer" className="hover:text-purple-400">Contact Us</a></li>
            <li><a href="#footer" className="hover:text-purple-400">Shipping Information</a></li>
            <li><a href="#footer" className="hover:text-purple-400">Returns & Refunds</a></li>
            <li><a href="#footer" className="hover:text-purple-400">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white">Stay Connected</h3>
          <p className="mt-4 text-sm text-gray-400">
            Follow us for product updates and new arrivals.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="rounded-lg bg-gray-800 px-3 py-2 hover:bg-purple-700">
              Instagram
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="rounded-lg bg-gray-800 px-3 py-2 hover:bg-purple-700">
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ShopEase. Built with React.js and Tailwind CSS.
      </div>
    </footer>
  );
}

export default Footer;