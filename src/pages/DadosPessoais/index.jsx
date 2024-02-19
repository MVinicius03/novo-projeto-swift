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
        <div className={styles.n1}>
          <img className={styles.imgbanc} src={LogoBanc} alt="logo" /><br />

          <Link to="/Cadastro"><img className={styles.seta} src={SetaEsq} alt="esq"></img></Link>
          <Link className={styles.voltar} to="/Cadastro"><b>Voltar</b></Link>
          <h1 className={styles.titulo}>Dados Pessoais</h1>
          <p className={styles.desc}>Por favor insira seus dados para acessar sua conta</p>
          <form className={styles.formlog}>
            <label className={styles.nome}>Email</label><br />
            <input className={styles.inputform1} type="text" placeholder="Nome Completo" /><br />
            <label className={styles.nome2}>CPF</label><br />
            <input className={styles.inputform2} type="number" placeholder="000.000.000-00" /><br />
            <label className={styles.nome3}>Telefone</label><br />
            <input className={styles.inputform3} type="tel" placeholder="(00) 00000-0000" /><br />
          </form>

          <Link className={styles.linkbtn} to="/Cadastro/3"><button className={styles.btn}>Continue</button></Link><br />

        </div>

      </div>
    </div>

  )

}

export default DadosP;