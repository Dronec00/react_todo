import React from 'react';
import styled from 'styled-components';
import img from "./assets/img/bg-desktop-dark1.jpg"
import Header from './components/Header';
import GlobalFonts from './assets/fonts/fonts.js';
import Container from './components/Container';

const Body = styled.div`
width: 100vw;
height: 100vh;
background-color: #161622;
background-image: url(${img});
background-repeat: no-repeat;
background-size: contain;
`

function App() {
  return (
    <Body>
      <GlobalFonts/>
      <Header/>
      <Container/>
    </Body>
  );
}

export default App;
