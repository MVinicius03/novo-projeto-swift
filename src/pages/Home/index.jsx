import React from 'react';
import './home.module.css';
import styles from './home.module.css';
import logo from '../../img/Logo_rosa.svg';
import imghome from '../../img/Home.svg';
import imgcartao from '../../img/Cartao.svg';
import imgcarteira from '../../img/Carteira.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.responsividade}>
      <div className={styles.home}>
        <div className={styles.container}>
          <div className={styles.bancologodiv}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <label className={styles.nomelogo}>SwiftPay</label>
          </div>
          <nav className={styles.navegador}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link to="/Inicio" className={styles.linksItem}>
                  <img src={imghome} alt="Home" className={styles.img} />
                  <label className={styles.navN}>Inicio</label>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/Cartoes" className={styles.linksItem}>
                  <img src={imgcartao} alt="Cartao" className={styles.imgNav} />
                  <label className={styles.navN}>Cartao</label>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div >
  );
};

export default Home;
