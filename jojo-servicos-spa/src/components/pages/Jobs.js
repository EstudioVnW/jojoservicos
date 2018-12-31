import React, { Component } from 'react';

import Footer from '../Footer';
import Header from '../molecules/Header/Header';
import Login from '../HOC/Login';
import JobsOrderPanel from '../organisms/JobsOrderPanel'

class Jobs extends Component {
  render(){
    return (
      <div style={{width: '100%'}}>
        <Header title="Trabalho" color={'rgb(131, 33, 154)'} handlerOnClick={this.props.handlerOnClick} />
        <JobsOrderPanel />
        <Footer />
      </div>
    )
  }}
  
export default Login(Jobs);