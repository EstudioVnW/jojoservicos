import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 640px){
    width: 100%;
    display: flex;
  }
`;

// const ContainerItems = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   flex-direction: column;
// `;


const Items = styled.p`
  width: 100%;
  height:  7.7%;
  padding-left: 13.5px;
  display: flex;
  text-align: right;
  align-items:center;
  font-size: 15px;
  font-family: Helvetica;
  border-bottom: 0.5px solid #707070;
  @media(max-width: 640px){
    width: 100%;
    display: flex;
    font-size: 10px;
    white-space: nowrap;
  }
`;

const Categoria = () =>
  <Container>
    {/* <ContainerItems> */}
      <Items>2ª via</Items>
      <Items>Curriculo</Items>
      <Items>Abertura MEI</Items>
      <Items>1ª via</Items>
      <Items>Perda</Items>
      <Items>2ª via</Items>
      <Items>Curriculo</Items>
      <Items>Abertura MEI</Items>
      <Items>1ª via</Items>
      <Items>Perda</Items>
      <Items>2ª via</Items>
      <Items>Curriculo</Items>
      <Items>Abertura MEI</Items>
    {/* </ContainerItems> */}
  </Container>

export default Categoria;