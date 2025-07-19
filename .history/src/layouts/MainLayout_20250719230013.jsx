// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Cart from '../components/Cart/Cart'; // ✅ Add this
import styles from './MainLayout.module.css'; // ✅ Create a CSS module to style layout

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.layoutWrapper}>
        <main className={styles.main}>
          <Outlet /> {/* Renders ShiftPage, MenuPage, etc. */}
        </main>
        <Cart /> {/* ✅ Always shows Cart on the right */}
      </div>
    </>
  );
};

export default MainLayout;