import React from 'react';
import './inicio.module.css';
import styles from './inicio.module.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import imgcartao from '../../img/Cartao.svg';
import imgempre from '../../img/Empres.svg'
import emprest from '../../img/imagemEmpress.svg';
import setadi from '../../img/setadir.svg';
import logorosa from '../../img/Logo_rosa.svg';

const Inicio = () => {
  return (
    <>

      <div className={styles.responsividade}>
        <div className={styles.inicio}>
          <header className={styles.header}><label className={styles.nomei}>Início</label>
            <img src={logorosa} alt="logorosa" className={styles.logorosa} />
          </header>
        </div >

        <div className={styles.cartaoD}>
          <img src={imgcartao} alt="Cartao" className={styles.imgC} />
          <label className={styles.name1}>
            <b>Cartões</b>
          </label>
        </div>

        <div className={styles.addCar}>
          <div className={styles.cartoes}>
            <Link to="/Cartoes" className={styles.linkadd}>Adicionar cartao</Link>
          </div>
        </div>

        <div className={styles.EmpresD}>
          <img src={imgempre} alt="dinheirin" className={styles.imgC} />
          <label className={styles.name1}><b>Empréstimo</b></label>
        </div>

        <div className={styles.overlay}>
          <div className={styles.addEmpres}>
            <img src={emprest} alt="emprestimo" className={styles.imgempre} />
            <label className={styles.linkempre}>Empréstimo disponível
              <img src={setadi} alt="seta" className={styles.imgset} />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;