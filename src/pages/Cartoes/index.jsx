import React from 'react';
import './cartoes.module.css';
import styles from './cartoes.module.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import imgcartao from '../../img/Cartao.svg';
import imgempre from '../../img/Empres.svg'
import emprest from '../../img/imagemEmpress.svg';
import banner from '../../img/banner.svg';
import logocor from '../../img/SoloCorlorida.svg';
import logorosa from '../../img/Logo_rosa.svg';

const Cartoes = () => {
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
        <img src={imgcartao} alt="Cartao" className={styles.imgC} />
        <label className={styles.nome1}><b>Cartões</b></label>
      </div>


      <div className={styles.addCar}>
        <Link to="/" className={styles.linkadd}></Link>
      </div>
      <div className={styles.links}>

        <Link to="/" className={styles.linkadd2}>
          <img src={imgcartao} alt="logocor" className={styles.imgcar} />
          <label className={styles.n2}>Adicionar cartão</label>
        </Link>

        <Link to="/" className={styles.linkadd3}>
          <img src={imgcartao} alt="logocor" className={styles.imgcar} />
          <label className={styles.n2}>Criar cartão</label>
        </Link>
      </div>
    </>
  );
};

export default Cartoes;