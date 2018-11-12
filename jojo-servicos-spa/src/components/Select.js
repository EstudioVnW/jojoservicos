import React, { Component } from 'react';

import Opcao from './Opcao';

const selStyle = {
  margin: '10px 20px'
};

const opStyle = {
  color: '#fff',
  backgroundColor: '#3358A4',
  marginBottom: '4px',
  padding: '6px',
  borderRadius: '6px',
  textAlign: 'center',
  cursor: 'pointer'
};

class Select extends Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    return (
      <div className="select" style={selStyle}>
        {this.props.opcoes && this.props.opcoes.map((item, index) => {
          return (
            <Opcao 
              key={index}
              sendEvent={this.props.sendEvent}
              event={item.evento}
              label={item.label}
              style={opStyle} />)
          })}
      </div>);
  }
}
  

export default Select;