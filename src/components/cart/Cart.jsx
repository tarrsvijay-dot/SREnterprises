import "./Cart.css";

function Cart({ cart, setCart }) {

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty.
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>₹{item.price.toLocaleString()}</p>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>
                </div>
              </div>

              <button
                className="remove-button"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>

            </div>
          ))}

          <div className="cart-total">
            <strong>Total: ₹{total.toLocaleString()}</strong>
          </div>

          <button className="checkout-button">
            Proceed to Checkout
          </button>
        </>
      )}

    </div>
  );
}

export default Cart;