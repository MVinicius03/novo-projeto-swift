import React from 'react';
import './addcartao.module.css';
import styles from './addcartao.module.css';
import { Link } from 'react-router-dom';
import logorosa from '../../img/Logo_rosa.svg';
import imgcart from '../../img/Cartao.svg';
import imgcartao from '../../img/Cartao.svg'
import cartaocinza from '../../img/cardcinza.svg'

const addCartao = () => {
  return (
    <>
      <div className={styles.inicio}>
        <header className={styles.header}><label className={styles.nomei}>Cartão</label>
          <img src={logorosa} alt="logorosa" className={styles.logorosa} />
        </header>
      </div>
      <div className={styles.container}>

        <div className={styles.divapresentacao}>
          <div className={styles.divC}>
            <img src={imgcartao} alt="imgcartao" className={styles.imgCartao} />
            <label className={styles.titulodiv}>Adicionar cartão</label>
          </div>

          <div className={styles.cartaoimgdiv}>
            <img src={cartaocinza} alt="cartao" className={styles.cartao} />
          </div>
        </div>

        <div className={styles.form}>
          <form className={styles.formlog}>
            <div className={styles.divform}>

              <div className={styles.divnumeroca}>
                <label className={styles.nome}>Número do cartão</label>
                <input className={styles.inputform1} type="number" placeholder="0000 0000 0000 0000" />
              </div>

              <div className={styles.divnomecompleto}>
                <label className={styles.nome2}>Nome completo</label>
                <input className={styles.inputform2} type="text" placeholder="Nome completo" />
              </div>

              <div className={styles.divdupla}>
                <div className={styles.divdata}>
                  <label className={styles.nome3}>Data</label>
                  <input className={styles.inputform3} type="text" placeholder="Mês/Ano" />
                </div>

                <div className={styles.divcvc}>
                  <label className={styles.nome4}>CVC</label>
                  <input className={styles.inputform4} type="number" placeholder="000" />
                </div>
              </div>

            </div>

          </form>

          <div className={styles.divbtn}>
            <button className={styles.btn}>
              Criar cartão
            </button>
          </div>

        </div>


      </div>


    </>
  );
};

export default addCartao;