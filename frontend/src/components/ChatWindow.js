import React, { useState } from 'react';
import Message from './Message';
import MessageInput from './MessageInput';
import styles from './styles/ChatApp.module.css';

function ChatWindow({ chat }) {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'other' },
    { id: 2, text: 'Hi there!', sender: 'self' },
  ]);

  const handleSendMessage = (messageText) => {
    setMessages([
      ...messages,
      { id: messages.length + 1, text: messageText, sender: 'self' },
    ]);
  };

  return (
    <div className={styles.chatWindow}>
      <h3>{chat}</h3>
      <div className={styles.messages}>
        {messages.map((message) => (
          <Message key={message.id} text={message.text} sender={message.sender} />
        ))}
      </div>
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
}

export default ChatWindow;
