import React, { Component } from 'react';

import Footer from '../Footer';
import Header from '../molecules/Header/Header';
import Login from '../HOC/Login';
import BusinessOrderPanel from '../organisms/BusinessOrderPanel'

class Business extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div style={{width: '100%'}}>
        <Header title="Negócios" color={'rgb(105, 180, 46)'} icone="./negocios.png" handlerOnClick={this.props.handlerOnClick} />
        <BusinessOrderPanel />
        <Footer />
      </div>
    )
  }}
  
export default Login(Business);