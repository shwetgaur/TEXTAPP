import React, { useState } from 'react';
import styles from './styles/Login.module.css';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleAuth = async () => {
    try {
      if (isNewUser) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Account created successfully!');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful!');
      }
      onLogin(); // Proceed after successful authentication
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>BETTERGRAM</h1>
        <input
          type="email"
          className={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.loginButton} onClick={handleAuth}>
          {isNewUser ? 'Sign Up' : 'Login'}
        </button>
        <button className={styles.signupButton} onClick={() => setIsNewUser(!isNewUser)}>
          {isNewUser ? 'Already have an account? Login' : 'New User? Sign Up'}
        </button>
      </div>
    </div>
  );
}

export default Login;
