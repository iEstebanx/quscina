// pages/NotFound/NotFoundPage.jsx
import { Link } from 'react-router-dom';
import styles from './Notfound.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Page Not Found</p>
      <Link to="/" className={styles.homeLink}>
        Go back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
