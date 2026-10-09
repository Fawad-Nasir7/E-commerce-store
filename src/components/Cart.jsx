
function Cart({ cart, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const itemCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <section id="cart" className="bg-gray-50 px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Your Shopping Cart
          </h2>

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </span>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
            <p className="text-xl font-semibold text-gray-700">
              Your cart is empty.
            </p>
            <p className="mt-2 text-gray-500">
              Browse our products and add something you like!
            </p>
            <a
              href="#products"
              className="mt-5 inline-block rounded-lg bg-purple-700 px-5 py-3 font-semibold text-white hover:bg-purple-800"
            >
              Explore Products
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded-lg object-cover"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    ${Number(item.price).toFixed(2)} each
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-purple-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 text-sm font-semibold text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-700">
                  Total
                </span>
                <span className="text-2xl font-extrabold text-purple-700">
                  ${total.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                onClick={() =>
                  alert("Checkout is a demo. Connect a payment service to accept payments.")
                }
                className="mt-5 w-full rounded-xl bg-purple-700 py-3 font-semibold text-white transition hover:bg-purple-800"
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
  );
}

export default Cart;
