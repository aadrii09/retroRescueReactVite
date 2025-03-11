import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <div className='nes-container with-title is-centered m-5'>
      <h2 className='title'>Carrito de compra</h2>
      {cart.length > 0 ? (
        <>
          <ul className="nes-list is-disc">
            {cart.map((item) => (
              <li key={item.id} className="nes-text">
                {item.name} x {item.quantity} = ${item.price * item.quantity}
                <button
                  className="nes-btn is-error"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
              </li>
            ))}
          </ul>
          <button
            className='nes-btn is-error'
            onClick={clearCart}
          >
            Limpiar Carrito
          </button>
        </>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  )
}

export default Cart