import React, { useState } from "react";
import Header from "./header";
import Message from "./Message";
import MessageInput from "./MessageInput";
import styles from "./ChatApp.module.css"; // Scoped CSS file

const ChatApp = () => {
  // State to store the list of messages
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How are you?", sender: "other" },
    { id: 2, text: "I'm good, thanks! And you?", sender: "self" },
  ]);

  // Function to handle sending a new message
  const sendMessage = (messageText) => {
    if (messageText.trim() !== "") {
      // Add the new message to the list
      setMessages([
        ...messages,
        { id: messages.length + 1, text: messageText, sender: "self" },
      ]);
    }
  };

  return (
    <div className={styles.chatApp}>
      <Header username="John Doe" />
      <div className={styles.messageContainer}>
        {/* Loop through messages and render each one */}
        {messages.map((message) => (
          <Message
            key={message.id}
            text={message.text}
            sender={message.sender}
          />
        ))}
      </div>
      <MessageInput onSend={sendMessage} />
    </div>
  );
};

export default ChatApp;
