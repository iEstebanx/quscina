import styles from './Cart.module.css';

function Cart() {
  const items = [
    { name: 'Cheeseburger', qty: 2, price: 99 },
    { name: 'Pizza', qty: 1, price: 150 },
  ];

  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <aside className={styles.cart}>
      <h2>Cart</h2>
      {items.map((item) => (
        <div key={item.name} className={styles.item}>
          <span>{item.qty}× {item.name}</span>
          <span>₱{item.qty * item.price}</span>
        </div>
      ))}
      <hr />
      <div className={styles.total}>
        <strong>Total:</strong> ₱{total}
      </div>
    </aside>
  );
}

export default Cart;
