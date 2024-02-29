import React from 'react';
import styles from './dados.module.css';
import './dados.module.css';
import LogoBanc from '../../img/logo.svg';
import SetaEsq from '../../img/seta_esq.svg';
import { Link } from 'react-router-dom';

const DadosP = () => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.divcentralizar}>
          <img className={styles.imgbanc} src={LogoBanc} alt="logo" />
        </div>

        <div className={styles.containervt}>
          
          <div className={styles.divtituloVoltar}>
            <div className={styles.voltardiv}>
              <Link to="/Cadastro"><img className={styles.seta} src={SetaEsq} alt="esq" /></Link>
              <Link className={styles.voltar} to="/Cadastro"><b>Voltar</b></Link>
            </div>
            <div className={styles.divtitulo}>
              <h1 className={styles.titulo}>Dados Pessoais</h1>
              <p>Por favor insira seus dados para acessar sua conta</p>
            </div>
          </div>
        

          <div className={styles.divform}>
            <form className={styles.formlog}>
              <div className={styles.divinputnome}>
                <label className={styles.nome}>Nome Completo</label>
                <input className={styles.inputform1} type="text" placeholder="Nome Completo" />
              </div>

              <div className={styles.divinputcpf}>
                <label className={styles.nome2}>CPF</label>
                <input className={styles.inputform2} type="number" placeholder="000.000.000-00" />
              </div>

              <div className={styles.divinputnumero}>
                <label className={styles.nome3}>Telefone</label>
                <input className={styles.inputform3} type="tel" placeholder="(00) 00000-0000" />
              </div>
            </form>
          </div>

          <div className={styles.divbtn}>
            <Link className={styles.linkbtn} to="/Cadastro/3"><button className={styles.btn}>Continue</button></Link><br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DadosP;
