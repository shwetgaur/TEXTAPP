// src/components/MessageInput.js
import React, { useState } from "react";

const MessageInput = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSendMessage(text);
      setText("");
    }
  };

  return (
    <div style={{ display: "flex", padding: "10px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        style={{ flex: 1, padding: "10px" }}
      />
      <button onClick={handleSend} style={{ marginLeft: "10px", padding: "10px" }}>Send</button>
    </div>
  );
};

export default MessageInput;
