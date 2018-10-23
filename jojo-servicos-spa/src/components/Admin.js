import React, { Component } from 'react';

import Footer from './Footer';
import CelTable from './CelTable';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  @media(max-width: 640px){
    width: 100%;
    height: 100vh;
  }
`;

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
`;

const Titulo = styled.div`
  width: 16.6%;
  height: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 28px;
  color: #fff;
  font-family: Helvetica;
  font-weight: bold;
  @media(max-width: 640px){
    width: 100%;
    height: 10%;
    padding: 0 28px;
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
  }
`;

const ContainerPrincipal = styled.div`
  width: 85%;
  height: 80%;
  margin-bottom: 50px;
  display: flex;
  align-self: center;
  flex-direction: column;
  background-color: #fff; 
  border: #fff solid 1px;
  border-radius: 5px;
  @media(max-width: 640px){
    width: 85%;
    height: 100%;
    display: flex;
  }
`;

const ContainerPrincipalCabecalho = styled.div`
  width: 100%;
  height: 40px;
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: center; */
  color: #fff;
  font-size: 15px;
  font-family: Helvetica;
  font-weight: bold;
  background-color: #3358A4;
  border: #fff solid 1px;
  border-radius: 5px 5px 0 0;
  @media(max-width: 640px){
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    font-size: 10px;
  }
`;

const ContainerPrincipalCabecalhoItems = styled.div`
  padding-right:14px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

// const CabecalhoParagrafo = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-self: center;
//   align-items: center;
// `;

const HeaderTable = styled.div`
  height: 100%;
  display: flex;
  padding: 0 6px;
  justify-content: left;
  align-items: center;
  flex-basis:180px;
  flex-grow: 1;
  @media(max-width: 640px){
    display: none;
  }
`;

const ContainerConteudo = styled.div` 
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #000;
  font-family: Helvetica;
  overflow-y: scroll;
  @media(max-width: 640px){
    width: 100%;
    height: 100vh;
    display: flex;
  }
`;
const Row = styled.div` 
  width: 100%;
  display: flex;
  flex-direction: row;
`;

class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {
      pedidos: [
        {  nome: 'Nome', 
           whatsapp: '(99)9999-9990', 
          'nome-completo': 'Nome Completo', 
          'nome-do-pai': 'Nome do Pai',
          'nome-da-mae': 'Nome da Mãe',
          'servico': 'Nome do serviço'
         },
         {  nome: 'Nome', 
          'nome-completo': 'Nome Completo', 
          'nome-do-pai': 'Nome do Pai',
          'nome-da-mae': 'Nome da Mãe',
          'servico': 'Nome do serviço'
         }
      ]
    };
  }
  render(){
    return (
      <Container>
        <section className="caixa_topo">
          <img className="caixa_topo--logo" src="./logo-jojo.svg" alt="logo jojo" />
          <p className="caixa_topo--texto">
          Central de visualização de pedidos
          </p>
        </section>
        <Section>
          <Titulo>Pedidos:</Titulo>
          <ContainerPrincipal>
            <ContainerPrincipalCabecalho>
              <ContainerPrincipalCabecalhoItems>
                <HeaderTable>Nome</HeaderTable>
                <HeaderTable>Whatsapp</HeaderTable>
                <HeaderTable>Nome completo</HeaderTable>
                <HeaderTable>Nome do pai</HeaderTable>
                <HeaderTable>Nome da mãe</HeaderTable>
                <HeaderTable>Serviço</HeaderTable>
              </ContainerPrincipalCabecalhoItems>
            </ContainerPrincipalCabecalho>
            <ContainerConteudo>
              {
                this.state.pedidos.map(item => {
                  return (
                    <Row>
                      <CelTable value={item['nome']} />
                      <CelTable value={item['whatsapp']} />
                      <CelTable value={item['nome-completo']} />
                      <CelTable value={item['nome-do-pai']} />
                      <CelTable value={item['nome-da-mae']} />
                      <CelTable value={item['servico']} />
                    </Row>
                    )
                })
              }
              </ContainerConteudo>
          </ContainerPrincipal>
        </Section>
        <Footer />
      </Container>);
    }
  }

export default Admin;