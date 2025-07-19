import styles from '../Header/Header.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    setIsOpen(false); // Close sidebar after navigating
  };

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
            <li><button onClick={() => handleNav('/menu')}>🛒 Sales</button></li>
            <li><button onClick={() => handleNav('/receipts')}>📄 Receipt</button></li>
            <li><button onClick={() => handleNav('/shift/history')}>⏱️ Shift History</button></li>
          </ul>

          <div className={styles.logout}>
            <button onClick={() => handleNav('/logout')}>🔓 Logout</button>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Header;
