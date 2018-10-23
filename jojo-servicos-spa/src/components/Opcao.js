import React, { Component } from 'react';

const opStyle = {
  color: '#fff',
  backgroundColor: '#69B42E',
  marginBottom: '4px',
  padding: '6px',
  borderRadius: '6px',
  textAlign: 'center',
  cursor: 'pointer'
};

class Opcao extends Component{
  constructor(props){
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler(){
    this.props.sendEvent(this.props.event);
  }
  render(){
    return (
      <div 
        onClick={this.onClickHandler}
        style={opStyle}>
          {this.props.label}
      </div>);
  }
}

export default Opcao;