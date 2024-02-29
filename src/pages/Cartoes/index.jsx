import React from 'react';
import './cartoes.module.css';
import styles from './cartoes.module.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import imgcartao from '../../img/Cartao.svg';
import imgempre from '../../img/Empres.svg'
import emprest from '../../img/imagemEmpress.svg';
import banner from '../../img/banner.svg';
import logocor from '../../img/SoloCorlorida.svg';
import logorosa from '../../img/Logo_rosa.svg';
import { useState, useEffect } from 'react';
import Cards from '../../components/Cards';



const Cartoes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/cards');
        if (!response.ok) {
          throw new Error('Erro ao carregar dados');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchData();

  }, []);






  return (
    <>
      <div className={styles.divheader}>
        <header className={styles.header}><label className={styles.tituloheader}>Cartões</label>
          <img src={logorosa} alt="logorosa" className={styles.logorosa} />
        </header>
      </div >

      <div className={styles.Container}>

        <div className={styles.banner}>
        </div>


        <div className={styles.titulocartao}>
          <img src={imgcartao} alt="imgcartao" className={styles.imgCartao} />
          <label className={styles.titulodiv}>Cartões</label>
        </div>


        <div className={styles.divcartoes}>
          <div className={styles.containerorganizador}>

            <div className={styles.cartoes}>
              {data.map((item, index) => (
                <Cards key={index} card={item}></Cards>
              ))}
            </div>

          </div>
        </div>

        <div className={styles.links}>
          <Link to="/AddCartao" className={styles.linkaddc}>
            <img src={imgcartao} alt="imgcartao" className={styles.imgcartao} />
            <label className={styles.nomelink}>Adicionar cartão</label>
          </Link>

          <Link to="/CriarCartao" className={styles.linkcriarc}>
            <img src={imgcartao} alt="imgcartao" className={styles.imgcartao} />
            <label className={styles.nomelink}>Criar cartão</label>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cartoes;