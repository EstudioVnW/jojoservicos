import React, { Component } from 'react';
import './App.css';

import sendUserSays from './services/api.js';
import databaseApi from './services/database-api';
import opcoes from './services/opcoes';
import sendEvent from './services/api';

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
      indexPedido: 0,
      compartilhar:false,
      mensagens: [
        {
          emissor: "bot",
          text: "Estou online",
          textId: 1
        }
      ],
      pedidos:[{ }],
      cliente: { }
    };
    this.sendEventUsr = this.sendEventUsr.bind(this);
    this.enviarMensagemUsr = this.enviarMensagemUsr.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  sendEventUsr(text){
    console.log(' ');
    console.log('evento->', text);
    sendEvent.sendEvent(text, this.props.sessionId)
    .then(res => {
      console.log('data->', res.data);
      console.log('resposta do evento->', res.data.result.resolvedQuery);
      console.log('indexPedido->', this.state.indexPedido);
      console.log('pedidos->', this.state.pedidos);
      console.log('action->', res.data.result.action);
      console.log('pedido corrente->', this.state.pedidos[this.state.indexPedido]);

      let { 
        fulfillment, 
        parameters, 
        action
      } = res.data.result;
      
      let novasMensagens;
      novasMensagens = fulfillment.messages.map(
        (item, index) => {
          return {
            text: item.speech, 
            textId: new Date().getTime() + '+' + index, 
            emissor: "bot" 
          }
      });

      if(opcoes[action]){
        novasMensagens.push(
          {
            opcoes: opcoes[action], 
            textId: new Date().getTime(), 
            emissor:"bot"
          });
      }

      let newMensagens = [...this.state.mensagens, ...novasMensagens];

      if( action === 'exibir-opcoes-secao' ) {
        let pedido = this.state.pedidos;
        pedido.push({ parameters: { } });
        this.setState({ 
          indexPedido: this.state.indexPedido + 1,
          pedidos: pedido,
          mensagens: newMensagens
        });
      }else{
        let newState = {...this.state.pedidos[this.state.indexPedido], ...parameters, ...{ atualizacao: new Date().toString()}};
        
        let pedidos = this.state.pedidos;
        pedidos[this.state.indexPedido] =  newState;

        this.setState({ 
          pedidos: pedidos,
          mensagens: newMensagens
        });
        
        databaseApi.gravarPedido(this.props.doc.pegarIdDoc(), pedidos);
      }
    });
  }

  enviarMensagemUsr(text){
    sendUserSays.sendUserSays(text, this.props.sessionId)
    .then(res => {
      
      let novasMensagens;
      let { 
        fulfillment, 
        parameters, 
        action 
      } = res.data.result;
      
      novasMensagens = fulfillment.messages.map(
        (item, index) => {
          return {
            text: item.speech, 
            textId: new Date().getTime() + '+' + index, 
            emissor:"bot" 
          }
        });

      if(opcoes[action]){
        novasMensagens.push(
          {
            opcoes: opcoes[action], 
            textId: new Date().getTime(), 
            emissor:"bot"
          });
      }

      let dadosCliente = res.data.result.contexts.find((item)=>{
        return item['name'] == 'dados-cliente';
      });

      console.log('');
      console.log('parameters->', parameters);
      console.log('contexts 2->', dadosCliente);
      console.log(this.state);

      let pedidos = [];
      let cliente;
      if(dadosCliente){
        console.log('gravar cliente');

        cliente = {
          ...this.state.cliente, 
          ...parameters, 
          ...{ atualizacao: new Date().toString()}
        };
        
        this.setState({ 
          cliente: cliente,
          mensagens: [...this.state.mensagens, ...novasMensagens]
        });
      }else{
        console.log('gravar pedido');

        let newState = {
          ...this.state.pedidos[this.state.indexPedido], 
          ...parameters, 
          ...{ atualizacao: new Date().toString()}
        };
        
        pedidos.push(newState);
        this.setState({ 
          cliente: pedidos,
          mensagens: [...this.state.mensagens, ...novasMensagens]
        });
      }
      
      if(dadosCliente){
        databaseApi.gravarCliente(this.props.doc.pegarIdDoc(), cliente);
      }else{
        databaseApi.gravarPedido(this.props.doc.pegarIdDoc(), pedidos);
      }
      
    });

    this.setState({
      mensagens: [...this.state.mensagens, {text: text, textId: new Date().getTime(), emissor:"usuario"}],
      pedidos: [ this.state.pedidos[this.state.indexPedido] ]
    });
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
              <Conversacao mensagensBot={this.state.mensagens} sendEvent={this.sendEventUsr} />
            </div>
            <SenderBox funcaoEnviar={this.enviarMensagemUsr} />
          </div>
          <div className="caixa_inicial--mobile">
            <div className="caixa_inicial-indicacao-mobile " onClick={this.open}>
              <img className="imgdeCompartilhar" src="share.png" alt="compartilhar" />
              <p>Indique para um amigo </p>
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
