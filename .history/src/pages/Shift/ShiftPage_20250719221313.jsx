// src/pages/Shift/ShiftPage.jsx
import styles from './Shift.module.css';
import { useState } from 'react';
import FloatingShiftModal from '../../components/modals/FloatingShiftModal';

const ShiftPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shift is Closed</h1>
      <p className={styles.desc}>Open a shift to perform sales</p>
      <button className={styles.openButton} onClick={() => setIsModalOpen(true)}>
        Open Shift
      </button>

      {isModalOpen && (
        <FloatingShiftModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default ShiftPage;
