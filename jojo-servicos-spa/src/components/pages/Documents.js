import React, { Component } from 'react';

import Footer from '../Footer';
import Header from '../molecules/Header/Header';

import DocumentsOrderPanel from '../organisms/DocumentsOrderPanel'

class Jobs extends Component {
  render(){
    return (
      <div style={{width: '100%'}}>
        <Header title="Documentos" />
        <DocumentsOrderPanel />
        <Footer />
      </div>
    )
  }}
  
export default Jobs;