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
  display: flex;
  flex-direction: column;

`;

const ContainerSolicitacoesItens = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

`;

const SolicitacoesItens = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 80px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background-color: #F7F7F7;
  border: #3358A4 1px;
  border-radius: 55px;

`;

const ImageSolicitacoes = styled.img`
  width: 55%;
  height: 70%;
`;

const ContainerPrincipal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

`;

const CabecalhoFinalizados = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  align-items: center;

`;

const Titulo = styled.div`
  width: 100%;
  height: 50%;
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
  height: 100%;
  /* margin-bottom: 50px; */
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

const ContainerTabelaCabecalho = styled.div`
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

const ContainerTabelaCabecalhoItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const HeaderTable = styled.div`

`;

// const CabecalhoParagrafo = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-self: center;
//   align-items: center;
// `;

// const CabecalhoParagrafoStatus = styled.div`
//   /* width: 80%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center; */
//   /* width: 10%; */
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media(max-width: 640px){
//     display: none;
//   }
// `;

// const CabecalhoParagrafoTema = styled.div` 
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media(max-width: 640px){
//     display: none;
//   }
// `;

// const CabecalhoParagrafoCategoria = styled.div` 
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media(max-width: 640px){
//     width: 100%;
//     display: flex;  
    
//   }
// `;

// const CabecalhoParagrafoTipo = styled.div` 
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media(max-width: 640px){
//     width: 100%;
//     display: flex;
//     justify-content: flex-start;
//   }
// `;

// const CabecalhoParagrafoCliente = styled.div` 
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media(max-width: 640px){
//     width: 80%;
//     display: flex;
//     justify-content: flex-start;
//   }
// `;

// const CabecalhoParagrafoEntrada = styled.div` 
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media(max-width: 640px){
//     display: none;
//   }
// `;

// const CabecalhoParagrafoSaida = styled.div`
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media(max-width: 640px){
//     display: none;
//   }
// `;

// const CabecalhoParagrafoPendencias = styled.div` 
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media(max-width: 640px){
//     display: none;
//   }
// `;

// const CabecalhoParagrafoMensagem = styled.div`
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media(max-width: 640px){
//     width: 80%;
//     display: flex;
//     justify-content: center;
//   }
// `;

const ContainerConteudo = styled.div` 
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
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
        {  'tema': 'documento', 
           'categoria': '2ª via', 
            'tipo': 'Identidade', 
            'cliente': 'Pedro',
            'entrada': '11/09/2018',
            'saida': '11/09/2018'
        },
        {  'tema': 'documento', 
           'categoria': '2ª via', 
            'tipo': 'Identidade', 
            'cliente': 'Pedro',
            'entrada': '11/09/2018',
            'saida': '11/09/2018'
        },
        {  'tema': 'documento', 
           'categoria': '2ª via', 
            'tipo': 'Identidade', 
            'cliente': 'Pedro',
            'entrada': '11/09/2018',
            'saida': '11/09/2018'
        },
        {  'tema': 'documento', 
           'categoria': '2ª via', 
            'tipo': 'Identidade', 
            'cliente': 'Pedro',
            'entrada': '11/09/2018',
            'saida': '11/09/2018'
        },
        {  'tema': 'documento', 
           'categoria': '2ª via', 
            'tipo': 'Identidade', 
            'cliente': 'Pedro',
            'entrada': '11/09/2018',
            'saida': '11/09/2018'
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
          <Solicitacoes>
            <Titulo>Novas solicitações:</Titulo>
            <ContainerSolicitacoesItens>
              <SolicitacoesItens>
                <ImageSolicitacoes src="./rg.png" />
                <button>Documentos</button>
              </SolicitacoesItens>
              <SolicitacoesItens>
                <ImageSolicitacoes src="./emprego.png" />
                <button>Emprego</button>
              </SolicitacoesItens>
              <SolicitacoesItens>
                <ImageSolicitacoes src="negocios.png" />
                <button>Negócios</button>
              </SolicitacoesItens>
            </ContainerSolicitacoesItens>
          </Solicitacoes>
          <ContainerPrincipal>
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
              <ContainerConteudo>
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
                      </Row>
                    )
                  })
                }
              </ContainerConteudo>
            </ContainerTabela>
          </ContainerPrincipal>
        </Section>
        <Footer />
      </Container>
    )
  }}

export default Admin;