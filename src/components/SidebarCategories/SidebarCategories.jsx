import styles from './SidebarCategories.module.css';

function SidebarCategories() {
  const categories = ['Burgers', 'Pasta', 'Pizza', 'Drinks', 'Desserts'];

  return (
    <aside className={styles.sidebar}>
      <h2>Categories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
    </aside>
  );
}

export default SidebarCategories;
