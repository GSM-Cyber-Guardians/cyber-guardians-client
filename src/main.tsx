import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: #111;
  box-sizing: border-box;
  margin: 0;
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Background>
      <App />
    </Background>
  </StrictMode>
);
