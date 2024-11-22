import React, { useState } from "react";

function ChatWindow({ chat, user }) {
    const [messages, setMessages] = useState([
        { id: 1, sender: "John Doe", content: "Hello!" },
        { id: 2, sender: user.username, content: "Hi!" },
    ]);

    const [newMessage, setNewMessage] = useState("");

    const sendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { id: Date.now(), sender: user.username, content: newMessage }]);
            setNewMessage("");
        }
    };

    return (
        <div>
            <h2>Chat with {chat.name}</h2>
            <div style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "scroll" }}>
                {messages.map((msg) => (
                    <div key={msg.id}>
                        <strong>{msg.sender}:</strong> {msg.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                placeholder="Type a message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default ChatWindow;
