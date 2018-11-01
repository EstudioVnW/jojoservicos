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

const Solicitacoes = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media(max-width: 640px){
    width: 1px;
    
  }
`;


const SolicitacoesConteudo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media(max-width: 640px){
    display: none;
    
  }
`;

const ContainerSolicitacoesItens = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 90px;
  display: flex;
  align-items: center;

`;

const SolicitacoesItens = styled.div`
  width: 100%;
  height: 100%;
  /* margin: 0 90px; */
  margin: 0 5%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background-color: #F7F7F7;
  border: #3358A4 1px;
  border-radius: 55px;
`;

const ImagesSolicitacoes = styled.img`
  width: 50%;
  height: 50%;
`;

const ButtonDocumentos = styled.button`
  width: 60%;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #fff;
  font-family: Helvetica;
  border: #000;
  border-radius: 18px;
  outline: none;
  background: linear-gradient(#3358A4, #0C275E);
`;

const ButtonEmprego = styled.button`
  width: 60%;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #fff;
  font-family: Helvetica;
  border: #000;
  border-radius: 18px;
  outline: none;
  background: linear-gradient(#83219A, #40044E);
`;

const ButtonNegocios = styled.button`
  width: 60%;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #fff;
  font-family: Helvetica;
  border: #000;
  border-radius: 18px;
  outline: none;
  background: linear-gradient(#69B42E, #34670C);
`;

const ContainerPrincipal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerPrincipalConteudo = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const CabecalhoFinalizados = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  align-items: center;
`;

const Titulo = styled.div`
  width: 100%;
  height: 30%;
  padding: 0 98px;
  display: flex;
  justify-content: flex-start;
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

const ContainerTabela = styled.div`
  width: 85%;
  height: 100vh;
  display: flex;
  align-self: center;
  flex-direction: column;
  background-color: #fff; 
  border: #fff solid 1px;
  border-radius: 5px;
  /* width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px; */

  @media(max-width: 640px){
    width: 85%;
    height: 100%;
    display: flex;
  }
`;

const ContainerTabelaCabecalho = styled.div`
  width: 100%;
  height: 40px;
  color: #fff;
  font-size: 15px;
  font-family: Helvetica;
  font-weight: bold;
  background-color: #3358A4;
  border: #fff solid 1px;
  border-radius: 5px 5px 0 0;
  /* width: 80%;
  height: 15%;
  color: #fff;
  font-size: 15px;
  font-family: Helvetica;
  font-weight: bold;
  background-color: #3358A4;
  border: #fff solid 1px;
  border-radius: 8px 8px 0 0; */
  @media(max-width: 640px){
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    font-size: 10px;
  }
`;

const ContainerTabelaCabecalhoItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const HeaderTable = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerTabelaConteudo = styled.div` 
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  color: #000;
  font-family: Helvetica;
  border: #fff solid 1px;
  overflow-y: scroll;
  background-color: #fff;
  @media(max-width: 640px){
    width: 100%;
    height: 100vh;
    display: flex;
  }
`;

const Row = styled.div` 
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const MensageIcon = styled.img`
  width: 80%;
  height: 64%;

`;

const A = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-decoration:none; 
`;



class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {
      pedidos: [
        {  'tema': 'Documento', 
           'categoria': '2ª via', 
            'tipo': 'Identidade', 
            'cliente': 'Pedro',
            'entrada': '11/09/2018',
            'saida': '11/09/2018',
            'pendencias': 'Certidão de Nasc., Duda...',
            'mensagem': <MensageIcon src="./mensage.svg" alt="Mensagem" />
        },
        {  'tema': 'Documento', 
           'categoria': '2ª via', 
            'tipo': 'Identidade', 
            'cliente': 'Pedro',
            'entrada': '11/09/2018',
            'saida': '11/09/2018',
            'pendencias': 'Certidão de Nasc., Duda...',
            'mensagem': <MensageIcon src="./mensage.svg" alt="Mensagem" />
        },
        {  'tema': 'Documento', 
           'categoria': '2ª via', 
            'tipo': 'Identidade', 
            'cliente': 'Pedro',
            'entrada': '11/09/2018',
            'saida': '11/09/2018',
            'pendencias': 'Certidão de Nasc., Duda...',
            'mensagem': <MensageIcon src="./mensage.svg" alt="Mensagem" />
        },
        {  'tema': 'Documento', 
           'categoria': '2ª via', 
            'tipo': 'Identidade', 
            'cliente': 'Pedro',
            'entrada': '11/09/2018',
            'saida': '11/09/2018',
            'pendencias': 'Certidão de Nasc., Duda...',
            'mensagem': <MensageIcon src="./mensage.svg" alt="Mensagem" />
        },
        {  'tema': 'Documento', 
           'categoria': '2ª via', 
            'tipo': 'Identidade', 
            'cliente': 'Pedro',
            'entrada': '11/09/2018',
            'saida': '11/09/2018',
            'pendencias': 'Certidão de Nasc., Duda...',
            'mensagem': <MensageIcon src="./mensage.svg" alt="Mensagem" />
        }
      ]
    };
  }
  render(){
    return (
      <Container>
        <section className="caixa_topo">
          <img className="caixa_topo--logo" src="./logo-jojo.svg" alt="logo Jojô" />
          <p className="caixa_topo--texto">
          Central de visualização de pedidos
          </p>
        </section>
        <Section>
          <Solicitacoes>
            <SolicitacoesConteudo>
              <Titulo>Novas solicitações:</Titulo>
              <ContainerSolicitacoesItens>
                <SolicitacoesItens>
                  <ImagesSolicitacoes src="./rg.png" />
                  <A href="/Documents"><ButtonDocumentos>Documentos</ButtonDocumentos></A>
                </SolicitacoesItens>
                <SolicitacoesItens>
                  <ImagesSolicitacoes src="./emprego.png" />
                  <A href="/Jobs"><ButtonEmprego>Emprego</ButtonEmprego></A>
                </SolicitacoesItens>
                <SolicitacoesItens>
                  <ImagesSolicitacoes src="negocios.png" />
                  <A href="/Business"><ButtonNegocios>Negócios</ButtonNegocios></A>
                </SolicitacoesItens>
              </ContainerSolicitacoesItens>
            </SolicitacoesConteudo>
          </Solicitacoes>
          <ContainerPrincipal>
            <ContainerPrincipalConteudo>
              <CabecalhoFinalizados>
                <Titulo>Processos finalizados:</Titulo>
              </CabecalhoFinalizados>
              <ContainerTabela>
                <ContainerTabelaCabecalho>
                  <ContainerTabelaCabecalhoItems>
                    <HeaderTable>Tema</HeaderTable>
                    <HeaderTable>Categoria</HeaderTable>
                    <HeaderTable>Tipo</HeaderTable>
                    <HeaderTable>Cliente</HeaderTable>
                    <HeaderTable>Entrada</HeaderTable>
                    <HeaderTable>Saida</HeaderTable>
                    <HeaderTable>Pendências</HeaderTable>
                    <HeaderTable>Mensagens</HeaderTable>
                  </ContainerTabelaCabecalhoItems>
                </ContainerTabelaCabecalho>
                <ContainerTabelaConteudo>
                  {
                    this.state.pedidos.map(item => {
                      return (
                        <Row>
                          <CelTable value={item['tema']} />
                          <CelTable value={item['categoria']} />
                          <CelTable value={item['tipo']} />
                          <CelTable value={item['cliente']} />
                          <CelTable value={item['entrada']} />
                          <CelTable value={item['saida']} />
                          <CelTable value={item['pendencias']} />
                          <CelTable value={item['mensagem']} />
                        </Row>
                      )
                    })
                  }
                </ContainerTabelaConteudo>
              </ContainerTabela>
            </ContainerPrincipalConteudo>
          </ContainerPrincipal>
        </Section>
        <Footer />
      </Container>
    )
  }}

export default Admin;