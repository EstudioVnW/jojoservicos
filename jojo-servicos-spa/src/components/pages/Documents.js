import React, { Component } from 'react';

import Footer from '../Footer';
import Header from '../molecules/Header/Header';
import Login from '../HOC/Login';

import DocumentsOrderPanel from '../organisms/DocumentsOrderPanel'


class Jobs extends Component {
  render(){
    return (
      <div style={{width: '100%'}}>
        <Header title="Documentos" color={'rgb(51, 88, 164)'} borderBottom={'5px solid #69B42E'} icone="./rg.png" handlerOnClick={this.props.handlerOnClick} />
        <DocumentsOrderPanel />
        <Footer />
      </div>
    )
  }}
  
export default Login(Jobs);