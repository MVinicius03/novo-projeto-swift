import React from 'react';
import styles from './codeverificacao.module.css';
import './codeverificacao.module.css';
import LogoBanc from '../../img/logo.svg'
import SetaEsq from '../../img/seta_esq.svg'
import { Link } from 'react-router-dom'; 

const Verificacao = () => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.n1}>
          <img className={styles.imgbanc} src={LogoBanc} alt="logo" />
          <Link to="/Cadastro/4"><img className={styles.seta} src={SetaEsq} alt="esq"></img></Link>
          <Link className={styles.voltar} to="/Cadastro/4"><b>Voltar</b></Link>
          <h1 className={styles.titulo}>Código de verifição</h1>
          <p className={styles.desc}>verifique seu e-mail, o código de verificação foi</p>
          <p className={styles.desc2}>enviado para seu e-mail</p>
          <div className={styles.formlog}>
            <label className={styles.nome}>Digite o codigo de verificação</label><br />
            <input className={styles.inputform1} type="number" min="4" max="6" placeholder="000-000" /><br />
          </div>

          <Link className={styles.linkbtn} to="/"><button className={styles.btn}>Cadastrar</button></Link><br />

        </div>

      </div>
    </div>

  )

}

export default Verificacao;