import React, { useState } from 'react';
import styles from './cadastro.module.css';
import './cadastro.module.css';
import EyeIcon from '../../img/olhoaberto.svg';
import EyeOffIcon from '../../img/olhofechado.svg';
import LogoBanc from '../../img/logo.svg'
import { Link } from 'react-router-dom';


const Cadastro = () => {

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
            <h1 className={styles.titulo}>Cadastro</h1>
            <p className={styles.desc}>Por favor insira seus dados para acessar sua conta</p>
          </div>

          <form className={styles.formlog}>

            <div className={styles.divform}>

              <div className={styles.divemail}>
                <label className={styles.nome}>Email</label>
                <input className={styles.inputform1} type="email" placeholder="email@gmail.com" />
              </div>

              <div className={styles.divsenha}>
                <label className={styles.nome2}>Senha</label>
                <div className={styles.passwordInputContainer}>
                  <input className={styles.inputform2} type={showPassword ? "text" : "password"} placeholder="**********" />
                  <img className={styles.togglePasswordIcon} src={showPassword ? EyeOffIcon : EyeIcon} alt="Toggle Password Visibility" onClick={togglePasswordVisibility} />
                </div>
              </div>

              <div className={styles.divconfirme}>
                <label className={styles.nome3}>Confirmar a senha</label>
                <div className={styles.passwordInputContainer}>
                  <input className={styles.inputform3} type={showPassword ? "text" : "password"} placeholder="**********" />
                  <img className={styles.togglePasswordIcon} src={showPassword ? EyeOffIcon : EyeIcon} alt="Toggle Password Visibility" onClick={togglePasswordVisibility} />
                </div>
              </div>

            </div>
          </form>

          <div className={styles.divbtn}>
            <Link className={styles.linkbtn} to="/Cadastro/2"><button className={styles.btn}>Continue</button></Link><br />
          </div>

          <div className={styles.divlinks}>
            <label className={styles.nome4}>Você tem conta?</label>
            <Link className={styles.linklogin} to="/">Login</Link>
          </div>

        </div>

      </div>
    </div>

  )

}

export default Cadastro;