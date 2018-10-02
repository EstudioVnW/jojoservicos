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
`;

const ContainerPrincipalSessao = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 15px;
  font-family: Helvetica;
  font-weight: bold;
  background-color: #3358A4;
  border: #fff solid 1px;
`;

const SessaoParagrafo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const SessaoParagrafoStatus = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ContainerConteudo = styled.div` 
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: scroll;
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
        <ContainerPrincipalSessao>
            <SessaoParagrafoStatus>Status</SessaoParagrafoStatus>
            <SessaoParagrafo>Tema</SessaoParagrafo>
            <SessaoParagrafo>Categoria</SessaoParagrafo>
            <SessaoParagrafo>Tipo</SessaoParagrafo>
            <SessaoParagrafo>Cliente</SessaoParagrafo>
            <SessaoParagrafo>Entrada</SessaoParagrafo>
            <SessaoParagrafo>Pendências</SessaoParagrafo>
            <SessaoParagrafo>Mensagens</SessaoParagrafo>
        </ContainerPrincipalSessao>
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