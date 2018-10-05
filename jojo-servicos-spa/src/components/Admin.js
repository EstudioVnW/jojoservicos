import React from 'react';

import Footer from './Footer';
import Status from './Status';
import Tema from './Tema';
import Categoria from './Categoria';
import Tipo from './Tipo';
import Cliente from './Cliente';
import Entrada from './Entrada';
import Pendencias from './Pendencias';
import MensagemPedidos from './MensagemPedidos';

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

const CabecalhoParagrafoStatus = styled.div`
  /* width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* width: 10%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 640px){
    display: none;
  }
`;

const CabecalhoParagrafoTema = styled.div` 
  /* width: 85%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center; */
  /* width: 10%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 640px){
    display: none;
  }
`;

const CabecalhoParagrafoCategoria = styled.div` 
  /* width: 90%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center; */
  /* width: 10%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 640px){
    width: 100%;
    display: flex;  
    
  }
`;

const CabecalhoParagrafoTipo = styled.div` 
  /* width: 85%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center; */
  /* width: 10%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 640px){
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
`;

const CabecalhoParagrafoCliente = styled.div` 
  /* width: 85%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center; */
  /* width: 10%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 640px){
    width: 80%;
    display: flex;
    justify-content: flex-start;
  }
`;

const CabecalhoParagrafoEntrada = styled.div` 
  /* width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center; */
  /* width: 10%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 640px){
    display: none;
  }
`;

const CabecalhoParagrafoPendencias = styled.div` 
  /* width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center; */
  /* width: 10%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 640px){
    display: none;
  }
`;

const CabecalhoParagrafoMensagem = styled.div`
  /* width: 75%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center; */
  /* width: 10%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 640px){
    width: 80%;
    display: flex;
    justify-content: center;
  }
`;

const ContainerConteudo = styled.div` 
  width: 100%;
  height: 100%;
  display: flex;
  color: #000;
  font-family: Helvetica;
  overflow-y: scroll;
  @media(max-width: 640px){
    width: 100%;
    height: 100vh;
    display: flex;
  }
`;


const Admin = () =>
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
            <CabecalhoParagrafoStatus>Status</CabecalhoParagrafoStatus>
            <CabecalhoParagrafoTema>Tema</CabecalhoParagrafoTema>
            <CabecalhoParagrafoCategoria>Categoria</CabecalhoParagrafoCategoria>
            <CabecalhoParagrafoTipo>Tipo</CabecalhoParagrafoTipo>
            <CabecalhoParagrafoCliente>Cliente</CabecalhoParagrafoCliente>
            <CabecalhoParagrafoEntrada>Entrada</CabecalhoParagrafoEntrada>
            <CabecalhoParagrafoPendencias>Pendências</CabecalhoParagrafoPendencias>
            <CabecalhoParagrafoMensagem>Mensagens</CabecalhoParagrafoMensagem>
          </ContainerPrincipalCabecalhoItems>
        </ContainerPrincipalCabecalho>
        <ContainerConteudo>
          <Status />
          <Tema />
          <Categoria />
          <Tipo />
          <Cliente />
          <Entrada />
          <Pendencias />
          <MensagemPedidos />
        </ContainerConteudo>
      </ContainerPrincipal>
    </Section>
    <Footer />
  </Container>

export default Admin;