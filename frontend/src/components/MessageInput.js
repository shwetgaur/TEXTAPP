import React, { useState } from "react";
import styles from "./ChatApp.module.css";

const MessageInput = ({ onSend }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    onSend(inputValue);
    setInputValue(""); // Clear the input after sending
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Type your message..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.inputBox}
      />
      <button onClick={handleSend} className={styles.sendButton}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
