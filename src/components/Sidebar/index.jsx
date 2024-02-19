import React from 'react';
import styles from './sidebar.module.css';
import './sidebar.module.css'
import logo from '../../img/Logo_rosa.svg';
import home from '../../img/Home.svg';
import cartao from '../../img/Cartao.svg';
import carteira from '../../img/Carteira.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="sidebar-items">
        <li><img src={home} alt="Ícone 1" className="icon" /></li>
        <li><img src={cartao} alt="Ícone 2" className="icon" /></li>
        <li><img src={carteira} alt="Ícone 3" className="icon" /></li>
      </ul>
    </div>
  );
};

export default Sidebar;
