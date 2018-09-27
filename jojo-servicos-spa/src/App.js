import React, { Component } from 'react';
import './App.css';

import sendUserSays from './services/api.js';
import databaseApi from './services/database-api';

import Header from './components/Header';
import Footer from './components/Footer';
import MensagemBoasVindas from './components/MensagemBoasVindas';
import SenderBox from './components/SenderBox';
import Conversacao from './components/Conversacao';

class App extends Component {
  constructor(props){
    super(props);
    this.dialogRef = React.createRef();
    this.state = { 
      parameters: {},
      compartilhar:false,
      mensagens: [
        {
          emissor: "bot",
          text: "Estou online",
          textId: 1
        }
      ]
      
    };
    this.enviarMensagemUsr = this.enviarMensagemUsr.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  enviarMensagemUsr(text){
    console.log('doc', this.props.doc.pegarIdDoc());
    sendUserSays(text, this.props.sessionId)
    .then(res => {
      console.log(res.data.result.parameters);

      let novasMensagens = res.data.result.fulfillment.messages.map(
        (item, index) => {
          return {
          text: item.speech, 
          textId: new Date().getTime() + '+' + index, 
          emissor:"bot" }
      });
      let newState = {
        parameters: {...this.state.parameters, ...res.data.result.parameters, ...{ atualizacao: new Date().toString()}},
        mensagens: [...this.state.mensagens, ...novasMensagens]
      };
      this.setState( newState );
      console.log(newState);
      databaseApi.gravarPedido(this.props.doc.pegarIdDoc(), {...this.state.parameters, ...newState.parameters });
    });
    
    this.setState(
      {
        mensagens: [...this.state.mensagens, {text: text, textId: new Date().getTime(), emissor:"usuario"}]
      }
    );
  }
  open = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }
  scrollToBottom(){
    this.dialogRef.current.scrollTop = this.dialogRef.current.scrollHeight;
  }
  componentDidUpdate(){
    this.scrollToBottom();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <section className="caixa_inicial">
          <div className="caixa_inicial-boasvindas">
            <MensagemBoasVindas />
          </div>
          <div className="caixa_inicial-boot">
            <div className="caixa_inicial-perfil">
              <img className="caixa_inicial-boot--img" src="./JOJO-ilst.png" alt="perfil" />
            </div>
            <div ref={this.dialogRef} className="caixa_inicial--dialogo">
              <Conversacao mensagensBot={this.state.mensagens} />
            </div>
            <SenderBox funcaoEnviar={this.enviarMensagemUsr} />
          </div>
          <div className="caixa_inicial--mobile">
            <div className="caixa_inicial-indicacao-mobile " onClick={this.open}>
              <img className="imgdeCompartilhar" src="share.png" alt="compartilhar" />
              <p>Indique para um amigo</p>
            </div>
            { this.state.compartilhar === true &&
              <div className="caixa_inicial--compartilhar--mobile">
                <div className="compartilhar_icone">
                  <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fjojo-servicos.firebaseapp.com%2F&layout=button&size=small&mobile_iframe=true&width=5&height=20&appId" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" title="facebook"></iframe>      
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
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
