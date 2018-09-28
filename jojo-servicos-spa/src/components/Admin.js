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

const ContainerPrincipal = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-self: center;
  flex-direction: column;
  background-color: #fff; 
`;

const ContainerPrincipalSessao = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  background-color: #3358A4;
  border: #fff solid 1px;
`;

const ContainerConteudo = styled.div` 
  display: flex;


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
      <h1>Pedidos:</h1>
      <ContainerPrincipal>
        <ContainerPrincipalSessao>
          <p>Status</p>
          <p>Tema</p>
          <p>Categoria</p>
          <p>Tipo</p>
          <p>Cliente</p>
          <p>Entrada</p>
          <p>Pendências</p>
          <p>Mensagens</p>
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