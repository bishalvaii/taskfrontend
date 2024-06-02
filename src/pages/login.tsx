import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import styles from '../styles/LoginComponent.module.css'; 

const LoginPage: React.FC = () => {
const [username, setUsername] = useState<string>('');
const [password, setPassword] = useState<string>('');

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy authentication logic
    if (username === 'admin' && password === 'password') {
      // Set token of cookie
      Cookies.set('token', 'validToken', { path: '/' });
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Username: </label>
          <input 
            type="text" 
            value={username} 
            className={styles.input}
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password: </label>
          <input 
            type="password" 
            value={password} 
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
