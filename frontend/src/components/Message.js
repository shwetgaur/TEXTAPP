import React from "react";
import styles from "./ChatApp.module.css";

const Message = ({ text, sender }) => {
  return (
    <div
      className={`${styles.message} ${
        sender === "self" ? styles.self : styles.other
      }`}
    >
      {text}
    </div>
  );
};

export default Message;
