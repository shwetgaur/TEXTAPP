import React from 'react';
import styles from './ChatList.module.css';

const ChatList = () => {
  return (
    <div className={styles.chatList}>
      <h3>Chats</h3>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
    </div>
  );
};

export default ChatList;
