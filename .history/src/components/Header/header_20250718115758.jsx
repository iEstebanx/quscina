import styles from '../../Header.module.css';
import { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.topHeader}>
        <button className={styles.hamburger} onClick={() => setIsOpen(true)}>
          ☰
        </button>
        <h1 className={styles.brand}>Hakdog POS</h1>
      </header>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>
      )}

      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <nav className={styles.menu}>
          <div className={styles.profile}>
            <div className={styles.name}>Harley Reginald</div>
            <div className={styles.id}>20250005</div>
            <div className={styles.role}>Cashier</div>
          </div>

          <ul className={styles.navLinks}>
            <li><a href="#">🛒 Sales</a></li>
            <li><a href="#">📄 Receipt</a></li>
            <li><a href="#">⏱️ Shift</a></li>
          </ul>

          <div className={styles.logout}>
            <a href="#">🔓 Logout</a>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Header
