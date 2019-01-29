import React, {Component} from 'react';
import './style.css';

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
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media(min-width: 1440px){
    height: 80%;
  }
`;

const SolicitacoesItens = styled.div`
	margin: 0;
	// padding: 10px;
  width: 22%;
  height: 95%;
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
  // height: 40%;
  // display: flex;
  // align-items: flex-end;
  
`;

const A = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  // align-items: flex-end;
  text-decoration:none; 
	cursor: pointer
`;

const ImagesSolicitacoes = styled.img`
  width: 50%;
  height: 60%;
`;

const ButtonDocumentos = styled.button`
  width: 60%;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #fff;
  font-family: Helvetica;
  // border: #000;
  border-radius: 18px;
  outline: none;
  // background: linear-gradient(#3358A4, #0C275E);
`;

// const ButtonEmprego = styled.button`
//   width: 60%;
//   height: 4vh;
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   color: #fff;
//   font-family: Helvetica;
//   border: #000;
//   border-radius: 18px;
//   outline: none;
//   // background: linear-gradient(#83219A, #40044E);
// `;

// const ButtonNegocios = styled.button`
//   width: 60%;
//   height: 4vh;
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   color: #fff;
//   font-family: Helvetica;
//   border: #000;
//   border-radius: 18px;
//   outline: none;
//   background: linear-gradient(#69B42E, #34670C);
// `;

class SectionOption extends Component {
  constructor(props){
		super(props); 
	}
	render(){
		return ( 
			<SolicitacoesItens>
				<SolicitacoesItensIMG>
					<ImagesSolicitacoes src={this.props.image} alt= "RG"/>
				</SolicitacoesItensIMG>
				<SolicitacoesItensLink>
					<A href={this.props.link}><ButtonDocumentos style={{backgroundColor: this.props.backgroundColor, border:this.props.border}}>{this.props.label}</ButtonDocumentos></A>
				</SolicitacoesItensLink>
			</SolicitacoesItens> )
	}
}


export default SectionOption;