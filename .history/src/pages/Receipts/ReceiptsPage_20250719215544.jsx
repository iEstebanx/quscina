// pages/Receipts/ReceiptsPage.jsx
import styles from './receipts.module.css';

const ReceiptsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Receipts</h1>
      <p className={styles.desc}>All transaction receipts will be shown here.</p>
      {/* Add receipt list or search here */}
    </div>
  );
};

export default ReceiptsPage;
