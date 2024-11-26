import React from 'react';
import styles from './Header.module.css';

const Header = ({ username }) => {
  return (
    <div className={styles.header}>
      <h2>{username}</h2>
    </div>
  );
};

export default Header;
