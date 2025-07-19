import styles from './Refund.module.css';

const RefundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Refunds</h1>
      <p className={styles.desc}>Process and track refunds here.</p>
      {/* Add refund form or history here */}
    </div>
  );
};

export default RefundPage;
