import React from 'react';
import Header from './Header';
import Footer from './Footer';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Section = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 3px solid #69B42E;
  border-bottom: 3px solid #69B42E;
  background: linear-gradient(#2E7BB4,#306BAD, #3260A8, #3358A4);
  @media(max-width: 640px){
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    border-top: 4px solid #69B42E;
    border-bottom: 4px solid #69B42E;
  }
`;

const TituloTopo = styled.h1`
  width: 500px;
  text-align: center;
  color: #fff;
  font-size: 40px;
  font-family: Helvetica;
  font-weight: bold;
  @media(max-width: 640px){
    width: 319px;
    font-size: 27px;
  }
`;

const ContainerLogin = styled.div`
  width: 400px;
  height: 370px;
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #F7F7F7;
  border-radius: 55px;
  @media(max-width: 640px){
    /* width: 339px;
    height: 70%; */
    width: 90%;
    height: 64%;
  }
`;

const ContainerLoginItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoJojo = styled.img`
  width: 170px;
  height: 108px;
  @media(max-width: 640px){
    /* width: 200px; */
    width: 60%;
  }
`;

const ContainerInput = styled.div`
  width: 315px;
  height: 135px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  @media(max-width: 640px){
    width: 100%;
    height: 35%;
  }
`;

const LoginFormInput = styled.input`
  width: 310px;
  height: 36px;
  color: #7F7F7F;
  font-size: 15px;
  padding-left: 15px;
  border: 1px solid #3358A4;
  border-radius: 22px;
  outline: none;
  opacity: 0.7;
  @media(max-width: 640px){
    /* width: 300px;
    height: 44px; */
    width: 90%;
    height: 30%;
    border: 2px solid #3358A4;
  }
`;

const ContainerEntrar = styled.div`
  width: 345px;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-family: Helvetica;
  font-size: 15px;
  @media(max-width: 640px){
    /* width: 320px; */
    width: 100%;
    height: 10%;
  }
`;

const ContainerEntrarItems = styled.div`
  width: 315px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media(max-width: 640px){
    width: 94%;
    height: 15%;
    align-self: flex-end;
  }
`;

const A = styled.a`
  text-decoration: none;
`;

const ButtonEntrar = styled.button`
  width: 135px;
  height: 35px;
  color: #fff;
  font-family: Helvetica;
  border: #000;
  border-radius: 18px;
  outline: none;
  background: linear-gradient(0deg,#69B42E,#569A21);
  @media(max-width: 640px){
    /* width: 150px;
    height: 40px; */
    width: 45%;
    height: 6vh;
  }
`;

const Login= () =>
  <Container>
    <Header />
    <Section>
      <TituloTopo>Central de visualização de pedidos da Jojô</TituloTopo>
      <ContainerLogin>
        <ContainerLoginItems>
          <LogoJojo src="./logo-jojo.svg" alt="logo jojo" />
          <ContainerInput>
            <LoginFormInput type="email" name="email" placeholder="Log in" />
            <LoginFormInput type="password" name="password" placeholder="Senha" />
          </ContainerInput>
          <ContainerEntrar>
            <ContainerEntrarItems>
              <A href=" ">Esqueceu a senha?</A>
              <ButtonEntrar>Entrar</ButtonEntrar>
            </ContainerEntrarItems>
          </ContainerEntrar>
        </ContainerLoginItems>
      </ContainerLogin>
    </Section>
    <Footer />
  </Container>


export default Login;