import React from 'react';

const BotaoDeOpcao = (props) =>
  <div className="caixa_inicial--opcao-rg">
    <div className="caixa_inicial--Itens">
      <button className="caixa_inicial--button">
        {props.title}
      </button>
      <p className="caixa_inicial--info">
        {"props.descricao"}
      </p>
    </div>
    <div className="img-container">
      <img src={"/"} />
    </div>
  </div>;

export default BotaoDeOpcao;