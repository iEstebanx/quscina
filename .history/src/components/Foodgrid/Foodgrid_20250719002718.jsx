import styles from './FoodGrid.module.css';

function FoodGrid() {
  const foods = [
    { name: 'Cheeseburger', price: 99 },
    { name: 'Carbonara', price: 120 },
    { name: 'Pepperoni Pizza', price: 150 },
  ];

  return (
    <div className={styles.grid}>
      {foods.map((item) => (
        <div key={item.name} className={styles.card}>
          <h3>{item.name}</h3>
          <p>₱{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default FoodGrid;
