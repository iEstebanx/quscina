// pages/Menu/MenuPage.jsx
import styles from './Menu.module.css';

const MenuPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Menu</h1>
      <div className={styles.grid}>
        {/* Sample menu items */}
        <div className={styles.card}>
          <h3 className={styles.itemName}>Café Latte</h3>
          <p className={styles.price}>₱120</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.itemName}>Iced Americano</h3>
          <p className={styles.price}>₱110</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.itemName}>Matcha Milk Tea</h3>
          <p className={styles.price}>₱130</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.itemName}>Taro Milk Tea</h3>
          <p className={styles.price}>₱125</p>
        </div>
        {/* Add more items dynamically or statically here */}
      </div>
    </div>
  );
};

export default MenuPage;
