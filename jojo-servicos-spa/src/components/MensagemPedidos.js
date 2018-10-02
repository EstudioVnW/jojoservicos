import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  width: 200px;
  height: 100%;
  color: #000;
  font-family: Helvetica;
`;

// const Container_images = styled.div` 
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   flex-direction: column;

// `;

const Items = styled.p`
  width: 100%;
  height: 7.7%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 15px;
  border-bottom: 0.5px solid #707070;
`;

const MensageIcon = styled.img`
  width: 24px;
`;


const MensagemPedidos = () =>
  <Container>
    {/* <Container_images> */}
      <Items>
        <MensageIcon src="./mensage.svg" alt="Mensagem" />
      </Items>
      <Items>
        <MensageIcon src="./mensage.svg" alt="Mensagem" />
      </Items>
      <Items>
        <MensageIcon src="./mensage.svg" alt="Mensagem" />
      </Items>
      <Items>
        <MensageIcon src="./mensage.svg" alt="Mensagem" />
      </Items>
      <Items>
        <MensageIcon src="./mensage.svg" alt="Mensagem" />
      </Items>
      <Items>
        <MensageIcon src="./mensage.svg" alt="Mensagem" />
      </Items>
      <Items>
        <MensageIcon src="./mensage.svg" alt="Mensagem" />
      </Items>
      <Items>
        <MensageIcon src="./mensage.svg" alt="Mensagem" />
      </Items>
      <Items>
        <MensageIcon src="./mensage.svg" alt="Mensagem" />
      </Items>
      <Items>
        <MensageIcon src="./mensage.svg" alt="Mensagem" />
      </Items>
      <Items>
        <MensageIcon src="./mensage.svg" alt="Mensagem" />
      </Items>
      <Items>
        <MensageIcon src="./mensage.svg" alt="Mensagem" />
      </Items>
      <Items>
        <MensageIcon src="./mensage.svg" alt="Mensagem" />
      </Items>
    {/* </Container_images> */}
  </Container>

export default MensagemPedidos;