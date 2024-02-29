import React, { useState } from 'react';
import styles from './sidebar.module.css';
import './sidebar.module.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className={`${styles.sidebar} ${open ? styles.open : ''}`}>
      <div className={styles.toggleButton} onClick={toggleSidebar}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}><Link>aa</Link></li>
        <li className={styles.menuItem}><Link>bb</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;