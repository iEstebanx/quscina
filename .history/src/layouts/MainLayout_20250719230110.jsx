// src/layouts/MainLayout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Cart from '../components/Cart/Cart';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  const location = useLocation();

  // Pages where Cart should NOT appear
  const hideCartRoutes = ['/receipts', '/shift/history', '/refund'];

  const shouldShowCart = !hideCartRoutes.includes(location.pathname);

  return (
    <>
      <Header />
      <div className={styles.layoutWrapper}>
        <main className={styles.main}>
          <Outlet />
        </main>

        {shouldShowCart && <Cart />}
      </div>
    </>
  );
};

export default MainLayout;
