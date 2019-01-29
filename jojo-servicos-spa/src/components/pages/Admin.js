import React, { Component } from 'react';
import firebase from '../../services/firebase';

import history from './history';

import Footer from '../Footer';
import Header from '../molecules/Header/Header';
import Title from '../atoms/Title/Title';
import SelectionOption from '../molecules/SectionOption/SectionOption';

import CompletedOrdersTable from '../organisms/CompletedOrdersTable'

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 640px){
    width: 100%;
    height: 100vh;
  }
`

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-top: 3px solid #69B42E;
  border-bottom: 3px solid #69B42E;
  background: linear-gradient(#2E7BB4,#306BAD, #3260A8, #3358A4);
  @media(max-width: 640px){
    width: 100%;
    height: 100vh;
    border-top: 4px solid #69B42E;
    border-bottom: 4px solid #69B42E;
  }
`

const Solicitacoes = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: Helvetica;
  font-weight:bold;
  @media(max-width: 640px){
    display: none;
  }
`

const SolicitacoesContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media(max-width: 640px){
    display: none;
  }
`

const ContainerSolicitacoesConteudo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContainerSolicitacoesItens = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media(min-width: 1440px){
    height: 80%;
  }
`

const ContainerPrincipal = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 640px){
    padding: 0;
  }
`

const ContainerPrincipalConteudo = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  // background-color: coral;
`

class Admin extends Component {
  constructor(props){
    super(props);
    this.checkLogin = this.checkLogin.bind(this);
    this.logout = this.logout.bind(this);
  }
  checkLogin(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("logon", user);
      } else {
        console.log("logoff");
        history.push('/login');
      }
    });
  }
  logout(){
    console.log("fazendo logout");
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log("logout feito");
    }).catch(function(error) {
      // An error happened.
      console.log("logout nao deu certo");
    });
  }
  componentWillMount(){ 
    this.checkLogin();
  }
  render(){
    return (
      <Container>
        <Header value={this.props.value} title="Central de visualização de pedidos"  handlerOnClick={this.logout}
        color={'rgb(51, 88, 164)'} borderBottom={''}
        fontSize={'1em'} />
        <Section>
          <Solicitacoes>
            <SolicitacoesContainer>
            <Title style={{width:'75%'}}>Novas solicitações:</Title>
              <ContainerSolicitacoesConteudo>
                <ContainerSolicitacoesItens>
                  <SelectionOption image="rg.png" link="/Documents" label="Documentos" backgroundColor="#3358A4" border="#0C275E"/>
                  <SelectionOption image="emprego.png" link="/Jobs" label="Emprego" backgroundColor="#83219A" border="#40044E"/>
                  <SelectionOption image="negocios.png" link="/Business" label="Negócios" backgroundColor="#69B42E" border="#34670C"/>
                </ContainerSolicitacoesItens>
              </ContainerSolicitacoesConteudo>
            </SolicitacoesContainer>
          </Solicitacoes>
          <ContainerPrincipal>
            <ContainerPrincipalConteudo>
                <Title style={{width:'75%'}}>Processos finalizados:</Title>
                <CompletedOrdersTable />
            </ContainerPrincipalConteudo>
          </ContainerPrincipal>
        </Section>
        <Footer />
      </Container>
    )
  }}

export default Admin;