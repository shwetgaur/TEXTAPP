// Sidebar.js
import React from "react";

const Sidebar = ({ users, setActiveChat }) => {
  return (
    <div className="sidebar">
      <h2>Chats</h2>
      {users.map(user => (
        <div key={user.id} onClick={() => setActiveChat(user)}>
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;