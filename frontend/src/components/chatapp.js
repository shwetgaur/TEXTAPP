import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import styles from './styles/ChatApp.module.css';

function ChatApp() {
  const [activeChat, setActiveChat] = useState(null);

  const handleChatSelect = (chat) => {
    setActiveChat(chat);
  };

  return (
    <div className={styles.chatApp}>
      <Sidebar onChatSelect={handleChatSelect} />
      {activeChat ? <ChatWindow chat={activeChat} /> : <div className={styles.noChat}>Select a chat</div>}
    </div>
  );
}

export default ChatApp;
