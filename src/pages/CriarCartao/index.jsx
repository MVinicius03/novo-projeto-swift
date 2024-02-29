import React from 'react';
import './criarcartao.module.css';
import styles from './criarcartao.module.css';
import { Link } from 'react-router-dom';
import logorosa from '../../img/Logo_rosa.svg';
import imgcart from '../../img/Cartao.svg';
import imgcartao from '../../img/Cartao.svg'
import cartaocinza from '../../img/cardcinza.svg'

const CriarCartao = () => {
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
            <label className={styles.titulodiv}>Criar cartão</label>
          </div>

          <div className={styles.cartaoimgdiv}>
            <img src={cartaocinza} alt="cartao" className={styles.cartao} />
          </div>
        </div>

        <div className={styles.form}>
          <form className={styles.formlog}>
            <div className={styles.divform}>

              <div className={styles.divtipo}>
                <label className={styles.labeltipo}> </label>
                <select className={styles.selecttipo}>
                  <option value="" disabled selected hidden>Selecione</option>
                  <option value="Credito">Crédito</option>
                  <option value="Debito">Débito</option>
                </select>
              </div>

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
                  <input className={styles.inputform3} type="month" placeholder="Mês/Ano" />
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

export default CriarCartao;