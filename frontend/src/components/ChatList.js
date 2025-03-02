// src/components/ChatList.js
import React from "react";

const ChatList = ({ users, onSelectUser }) => {
  return (
    <div style={{ width: "30%", borderRight: "1px solid #ccc", padding: "10px" }}>
      <h3>Search Users</h3>
      {users.map((user) => (
        <div key={user.uid} style={{ padding: "10px", cursor: "pointer", borderBottom: "1px solid #eee" }} onClick={() => onSelectUser(user)}>
          {user.displayName}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
