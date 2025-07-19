// pages/Login/LoginPage.jsx
import { useState } from 'react';
import styles from './Login.module.css';

const LoginPage = () => {
  const [employeeID, setEmployeeID] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { employeeID, password });
    // Replace with real login logic
  };

  return (
    <div className={styles.loginWrapper}>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <h2 className={styles.title}>Login</h2>

        <label className={styles.label}>Employee ID</label>
        <input
          type="text"
          className={styles.input}
          value={employeeID}
          onChange={(e) => setEmployeeID(e.target.value)}
          required
        />

        <label className={styles.label}>Password</label>
        <input
          type="password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className={styles.button}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
