import React, { useState } from 'react';
import styles from './styles/ChatApp.module.css';

function MessageInput({ onSend }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className={styles.messageInput}>
      <input
        type="text"
        className={styles.input}
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className={styles.sendButton} onClick={handleSend}>
        Send
      </button>
    </div>
  );
}

export default MessageInput;
