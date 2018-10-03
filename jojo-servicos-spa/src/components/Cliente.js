import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 640px){
    width: 100%;
    display: flex;
  }
`;

const Items = styled.p`
  width: 100%;
  height: 7.7%;
  padding-left: 13.5px;
  display: flex;
  text-align: right;
  align-items:center;
  white-space: nowrap;
  font-size: 15px;
  font-family: Helvetica;
  border-bottom: 0.5px solid #707070;
  @media(max-width: 640px){
    width: 100%;
    display: none;
    font-size: 10px;

  }
`;

const ItemsMobile = styled.p`
  display: none;
  @media(max-width: 640px){
    width: 100%;
    height: 7.7%;
    padding-left: 13.5px;
    display: flex;
    text-align: right;
    align-items:center;
    white-space: nowrap;
    font-size: 10px;
    font-family: Helvetica;
    border-bottom: 0.5px solid #707070;
  }
`;

const Cliente = () =>
  <Container>
    <Items>Pedro Silva</Items>
    <Items>Jaqueline Rodrigues</Items>
    <Items>Igor Melo</Items>
    <Items>Maria Eugênia</Items>
    <Items>Gabriel Freitas</Items>
    <Items>Pedro Silva</Items>
    <Items>Jaqueline Rodrigues</Items>
    <Items>Igor Melo</Items>
    <Items>Maria Eugênia</Items>
    <Items>Gabriel Freitas</Items>
    <Items>Pedro Silva</Items>
    <Items>Jaqueline Rodrigues</Items>
    <Items>Igor Melo</Items>
      
    {/* mobile  */}
    <ItemsMobile>Pedro Silva</ItemsMobile>
    <ItemsMobile>Pedro Silva</ItemsMobile>
    <ItemsMobile>Pedro Silva</ItemsMobile>
    <ItemsMobile>Pedro Silva</ItemsMobile>
    <ItemsMobile>Pedro Silva</ItemsMobile>
    <ItemsMobile>Pedro Silva</ItemsMobile>
    <ItemsMobile>Pedro Silva</ItemsMobile>
    <ItemsMobile>Pedro Silva</ItemsMobile>
    <ItemsMobile>Pedro Silva</ItemsMobile>
    <ItemsMobile>Pedro Silva</ItemsMobile>
    <ItemsMobile>Pedro Silva</ItemsMobile>
    <ItemsMobile>Pedro Silva</ItemsMobile>
    <ItemsMobile>Pedro Silva</ItemsMobile>


  </Container>

export default Cliente;