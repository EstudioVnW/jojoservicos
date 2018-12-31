import React, { Component } from 'react';
import firebase from '../../services/firebase';

import history from '../pages/history';

const Login = (PageComponent) => class Login extends Component {
  constructor(props){
		super(props);
	}
  checkLogin(){
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        history.push('/login');
      }
    });
  }
  logout(){
		firebase.auth().signOut()
			.then(success => { })
			.catch(error => { });
  }
  componentWillMount(){
    this.checkLogin();
  }
  render(){
    return (
      <PageComponent {...this.props} handlerOnClick={this.logout}/>
    )
  }}
  
export default Login;