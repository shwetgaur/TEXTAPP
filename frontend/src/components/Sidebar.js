import React, { useState } from 'react';
import styles from './styles/Sidebar.module.css';

function Sidebar({ onChatSelect }) {
  const [search, setSearch] = useState('');
  const users = ['Alice', 'Bob', 'Charlie'];

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.sidebar}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className={styles.userList}>
        {filteredUsers.map((user, index) => (
          <li key={index} onClick={() => onChatSelect(user)}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
