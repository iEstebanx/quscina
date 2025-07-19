// src/components/modals/FloatingShiftModal.jsx
import styles from './FloatingShiftModal.module.css';
import { useState } from 'react';

const FloatingShiftModal = ({ onClose }) => {
  const [amount, setAmount] = useState('');

  const handleOpenShift = () => {
    // Logic for opening shift
    console.log('Opening shift with:', amount);
    onClose();
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h2>Open Shift</h2>
        <p>Specify the cash amount in your drawer at the start of the shift</p>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className={styles.buttons}>
          <button onClick={handleOpenShift}>Open Shift</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default FloatingShiftModal;
