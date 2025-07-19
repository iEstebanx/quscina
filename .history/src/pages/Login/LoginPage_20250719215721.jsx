// pages/Login/LoginPage.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const LoginPage = () => {
  const [employeeID, setEmployeeID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // 🔧 TEMP: Automatically redirect to /menu to bypass login
  useEffect(() => {
    // Simulate already-logged-in behavior
    navigate('/menu');
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { employeeID, password });

    // TODO: Re-enable real login logic later
    // if (isValidCredentials(employeeID, password)) {
    //   saveAuthTokenOrSession();
    //   navigate('/menu');
    // } else {
    //   alert('Invalid credentials');
    // }
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
