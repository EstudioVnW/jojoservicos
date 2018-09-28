import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  width: 15%;
`;

const Status = () =>
  <Container>
    <div>
      <p>Pendente</p>
      <p>Análise</p>
      <p>Finalizado</p>
      <p>Pendente</p>
      <p>Análise</p>
    </div>
    <div>
      <p>Pendente</p>
      <p>Análise</p>
      <p>Finalizado</p>
      <p>Pendente</p>
      <p>Análise</p>
    </div>
    <div>
      <p>Pendente</p>
      <p>Análise</p>
      <p>Finalizado</p>
    </div>
  </Container>

export default Status;