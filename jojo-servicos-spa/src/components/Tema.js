import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  width: 11%;
`;

const Tema = () =>
  <Container>
    <div>
      <p>Documento</p>
      <p>Trabalho</p>
      <p>Negócio</p>
      <p>1ª via</p>
      <p>Documento</p>
    </div>
    <div>
      <p>Documento</p>
      <p>Trabalho</p>
      <p>Negócio</p>
      <p>1ª via</p>
      <p>Documento</p>
    </div>
    <div>
      <p>Documento</p>
      <p>Trabalho</p>
      <p>Negócio</p>
    </div>
  </Container>

export default Tema;