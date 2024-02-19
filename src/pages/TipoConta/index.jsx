import React, { useState } from 'react';
import LogoBanc from '../../img/logo.svg';
import { Link } from 'react-router-dom';
import SetaEsq from '../../img/seta_esq.svg'
import styles from './tipoconta.module.css';

const Tipo = () => {
  const [selectedOption, setSelectedOption] = useState('conta-corrente');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.n1}>
          <img className={styles.imgbanc} src={LogoBanc} alt="logo" />
          <Link to="/Cadastro/3"><img className={styles.seta} src={SetaEsq} alt="esq"></img></Link>
          <Link className={styles.voltar} to="/Cadastro/3"><b>Voltar</b></Link>
          <h1 className={styles.titulo}>Tipo de conta</h1>
          <p className={styles.desc}>Por favor insira seus dados para acessar sua conta.</p>
          <div className={styles.formlog}>
            <input
              className={styles.inputform1} type="radio" id="conta-corrente" name="account-type" value="conta-corrente" checked={selectedOption === 'conta-corrente'} onChange={handleOptionChange} />
            <label className={styles.nome} htmlFor="conta-corrente">Conta Corrente</label>
            <input
              className={styles.inputform2} type="radio" id="conta-poupanca" name="account-type" value="conta-poupanca" checked={selectedOption === 'conta-poupanca'} onChange={handleOptionChange}
            />
            <label className={styles.nome2} htmlFor="conta-poupanca">Conta Poupança</label>   
          </div>

          <Link className={styles.linkbtn} to="/Cadastro/5"><button className={styles.btn}>Continue</button></Link><br />
        </div>
      </div>
    </div>
  );
};

export default Tipo;
