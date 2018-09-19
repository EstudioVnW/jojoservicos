import React from 'react';

const Chatbot = () =>
  <div className="caixa_inicial-boot">
    <div className="caixa_inicial-perfil">
      <img className="caixa_inicial-boot--img" src="./perfil.jpg" />
      <p className="caixa_inicial-boot--p">
        Fale com a Jojô!
      </p>
    </div>
    <div className="caixa_inicial--dialogo">
      <div className="caixa_inicial--conversacao">
        <div className="caixa_inicial--mensagem_">
          <p className="caixa_inicial--dialogo1">
            Oi, sou o Pedro
          </p>
        </div>		
        <div className="caixa_inicial--mensagem">
          <p className="caixa_inicial--dialogo2">
              Pedro, selecione o tipo de solução que busca encontrar:
          </p>
        </div>
      </div>
      <div className="caixa_inicial--selecionador">						
        <div className="caixa_inicial--opcao-rg">
          <div className="caixa_inicial--Itens">
            <button className="caixa_inicial--button">Emitir documentos</button>
            <p className="caixa_inicial--info">Carteira de Trabalho, Carteira de identidade, Título de eleitor, Boletim de ocorrência e Alistamento militar</p>
          </div>
          <img className="caixa_inicial--icone" src="./rg.png" />
        </div>
        <div className="caixa_inicial--opcao-emprego">
          <div className="caixa_inicial--Itens">
            <button className="caixa_inicial--button">
              Encontrar um emprego
            </button>
            <p className="caixa_inicial--info">
              Currículos, indicações e encaminhamentos jovens aprendizes
            </p>
          </div>
          <img className="caixa_inicial--iconeEmprego" src="./emprego.png" />
        </div>
        <div className="caixa_inicial--opcao-rg">
          <div className="caixa_inicial--Itens">
            <button className="caixa_inicial--button">
              Gerenciar meu negócio
            </button>
            <p className="caixa_inicial--info">
              Abertura, encerramento e regularização de MEI
            </p>
          </div>
          <img className="caixa_inicial--iconeEmprego" src="./negocios.png" />
        </div>
      </div>
    </div>
    <div className="caixa_inicial--envio">
      <input  className="comentarios-input" 
        v-model="novoComentario"
        placeholder='Digite sua mensagem' />
      <input className="imput-img" type="image" src="./seta.png" value="ENVIAR" /> 
    </div>
  </div>;

export default Chatbot;