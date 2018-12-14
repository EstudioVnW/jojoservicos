import React, { Component } from 'react';

import Footer from '../Footer';
import Header from '../molecules/Header/Header';

import BusinessOrderPanel from '../organisms/BusinessOrderPanel'

class Business extends Component {
  render(){
    return (
      <div style={{width: '100%'}}>
        <Header title="Negócios" />
        <BusinessOrderPanel />
        <Footer />
      </div>
    )
  }}
  
export default Business;