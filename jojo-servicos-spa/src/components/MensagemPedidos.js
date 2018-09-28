import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  width: 15%;
`;


const MensagemPedidos = () =>
  <Container>
    <div>
      <img src="./mensage.svg" alt="Mensagem" />
      <img src="./mensage.svg" alt="Mensagem" />
      <img src="./mensage.svg" alt="Mensagem" />
      <img src="./mensage.svg" alt="Mensagem" />
      <img src="./mensage.svg" alt="Mensagem" />
    </div>
    <div>
      <img src="./mensage.svg" alt="Mensagem" />
      <img src="./mensage.svg" alt="Mensagem" />
      <img src="./mensage.svg" alt="Mensagem" />
      <img src="./mensage.svg" alt="Mensagem" />
      <img src="./mensage.svg" alt="Mensagem" />
    </div>
    <div>
      <img src="./mensage.svg" alt="Mensagem" />
      <img src="./mensage.svg" alt="Mensagem" />
      <img src="./mensage.svg" alt="Mensagem" />
    </div>
  </Container>

export default MensagemPedidos;