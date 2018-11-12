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
  height: 100%;
  padding: 20px 0 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  @media(max-width: 640px){
    display: none;
    
  }
`;


const SolicitacoesContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media(max-width: 640px){
    display: none;
    
  }
`;

const ContainerSolicitacoesConteudo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerSolicitacoesItens = styled.div`
  width: 80%;
  height: 90%;
  /* padding: 0 90px; */
  display: flex;
  justify-content: space-around;
  align-items: center;

`;

const SolicitacoesItens = styled.div`
  width: 25%;
  height: 95%;
  /* margin: 0 90px; */
  /* margin: 0 1%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F7F7F7;
  border: #3358A4 1px;
  border-radius: 55px;
`;

const SolicitacoesItensIMG = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const SolicitacoesItensLink = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-end;
`;

const A = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-decoration:none; 
`;

const ImagesSolicitacoes = styled.img`
  width: 50%;
  height: 70%;
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
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 640px){
    padding: 0;
    
  }
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
  height: 55%;
  display: flex;
  align-items: center;
  @media(max-width: 640px){
    width: 37%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Titulo = styled.div`
  width: 100%;
  height: 8vh;
  padding: 0 98px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 28px;
  color: #fff;
  font-family: Helvetica;
  font-weight: bold;
  @media(max-width: 640px){
    display: none;
  }
`;

const TituloMobile = styled.div`
  display: none;
  @media(max-width: 640px){
    display: flex;
    font-size: 20px;
    color: #fff;
    font-family: Helvetica;
    font-weight: bold;
    
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

const HeaderTableTema = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 640px){
    display: none;
  }
`;

const HeaderTableEntrada = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 640px){
    display: none;
  }
`;

const HeaderTableSaida = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 640px){
    display: none;
  }
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
  /* white-space: nowrap; */
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
  @media(max-width: 640px){
    width: 100%;
    height: 35%;
  }
`;

const RowVariation = styled.div`
  margin: 0;
  width: 100%;
  height: 40px;
  display: flex;
  flex-basis: 200px;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
  @media(max-width: 640px){
    display: none;
  }
`;

const MensageIcon = styled.img`
  width: 80%;
  height: 64%;

`;



class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {
      pedidos: [
        {   'cliente': 'Pedro',
            'telefone': '91239-9999',
            'email': 'pedrosilva@gmail.com', 
            'tema': 'Documento', 
            'categoria': 'Carteira de trabalho', 
            'entrada': '11/09/2018',
            'saida': '11/09/2018',
            'mensagem': <MensageIcon src="./mensage.svg" alt="Mensagem" />
        },
        {  'cliente': 'Pedro',
            'telefone': '99321-9456',
            'email': 'pedrosilva@gmail.com', 
            'tema': 'Documento', 
            'categoria': 'Carteira de trabalho', 
            'entrada': '11/09/2018',
            'saida': '11/09/2018',
            'mensagem': <MensageIcon src="./mensage.svg" alt="Mensagem" />
        },
        {  'cliente': 'Pedro',
          'telefone': '91029-5299',
          'email': 'pedrosilva@gmail.com', 
          'tema': 'Documento', 
          'categoria': 'Carteira de trabalho', 
          'entrada': '11/09/2018',
          'saida': '11/09/2018',
          'mensagem': <MensageIcon src="./mensage.svg" alt="Mensagem" />
        },
        {  'cliente': 'Pedro',
          'telefone': '99965-7165',
          'email': 'pedrosilva@gmail.com', 
          'tema': 'Documento', 
          'categoria': 'Carteira de trabalho', 
          'entrada': '11/09/2018',
          'saida': '11/09/2018',
          'mensagem': <MensageIcon src="./mensage.svg" alt="Mensagem" />
        },
        {  
          'cliente': 'Pedro',
          'telefone': '95479-9099',
          'email': 'pedrosilva@gmail.com', 
          'tema': 'Documento', 
          'categoria': 'Carteira de trabalho', 
          'entrada': '11/09/2018',
          'saida': '11/09/2018',
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
            <SolicitacoesContainer>
              <Titulo>Novas solicitações:</Titulo>
              <ContainerSolicitacoesConteudo>
                <ContainerSolicitacoesItens>
                  <SolicitacoesItens>
                    <SolicitacoesItensIMG>
                      <ImagesSolicitacoes src="./rg.png" />
                    </SolicitacoesItensIMG>
                    <SolicitacoesItensLink>
                      <A href="/Documents"><ButtonDocumentos>Documentos</ButtonDocumentos></A>
                    </SolicitacoesItensLink>
                  </SolicitacoesItens>
                  <SolicitacoesItens>
                    <SolicitacoesItensIMG>
                      <ImagesSolicitacoes src="./emprego.png" />
                    </SolicitacoesItensIMG>
                    <SolicitacoesItensLink>
                      <A href="/Jobs"><ButtonEmprego>Emprego</ButtonEmprego></A>
                    </SolicitacoesItensLink>
                  </SolicitacoesItens>
                  <SolicitacoesItens>
                    <SolicitacoesItensIMG>
                      <ImagesSolicitacoes src="negocios.png" />
                    </SolicitacoesItensIMG>
                    <SolicitacoesItensLink>
                      <A href="/Business"><ButtonNegocios>Negócios</ButtonNegocios></A>
                    </SolicitacoesItensLink>
                  </SolicitacoesItens>
                </ContainerSolicitacoesItens>
              </ContainerSolicitacoesConteudo>
            </SolicitacoesContainer>
          </Solicitacoes>
          <ContainerPrincipal>
            <ContainerPrincipalConteudo>
              <CabecalhoFinalizados>
                <Titulo>Processos finalizados:</Titulo>
                <TituloMobile>Pedidos:</TituloMobile>
              </CabecalhoFinalizados>
              <ContainerTabela>
                <ContainerTabelaCabecalho>
                  <ContainerTabelaCabecalhoItems>
                    <HeaderTable>Cliente</HeaderTable>
                    <HeaderTable>Telefone</HeaderTable>
                    <HeaderTable>E-mail</HeaderTable>
                    <HeaderTableTema>Tema</HeaderTableTema> 
                    <HeaderTable>Categoria</HeaderTable>
                    <HeaderTableEntrada>Entrada</HeaderTableEntrada> 
                    <HeaderTableSaida>Saida</HeaderTableSaida> 
                    <HeaderTable>Mensagens</HeaderTable>
                  </ContainerTabelaCabecalhoItems>
                </ContainerTabelaCabecalho>
                <ContainerTabelaConteudo>
                  {
                    this.state.pedidos.map(item => {
                      return (
                        <Row>
                          <CelTable value={item['cliente']} />
                          <CelTable value={item['telefone']} />
                          <CelTable value={item['email']} />
                          <RowVariation>
                            <CelTable value={item['tema']} />
                          </RowVariation>
                          <CelTable value={item['categoria']} />
                          <RowVariation>
                            <CelTable value={item['entrada']} />
                          </RowVariation>
                          <RowVariation>
                            <CelTable value={item['saida']} />
                          </RowVariation>
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