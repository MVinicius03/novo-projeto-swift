import React from 'react';
import styles from './endereco.module.css';
import './endereco.module.css';
import LogoBanc from '../../img/logo.svg';
import SetaEsq from '../../img/seta_esq.svg';
import { Link } from 'react-router-dom';


const Endereco = () => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.n1}>
          <img className={styles.imgbanc} src={LogoBanc} alt="logo" /><br />

          <Link to="/Cadastro/2"><img className={styles.seta} src={SetaEsq} alt="esq"></img></Link>
          <Link className={styles.voltar} to="/Cadastro/2"><b>Voltar</b></Link>
          <h1 className={styles.titulo}>Endereço</h1>
          <p className={styles.desc}>Por favor insira seus dados para acessar sua conta</p>
          <form className={styles.formlog}>
            <label className={styles.nome}>CEP</label><br />
            <input className={styles.inputform1} type="number" placeholder="00000-000" /><br />
            <label className={styles.nome2}>Estado</label><br />
            <input className={styles.inputform2} type="text" placeholder="Estado" /><br />
            <label className={styles.nome3}>Cidade</label><br />
            <input className={styles.inputform3} type="text" placeholder="Cidade" /><br />
            <label className={styles.nome4}>Endereço</label><br />
            <input className={styles.inputform4} type="text" placeholder="Rua..." /><br />
            <label className={styles.nome5}>Numero</label><br />
            <input className={styles.inputform5} type="number" placeholder="0000" /><br />
            <label className={styles.nome6}>Bairro</label><br />
            <input className={styles.inputform6} type="text" placeholder="Bairro" /><br />
          </form>

          <Link className={styles.linkbtn} to="/Cadastro/4"><button className={styles.btn}>Continue</button></Link><br />

        </div>

      </div>
    </div>

  )

}

export default Endereco;