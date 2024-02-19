import React from 'react';
import './home.module.css';
import styles from './home.module.css';
import Sidebar from '../../components/Sidebar';
import logo from '../../img/Logo_rosa.svg';
import imghome from '../../img/Home.svg';
import imgcartao from '../../img/Cartao.svg';
import imgcarteira from '../../img/Carteira.svg';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <label className={styles.nomelogo}>SwiftPay</label>
        <nav className={styles.navegador}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><img src={imghome} alt="Home" className={styles.img} />
            <label className={styles.navN}>Inicio</label></li>
            <li i className={styles.navItem}><img src={imgcarteira} alt="Carteira" className={styles.imgNav} />
            <label className={styles.navN}>Carteira</label></li>
            <li className={styles.navItem}><img src={imgcartao} alt="Cartao" className={styles.imgNav} />
            <label className={styles.navN}>Cartao</label></li>
            
          </ul>
        </nav>
      </div>
    </div >
  );
};

export default Home;
