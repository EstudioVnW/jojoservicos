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

const ContainerTopo = styled.div`
  width: 100%;
	height: 80px;
	padding: 0 3%;
	border-style: none;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: center;
	background-color: #FFFFFF;
  z-index:1;
  @media (max-width: 640px){
	  width: 100%;
    min-height: 12vh;
    display: flex;
    justify-content: center;
	}
}
`;

const ContainerTopoEmpregos = styled.div`
  width: 20%;
  height: 100%;
  margin: 0 0 0 3.6%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ImageTopoLogoEmpregos = styled.img` 
  width: 20%;
  height: 50%;
  padding-right: 2%;
  @media (max-width: 640px){
		width: 110px;
		margin: 0 0 0 5%;
	}
`;

const ParagrafoTopoEmpregos = styled.div`
  color: #83219A;
  font-size: 28px;
  font-family: Helvetica;
  font-weight: bold;
  border-bottom: 7px solid #69B42E;
`;

const ImageTopoLogoJojo = styled.img`
  width: 10vw;
  padding-right: 2%;
  @media (max-width: 640px){
		width: 110px;
		margin: 0 0 0 5%;
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
  padding: 20px 0 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media(max-width: 640px){
    
  }
`;

const SolicitacoesConteudo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media(max-width: 640px){
    
    
  }
`;

const ContainerPrincipal = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0 0 0;
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
  height: 40%;
  padding: 0 98px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 25px;
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
  height: 70vh;
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
  background-color: #83219A;
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
`;

const MensageIcon = styled.img`
  width: 80%;
  height: 64%;
`;

const ComEnvioIcon = styled.img`
  width: 10%;
`;

const SemEnvioIcon = styled.img`
  width: 10%;
`;



class Jobs extends Component {
  constructor(props){
    super(props);
    this.state = {
      pedidos: [
        {  'status': 'Pendente', 
            'cliente': 'Pedro Silva', 
            'telefone': '91239-9999', 
            'email': 'pedrosilva@gmail.com',
            'categoria': 'Jovem Aprendiz',
            'curriculo': <ComEnvioIcon src="./ComEnvioIcon.svg" alt="Com Envio" />,
            'envio': 'Com envio',
            'mensagem': <MensageIcon src="./mensage.svg" alt="Mensagem" />
        },
        {  'status': 'Análise', 
            'cliente': 'Jaqueline Rodrigues', 
            'telefone': '99321-9456', 
            'email': 'jaquerodrigues@gmail...',
            'categoria': 'Emprego Formal',
            'curriculo': <SemEnvioIcon src="./SemEnvioIcon.svg" alt="Sem Envio" />,
            'envio': 'Sem Envio',
            'mensagem': <MensageIcon src="./mensage.svg" alt="Mensagem" />
        },
        {  'status': 'Finalizado', 
          'cliente': 'Igor Melo', 
          'telefone': '91029-5299', 
          'email': 'igormelo@gmail.com',
          'categoria': 'Emprego Formal',
          'curriculo': <ComEnvioIcon src="./ComEnvioIcon.svg" alt="Com Envio" />,
          'envio': 'Com Envio',
          'mensagem': <MensageIcon src="./mensage.svg" alt="Mensagem" />
        },
        { 'status': 'Pendente', 
          'cliente': 'Maria Eugênia', 
          'telefone': '99965-7165', 
          'email': 'marieugenia@gmail..',
          'categoria': 'Jovem Aprendiz',
          'curriculo': <ComEnvioIcon src="./ComEnvioIcon.svg" alt="Com Envio" />,
          'envio': 'Com Envio',
          'mensagem': <MensageIcon src="./mensage.svg" alt="Mensagem" />
        },
        {  'status': 'Análise', 
          'cliente': 'Gabriel Freitas', 
          'telefone': '95479-9099', 
          'email': 'gabrielfreitas@gmail.com',
          'categoria': 'Emprego Formal',
          'curriculo': <SemEnvioIcon src="./SemEnvioIcon.svg" alt="Sem envio" />,
          'envio': 'Sem Envio',
          'mensagem': <MensageIcon src="./mensage.svg" alt="Mensagem" />
        }
      ]
    };
  }
  render(){
    return (
      <Container>
        <ContainerTopo>
          <ImageTopoLogoJojo src="./logo-jojo.svg" alt="logo Jojô" />
          <ContainerTopoEmpregos>
            <ParagrafoTopoEmpregos>Empregos</ParagrafoTopoEmpregos>
            <ImageTopoLogoEmpregos src="./emprego.png" alt="logo emprego" />
          </ContainerTopoEmpregos>
        </ContainerTopo>
        <Section>
          <Solicitacoes>
            <SolicitacoesConteudo>
              <Titulo>Novas solicitações:</Titulo>
              <ContainerTabela>
                <ContainerTabelaCabecalho>
                  <ContainerTabelaCabecalhoItems>
                    <HeaderTable>Status ▼</HeaderTable>
                    <HeaderTable>Cliente ▼</HeaderTable>
                    <HeaderTable>Telefone</HeaderTable>
                    <HeaderTable>E-mail</HeaderTable>
                    <HeaderTable>Categoria ▼</HeaderTable>
                    <HeaderTable>Currículo</HeaderTable>
                    <HeaderTable>Envio</HeaderTable>
                    <HeaderTable>Mensagens</HeaderTable>
                  </ContainerTabelaCabecalhoItems>
                </ContainerTabelaCabecalho>
                <ContainerTabelaConteudo>
                  {
                    this.state.pedidos.map(item => {
                      return (
                        <Row>
                          <CelTable value={item['status']} />
                          <CelTable value={item['cliente']} />
                          <CelTable value={item['telefone']} />
                          <CelTable value={item['email']} />
                          <CelTable value={item['categoria']} />
                          <CelTable value={item['curriculo']} />
                          <CelTable value={item['envio']} />
                          <CelTable value={item['mensagem']} />
                        </Row>
                      )
                    })
                  }
                </ContainerTabelaConteudo>
              </ContainerTabela>
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
                    <HeaderTable>Status ▼</HeaderTable>
                    <HeaderTable>Cliente ▼</HeaderTable>
                    <HeaderTable>Telefone</HeaderTable>
                    <HeaderTable>E-mail</HeaderTable>
                    <HeaderTable>Categoria ▼</HeaderTable>
                    <HeaderTable>Currículo</HeaderTable>
                    <HeaderTable>Envio</HeaderTable>
                    <HeaderTable>Mensagens</HeaderTable>
                  </ContainerTabelaCabecalhoItems>
                </ContainerTabelaCabecalho>
                <ContainerTabelaConteudo>
                  {
                    this.state.pedidos.map(item => {
                      return (
                        <Row>
                          <CelTable value={item['status']} />
                          <CelTable value={item['cliente']} />
                          <CelTable value={item['telefone']} />
                          <CelTable value={item['email']} />
                          <CelTable value={item['categoria']} />
                          <CelTable value={item['curriculo']} />
                          <CelTable value={item['envio']} />
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
  
export default Jobs;