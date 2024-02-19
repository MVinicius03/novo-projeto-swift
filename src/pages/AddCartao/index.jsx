import React from 'react';
import './addcartao.module.css';
import styles from './addcartao.module.css';
import { Link } from 'react-router-dom';
import logorosa from '../../img/Logo_rosa.svg';
import imgcart from '../../img/Cartao.svg';
import cartaoimg from '../../img/cartaoimg.svg'

const AddCartao = () => {
  return (
    <>
      <div className={styles.inicio}>
        <header className={styles.header}><label className={styles.nomei}>Cartão</label>
          <img src={logorosa} alt="logorosa" className={styles.logorosa} />
        </header>
      </div>
      <div className={styles.divC}>
        <img src={cartaoimg} alt="cartao" className={styles.cartao} />
      </div>
      <div className={styles.form}>
        <form className={styles.formlog}>
          <label className={styles.nome}>Número do cartão</label><br />
          <input className={styles.inputform1} type="number" placeholder="0000 0000 0000 000" /><br />
          <label className={styles.nome2}>Nome completo</label><br />
          <input className={styles.inputform2} type="text" placeholder="Nome completo" /><br />
          <label className={styles.nome3}>Data de validade</label><br />
          <input className={styles.inputform3} type="month" placeholder="Mês/Ano" /><br />
          <label className={styles.nome4}>CVC</label><br />
          <input className={styles.inputform4} type="number" placeholder="000" /><br />
        </form>

        <Link to="/Home" className={styles.linkentrar}>
          <button className={styles.btn}>
            Adicionar
          </button>
        </Link><br />

      </div>


    </>
  );
};

export default AddCartao;