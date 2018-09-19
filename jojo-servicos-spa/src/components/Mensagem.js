import React, { Component } from 'react';

class Mensagem extends Component{
  constructor(props){
    super(props);
    //this.fazerScroll = this.fazerScroll.bind(this); 
  }
  render(){
    return (<div ref="msg"
      className={"conversacao--mensagem " + ((this.props.emissor === 'bot') ? ' conversacao--mensagem__bot ' : '') + ((this.props.emissor === 'usuario') ? ' conversacao--mensagem__usuario ' : '')}>
      {this.props.children}
    </div>);
  }
}
  
export default Mensagem;