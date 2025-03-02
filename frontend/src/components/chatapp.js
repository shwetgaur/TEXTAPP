import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import SearchUsers from "./SearchUsers";

const ChatApp = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "30%", borderRight: "1px solid gray", padding: "10px" }}>
        <h2>Search Users</h2>
        <SearchUsers onSelectUser={setSelectedUser} />
      </div>
      <div style={{ width: "70%", padding: "10px" }}>
        {selectedUser ? (
          <ChatWindow user={selectedUser} />
        ) : (
          <h2>Select a user to start chatting</h2>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
