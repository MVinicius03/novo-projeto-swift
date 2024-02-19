import React from 'react';
import './carteira.module.css';
import styles from './carteira.module.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import imgcartao from '../../img/Cartao.svg';
import imgempre from '../../img/Empres.svg'
import emprest from '../../img/imagemEmpress.svg';
import banner from '../../img/banner.svg';
import logocor from '../../img/SoloCorlorida.svg';
import logorosa from '../../img/Logo_rosa.svg';

const Carteira = () => {
  return (
    <>
      <div className={styles.inicio}>
        <header className={styles.header}><label className={styles.nomei}>Cartões</label>
          <img src={logorosa} alt="logorosa" className={styles.logorosa} />
        </header>
      </div >
      <div className={styles.cartaoD}>
        <img src={logocor} alt="logocor" className={styles.logocor} />
        <label className={styles.name1}>SwiftPay</label>
        <p className={styles.nome2}>Seu banco  digital</p>
      </div>


      <div className={styles.cart}>
        <img src={imgempre} alt="Cartao" className={styles.imgC} />
        <label className={styles.nome1}><b>Fazer empréstimo</b></label>
      </div>


      <div className={styles.addCar}>
        <Link to="/" className={styles.linkadd}></Link>
      </div>
      <div className={styles.links}>
      </div>
    </>
  );
};

export default Carteira;