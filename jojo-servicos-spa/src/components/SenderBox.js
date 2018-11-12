import React, { Component } from 'react';

class SenderBox extends Component{
  constructor(props){
    super(props);
    this.state = { 
      text: "",
      textId: props.textId
    };
    this.enviarMensagem = this.enviarMensagem.bind(this);
    //this._handleKeyPress = this._handleKeyPress.bind(this);
  }
  enviarMensagem(){
    console.log("testando 12345");
    this.props.funcaoEnviar(this.state.text);
    this.setState({text: ''});
  }
  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.funcaoEnviar(this.state.text);
      this.setState({text: ''});
    }
  }
  
  render(){
    return(
      <div className="caixa_inicial--envio">
        <input  
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
          onKeyPress={this._handleKeyPress}
          className="comentarios-input" 
          placeholder='Digite sua mensagem' />

        <input
          onClick={this.enviarMensagem} 
          className="imput-img" 
          type="image" 
          alt="enviar msg"
          src="./seta.png" 
          value="ENVIAR" /> 
      </div>
    )
  }
}
  
export default SenderBox;