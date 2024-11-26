import React from "react";
import styles from "./ChatApp.module.css";

const Header = ({ username }) => {
  return (
    <div className={styles.header}>
      <h2>ChatApp</h2>
      <div className={styles.profile}>
        <span className={styles.username}>{username}</span>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className={styles.profilePic}
        />
      </div>
    </div>
  );
};

export default Header;
