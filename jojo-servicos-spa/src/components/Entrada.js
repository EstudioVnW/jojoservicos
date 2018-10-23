import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 640px){
    display: none;
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
  height: 7.7%;
  padding-left: 13.5px;
  display: flex;
  text-align: right;
  align-items:center;
  font-size: 15px;
  font-family: Helvetica;
  border-bottom: 0.5px solid #707070;
`;

const Entrada = () =>
  <Container>
    {/* <ContainerItems> */}
      <Items>11/09/2018</Items>
      <Items>11/09/2018</Items>
      <Items>11/09/2018</Items>
      <Items>11/09/2018</Items>
      <Items>11/09/2018</Items>
      <Items>11/09/2018</Items>
      <Items>11/09/2018</Items>
      <Items>11/09/2018</Items>
      <Items>11/09/2018</Items>
      <Items>11/09/2018</Items>
      <Items>11/09/2018</Items>
      <Items>11/09/2018</Items>
      <Items>11/09/2018</Items>
    {/* </ContainerItems> */}
  </Container>

export default Entrada;