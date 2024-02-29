import React from 'react';
import styles from './cards.module.css';
import bandeiracard from '../../img/bandeiraCard.svg'

const Cards = ({ card }) => {

  const formatarNomeCompleto = (nomeCompleto) => {
    const partesNome = nomeCompleto.split(' ');
    const primeiroNome = partesNome[0];
    const ultimoNome = partesNome[partesNome.length - 1];
    return `${primeiroNome} ${ultimoNome}`;
  };

  const formatarNumeroCartao = (numeroCartao) => {
    const ultimosQuatroDigitos = numeroCartao.slice(-4);
    const numeroOculto = "**** **** **** ";
    return numeroOculto + ultimosQuatroDigitos;
  };

  const nomeFormatado = formatarNomeCompleto(card.nomeCompleto);
  const numeroCartaoFormatado = formatarNumeroCartao(card.numeroDoCartão);

  return (
    <>
      <div className={styles.cartao}>
        <div className={styles.divsuperior}>
          <div className={styles.divisor}>
            {card.tipoDeCartao}
          </div>
          <div className={styles.divisor2}>
            <img src={bandeiracard} alt="bandeira" className={styles.bandeiracard} />
          </div>
        </div>

        <div className={styles.divmeio}>
          {numeroCartaoFormatado}
        </div>

        <div className={styles.divinferior}>
          <div className={styles.divinferiorn1}>
            {nomeFormatado}
          </div>
          <div className={styles.divinferiorn2}>
            {card.dataDeValidade}
          </div>
        </div>

      </div>
    </>
  );
}

export default Cards;
