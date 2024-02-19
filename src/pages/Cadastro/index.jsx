import React from 'react';
import styles from './cadastro.module.css';
import './cadastro.module.css';
import LogoBanc from '../../img/logo.svg'
import { Link } from 'react-router-dom';


const Cadastro = () => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.n1}>
          <img className={styles.imgbanc} src={LogoBanc} alt="logo" />
          <h1 className={styles.titulo}>Cadastro</h1>
          <p className={styles.desc}>Por favor insira seus dados para acessar sua conta</p>
          <form className={styles.formlog}>
            <label className={styles.nome}>Email</label><br />
            <input className={styles.inputform1} type="email" placeholder="000.000.000-00" /><br />
            <label className={styles.nome2}>Senha</label><br />
            <input className={styles.inputform2} type="password" placeholder="**********" /><br />
            <label className={styles.nome3}>Confirmar a senha</label><br />
            <input className={styles.inputform3} type="password" placeholder="**********" /><br />
          </form>

          <Link className={styles.linkbtn} to="/Cadastro/2"><button className={styles.btn}>Continue</button></Link><br />
          <label className={styles.nome4}>Você tem conta?</label>
          <Link className={styles.linklogin} to="/">Login</Link>

        </div>

      </div>
    </div>

  )

}

export default Cadastro;