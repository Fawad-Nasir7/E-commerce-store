
function ProductCard({ product, addToCart }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-purple-700 shadow">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h3 className="truncate text-lg font-bold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          {product.description || "A great choice for everyday use."}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-xl font-extrabold text-purple-700">
            ${Number(product.price).toFixed(2)}
          </span>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-800 active:scale-95"
          >
            + Add
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
