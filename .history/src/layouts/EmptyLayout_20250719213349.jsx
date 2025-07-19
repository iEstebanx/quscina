import { Outlet } from 'react-router-dom';
import styles from './EmptyLayout.module.css';

const EmptyLayout = () => {
  return (
    <div className={styles.emptyLayout}>
      <Outlet />
    </div>
  );
};

export default EmptyLayout;
