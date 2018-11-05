import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  width: 100%;
  height: 40px;
  /* padding: 0 6px; */
  display: flex;
  flex-basis: 200px;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 0.5px solid #707070;
  @media(max-width: 640px){
    width: 100%;
    display: flex;
  }
`;


const Value = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: Helvetica;
  @media(max-width: 640px){
    /* width: 100%;
    display: flex; */
    font-size: 10px;
    white-space: nowrap;
  }
`;



const CelTable = (props) =>
  <Container>
    <Value>{props.value || 'null'}</Value>
  </Container>


export default CelTable;