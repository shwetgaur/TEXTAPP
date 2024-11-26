import React from 'react';
import styles from './styles/ChatApp.module.css';

function Message({ text, sender }) {
  return (
    <div
      className={`${styles.message} ${sender === 'self' ? styles.self : styles.other}`}
    >
      {text}
    </div>
  );
}

export default Message;
