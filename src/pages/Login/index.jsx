import React, { useState } from 'react';
import styles from "./login.module.css";
import './login.module.css';
import LogoBanc from '../../img/logo.svg';
import EyeIcon from '../../img/olhoaberto.svg';
import EyeOffIcon from '../../img/olhofechado.svg';
import { Link } from 'react-router-dom';


const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.n1}>
          <img className={styles.imgbanc} src={LogoBanc} alt="logo" />

          <div className={styles.divtitulo}>
            <h1 className={styles.titulo}>Login</h1>
            <p className={styles.desc}>Por favor insira seus dados para acessar sua conta</p>
          </div>

          <form className={styles.formlog}>

              <div className={styles.divemail}>
                <label className={styles.nome}>Email</label>
                <input className={styles.inputform1} type="email" placeholder="exemplo@gmail.com" /><br />
              </div>

              <div className={styles.divsenha}>
                <label className={styles.nome2}>Senha</label>
                <div className={styles.passwordInputContainer}>
                  <input className={styles.inputform2} type={showPassword ? "text" : "password"} placeholder="**********" />
                  <img className={styles.togglePasswordIcon} src={showPassword ? EyeOffIcon : EyeIcon} alt="Toggle Password Visibility" onClick={togglePasswordVisibility} />
                </div>
              </div>

              <div className={styles.divcheckbox}>
                <input className={styles.inputcheck} type="checkbox" />
                <label className={styles.nome3}>Lembra de mim?</label>
              </div>
          </form>

          <Link to="/Home" className={styles.linkentrar}><button className={styles.btn}>Entrar</button></Link><br />
          <label className={styles.nome4}>Você não tem conta?</label>
          <Link className={styles.linkcadastro} to="/Cadastro">Cadastrar</Link>

        </div>

      </div>
    </div>

  )

}

export default Login;
