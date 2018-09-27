import React, { Component } from 'react';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = { };
    this.funcao = this.funcao.bind(this);
  }
  funcao(){
    console.log("12345 testando...");
  }
  
  render(){
    return(
      <div >
        <h1>Tela de login</h1>
        <button onClick={this.funcao} >Clique aqui e olhe o console</button> 
      </div>
    )
  }
}
  
export default Login;