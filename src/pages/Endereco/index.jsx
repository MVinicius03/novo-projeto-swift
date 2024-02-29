import React from 'react';
import styles from './endereco.module.css';
import './endereco.module.css';
import LogoBanc from '../../img/logo.svg';
import SetaEsq from '../../img/seta_esq.svg';
import { Link } from 'react-router-dom';


const Endereco = () => {
  return (
    <div className={styles.responsiveContainer}>
      <div className={styles.login}>
        <div className={styles.container}>
          <div className={styles.n1}>
            <img className={styles.imgbanc} src={LogoBanc} alt="logo" /><br />

            <div className={styles.divtitulovoltar}>
              <div className={styles.voltardiv}>
                <Link to="/Cadastro/2"><img className={styles.seta} src={SetaEsq} alt="esq"></img></Link>
                <Link className={styles.voltar} to="/Cadastro/2"><b>Voltar</b></Link>
              </div>

              <div className={styles.divtitulo}>
                <h1 className={styles.titulo}>Endereço</h1>
                <p className={styles.desc}>Por favor insira seus dados para acessar sua conta</p>
              </div>
            </div>

            <form className={styles.formlog}>

              <div className={styles.divform}>

                <div className={styles.divinputcep}>
                  <label className={styles.nome}>CEP</label>
                  <input className={styles.inputform1} type="number" placeholder="00000-000" />
                </div>

                <div className={styles.divdupla1}>
                  <div className={styles.divinputestado}>
                    <label className={styles.nome2}>Estado</label>
                    <input className={styles.inputform2} type="text" placeholder="Estado" />
                  </div>

                  <div className={styles.divinputcidade}>
                    <label className={styles.nome3}>Cidade</label>
                    <input className={styles.inputform3} type="text" placeholder="Cidade" />
                  </div>
                </div>

                <div className={styles.divinputendereco}>
                  <label className={styles.nome4}>Endereço</label>
                  <input className={styles.inputform4} type="text" placeholder="Rua..." />
                </div>


                <div className={styles.divdupla2}>
                  <div className={styles.divinputnumero}>
                    <label className={styles.nome5}>Número</label>
                    <input className={styles.inputform5} type="number" placeholder="0000" />
                  </div>

                  <div className={styles.divinputbairro}>
                    <label className={styles.nome6}>Bairro</label>
                    <input className={styles.inputform6} type="text" placeholder="Bairro" />
                  </div>
                </div>

              </div>

            </form>

            <div className={styles.divbtn}>
              <Link className={styles.linkbtn} to="/Cadastro/4">
                <button className={styles.btn}>Continue</button>
              </Link><br />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Endereco;