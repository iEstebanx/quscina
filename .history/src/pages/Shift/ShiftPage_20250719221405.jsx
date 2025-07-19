// src/pages/Shift/ShiftHistoryPage.jsx
import styles from './Shift.module.css';

const ShiftHistoryPage = () => {
  // For now, we’ll mock some history data
  const mockShifts = [
    { id: 1, date: '2025-07-01', cashStart: 1000, cashEnd: 3200 },
    { id: 2, date: '2025-07-02', cashStart: 800, cashEnd: 2600 },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shift History</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Starting Cash</th>
            <th>Ending Cash</th>
          </tr>
        </thead>
        <tbody>
          {mockShifts.map((shift) => (
            <tr key={shift.id}>
              <td>{shift.date}</td>
              <td>₱{shift.cashStart}</td>
              <td>₱{shift.cashEnd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShiftHistoryPage;
