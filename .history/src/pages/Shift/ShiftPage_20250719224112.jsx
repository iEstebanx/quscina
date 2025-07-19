import { useShift } from '../../context/ShiftContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ ADD THIS
import styles from './Shift.module.css';

const ShiftPage = () => {
  const { shift, openShift } = useShift();
  const [amount, setAmount] = useState('');
  const navigate = useNavigate(); // ✅ INIT

  const handleOpenShift = () => {
    const numeric = parseFloat(amount);
    if (!isNaN(numeric) && numeric >= 0) {
      openShift(numeric);
      navigate('/menu'); // ✅ REDIRECT AFTER SHIFT IS OPEN
    }
  };

  return (
    <div className={styles.container}>
      {shift.isOpen ? (
        <h2>Shift is already open!</h2>
      ) : (
        <div className={styles.shiftBox}>
          <h1>Shift is Closed</h1>
          <p>Open a shift to perform sales</p>
          <input
            type="number"
            placeholder="Enter starting cash"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleOpenShift}>Open Shift</button>
        </div>
      )}
    </div>
  );
};

export default ShiftPage;
