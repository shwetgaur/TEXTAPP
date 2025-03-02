// src/components/Message.js
import React from "react";

const Message = ({ msg }) => {
  const isMe = msg.senderId === auth.currentUser.uid;
  
  return (
    <div style={{
      textAlign: isMe ? "right" : "left",
      padding: "5px",
      margin: "5px",
      background: isMe ? "#dcf8c6" : "#f1f1f1",
      borderRadius: "10px",
      display: "inline-block"
    }}>
      <p>{msg.text}</p>
    </div>
  );
};

export default Message;
