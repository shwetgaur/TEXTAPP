import React, { useEffect, useState } from "react";
import { db, auth } from "../firebaseConfig";
import { collection, addDoc, query, where, orderBy, onSnapshot } from "firebase/firestore";

const ChatWindow = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const chatId = [auth.currentUser.uid, user.id].sort().join("_");
    const messagesRef = collection(db, "messages");

    const q = query(messagesRef, where("chatId", "==", chatId), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [user]);

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;
    
    const chatId = [auth.currentUser.uid, user.id].sort().join("_");

    await addDoc(collection(db, "messages"), {
      chatId,
      senderId: auth.currentUser.uid,
      receiverId: user.id,
      text: newMessage,
      timestamp: new Date(),
    });

    setNewMessage("");
  };

  return (
    <div>
      <h2>Chat with {user.name}</h2>
      <div style={{ minHeight: "300px", border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{ marginBottom: "5px" }}>
            <strong>{msg.senderId === auth.currentUser.uid ? "You" : user.name}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
        style={{ width: "80%", padding: "8px" }}
      />
      <button onClick={sendMessage} style={{ padding: "8px", marginLeft: "10px" }}>Send</button>
    </div>
  );
};

export default ChatWindow;
