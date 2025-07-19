import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigation
import styles from '../CSS/Header.module.css'; // Adjust if needed

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // Close menu after navigation (optional)
  };

  return (
    <header className={styles['top-header']}>
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {isOpen && (
        <nav className={styles.menu}>
          <ul>
            <li onClick={() => handleNavigate('/menu')}>Sales</li>
            <li onClick={() => handleNavigate('/receipts')}>Receipt Page</li>
            <li onClick={() => handleNavigate('/shift')}>Shift History</li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
