import React from 'react';
import styles from "./login.module.css";
import './login.module.css';
import LogoBanc from '../../img/logo.svg'
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.n1}>
          <img className={styles.imgbanc} src={LogoBanc} alt="logo" />
          <h1 className={styles.titulo}>Login</h1>
          <p className={styles.desc}>Por favor insira seus dados para acessar sua conta</p>
          <form className={styles.formlog}>
            <label className={styles.nome}>Email</label><br />
            <input className={styles.inputform1} type="email" placeholder="000.000.000-00" /><br />
            <label className={styles.nome2}>Senha</label><br />
            <input className={styles.inputform2} type="senha" placeholder="**********" /><br />
            <input className={styles.inputcheck} type="checkbox" />
            <label className={styles.nome3}>Lembra de mim?</label>
          </form>

          <button className={styles.btn}>Entrar</button><br />
          <label className={styles.nome4}>Você não tem conta?</label>
          <Link className={styles.linkcadastro} to="/Cadastro">Cadastrar</Link>

        </div>

      </div>
    </div>

  )

}

export default Login;