import React, { Component } from 'react';

import Footer from '../Footer';
import Header from '../molecules/Header/Header';

import JobsOrderPanel from '../organisms/JobsOrderPanel'

class Jobs extends Component {
  render(){
    return (
      <div style={{width: '100%'}}>
        <Header title="Trabalho" />
        <JobsOrderPanel />
        <Footer />
      </div>
    )
  }}
  
export default Jobs;