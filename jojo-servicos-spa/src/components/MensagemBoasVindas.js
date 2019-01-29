import React, { Component } from 'react';

class Mensagem extends Component {
  constructor(props){
    super(props);
    this.state = { 
      compartilhar:false
    }
  }

  open = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
   }

  render() {
    const {compartilhar} = this.state
    return (
      <div className="caixa_inicial-boasvindas-1">
        <div className="caixa_inicial--bloco1">
          <h1 className="caixa_inicial-titulo">
            Fique tranquilo,<br /> 
            você encontrou a Jojô
          </h1>
          {/* <h1 className="caixa_inicial-tituloMobile">
            Fique tranquilo,<br /> 
            você encontrou a Jojô
          </h1> */}
          <div className="caixa_inicial-documentos">
            <div className="caixa_inicial-rg">
              <img className="rg--img" src=" ./rg.png" />
              <div className="caixa_inicial--docs">
                <h1 className="doc--title">Agendar documentos</h1>
                <p className="doc--description">Carteira de Trabalho, Carteira de identidade, Título de eleitor, Boletim de ocorrência e Alistamento militar</p>
              </div>
            </div>
            <div className="caixa_inicial-rg">
              <img className="icone--img" src=" ./emprego.png" />
              <div className="caixa_inicial--docs">
                <h1 className="doc--title">Encontrar um emprego</h1>
                <p className="doc--description">Currículos, indicações e encaminhamentos jovens aprendizes</p>
              </div>
            </div>
            <div className="caixa_inicial-rg">
              <img className="icone--img" src=" ./negocios.png" />
              <div className="caixa_inicial--docs">
                <h1 className="doc--title">Gerenciar meu negócio</h1>
                <p className="doc--description">Abertura, encerramento e regularização de MEI</p>
              </div>
            </div>
          </div>
          {/* <p className="caixa_inicial-descrição">
          Vou ajudar você a superar os seus problemas burocráticos!
          </p>
          <p className="caixa_inicial-descriçãoMobile">
            Vou ajudar você a superar os seus problemas burocráticos!
          </p> */}
        </div>
      <div className="caixa_inicial-box">	
        <div className="caixa_inicial-indicacao" onClick={this.open} >
        <img className="imgdeCompartilhar" src="share.png" alt="" />
          <p>Indique para um amigo</p>
        </div>
        { compartilhar  === true
        && <div className="caixa_inicial--compartilhar">
            <div className="compartilhar_icone">
              <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fjojo-servicos.firebaseapp.com%2F&layout=button&size=small&mobile_iframe=true&width=97&height=20&appId" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" title="facebook">
                <link rel="foto_src" type="foto.jpeg" ></link>
              </iframe>      
            </div>
            <div className="compartilhar_icone">
              <a class="twitter-share-button"
              href="https://twitter.com/intent/tweet?text=Venha%20acessar%20a%20Jojo%20Servicos%20ela%20pode%20te ajudar%20a%20superar%20os%20seus%20problemas%20burocráticos%20!%20https://jojo-servicos.firebaseapp.com"
              data-size="large" target="_blank" rel="noopener noreferrer">
                <img className="icone-twitter" src="twitter-logo.svg" alt="twitter" />      
              Tweetar</a>
            </div>
          </div>
        }
      </div>
    </div>
    )
  }
}

export default Mensagem;
